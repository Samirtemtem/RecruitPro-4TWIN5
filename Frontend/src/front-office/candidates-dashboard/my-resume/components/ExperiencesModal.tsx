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
          <button 
            type="button" 
            className="close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Position <span className="required">*</span></label>
              <input 
                type="text"
                name="position"
                value={currentExperience.position}
                onChange={handleChange}
                placeholder="Position or job title"
                required
                disabled={saving}
                className={saving ? 'disabled' : ''}
              />
            </div>
            
            <div className="form-group">
              <label>Company/Enterprise <span className="required">*</span></label>
              <input 
                type="text"
                name="enterprise"
                value={currentExperience.enterprise}
                onChange={handleChange}
                placeholder="Company name"
                required
                disabled={saving}
                className={saving ? 'disabled' : ''}
              />
            </div>
            
            <div className="form-group">
              <label>Start Date <span className="required">*</span></label>
              <input 
                type="date"
                name="startDate"
                value={currentExperience.startDate}
                onChange={handleChange}
                required
                disabled={saving}
                className={saving ? 'disabled' : ''}
              />
            </div>
            
            <div className="form-group">
              <label>End Date <span className="required">*</span></label>
              <input 
                type="date"
                name="endDate"
                value={currentExperience.endDate}
                onChange={handleChange}
                required
                disabled={saving}
                className={saving ? 'disabled' : ''}
              />
            </div>
            
            <div className="form-group">
              <label>Location <span className="required">*</span></label>
              <input 
                type="text"
                name="location"
                value={currentExperience.location}
                onChange={handleChange}
                placeholder="Job location"
                required
                disabled={saving}
                className={saving ? 'disabled' : ''}
              />
            </div>
            
            <div className="form-group full-width">
              <label>Description</label>
              <textarea 
                name="description"
                value={currentExperience.description}
                onChange={handleChange}
                placeholder="Describe your role and responsibilities"
                disabled={saving}
                className={saving ? 'disabled' : ''}
              ></textarea>
            </div>
            
            <div className="form-group full-width actions">
              <button 
                type="submit" 
                className="primary-btn"
                disabled={saving}
                style={{ backgroundColor: '#4f46e5' }}
              >
                {saving ? 'Saving...' : (editIndex !== null ? 'Update Experience' : 'Add Experience')}
              </button>
              <button 
                type="button" 
                className="secondary-btn" 
                onClick={onClose}
                disabled={saving}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 20px;
          }
          
          .modal-content {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            width: 100%;
            max-width: 600px;
            padding: 24px;
            animation: fadeIn 0.3s ease-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
          }
          
          .modal-header h3 {
            margin: 0;
            font-size: 20px;
            font-weight: 600;
            color: #333;
          }
          
          .close-btn {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 24px;
            color: #666;
            padding: 4px;
            border-radius: 4px;
            transition: background-color 0.2s;
          }
          
          .close-btn:hover {
            background-color: #f0f0f0;
            color: #333;
          }
          
          .form-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          
          .form-group {
            margin-bottom: 16px;
          }
          
          .form-group.full-width {
            grid-column: 1 / -1;
          }
          
          label {
            display: block;
            margin-bottom: 6px;
            font-weight: 500;
            color: #333;
            font-size: 14px;
          }
          
          .required {
            color: #e53935;
          }
          
          input, textarea {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
            transition: border-color 0.2s, box-shadow 0.2s;
          }
          
          input:focus, textarea:focus {
            outline: none;
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          }
          
          input[type="date"] {
            padding-right: 12px;
          }
          
          textarea {
            resize: vertical;
            min-height: 100px;
          }
          
          .disabled {
            background-color: #f5f5f5;
            cursor: not-allowed;
          }
          
          .actions {
            display: flex;
            justify-content: flex-end;
            gap: 12px;
            margin-top: 24px;
          }
          
          .primary-btn {
            background-color: #6366f1;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          
          .primary-btn:hover:not(:disabled) {
            background-color: #4f46e5;
          }
          
          .primary-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
          
          .secondary-btn {
            background: none;
            border: 1px solid #ddd;
            color: #666;
            padding: 10px 16px;
            border-radius: 4px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          
          .secondary-btn:hover:not(:disabled) {
            background-color: #f5f5f5;
          }
          
          .secondary-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
          
          @media (max-width: 600px) {
            .form-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ExperiencesModal;