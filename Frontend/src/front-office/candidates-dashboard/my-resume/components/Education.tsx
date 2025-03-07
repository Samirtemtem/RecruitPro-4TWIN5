import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useUserProfile } from '../../hooks/useUserProfile';

interface IEducation {
  _id?: string;
  institution: string;
  diploma: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

const Education: React.FC = () => {
  const { userData, isLoading, error } = useUserProfile();
  const [educationItems, setEducationItems] = useState<IEducation[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [currentEducation, setCurrentEducation] = useState<IEducation>({
    institution: '',
    diploma: '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    description: '',
    location: ''
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Load education data when user data is available
  useEffect(() => {
    if (userData?.education) {
      const formattedEducation = userData.education.map(edu => ({
        _id: edu._id,
        institution: edu.institution,
        diploma: edu.diploma,
        startDate: new Date(edu.startDate).toISOString().split('T')[0],
        endDate: new Date(edu.endDate).toISOString().split('T')[0],
        description: edu.description,
        location: edu.location
      }));
      setEducationItems(formattedEducation);
    }
  }, [userData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentEducation({
      ...currentEducation,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSubmitMessage(null);
    
    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      const updatedEducation = editIndex !== null
        ? educationItems.map((item, index) => 
            index === editIndex ? { ...currentEducation, _id: item._id } : item
          )
        : [...educationItems, { ...currentEducation }];

      await fetch('http://localhost:5000/api/profile/education', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userId: userData.id,
          education: updatedEducation 
        })
      });

      setEducationItems(updatedEducation);
      setSubmitMessage({ type: 'success', text: editIndex !== null ? 'Education updated successfully' : 'Education added successfully' });
      resetForm();
    } catch (error) {
      console.error('Failed to save education:', error);
      setSubmitMessage({ type: 'error', text: 'Failed to save education. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (index: number) => {
    setCurrentEducation(educationItems[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = async (index: number) => {
    setSubmitMessage(null);
    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      const itemToDelete = educationItems[index];
      const updatedItems = educationItems.filter((_, i) => i !== index);

      await fetch(`http://localhost:5000/api/profile/education/${itemToDelete._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: userData.id })
      });

      setEducationItems(updatedItems);
      setSubmitMessage({ type: 'success', text: 'Education entry deleted successfully' });
    } catch (error) {
      console.error('Failed to delete education:', error);
      setSubmitMessage({ type: 'error', text: 'Failed to delete education. Please try again.' });
    }
  };

  const resetForm = () => {
    setCurrentEducation({
      institution: '',
      diploma: '',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
      description: '',
      location: ''
    });
    setEditIndex(null);
    setShowForm(false);
  };

  if (isLoading) {
    return <div>Loading education data...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="resume-outer theme-blue">
      <div className="upper-title">
        <h4>Education</h4>
        <button 
          type="button" 
          className="add-info-btn"
          onClick={() => { resetForm(); setShowForm(true); }}
          disabled={saving}
        >
          <span className="icon flaticon-plus"></span> Add Education
        </button>
      </div>
      
      {submitMessage && (
        <div className={`alert ${submitMessage.type === 'success' ? 'alert-success' : 'alert-danger'} mb-3`}>
          {submitMessage.text}
        </div>
      )}
      
      {/* Education Form */}
      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-lg-6 col-md-12">
                <label>Institution <span className="required">*</span></label>
                <input 
                  type="text"
                  name="institution"
                  value={currentEducation.institution}
                  onChange={handleChange}
                  placeholder="Enter institution name"
                  required
                  disabled={saving}
                />
              </div>
              
              <div className="form-group col-lg-6 col-md-12">
                <label>Diploma/Degree <span className="required">*</span></label>
                <input 
                  type="text"
                  name="diploma"
                  value={currentEducation.diploma}
                  onChange={handleChange}
                  placeholder="Enter diploma/degree"
                  required
                  disabled={saving}
                />
              </div>
              
              <div className="form-group col-lg-6 col-md-12">
                <label>Start Date <span className="required">*</span></label>
                <input 
                  type="date"
                  name="startDate"
                  value={currentEducation.startDate}
                  onChange={handleChange}
                  required
                  disabled={saving}
                />
              </div>
              
              <div className="form-group col-lg-6 col-md-12">
                <label>End Date <span className="required">*</span></label>
                <input 
                  type="date"
                  name="endDate"
                  value={currentEducation.endDate}
                  onChange={handleChange}
                  required
                  disabled={saving}
                />
              </div>
              
              <div className="form-group col-lg-6 col-md-12">
                <label>Location <span className="required">*</span></label>
                <input 
                  type="text"
                  name="location"
                  value={currentEducation.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                  required
                  disabled={saving}
                />
              </div>
              
              <div className="form-group col-lg-12 col-md-12">
                <label>Description</label>
                <textarea 
                  name="description"
                  value={currentEducation.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                  disabled={saving}
                ></textarea>
              </div>
              
              <div className="form-group col-lg-12 col-md-12">
                <button 
                  type="submit" 
                  className="theme-btn btn-style-one"
                  disabled={saving}
                >
                  {saving ? 'Saving...' : (editIndex !== null ? 'Update Education' : 'Add Education')}
                </button>
                <button 
                  type="button" 
                  className="theme-btn btn-style-two ml-2" 
                  onClick={resetForm}
                  disabled={saving}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      
      {/* Display Education Items */}
      {educationItems.length === 0 ? (
        <p>No education entries yet. Add your first education above.</p>
      ) : (
        educationItems.map((item, index) => (
          <div className="resume-block" key={item._id}>
            <div className="inner">
              <span className="name">{item.institution.charAt(0)}</span>
              <div className="title-box">
                <div className="info-box">
                  <h3>{item.diploma}</h3>
                  <span>{item.institution}</span>
                </div>
                <div className="edit-box">
                  <span className="year">
                    {new Date(item.startDate).getFullYear()} - {new Date(item.endDate).getFullYear()}
                  </span>
                  <div className="edit-btns">
                    <button 
                      type="button" 
                      onClick={() => handleEdit(index)}
                      disabled={saving}
                    >
                      <span className="la la-pencil"></span>
                    </button>
                    <button 
                      type="button" 
                      onClick={() => handleDelete(index)}
                      disabled={saving}
                    >
                      <span className="la la-trash"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="text">
                <p><strong>Location:</strong> {item.location}</p>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Education; 