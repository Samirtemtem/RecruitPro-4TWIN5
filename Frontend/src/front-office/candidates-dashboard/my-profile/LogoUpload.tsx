import React, { useState, ChangeEvent, useEffect } from "react";
import { useUserProfile } from '../hooks/useUserProfile';
import { toast } from 'react-hot-toast';

interface ProfileImageUploadProps {
  onImageUpload?: (file: File) => void;
}

const LogoUpload: React.FC<ProfileImageUploadProps> = ({ onImageUpload }) => {
  const { userData, isLoading, error: profileError, updateProfileData } = useUserProfile();
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  // Initialize profile image from userData
  useEffect(() => {
    if (userData?.profileImage) {
      setPreviewUrl(userData.profileImage);
    }
  }, [userData]);
  
  const handleImageUpload = async (file: File) => {
    setUploading(true);
    setError(null);
    const loadingToast = toast.loading('Uploading profile image...');
    
    const formData = new FormData();
    formData.append('image', file);
    
    if (!userData?.id) {
      setError('User ID not found');
      setUploading(false);
      toast.dismiss(loadingToast);
      toast.error('User ID not found. Please try again later.');
      return;
    }
    
    formData.append('userId', userData.id.toString());

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/profile/image/upload`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      setPreviewUrl(data.imageUrl);
      setProfileImage(file);
      
      // Update profile data in AuthContext
      updateProfileData({
        profileImage: data.imageUrl
      });
      
      toast.dismiss(loadingToast);
      toast.success('Profile image updated successfully');
      
      // Call the onImageUpload callback if provided
      if (onImageUpload) {
        onImageUpload(file);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.dismiss(loadingToast);
      toast.error('Failed to upload image. Please try again.');
      setError('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };
  
  if (isLoading) {
    return <div>Loading profile data...</div>;
  }
  
  if (profileError) {
    return <div className="alert alert-danger">{profileError}</div>;
  }
  
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