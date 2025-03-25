import React, { useState, FormEvent, ChangeEvent, useEffect, useContext } from "react";
import { useUserProfile } from '../hooks/useUserProfile';
import { Socials } from '../../../models/types';
import { AuthContext } from '../../../routing-module/AuthContext';
import { toast } from 'react-hot-toast';

interface SocialLink {
  _id?: string;
  type: Socials;
  link: string;
}

const SocialNetworkBox: React.FC = () => {
  const { userData, isLoading, error } = useUserProfile();
  const { profileData, updateProfileData } = useContext(AuthContext);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    { type: Socials.LINKEDIN, link: '' },
    { type: Socials.GITHUB, link: '' }
  ]);
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [saving, setSaving] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (profileData?.socialLinks) {
      try {
        // Create a map of existing social links by type for easy lookup
        const socialLinksMap = new Map(
          profileData.socialLinks.map(link => [
            link.type as Socials,
            {
              _id: link._id,
              type: link.type as Socials,
              link: link.link || ''
            } as SocialLink
          ])
        );

        // Start with required social links
        const updatedLinks: SocialLink[] = [];

        // Add LinkedIn (existing or new)
        const linkedInLink = socialLinksMap.get(Socials.LINKEDIN);
        updatedLinks.push(linkedInLink || { type: Socials.LINKEDIN, link: '' });

        // Add GitHub (existing or new)
        const githubLink = socialLinksMap.get(Socials.GITHUB);
        updatedLinks.push(githubLink || { type: Socials.GITHUB, link: '' });

        // Add remaining social links that aren't LinkedIn or GitHub
        profileData.socialLinks.forEach(link => {
          const socialType = link.type as Socials;
          if (socialType !== Socials.LINKEDIN && socialType !== Socials.GITHUB) {
            updatedLinks.push({
              _id: link._id,
              type: socialType,
              link: link.link || ''
            });
          }
        });

        setSocialLinks(updatedLinks);
      } catch (error) {
        console.error('Error processing social links:', error);
        // Fallback to default state if there's an error
        setSocialLinks([
          { type: Socials.LINKEDIN, link: '' },
          { type: Socials.GITHUB, link: '' }
        ]);
      }
    }
  }, [profileData]);

  const validateSocialLink = (type: Socials, link: string): string => {
    // First check if it's empty for required fields
    if ((type === Socials.LINKEDIN || type === Socials.GITHUB) && !link) {
      return `${type.charAt(0) + type.slice(1).toLowerCase()} profile is required`;
    }

    if (!link) return '';
    
    if (!link.startsWith('https://')) {
      return 'URL must start with https://';
    }

    switch (type) {
      case Socials.LINKEDIN:
        if (!link.includes('linkedin.com')) {
          return 'Invalid LinkedIn URL';
        }
        break;
      case Socials.GITHUB:
        if (!link.includes('github.com')) {
          return 'Invalid GitHub URL';
        }
        break;
    }

    return '';
  };

  const validateAllLinks = (): boolean => {
    const newErrors: {[key: string]: string} = {};
    let hasErrors = false;

    socialLinks.forEach((link, index) => {
      const error = validateSocialLink(link.type, link.link);
      if (error) {
        newErrors[`socialLinks_${index}`] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    return !hasErrors;
  };

  const handleLinkChange = (index: number, value: string) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index].link = value;
    setSocialLinks(updatedLinks);

    // Only validate if the form has been submitted once
    if (submitted) {
      const error = validateSocialLink(updatedLinks[index].type, value);
      setErrors(prev => ({
        ...prev,
        [`socialLinks_${index}`]: error
      }));
    }
  };

  const handleAddSocial = () => {
    setSocialLinks(prev => [
      ...prev,
      { 
        _id: crypto.randomUUID(),
        type: Socials.PORTFOLIO, 
        link: '' 
      }
    ]);
  };

  const handleRemoveSocial = (index: number) => {
    // Don't allow removing LinkedIn or GitHub
    if (index < 2) {
      toast.error('LinkedIn and GitHub profiles cannot be removed');
      return;
    }

    setSocialLinks(prev => prev.filter((_, i) => i !== index));
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[`socialLinks_${index}`];
      return newErrors;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true); // Mark form as submitted
    setSaving(true);

    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      // Validate all links
      if (!validateAllLinks()) {
        toast.error('Please fix the errors in your social links');
        setSaving(false);
        return;
      }

      // Filter out empty links except for LinkedIn and GitHub
      const validLinks = socialLinks.map(link => ({
        ...link,
        link: link.link?.trim() || ''
      }));

      const response = await fetch('http://localhost:5000/api/profile/social', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userId: userData.id,
          socialLinks: validLinks 
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update social links');
      }

      const updatedData = await response.json();
      updateProfileData({
        ...userData,
        socialLinks: updatedData.socialLinks
      });

      toast.success('Social links updated successfully');
    } catch (error) {
      console.error('Failed to update social links:', error);
      toast.error('Failed to update social links. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (isLoading) {
    return <div className="text-center py-4">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="resume-outer theme-blue">
      <div className="upper-title">
        <h4>Social Links</h4>
        <button 
          type="button" 
          className="add-info-btn"
          onClick={handleAddSocial}
          disabled={saving}
        >
          <span className="icon flaticon-plus"></span> Add Social Link
        </button>
      </div>

      <form className="default-form" onSubmit={handleSubmit}>
        <div className="row">
          {socialLinks.map((social, index) => (
            <div key={index} className="col-lg-6 col-md-12">
              <div className="form-group">
                <label>
                  {social.type.charAt(0) + social.type.slice(1).toLowerCase()}
                  {index < 2 && <span className="text-danger ms-1">*</span>}
                </label>
                <div className="input-container">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className={`fab fa-${social.type.toLowerCase()}`}></i>
                    </span>
                    <input
                      type="url"
                      className={`form-control ${submitted && errors[`socialLinks_${index}`] ? 'is-invalid' : ''}`}
                      value={social.link}
                      onChange={(e) => handleLinkChange(index, e.target.value)}
                      placeholder={`https://${social.type.toLowerCase()}.com/your-profile`}
                      disabled={saving}
                    />
                    {index >= 2 && (
                      <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={() => handleRemoveSocial(index)}
                        disabled={saving}
                      >
                        <i className="la la-trash"></i>
                      </button>
                    )}
                  </div>
                  {submitted && errors[`socialLinks_${index}`] && (
                    <div className="error-message">
                      {errors[`socialLinks_${index}`]}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="form-group col-lg-12 mt-3">
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={saving}
          >
            {saving ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Saving...
              </>
            ) : 'Save Changes'}
          </button>
        </div>
      </form>

      <style>
        {`
          .input-container {
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          .input-group {
            position: relative;
            display: flex;
            flex-wrap: nowrap;
            align-items: stretch;
            width: 100%;
            margin-bottom: 0;
          }

          .input-group-text {
            background-color: #f8f9fa;
            border: 1px solid #ced4da;
            border-right: none;
            padding: 0.375rem 0.75rem;
          }

          .input-group .form-control {
            position: relative;
            flex: 1 1 auto;
            width: 1%;
            min-width: 0;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }

          .input-group .form-control.is-invalid {
            border-color: #dc3545;
            padding-right: calc(1.5em + 0.75rem);
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right calc(0.375em + 0.1875rem) center;
            background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
          }

          .input-group .btn {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }

          .error-message {
            color: #dc3545;
            font-size: 0.875em;
            margin-top: 0.25rem;
            width: 100%;
          }

          .form-group {
            margin-bottom: 1.5rem;
          }
        `}
      </style>
    </div>
  );
};

export { SocialNetworkBox }; 