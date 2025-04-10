import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useUserProfile } from '../../hooks/useUserProfile';
import EducationModal from './EducationModal';
import { toast, Toaster } from 'react-hot-toast';
import './Modal.css';
import { AuthContext } from '../../../../routing-module/AuthContext';
import { useContext } from 'react';
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
  const {updateProfileData}  = useContext(AuthContext);  
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

      const response = await fetch('http://localhost:5000/api/profile/education', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userId: userData.id,
          education: updatedEducation
        })
      });

      if (!response.ok) {
        throw new Error('Failed to save education');
      }

      const responseData = await response.json();
      setEducationItems(responseData);
      toast.dismiss(loadingToast);
      toast.success(editIndex !== null ? 'Education updated successfully!' : 'Education added successfully!');
      resetForm();
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
      const updatedItems = educationItems.filter((_, i) => i !== index);

      const response = await fetch(`http://localhost:5000/api/profile/education/${itemToDelete._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: userData.id })
      });

      if (!response.ok) {
        throw new Error('Failed to delete education');
      }

      setEducationItems(updatedItems);
      updateProfileData(userData);
      toast.dismiss(loadingToast);
      toast.success('Education deleted successfully!');
    window.location.reload();
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