import React, { useState, FormEvent, ChangeEvent, useEffect, useContext } from "react";
import { useUserProfile } from "../hooks/useUserProfile";
import { AuthContext } from "../../../routing-module/AuthContext";
import axios from "axios";
import { toast, Toaster } from 'react-hot-toast';

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

console.log("FormInfoBox component rendered");
const FormInfoBox: React.FC = () => {
  const { updateProfileData, user, setUser } = useContext(AuthContext);
  const { userData, isLoading, error, refreshUserProfile } = useUserProfile();
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
    
    if (!validateForm()) {
      toast.error('Please fix the form errors before submitting');
      return;
    }
    
    setSaving(true);
    const loadingToast = toast.loading('Updating profile...');

    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      const response = await fetch(`${process.env.BACKEND_URL}/api/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userData.id,
          ...formData
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      toast.dismiss(loadingToast);
      toast.success('Profile updated successfully!');

      // Update the profile data in the AuthContext
      updateProfileData({
        ...userData,
        ...formData
      });
    } catch (error) {
      console.error('Failed to update profile:', error);
      toast.dismiss(loadingToast);
      toast.error('Failed to update profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // Update handle2FAToggle to update the user object in AuthContext
  const handle2FAToggle = async (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setIs2FAEnabled(!newValue);

  //  setToggling2FA(true);
    
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error('No authentication token found');
      
      console.log("Toggling 2FA to:", newValue);
      console.log("Using token:", token);
      
      // Update 2FA status via API with proper Authorization header
      // Note the correct endpoint URL - make sure the base URL is correct
      const response = await axios.post(
        `${process.env.BACKEND_URL}/api/auth/update2fa`, // Make sure this matches your backend route
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
          
          // Also update localStorage
          localStorage.setItem('user', JSON.stringify(updatedUser));
        }
        
        toast.success(`Two-factor authentication ${newValue ? 'enabled' : 'disabled'} successfully`);
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
      
      // Reset the toggle to its previous state
      setIs2FAEnabled(!newValue);
      toast.error('Failed to update two-factor authentication status. Please try again.');
    } finally {
      setToggling2FA(false);
    }
  };

  if (isLoading) {
    return <div>Loading profile data...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <Toaster 
        position="bottom-right"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            style: {
              background: '#22c55e',
              color: '#fff',
            },
          },
          error: {
            duration: 4000,
            style: {
              background: '#ef4444',
              color: '#fff',
            },
          },
        }}
      />
      <div className="row">
        {/* First Name */}
        <div className="form-group col-lg-6 col-md-12">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            disabled={saving}
          />
          {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
        </div>

        {/* Last Name */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            disabled={saving}
          />
          {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
        </div>

        {/* Email */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            disabled={saving}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        {/* Phone */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Phone</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            disabled={saving}
          />
          {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
        </div>

        {/* Address */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            disabled={saving}
          />
          {errors.address && <div className="text-danger">{errors.address}</div>}
        </div>

        {/* Toggle switch for 2FA */}
        <div className="form-group col-lg-6 col-md-12">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="toggle2FA"
              checked={is2FAEnabled}
              onChange={handle2FAToggle}
              disabled={toggling2FA}
            />
            <label className="form-check-label" htmlFor="toggle2FA">
              Enable Two-Factor Authentication {toggling2FA && '(Updating...)'}
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-group col-lg-6 col-md-12 text-right">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </form>
  );
};

export { FormInfoBox }; 