import React, { useState, ChangeEvent } from 'react';
import { useUserProfile } from '../../hooks/useUserProfile';
import { UserProfileData } from '../../../../routing-module/AuthContext';

interface FormData {
  cv: File | null;
}

const AddCV: React.FC = () => {
  const { userData } = useUserProfile();
  const [files, setFiles] = useState<File[]>([]);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({ cv: null });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
      setFormData(prev => ({ ...prev, cv: selectedFiles[0] }));
    }
  };

  const getFileUrl = (file: File | null): string => {
    if (!file) return '';
    return URL.createObjectURL(file);
  };

  return (
    <>
      <div className="row mt-3">
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
            {userData?.cv ? 'Change Your CV' : 'Upload Your CV'}
          </label>
          <span className="uploadButton-file-name">
            {files.length > 0 ? `Selected: ${files[0].name}` : 'Allowed format: PDF'}
          </span>
        </div>

      </div>

        <div className="col-md-12">
          <div className="card" style={{ height: '80%' }}>
            <div className="card-header">
              <h6 className="mb-0">Current CV</h6>
            </div>
            <div className="card-body p-0">
              {formData.cv ? (
                <div className="pdf-container">
                  {formData.cv.type === 'application/pdf' ? (
                    <iframe
                      src={getFileUrl(formData.cv)}
                      width="100%"
                      height="500px"
                      style={{ border: 'none' }}
                      title="CV Preview"
                    />
                  ) : (
                    <div className="document-preview p-3 text-center">
                      <i className="ti ti-file-text fs-4 mb-2 d-block"></i>
                      <p>
                        {formData.cv.name}
                        <br />
                        <small className="text-muted">
                          (Preview not available for this file type)
                        </small>
                      </p>
                      <a 
                        href={getFileUrl(formData.cv)}
                        className="btn btn-sm btn-primary"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    </div>
                  )}
                </div>
              ) : userData?.cv ? (
                <div className="pdf-container">
                  {typeof userData.cv === 'string' && userData.cv.endsWith('.pdf') ? (
                    <iframe
                      src={userData.cv}
                      width="100%"
                      height="500px"
                      style={{ border: 'none' }}
                      title="CV Preview"
                    />
                  ) : (
                    <div className="document-preview p-3 text-center">
                      <i className="ti ti-file-text fs-4 mb-2 d-block"></i>
                      <p>
                        Your CV
                        <br />
                        <small className="text-muted">
                          (Preview not available for this file type)
                        </small>
                      </p>
                      {typeof userData.cv === 'string' && (
                        <a 
                          href={userData.cv}
                          className="btn btn-sm btn-primary"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Download
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
                        
     
    </>
  );
};

export default AddCV;