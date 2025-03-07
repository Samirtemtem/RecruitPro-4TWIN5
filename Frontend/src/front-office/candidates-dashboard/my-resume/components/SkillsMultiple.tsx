import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useUserProfile, UserProfileData } from '../../hooks/useUserProfile';

interface ISkill {
  _id?: string;
  name: string;
  degree: string;
}

const SkillsMultiple: React.FC = () => {
  const { userData, isLoading, error } = useUserProfile();
  const [skillItems, setSkillItems] = useState<ISkill[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [currentSkill, setCurrentSkill] = useState<ISkill>({
    name: '',
    degree: 'Beginner'
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Load skills data when user data is available
  useEffect(() => {
    if (userData?.skills) {
      setSkillItems(userData.skills);
    }
  }, [userData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentSkill({
      ...currentSkill,
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

      const updatedSkills = editIndex !== null
        ? skillItems.map((item, index) => 
            index === editIndex ? { ...currentSkill, _id: item._id } : item
          )
        : [...skillItems, { ...currentSkill }];

      await fetch('http://localhost:5000/api/profile/skill', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userId: userData.id,
          skills: updatedSkills 
        })
      });

      setSkillItems(updatedSkills);
      setSubmitMessage({ type: 'success', text: editIndex !== null ? 'Skill updated successfully' : 'Skill added successfully' });
      resetForm();
    } catch (error) {
      console.error('Failed to save skill:', error);
      setSubmitMessage({ type: 'error', text: 'Failed to save skill. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (index: number) => {
    setCurrentSkill(skillItems[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = async (index: number) => {
    setSubmitMessage(null);
    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      const itemToDelete = skillItems[index];
      const updatedItems = skillItems.filter((_, i) => i !== index);

      await fetch(`http://localhost:5000/api/profile/skill/${itemToDelete._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: userData.id })
      });

      setSkillItems(updatedItems);
      setSubmitMessage({ type: 'success', text: 'Skill entry deleted successfully' });
    } catch (error) {
      console.error('Failed to delete skill:', error);
      setSubmitMessage({ type: 'error', text: 'Failed to delete skill. Please try again.' });
    }
  };

  const resetForm = () => {
    setCurrentSkill({
      name: '',
      degree: 'Beginner'
    });
    setEditIndex(null);
    setShowForm(false);
  };

  if (isLoading) {
    return <div>Loading skills data...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="resume-outer theme-blue">
      <div className="upper-title">
        <h4>Skills</h4>
        <button 
          type="button" 
          className="add-info-btn"
          onClick={() => { resetForm(); setShowForm(true); }}
          disabled={saving}
        >
          <span className="icon flaticon-plus"></span> Add Skill
        </button>
      </div>
      
      {submitMessage && (
        <div className={`alert ${submitMessage.type === 'success' ? 'alert-success' : 'alert-danger'} mb-3`}>
          {submitMessage.text}
        </div>
      )}
      
      {/* Skill Form */}
      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-lg-6 col-md-12">
                <label>Skill Name <span className="required">*</span></label>
                <input 
                  type="text"
                  name="name"
                  value={currentSkill.name}
                  onChange={handleChange}
                  placeholder="Enter skill name"
                  required
                  disabled={saving}
                />
              </div>
              
              <div className="form-group col-lg-6 col-md-12">
                <label>Proficiency Level <span className="required">*</span></label>
                <select
                  name="degree"
                  value={currentSkill.degree}
                  onChange={handleChange}
                  required
                  disabled={saving}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
              
              <div className="form-group col-lg-12 col-md-12">
                <button 
                  type="submit" 
                  className="theme-btn btn-style-one"
                  disabled={saving}
                >
                  {saving ? 'Saving...' : (editIndex !== null ? 'Update Skill' : 'Add Skill')}
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
      
      {/* Display Skill Items */}
      {skillItems.length === 0 ? (
        <p>No skills added yet. Add your first skill above.</p>
      ) : (
        <div className="skills-block">
          {skillItems.map((item, index) => (
            <div className="skill-item" key={item._id}>
              <div className="skill-header">
                <h5>{item.name}</h5>
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
              <div className="skill-bar">
                <div 
                  className={`bar-inner ${item.degree.toLowerCase()}`} 
                  style={{ 
                    width: item.degree === 'Beginner' ? '25%' :
                           item.degree === 'Intermediate' ? '50%' :
                           item.degree === 'Advanced' ? '75%' :
                           '100%'
                  }}
                >
                  <div className="skill-percentage">
                    <div className="count-box">{item.degree}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsMultiple; 