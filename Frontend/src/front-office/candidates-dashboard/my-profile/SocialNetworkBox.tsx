import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useUserProfile } from '../hooks/useUserProfile';
import { Socials } from '../../../models/types';

interface SocialLink {
  id?: string;
  type: Socials;
  link?: string;
}

const SocialNetworkBox: React.FC = () => {
  const { userData, isLoading, error } = useUserProfile();
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    { type: Socials.LINKEDIN, link: '' },
    { type: Socials.GITHUB, link: '' },
    { type: Socials.PORTFOLIO, link: '' }
  ]);
  
  const [newSocialType, setNewSocialType] = useState<Socials>(Socials.LINKEDIN);
  const [newSocialLink, setNewSocialLink] = useState<string>('');
  const [saving, setSaving] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    if (userData?.socialLinks) {
      const formattedLinks = userData.socialLinks.map(link => ({
        id: link._id,
        type: link.type as Socials,
        link: link.link
      }));
      setSocialLinks(formattedLinks);
      setSubmitMessage(null);
    }
  }, [userData]);

  const handleLinkChange = (index: number, value: string) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index].link = value;
    setSocialLinks(updatedLinks);
  };

  const handleAddSocial = async () => {
    if (newSocialLink.trim() === '') return;
    setSaving(true);
    setSubmitMessage(null);

    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      const updatedLinks = [...socialLinks, { type: newSocialType, link: newSocialLink }];

      await fetch('http://localhost:5000/api/profile/social', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userId: userData.id,
          socialLinks: updatedLinks 
        })
      });

      setSocialLinks(updatedLinks);
      setNewSocialLink('');
      setSubmitMessage({ type: 'success', text: 'Social link added successfully' });
    } catch (error) {
      console.error('Failed to add social link:', error);
      setSubmitMessage({ type: 'error', text: 'Failed to add social link. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  const handleRemoveSocial = async (index: number) => {
    setSubmitMessage(null);
    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      const linkToDelete = socialLinks[index];
      if (!linkToDelete.id) return;

      await fetch(`http://localhost:5000/api/profile/social/${linkToDelete.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: userData.id })
      });

      const updatedLinks = [...socialLinks];
      updatedLinks.splice(index, 1);
      setSocialLinks(updatedLinks);
      setSubmitMessage({ type: 'success', text: 'Social link removed successfully' });
    } catch (error) {
      console.error('Failed to remove social link:', error);
      setSubmitMessage({ type: 'error', text: 'Failed to remove social link. Please try again.' });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSubmitMessage(null);

    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      // Filter out empty links
      const validLinks = socialLinks.filter(link => link.link?.trim() !== '');

      await fetch('http://localhost:5000/api/profile/social', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userId: userData.id,
          socialLinks: validLinks 
        })
      });

      setSocialLinks(validLinks);
      setSubmitMessage({ type: 'success', text: 'Social links updated successfully' });
    } catch (error) {
      console.error('Failed to update social links:', error);
      setSubmitMessage({ type: 'error', text: 'Failed to update social links. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  if (isLoading) {
    return <div>Loading social links...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      {submitMessage && (
        <div className={`alert ${submitMessage.type === 'success' ? 'alert-success' : 'alert-danger'} mb-3`}>
          {submitMessage.text}
        </div>
      )}
      <div className="row">
        {socialLinks.map((social, index) => (
          <div key={index} className="form-group col-lg-6 col-md-12">
            <label>{social.type.charAt(0) + social.type.slice(1).toLowerCase()}</label>
            <div className="input-group">
              <input
                type="text"
                value={social.link}
                onChange={(e) => handleLinkChange(index, e.target.value)}
                placeholder={`Enter your ${social.type.toLowerCase()} profile link`}
                disabled={saving}
              />
              <button 
                type="button" 
                className="btn btn-danger" 
                onClick={() => handleRemoveSocial(index)}
                disabled={saving}
              >
                <i className="la la-trash"></i>
              </button>
            </div>
          </div>
        ))}

        {/* Add new social link */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Add Social Link</label>
          <div className="input-group">
            <select 
              className="form-select"
              value={newSocialType}
              onChange={(e) => setNewSocialType(e.target.value as Socials)}
              disabled={saving}
            >
              {Object.values(Socials).map(type => (
                <option key={type} value={type}>
                  {type.charAt(0) + type.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={newSocialLink}
              onChange={(e) => setNewSocialLink(e.target.value)}
              placeholder="Enter profile link"
              disabled={saving}
            />
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={handleAddSocial}
              disabled={saving}
            >
              <i className="la la-plus"></i> Add
            </button>
          </div>
        </div>
        
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

export { SocialNetworkBox }; 