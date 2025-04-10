import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useUserProfile } from '../../hooks/useUserProfile';
import ParsedDataModal from './ParsedDataModal';
import { AuthContext } from '../../../../routing-module/AuthContext';
import { useContext } from 'react';

interface AddCVProps {
  onUpload: (file: File) => Promise<void>;
  isLoading: boolean;
  showParsedData: boolean;
  setShowParsedData: (show: boolean) => void;
  parsedData: any;
  setParsedData: (data: any) => void;
}

export const AddCV: React.FC<AddCVProps> = ({ 
  onUpload, 
  isLoading, 
  showParsedData, 
  setShowParsedData, 
  parsedData, 
  setParsedData 
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { userData } = useUserProfile();
  const { updateProfileData } = useContext(AuthContext);
  const [saving, setSaving] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
        'text/csv',
        'text/html',
        'text/xml',
        'application/rtf'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        toast.error('Please upload a PDF, DOCX, or text-based file (TXT, CSV, HTML, XML, RTF).');
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB.');
        return;
      }

      await onUpload(file);
    } catch (error) {
      console.error('Error uploading CV:', error);
      toast.error('Failed to upload CV. Please try again.');
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files?.[0];
    if (!file) return;

    try {
      await onUpload(file);
    } catch (error) {
      console.error('Error uploading CV:', error);
      toast.error('Failed to upload CV. Please try again.');
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleConfirmOverwrite = async () => {
    if (!userData?.id || !parsedData) return;

    setSaving(true);
    try {
      // Create FormData to send both file and parsed data
      const formData = new FormData();
      formData.append('userId', userData.id);
      formData.append('parsedData', JSON.stringify(parsedData));
      
      // Get the file from the input
      const fileInput = fileInputRef.current;
      if (fileInput && fileInput.files && fileInput.files[0]) {
        formData.append('cv', fileInput.files[0]);
      } else {
        throw new Error('No CV file found');
      }

      // Call the new endpoint to update profile with parsed CV data
      const response = await fetch('http://localhost:5000/api/profile/cv/parsed', {
        method: 'POST',
        body: formData // Send as FormData instead of JSON
      });

      if (!response.ok) {
        throw new Error('Failed to update profile with parsed CV data');
      }

      const updatedProfile = await response.json();
      
      // Update the profile data in AuthContext
      updateProfileData(updatedProfile);

      toast.success('Resume data updated successfully!');
      setShowParsedData(false);
      setParsedData(null);

      // Refresh the page to show updated data
      window.location.reload();
    } catch (error) {
      console.error('Error updating resume data:', error);
      toast.error('Failed to update resume data. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="resume-outer">
      {/* Current CV Preview */}
      {userData?.cv && (
        <div className="current-cv mb-4">
          <h5>Current CV</h5>
          <div className="cv-preview">
            {userData.cv.endsWith('.pdf') ? (
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
                <a 
                  href={userData.cv}
                  className="btn btn-sm btn-primary"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Upload Section */}
      <div className="upper-title">
        <h4>Upload CV</h4>
        <button className="btn btn-primary" onClick={() => fileInputRef.current?.click()}>
          Upload New CV
        </button>
      </div>
      
      <div
        className="resume-block"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
        style={{ 
          cursor: 'pointer',
          border: '2px dashed #ddd',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#f9f9f9',
          marginTop: '20px'
        }}
      >
        <div className="inner">
          <span className="icon">
            <i className="las la-cloud-upload-alt" style={{ fontSize: '48px', color: '#666' }}></i>
          </span>
          <div className="upload-text">
            {isLoading ? (
              <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Parsing your CV...</p>
              </div>
            ) : (
              <>
                <h3>Drop your CV here or click to upload</h3>
                <p>Supports: PDF, DOCX, TXT, CSV, HTML, XML, RTF (Max 5MB)</p>
              </>
            )}
          </div>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.txt,.csv,.html,.xml,.rtf"
          style={{ display: 'none' }}
        />
      </div>

      {/* Parsed Data Modal */}
      {parsedData && (
        <ParsedDataModal
          show={showParsedData}
          onClose={() => {
            setShowParsedData(false);
            setParsedData(null);
          }}
          onConfirm={handleConfirmOverwrite}
          parsedData={parsedData}
          saving={saving}
        />
      )}
    </div>
  );
};

export default AddCV;