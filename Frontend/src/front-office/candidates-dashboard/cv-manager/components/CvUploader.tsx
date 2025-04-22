import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useUserProfile } from '../../hooks/useUserProfile';

interface ICvHistory {
  id?: string;
  createdAt: string;
  fileName: string;
  fileUrl: string;
  extractedData?: string;
}

interface CvUploaderProps {
  onUpload: (file: File) => Promise<void>;
  onDelete: (cvId: string) => Promise<void>;
  userData: {
    id: string;
    profile?: {
      cv?: ICvHistory[];
    };
  } | null;
}

// Validation checking
function checkFileTypes(files: File[]): boolean {
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  
  for (let i = 0; i < files.length; i++) {
    if (!allowedTypes.includes(files[i].type)) {
      return false;
    }
  }
  return true;
}

// Maximum file size in bytes (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

const CvUploader: React.FC<CvUploaderProps> = ({ onUpload, onDelete, userData }) => {
  const [cvFiles, setCvFiles] = useState<File[]>([]);
  const [uploadError, setUploadError] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);
  const [cvHistory, setCvHistory] = useState<ICvHistory[]>([]);
  const [success, setSuccess] = useState<string>("");

  // Load CV history when user data is available
  useEffect(() => {
    if (userData?.profile?.cv) {
      // Assuming cv field contains the history array
      setCvHistory(Array.isArray(userData.profile.cv) ? userData.profile.cv : []);
    }
  }, [userData]);

  const handleCvUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const files = Array.from(e.target.files);
    
    // Check for duplicates
    const isExist = cvFiles.some((file1) =>
      files.some((file2) => file1.name === file2.name)
    );
    
    if (isExist) {
      setUploadError("File already exists");
      return;
    }
    
    // Check file type
    if (!checkFileTypes(files)) {
      setUploadError("Only accept (.doc, .docx, .pdf) file");
      return;
    }
    
    // Check file size
    const overSizeFiles = files.filter(file => file.size > MAX_FILE_SIZE);
    if (overSizeFiles.length > 0) {
      setUploadError(`Some files exceed the maximum size limit of 5MB`);
      return;
    }
    
    setCvFiles([...cvFiles, ...files]);
    setUploadError("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (cvFiles.length === 0) {
      setUploadError("Please select at least one CV file");
      return;
    }
    
    setUploading(true);
    
    try {
      for (const file of cvFiles) {
        await onUpload(file);
      }
      
      // Clear files after successful upload
      setCvFiles([]);
      setUploadError("");
    } catch (error) {
      console.error("CV upload error:", error);
      setUploadError("Failed to upload CV files. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await onDelete(id);
      setCvHistory(prevHistory => prevHistory.filter(cv => cv.id !== id));
      setSuccess('CV deleted successfully');
      setUploadError('');
    } catch (error) {
      console.error('Failed to delete CV:', error);
      setUploadError('Failed to delete CV. Please try again.');
      setSuccess('');
    }
  };

  // Delete file from upload list
  const deleteFile = (name: string) => {
    const updatedFiles = cvFiles.filter((file) => file.name !== name);
    setCvFiles(updatedFiles);
  };

  return (
    <div className="cv-manager">
      {/* Upload Form */}
      <form onSubmit={handleSubmit}>
        <div className="uploading-resume mb-4">
          <div className="uploadButton">
            <input
              className="uploadButton-input"
              type="file"
              name="attachments[]"
              accept=".doc,.docx,.xml,application/msword,application/pdf"
              id="upload"
              multiple
              onChange={handleCvUpload}
              disabled={uploading}
            />
            <label className="cv-uploadButton" htmlFor="upload">
              <span className="title">Drop files here to upload</span>
              <span className="text">
                To upload file size is (Max 5Mb) and allowed file
                types are (.doc, .docx, .pdf)
              </span>
              <span className="btn btn-primary">
                Upload Resume
              </span>
            </label>
          </div>
          
          {uploadError && <div className="alert alert-danger mt-2">{uploadError}</div>}
          {success && <div className="alert alert-success mt-2">{success}</div>}
        </div>
        
        {/* Selected Files Preview */}
        {cvFiles.length > 0 && (
          <div className="files-outer mb-4">
            <h4>Selected Files</h4>
            {cvFiles.map((file, i) => (
              <div key={i} className="file-edit-box">
                <span className="title">{file.name}</span>
                <span className="size">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                <div className="edit-btns">
                  <button 
                    type="button" 
                    onClick={() => deleteFile(file.name)}
                    disabled={uploading}
                  >
                    <span className="la la-trash"></span>
                  </button>
                </div>
              </div>
            ))}
            
            <div className="mt-3">
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={uploading}
              >
                {uploading ? 'Uploading...' : 'Upload Selected Files'}
              </button>
            </div>
          </div>
        )}
      </form>
      
      {/* CV History */}
      {cvHistory.length > 0 && (
        <div className="cv-history mt-5">
          <h4>CV History</h4>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Upload Date</th>
                  <th>Filename</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cvHistory.map((cv) => (
                  <tr key={cv.id}>
                    <td>{new Date(cv.createdAt).toLocaleDateString()}</td>
                    <td>{cv.fileName}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-danger"
                        onClick={() => cv.id && handleDelete(cv.id)}
                        disabled={uploading}
                      >
                        <span className="la la-trash"></span> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CvUploader; 