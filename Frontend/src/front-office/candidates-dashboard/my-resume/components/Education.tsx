import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useUserProfile } from '../../hooks/useUserProfile';
import EducationModal from './EducationModal';
import { toast, Toaster } from 'react-hot-toast';
import './Modal.css';

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
  const { 
    userData, 
    isLoading, 
    error, 
    updateEducation, 
    deleteEducation 
  } = useUserProfile();
  
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
    const loadingToast = toast.loading(editIndex !== null ? 'Updating education...' : 'Adding education...');
    
    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      const updatedEducation = editIndex !== null
        ? educationItems.map((item, index) => 
            index === editIndex ? { ...currentEducation, _id: item._id } : item
          )
        : [...educationItems, { ...currentEducation }];
      
      // Use the enhanced updateEducation method
      const result = await updateEducation(updatedEducation);
      
      if (result.success && result.data) {
        setEducationItems(Array.isArray(result.data) ? result.data : result.data.education || updatedEducation);
        toast.dismiss(loadingToast);
        toast.success(editIndex !== null ? 'Education updated successfully!' : 'Education added successfully!');
        resetForm();
      } else {
        throw new Error('Failed to save education');
      }
    } catch (error) {
      console.error('Failed to save education:', error);
      toast.dismiss(loadingToast);
      toast.error('Failed to save education. Please try again.');
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
    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      const loadingToast = toast.loading('Deleting education...');
      const itemToDelete = educationItems[index];
      
      if (!itemToDelete._id) {
        throw new Error('Education ID not found');
      }
      
      // Use the enhanced deleteEducation method
      const result = await deleteEducation(itemToDelete._id);
      
      if (result.success) {
        const updatedItems = educationItems.filter((_, i) => i !== index);
        setEducationItems(updatedItems);
        toast.dismiss(loadingToast);
        toast.success('Education deleted successfully!');
      } else {
        throw new Error('Failed to delete education');
      }
    } catch (error) {
      console.error('Failed to delete education:', error);
      toast.error('Failed to delete education. Please try again.');
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
      <Toaster 
        position="bottom-right"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          bottom: 20,
          right: 20,
        }}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
            padding: '16px 24px',
            fontSize: '16px',
            maxWidth: '400px',
            minWidth: '300px'
          },
          success: {
            duration: 3000,
            style: {
              background: '#22c55e',
              color: '#fff',
              padding: '16px 24px',
              fontSize: '16px',
              maxWidth: '400px',
              minWidth: '300px'
            },
          },
          error: {
            duration: 4000,
            style: {
              background: '#ef4444',
              color: '#fff',
              padding: '16px 24px',
              fontSize: '16px',
              maxWidth: '400px',
              minWidth: '300px'
            },
          },
          loading: {
            style: {
              background: '#363636',
              color: '#fff',
              padding: '16px 24px',
              fontSize: '16px',
              maxWidth: '400px',
              minWidth: '300px'
            },
          },
        }}
      />
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
      
      {/* Education Modal */}
      <EducationModal
        show={showForm}
        onClose={resetForm}
        onSubmit={handleSubmit}
        currentEducation={currentEducation}
        handleChange={handleChange}
        saving={saving}
        editIndex={editIndex}
      />
      
      {/* Display Education Items */}
      {educationItems.length === 0 ? (
        <p>No education entries yet. Add your first education above.</p>
      ) : (
        educationItems.map((item, index) => (
          <div className="resume-block" key={item._id || index}>
            <div className="inner">
              <span className="name">{item.institution.charAt(0)}</span>
              <div className="title-box">
                <div className="info-box">
                  <h3>{item.diploma}</h3>
                  <span>{item.institution}</span>
                </div>
                <div className="edit-box">
                  <button 
                    className="edit-btn"
                    onClick={() => handleEdit(index)}
                    disabled={saving}
                  >
                    <span className="la la-pencil"></span>
                  </button>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDelete(index)}
                    disabled={saving}
                  >
                    <span className="la la-trash"></span>
                  </button>
                </div>
              </div>
              <div className="text">{item.description}</div>
              <div className="location">
                <i className="la la-map-marker"></i> {item.location}
              </div>
              <div className="time-period">
                <i className="la la-calendar"></i> {new Date(item.startDate).toLocaleDateString()} - 
                {item.endDate ? new Date(item.endDate).toLocaleDateString() : 'Present'}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Education; 