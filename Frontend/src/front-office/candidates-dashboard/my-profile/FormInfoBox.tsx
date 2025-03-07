import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useUserProfile, UserProfileData } from "../hooks/useUserProfile";

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

const FormInfoBox: React.FC<FormInfoBoxProps> = ({ userData }) => {
  const { isLoading, error } = useUserProfile();
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: ""
  });

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
        const token = sessionStorage.getItem("token");
        if (!token) {
          throw new Error('No authentication token found');
        }

        if (!userData?.id) {
          throw new Error('User ID not found');
        }

        await fetch('http://localhost:5000/api/profile/update', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            userId: userData.id
          })
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

  if (isLoading) {
    return <div>Loading profile data...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
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
            disabled={saving}
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