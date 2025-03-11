import React, { ChangeEvent, FormEvent } from 'react';

interface IExperience {
  _id?: string;
  position: string;
  enterprise: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

interface ExperiencesModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (e: FormEvent) => Promise<void>;
  currentExperience: IExperience;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  saving: boolean;
  editIndex: number | null;
}

const ExperiencesModal: React.FC<ExperiencesModalProps> = ({
  show,
  onClose,
  onSubmit,
  currentExperience,
  handleChange,
  saving,
  editIndex
}) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{editIndex !== null ? 'Update Experience' : 'Add Experience'}</h3>
          <button type="button" className="close-btn" onClick={onClose}>×</button>
        </div>
        <form onSubmit={onSubmit}>
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
                onClick={onClose}
                disabled={saving}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExperiencesModal; 