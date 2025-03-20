import React, { useState, ChangeEvent, useEffect } from "react";
import { UserProfileData } from '../hooks/useUserProfile';

interface ProfileImageUploadProps {
  onImageUpload?: (file: File) => void;
  userData?: UserProfileData | null;
}

const LogoUpload: React.FC<ProfileImageUploadProps> = ({ onImageUpload, userData }) => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  // Initialize profile image from userData
  useEffect(() => {
    if (userData?.profileImage) {
      setPreviewUrl(userData?.profileImage);
    }
  }, [userData]);
  
  const handleImageUpload = async (file: File) => {
    setUploading(true);
    setError(null);
    setSuccess(null);
    const formData = new FormData();
    formData.append('image', file);
    
    if (!userData?.id) {
      setError('User ID not found');
      setUploading(false);
      return;
    }
    
    formData.append('userId', userData.id.toString());

    try {
      const response = await fetch('http://localhost:5000/api/profile/image/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      setPreviewUrl(data.imageUrl);
      setProfileImage(file);
      setSuccess('Profile image updated successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };
  
  return (
    <div className="uploading-outer">
      <div className="uploadButton">
        <input
          className="uploadButton-input"
          type="file"
          name="attachments[]"
          accept="image/*"
          id="upload"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              const file = e.target.files[0];
              handleImageUpload(file);
            }
          }}
          disabled={uploading}
        />
        <label
          className="uploadButton-button ripple-effect"
          htmlFor="upload"
        >
          {uploading ? 'Uploading...' : (previewUrl ? 'Change Profile Image' : 'Upload Profile Image')}
        </label>
        <span className="uploadButton-file-name">
          {profileImage && profileImage.name}
        </span>
      </div>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {success && <div className="alert alert-success mt-3">{success}</div>}
      {previewUrl && (
        <div className="upload-preview mt-3">
          <img 
            src={previewUrl} 
            alt="Profile Preview" 
            style={{ maxWidth: '150px', maxHeight: '150px', borderRadius: '50%' }} 
          />
        </div>
      )}
      <div className="text">
        Max file size is 1MB, Minimum dimension: 330x300 And
        Suitable files are .jpg & .png
      </div>
    </div>
  );
};

export { LogoUpload }; 