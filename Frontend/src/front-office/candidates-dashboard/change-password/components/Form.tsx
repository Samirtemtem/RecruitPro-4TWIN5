import React, { useState, FormEvent } from 'react';
import { useUserProfile } from '../../hooks/useUserProfile';
import { toast, Toaster } from 'react-hot-toast';

interface PasswordForm {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface PasswordValidation {
  hasMinLength: boolean;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
}

const Form: React.FC = () => {
  const { userData } = useUserProfile();
  const [formData, setFormData] = useState<PasswordForm>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Partial<PasswordForm>>({});
  const [saving, setSaving] = useState<boolean>(false);
  const [validation, setValidation] = useState<PasswordValidation>({
    hasMinLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false
  });

  const validatePassword = (password: string): PasswordValidation => {
    return {
      hasMinLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear the error for this field as the user types
    if (errors[name as keyof PasswordForm]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }

    // Update password validation state if new password is being typed
    if (name === 'newPassword') {
      setValidation(validatePassword(value));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<PasswordForm> = {};
    
    if (!formData.oldPassword) {
      newErrors.oldPassword = 'Current password is required';
    }
    
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else {
      const validations = validatePassword(formData.newPassword);
      if (!validations.hasMinLength || 
          !validations.hasUpperCase || 
          !validations.hasLowerCase || 
          !validations.hasNumber || 
          !validations.hasSpecialChar) {
        newErrors.newPassword = 'Password does not meet the requirements';
      }
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const loadingToast = toast.loading('Changing password...');

    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      if (formData.newPassword !== formData.confirmPassword) {
        toast.dismiss(loadingToast);
        toast.error('New password and confirmation do not match');
        return;
      }

      const response = await fetch('http://localhost:5000/api/auth/change-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userData.id,
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to change password');
      }

      toast.dismiss(loadingToast);
      toast.success('Password changed successfully!');
      
      // Reset form after successful submission
      setFormData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      
      setValidation({
        hasMinLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialChar: false
      });
    } catch (error) {
      console.error('Failed to change password:', error);
      toast.dismiss(loadingToast);
      toast.error(error instanceof Error ? error.message : 'Failed to change password. Please try again.');
      if (error instanceof Error && error.message.includes('current password')) {
        setErrors({
          oldPassword: 'Current password is incorrect'
        });
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <Toaster 
        position="bottom-right"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          bottom: 20,
          right: 20,
        }}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
            padding: '16px 24px',
            fontSize: '16px',
            maxWidth: '400px',
            minWidth: '300px'
          },
          success: {
            duration: 3000,
            style: {
              background: '#22c55e',
              color: '#fff',
              padding: '16px 24px',
              fontSize: '16px',
              maxWidth: '400px',
              minWidth: '300px'
            },
          },
          error: {
            duration: 4000,
            style: {
              background: '#ef4444',
              color: '#fff',
              padding: '16px 24px',
              fontSize: '16px',
              maxWidth: '400px',
              minWidth: '300px'
            },
          },
          loading: {
            style: {
              background: '#363636',
              color: '#fff',
              padding: '16px 24px',
              fontSize: '16px',
              maxWidth: '400px',
              minWidth: '300px'
            },
          },
        }}
      />
      <div className="row">
        {/* Current Password */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Current Password <span className="required">*</span></label>
          <input 
            type="password" 
            name="oldPassword" 
            value={formData.oldPassword}
            onChange={handleChange}
            disabled={saving}
            required 
          />
          {errors.oldPassword && <div className="error text-danger">{errors.oldPassword}</div>}
        </div>

        {/* New Password */}
        <div className="form-group col-lg-7 col-md-12">
          <label>New Password <span className="required">*</span></label>
          <input 
            type="password" 
            name="newPassword" 
            value={formData.newPassword}
            onChange={handleChange}
            disabled={saving}
            required 
          />
          {errors.newPassword && <div className="error text-danger">{errors.newPassword}</div>}
          
          {/* Password Requirements */}
          <div className="password-requirements mt-2">
            <p className="mb-2">Password must meet the following requirements:</p>
            <ul className="list-unstyled">
              <li className={validation.hasMinLength ? 'text-success' : 'text-muted'}>
                <i className={`la ${validation.hasMinLength ? 'la-check' : 'la-times'}`}></i>
                At least 8 characters
              </li>
              <li className={validation.hasUpperCase ? 'text-success' : 'text-muted'}>
                <i className={`la ${validation.hasUpperCase ? 'la-check' : 'la-times'}`}></i>
                At least one uppercase letter
              </li>
              <li className={validation.hasLowerCase ? 'text-success' : 'text-muted'}>
                <i className={`la ${validation.hasLowerCase ? 'la-check' : 'la-times'}`}></i>
                At least one lowercase letter
              </li>
              <li className={validation.hasNumber ? 'text-success' : 'text-muted'}>
                <i className={`la ${validation.hasNumber ? 'la-check' : 'la-times'}`}></i>
                At least one number
              </li>
              <li className={validation.hasSpecialChar ? 'text-success' : 'text-muted'}>
                <i className={`la ${validation.hasSpecialChar ? 'la-check' : 'la-times'}`}></i>
                At least one special character
              </li>
            </ul>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Confirm Password <span className="required">*</span></label>
          <input 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword}
            onChange={handleChange}
            disabled={saving}
            required 
          />
          {errors.confirmPassword && <div className="error text-danger">{errors.confirmPassword}</div>}
        </div>

        {/* Submit Button */}
        <div className="form-group col-lg-6 col-md-12">
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Update Password'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form; 