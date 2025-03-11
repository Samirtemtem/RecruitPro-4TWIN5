import React, { useState, FormEvent, ChangeEvent, useEffect, useContext } from "react";
import { useUserProfile } from "../hooks/useUserProfile";
import { AuthContext, UserProfileData } from "../../../routing-module/AuthContext";
import axios from "axios";

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

interface FormInfoBoxProps {
  userData: UserProfileData | null;
}
console.log("FormInfoBox component rendered");
const FormInfoBox: React.FC<FormInfoBoxProps> = ({ userData }) => {
  const { updateProfileData, user, setUser } = useContext(AuthContext);
  const { isLoading, error, refreshUserProfile } = useUserProfile();
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: ""
  });

  // Initialize 2FA toggle with user data from AuthContext
  const [is2FAEnabled, setIs2FAEnabled] = useState<boolean>(user?.is2FAEnabled || false);
  const [toggling2FA, setToggling2FA] = useState<boolean>(false);

  // Update 2FA status whenever user data changes
  useEffect(() => {
    if (user) {
      setIs2FAEnabled(user.is2FAEnabled || false);
    }
  }, [user]);

  const [errors, setErrors] = useState<Partial<ProfileFormData>>({});
  const [saving, setSaving] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Update form data when user data is loaded
  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        email: userData.email || "",
        phoneNumber: userData.phoneNumber || "",
        address: userData.address || ""
      });
    }
  }, [userData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear any existing error for this field
    if (errors[name as keyof ProfileFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ProfileFormData> = {};
    
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSaving(true);
      try {
        if (!userData?.id) {
          throw new Error('User ID not found');
        }

        const response = await fetch('http://localhost:5000/api/profile/update', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            userId: userData.id
          })
        });

        if (!response.ok) {
          throw new Error('Failed to update profile');
        }

        const updatedData = await response.json();
        
        // Update the profile data in the AuthContext
        updateProfileData({
          ...userData,
          ...formData
        });

        setSubmitMessage({ type: 'success', text: 'Profile updated successfully' });
      } catch (error) {
        console.error('Failed to update profile:', error);
        setSubmitMessage({ type: 'error', text: 'Failed to update profile. Please try again.' });
      } finally {
        setSaving(false);
      }
    }
  };

  // Update handle2FAToggle to update the user object in AuthContext
  const handle2FAToggle = async (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setIs2FAEnabled(!newValue);

  //  setToggling2FA(true);
    
    try {
      const token = sessionStorage.getItem("token");
      if (!token) throw new Error('No authentication token found');
      
      console.log("Toggling 2FA to:", newValue);
      console.log("Using token:", token);
      
      // Update 2FA status via API with proper Authorization header
      // Note the correct endpoint URL - make sure the base URL is correct
      const response = await axios.post(
        `http://localhost:5000/api/auth/update2fa`, // Make sure this matches your backend route
        { enabled: newValue },
        { 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`  // Add Bearer prefix to token
          }
        }
      );
      
      console.log("2FA update response:", response.data);
      
      if (response.data && response.data.success) {
        setIs2FAEnabled(newValue);
        
        // Update the user object in AuthContext if we have it
        if (user) {
          const updatedUser = {
            ...user,
            is2FAEnabled: newValue
          };
          
          // Use the setUser from the component scope
          setUser(updatedUser);
          
          // Also update sessionStorage
          sessionStorage.setItem('user', JSON.stringify(updatedUser));
        }
        
        setSubmitMessage({ type: 'success', text: `Two-factor authentication ${newValue ? 'enabled' : 'disabled'} successfully` });
      } else {
        throw new Error('Failed to update 2FA status');
      }
    } catch (error: any) {
      console.error('Failed to update 2FA status:', error);
      
      // Log more detailed error information if available
      if (error.response) {
        console.error('Error response:', {
          status: error.response.status,
          data: error.response.data
        });
      }
      
      setSubmitMessage({ type: 'error', text: 'Failed to update two-factor authentication settings' });
      // Revert UI state on error
      setIs2FAEnabled(!newValue);
    } finally {
      setToggling2FA(false);
    }
  };

  if (isLoading) {
    return <div className="alert alert-info">Loading profile data...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!userData) {
    return (
      <div className="alert alert-warning">
        Profile information not available. Please try refreshing the page or login again.
      </div>
    );
  }

  return (
    <form action="#" className="default-form" onSubmit={handleSubmit}>
      {submitMessage && (
        <div className={`alert ${submitMessage.type === 'success' ? 'alert-success' : 'alert-danger'} mb-3`}>
          {submitMessage.text}
        </div>
      )}
      <div className="row">
        {/* <!-- First Name --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>First Name <span className="required">*</span></label>
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name" 
            required 
            disabled={saving}
          />
          {errors.firstName && <div className="error text-danger">{errors.firstName}</div>}
        </div>

        {/* <!-- Last Name --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Last Name <span className="required">*</span></label>
          <input 
            type="text" 
            name="lastName" 
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name" 
            required 
            disabled={saving}
          />
          {errors.lastName && <div className="error text-danger">{errors.lastName}</div>}
        </div>

        {/* <!-- Email --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email <span className="required">*</span></label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email" 
            required 
            disabled
                   />
          {errors.email && <div className="error text-danger">{errors.email}</div>}
        </div>

        {/* <!-- Phone --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Phone <span className="required">*</span></label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
            disabled={saving}
          />
          {errors.phoneNumber && <div className="error text-danger">{errors.phoneNumber}</div>}
        </div>

        {/* <!-- Two-Factor Authentication Toggle --> */}
        <div className="form-group col-lg-12 col-md-12">
          <div className="d-flex align-items-center">
            <label className="switch">
              <input 
                type="checkbox" 
                checked={is2FAEnabled}
                onChange={handle2FAToggle}
                disabled={toggling2FA}
              />
              <span className="slider round"></span>
              <span className="title">Two-Factor Authentication</span>
            </label>
          </div>
          <div className="text-muted mt-2">
            {is2FAEnabled 
              ? "Two-factor authentication is enabled. You'll need to enter a verification code during login." 
              : "Enable two-factor authentication to add an extra layer of security to your account."
            }
          </div>
        </div>
     
        {/* <!-- Submit Button --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button 
            type="submit" 
            className="theme-btn btn-style-one"
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </form>
  );
};

export { FormInfoBox }; 