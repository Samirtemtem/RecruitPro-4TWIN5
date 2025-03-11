import React, { ChangeEvent, FormEvent } from 'react';

interface ISkill {
  _id?: string;
  name: string;
  degree: string;
}

interface SkillsMultipleModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (e: FormEvent) => Promise<void>;
  currentSkill: ISkill;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  saving: boolean;
  editIndex: number | null;
}

const SkillsMultipleModal: React.FC<SkillsMultipleModalProps> = ({
  show,
  onClose,
  onSubmit,
  currentSkill,
  handleChange,
  saving,
  editIndex
}) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{editIndex !== null ? 'Update Skill' : 'Add Skill'}</h3>
          <button type="button" className="close-btn" onClick={onClose}>×</button>
        </div>
        <form onSubmit={onSubmit}>
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

export default SkillsMultipleModal; 