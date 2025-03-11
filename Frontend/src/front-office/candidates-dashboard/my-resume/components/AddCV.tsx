import React, { useState, ChangeEvent } from 'react';
import { useUserProfile } from '../../hooks/useUserProfile';

const AddCV: React.FC = () => {
  const { userData } = useUserProfile();
  const [files, setFiles] = useState<File[]>([]);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
    }
  };

  return (
    <>
      <div className="uploading-outer">
        <div className="uploadButton">
          <input
            className="uploadButton-input"
            type="file"
            name="attachments[]"
            accept=".pdf"
            id="upload"
            onChange={handleFileChange}
          />
          <label 
            className="uploadButton-button ripple-effect" 
            htmlFor="upload"
          >
            {userData?.cv ? 'Update CV' : 'Upload CV'}
          </label>
          <span className="uploadButton-file-name">
            {files.length > 0 ? `Selected: ${files[0].name}` : 'Allowed format: PDF'}
          </span>
        </div>

        <div className="uploading-outer">
          <div className="uploadButton" style={{float: 'right'}}>
            <button 
              onClick={() => setShowPreviewModal(true)}
              className="uploadButton-button ripple-effect"
              style={{ border: 'none', background: 'none', cursor: 'pointer' }}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreviewModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ width: '80%', maxWidth: '1000px', height: '90vh' }}>
            <div className="modal-header">
              <h3>CV Preview</h3>
              <button 
                type="button" 
                className="close-btn"
                onClick={() => setShowPreviewModal(false)}
              >
                ×
              </button>
            </div>
            <div style={{ 
              height: 'calc(100% - 70px)', 
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <iframe
                src={userData?.cv}
                style={{
                  width: '100%',
                  height: '100%',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
                title="CV Preview"
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <a 
                  href={userData?.cv}
                  download
                  className="theme-btn btn-style-one"
                  style={{ textDecoration: 'none' }}
                >
                  Download
                </a>
                <button 
                  onClick={() => setShowPreviewModal(false)}
                  className="theme-btn btn-style-two"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCV;