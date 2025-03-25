import React from 'react';
import { Education } from '../../../../models/Education';
import { Experience } from '../../../../models/Experience';
import { Skill } from '../../../../models/Skill';

interface ParsedDataModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  parsedData: {
    education?: Education[];
    work_experience?: Experience[];
    skills?: Skill[];
  };
  saving: boolean;
}

const ParsedDataModal: React.FC<ParsedDataModalProps> = ({
  show,
  onClose,
  onConfirm,
  parsedData,
  saving
}) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '800px', maxHeight: '80vh', overflow: 'auto' }}>
        <div className="modal-header">
          <h3>Parsed Resume Data</h3>
          <button 
            type="button" 
            className="close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="parsed-data-content">
          {/* Education Section */}
          <div className="section">
            <h4>Education ({parsedData.education?.length || 0} entries)</h4>
            {parsedData.education?.map((edu, index) => (
              <div className="resume-block" key={index}>
                <div className="inner">
                  <span className="name">{edu.institution.charAt(0)}</span>
                  <div className="title-box">
                    <div className="info-box">
                      <h3>{edu.diploma}</h3>
                      <span>{edu.institution}</span>
                    </div>
                    <div className="edit-box">
                      <span className="year">
                        {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
                      </span>
                    </div>
                  </div>
                  <div className="text">
                    <p><strong>Location:</strong> {edu.location}</p>
                    <p>{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div className="section mt-4">
            <h4>Work Experience ({parsedData.work_experience?.length || 0} entries)</h4>
            {parsedData.work_experience?.map((exp, index) => (
              <div className="resume-block" key={index}>
                <div className="inner">
                  <span className="name">{exp.enterprise.charAt(0)}</span>
                  <div className="title-box">
                    <div className="info-box">
                      <h3>{exp.position}</h3>
                      <span>{exp.enterprise}</span>
                    </div>
                    <div className="edit-box">
                      <span className="year">
                        {new Date(exp.startDate).getFullYear()} - {new Date(exp.endDate).getFullYear()}
                      </span>
                    </div>
                  </div>
                  <div className="text">
                    <p><strong>Location:</strong> {exp.location}</p>
                    <p>{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="section mt-4">
            <h4>Skills ({parsedData.skills?.length || 0} entries)</h4>
            <div className="skills-block">
              {parsedData.skills?.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <h5>{skill.name}</h5>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className={`bar-inner ${skill.degree.toLowerCase()}`} 
                      style={{ 
                        width: skill.degree === 'BEGINNER' ? '25%' :
                               skill.degree === 'INTERMEDIATE' ? '50%' :
                               skill.degree === 'ADVANCED' ? '75%' :
                               '100%'
                      }}
                    >
                      <div className="skill-percentage">
                        <div className="count-box">{skill.degree}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="form-group full-width actions mt-4">
            <button 
              type="button" 
              className="primary-btn"
              onClick={onConfirm}
              disabled={saving}
              style={{ backgroundColor: '#4f46e5' }}
            >
              {saving ? 'Updating...' : 'Overwrite Existing Resume'}
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
            padding: 24px;
            animation: fadeIn 0.3s ease-out;
          }
          
          .section {
            border-bottom: 1px solid #eee;
            padding-bottom: 20px;
          }

          .section:last-child {
            border-bottom: none;
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
        `}
      </style>
    </div>
  );
};

export default ParsedDataModal; 