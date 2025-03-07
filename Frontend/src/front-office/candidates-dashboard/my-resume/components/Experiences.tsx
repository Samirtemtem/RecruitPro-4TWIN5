import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useUserProfile, UserProfileData } from '../../hooks/useUserProfile';

interface IExperience {
  _id?: string;
  position: string;
  enterprise: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

const Experiences: React.FC = () => {
  const { userData, isLoading, error } = useUserProfile();
  const [experienceItems, setExperienceItems] = useState<IExperience[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [currentExperience, setCurrentExperience] = useState<IExperience>({
    position: '',
    enterprise: '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    description: '',
    location: ''
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Load experience data when user data is available
  useEffect(() => {
    if (userData?.experience) {
      const formattedExperience = userData.experience.map(exp => ({
        _id: exp._id,
        position: exp.position,
        enterprise: exp.enterprise,
        startDate: new Date(exp.startDate).toISOString().split('T')[0],
        endDate: new Date(exp.endDate).toISOString().split('T')[0],
        description: exp.description,
        location: exp.location
      }));
      setExperienceItems(formattedExperience);
    }
  }, [userData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentExperience({
      ...currentExperience,
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

      const updatedExperience = editIndex !== null
        ? experienceItems.map((item, index) => 
            index === editIndex ? { ...currentExperience, _id: item._id } : item
          )
        : [...experienceItems, { ...currentExperience }];

      await fetch('http://localhost:5000/api/profile/experience', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userId: userData.id,
          experience: updatedExperience 
        })
      });

      setExperienceItems(updatedExperience);
      setSubmitMessage({ type: 'success', text: editIndex !== null ? 'Experience updated successfully' : 'Experience added successfully' });
      resetForm();
    } catch (error) {
      console.error('Failed to save experience:', error);
      setSubmitMessage({ type: 'error', text: 'Failed to save experience. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (index: number) => {
    setCurrentExperience(experienceItems[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = async (index: number) => {
    setSubmitMessage(null);
    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      const itemToDelete = experienceItems[index];
      const updatedItems = experienceItems.filter((_, i) => i !== index);

      await fetch(`http://localhost:5000/api/profile/experience/${itemToDelete._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: userData.id })
      });

      setExperienceItems(updatedItems);
      setSubmitMessage({ type: 'success', text: 'Experience entry deleted successfully' });
    } catch (error) {
      console.error('Failed to delete experience:', error);
      setSubmitMessage({ type: 'error', text: 'Failed to delete experience. Please try again.' });
    }
  };

  const resetForm = () => {
    setCurrentExperience({
      position: '',
      enterprise: '',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
      description: '',
      location: ''
    });
    setEditIndex(null);
    setShowForm(false);
  };

  if (isLoading) {
    return <div>Loading experience data...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="resume-outer theme-blue">
      <div className="upper-title">
        <h4>Work & Experience</h4>
        <button 
          type="button" 
          className="add-info-btn"
          onClick={() => { resetForm(); setShowForm(true); }}
          disabled={saving}
        >
          <span className="icon flaticon-plus"></span> Add Work
        </button>
      </div>
      
      {submitMessage && (
        <div className={`alert ${submitMessage.type === 'success' ? 'alert-success' : 'alert-danger'} mb-3`}>
          {submitMessage.text}
        </div>
      )}
      
      {/* Experience Form */}
      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-lg-6 col-md-12">
                <label>Position <span className="required">*</span></label>
                <input 
                  type="text"
                  name="position"
                  value={currentExperience.position}
                  onChange={handleChange}
                  placeholder="Position or job title"
                  required
                  disabled={saving}
                />
              </div>
              
              <div className="form-group col-lg-6 col-md-12">
                <label>Company/Enterprise <span className="required">*</span></label>
                <input 
                  type="text"
                  name="enterprise"
                  value={currentExperience.enterprise}
                  onChange={handleChange}
                  placeholder="Company name"
                  required
                  disabled={saving}
                />
              </div>
              
              <div className="form-group col-lg-6 col-md-12">
                <label>Start Date <span className="required">*</span></label>
                <input 
                  type="date"
                  name="startDate"
                  value={currentExperience.startDate}
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
                  value={currentExperience.endDate}
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
                  value={currentExperience.location}
                  onChange={handleChange}
                  placeholder="Job location"
                  required
                  disabled={saving}
                />
              </div>
              
              <div className="form-group col-lg-12 col-md-12">
                <label>Description</label>
                <textarea 
                  name="description"
                  value={currentExperience.description}
                  onChange={handleChange}
                  placeholder="Describe your role and responsibilities"
                  disabled={saving}
                ></textarea>
              </div>
              
              <div className="form-group col-lg-12 col-md-12">
                <button 
                  type="submit" 
                  className="theme-btn btn-style-one"
                  disabled={saving}
                >
                  {saving ? 'Saving...' : (editIndex !== null ? 'Update Experience' : 'Add Experience')}
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
      
      {/* Display Experience Items */}
      {experienceItems.length === 0 ? (
        <p>No experience entries yet. Add your first work experience above.</p>
      ) : (
        experienceItems.map((item, index) => (
          <div className="resume-block" key={item._id}>
            <div className="inner">
              <span className="name">{item.enterprise.charAt(0)}</span>
              <div className="title-box">
                <div className="info-box">
                  <h3>{item.position}</h3>
                  <span>{item.enterprise}</span>
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

export default Experiences; 