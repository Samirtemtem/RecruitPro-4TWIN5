import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useUserProfile } from '../../hooks/useUserProfile';
import ExperiencesModal from './ExperiencesModal';
import { toast, Toaster } from 'react-hot-toast';
import './Modal.css';

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
  const { 
    userData, 
    isLoading, 
    error, 
    updateExperience, 
    deleteExperience 
  } = useUserProfile();
  
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
    const loadingToast = toast.loading(editIndex !== null ? 'Updating experience...' : 'Adding experience...');
    
    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      const updatedExperience = editIndex !== null
        ? experienceItems.map((item, index) => 
            index === editIndex ? { ...currentExperience, _id: item._id } : item
          )
        : [...experienceItems, { ...currentExperience }];
      
      // Use the enhanced updateExperience method
      const result = await updateExperience(updatedExperience);
      
      if (result.success && result.data) {
        setExperienceItems(Array.isArray(result.data) ? result.data : result.data.experience || updatedExperience);
        toast.dismiss(loadingToast);
        toast.success(editIndex !== null ? 'Experience updated successfully!' : 'Experience added successfully!');
        resetForm();
      } else {
        throw new Error('Failed to save experience');
      }
    } catch (error) {
      console.error('Failed to save experience:', error);
      toast.dismiss(loadingToast);
      toast.error('Failed to save experience. Please try again.');
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
    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      const loadingToast = toast.loading('Deleting experience...');
      const itemToDelete = experienceItems[index];
      
      if (!itemToDelete._id) {
        throw new Error('Experience ID not found');
      }
      
      // Use the enhanced deleteExperience method
      const result = await deleteExperience(itemToDelete._id);
      
      if (result.success) {
        const updatedItems = experienceItems.filter((_, i) => i !== index);
        setExperienceItems(updatedItems);
        toast.dismiss(loadingToast);
        toast.success('Experience deleted successfully!');
      } else {
        throw new Error('Failed to delete experience');
      }
    } catch (error) {
      console.error('Failed to delete experience:', error);
      toast.error('Failed to delete experience. Please try again.');
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
        <h4>Experience</h4>
        <button 
          type="button" 
          className="add-info-btn"
          onClick={() => { resetForm(); setShowForm(true); }}
          disabled={saving}
        >
          <span className="icon flaticon-plus"></span> Add Experience
        </button>
      </div>
      
      {/* Experience Modal */}
      <ExperiencesModal
        show={showForm}
        onClose={resetForm}
        onSubmit={handleSubmit}
        currentExperience={currentExperience}
        handleChange={handleChange}
        saving={saving}
        editIndex={editIndex}
      />
      
      {/* Display Experience Items */}
      {experienceItems.length === 0 ? (
        <p>No experience entries yet. Add your first work experience above.</p>
      ) : (
        experienceItems.map((item, index) => (
          <div className="resume-block" key={item._id || index}>
            <div className="inner">
              <span className="name">{item.enterprise.charAt(0)}</span>
              <div className="title-box">
                <div className="info-box">
                  <h3>{item.position}</h3>
                  <span>{item.enterprise}</span>
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

export default Experiences; 