import React, { ChangeEvent, FormEvent } from 'react';

interface IEducation {
  _id?: string;
  institution: string;
  diploma: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

interface EducationModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (e: FormEvent) => Promise<void>;
  currentEducation: IEducation;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  saving: boolean;
  editIndex: number | null;
}

const EducationModal: React.FC<EducationModalProps> = ({
  show,
  onClose,
  onSubmit,
  currentEducation,
  handleChange,
  saving,
  editIndex
}) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{editIndex !== null ? 'Update Education' : 'Add Education'}</h3>
          <button type="button" className="close-btn" onClick={onClose}>×</button>
        </div>
        <form onSubmit={onSubmit}>
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

export default EducationModal; 