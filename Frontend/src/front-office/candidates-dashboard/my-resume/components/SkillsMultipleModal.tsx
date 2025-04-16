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
              <label>Skill Name <span className="required">*</span></label>
              <input 
                type="text"
                name="name"
                value={currentSkill.name}
                onChange={handleChange}
                placeholder="Enter skill name"
                required
                disabled={saving}
                className={saving ? 'disabled' : ''}
              />
            </div>
            
            <div className="form-group">
              <label>Proficiency Level <span className="required">*</span></label>
              <select
                name="degree"
                value={currentSkill.degree}
                onChange={handleChange}
                required
                disabled={saving}
                className={saving ? 'disabled' : ''}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            
            <div className="form-group full-width actions">
              <button 
                type="submit" 
                className="primary-btn"
                disabled={saving}
                style={{ backgroundColor: '#4f46e5' }}

              >
                {saving ? 'Saving...' : (editIndex !== null ? 'Update Skill' : 'Add Skill')}
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
          
          input, select, textarea {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
            transition: border-color 0.2s, box-shadow 0.2s;
          }
          
          input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          }
          
          select {
            appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 12px center;
            background-size: 16px;
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

export default SkillsMultipleModal;