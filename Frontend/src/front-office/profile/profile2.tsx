import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../routing-module/router/all_routes";
import CommonSelect from "../../core/common/commonSelect";
import { profilecity, profilesel, profilestate } from "../../core/common/selectoption/selectoption";
import CollapseHeader from "../../core/common/collapse-header/collapse-header";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Socials, Role } from '../../models/types';
import { SkillDegree } from '../../models/Skill';

interface EducationFormData {
  id: string;
  institution: string;
  diploma: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

interface ExperienceFormData {
  id: string;
  position: string;
  enterprise: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

interface SkillFormData {
  id: string;
  name: string;
  degree: SkillDegree;
}

interface SocialLinkFormData {
  id: string;
  type: Socials;
  link: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  profileImage?: File;
  cv?: File;
  education: EducationFormData[];
  experience: ExperienceFormData[];
  skills: SkillFormData[];
  socialLinks: SocialLinkFormData[];
}

// Define UserData interface to match the API response structure
interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role?: Role;
  profile?: {
    address: string;
    profileImage?: string;
    cv?: string;
    education: any[];
    experience: any[];
    skills: any[];
    socialLinks: any[];
  };
}

// Type for the form sections that contain arrays
type ArraySection = 'education' | 'experience' | 'skills' | 'socialLinks';

const Profilesettings = () => {
  const routes = all_routes;
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  // Store the original user data from the API
  const [userData, setUserData] = useState<UserData | null>(null);
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    education: [{
      id: crypto.randomUUID(),
      institution: '',
      diploma: '',
      startDate: '',
      endDate: '',
      description: '',
      location: ''
    }],
    experience: [{
      id: crypto.randomUUID(),
      position: '',
      enterprise: '',
      startDate: '',
      endDate: '',
      description: '',
      location: ''
    }],
    skills: [{
      id: crypto.randomUUID(),
      name: '',
      degree: 'NOVICE' as SkillDegree
    }],
    socialLinks: [
      {
        id: crypto.randomUUID(),
        type: Socials.LINKEDIN,
        link: ''
      },
      {
        id: crypto.randomUUID(),
        type: Socials.GITHUB,
        link: ''
      }
    ]
  });

  useEffect(() => {
    // Fetch user profile data
    const fetchUserProfile = async () => {
      try {
        setIsLoading(true);
        
        // TODO: Replace with actual user email from auth context/localStorage
        const hardcodedEmail = "zaeaz@xn--zae-j50a.eza"; // This should be replaced with authenticated user email
        const { data } = await axios.get(`http://localhost:5000/api/auth/user/${hardcodedEmail}`);
        
        const userData = data.user;
        // Store the original user data
        setUserData(userData);
        
        // Format date helper
        const formatDate = (isoDate: string) => {
          if (!isoDate) return '';
          return new Date(isoDate).toISOString().split('T')[0];
        };
        
        // Update form data with user data
        setFormData({
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
          email: userData.email || '',
          phoneNumber: userData.phoneNumber || '',
          address: userData.profile?.address || '',
          education: userData.profile?.education?.length > 0 
            ? userData.profile.education.map((edu: any) => ({
                id: edu._id || crypto.randomUUID(),
                institution: edu.institution || '',
                diploma: edu.diploma || '',
                startDate: formatDate(edu.startDate),
                endDate: formatDate(edu.endDate),
                description: edu.description || '',
                location: edu.location || ''
              }))
            : [{
                id: crypto.randomUUID(),
                institution: '',
                diploma: '',
                startDate: '',
                endDate: '',
                description: '',
                location: ''
              }],
          experience: userData.profile?.experience?.length > 0
            ? userData.profile.experience.map((exp: any) => ({
                id: exp._id || crypto.randomUUID(),
                position: exp.position || '',
                enterprise: exp.enterprise || '',
                startDate: formatDate(exp.startDate),
                endDate: formatDate(exp.endDate),
                description: exp.description || '',
                location: exp.location || ''
              }))
            : [{
                id: crypto.randomUUID(),
                position: '',
                enterprise: '',
                startDate: '',
                endDate: '',
                description: '',
                location: ''
              }],
          skills: userData.profile?.skills?.length > 0
            ? userData.profile.skills.map((skill: any) => ({
                id: skill._id || crypto.randomUUID(),
                name: skill.name || '',
                degree: skill.degree || 'NOVICE'
              }))
            : [{
                id: crypto.randomUUID(),
                name: '',
                degree: 'NOVICE' as SkillDegree
              }],
          socialLinks: userData.profile?.socialLinks?.length > 0
            ? userData.profile.socialLinks.map((link: any) => ({
                id: link._id || crypto.randomUUID(),
                type: link.type || Socials.LINKEDIN,
                link: link.link || ''
              }))
            : [
                {
                  id: crypto.randomUUID(),
                  type: Socials.LINKEDIN,
                  link: ''
                },
                {
                  id: crypto.randomUUID(),
                  type: Socials.GITHUB,
                  link: ''
                }
              ]
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
        toast.error('Failed to load profile data');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchUserProfile();
  }, []);

  const handleInputChange = (section: string, field: string, value: any, index?: number) => {
    setFormData(prev => {
      const newState = { ...prev };
      
      if (section === 'profile') {
        return {
          ...prev,
          [field]: value
        };
      } else if (index !== undefined) {
        // Handle the array sections with proper type checking
        if (section === 'education') {
          const array = [...prev.education];
          if (index === array.length) {
            array.push({
              id: crypto.randomUUID(),
              institution: '',
              diploma: '',
              startDate: '',
              endDate: '',
              description: '',
              location: '',
              ...{ [field]: value }
            });
          } else {
            array[index] = { ...array[index], [field]: value };
          }
          return { ...prev, education: array };
        } 
        else if (section === 'experience') {
          const array = [...prev.experience];
          if (index === array.length) {
            array.push({
              id: crypto.randomUUID(),
              position: '',
              enterprise: '',
              startDate: '',
              endDate: '',
              description: '',
              location: '',
              ...{ [field]: value }
            });
          } else {
            array[index] = { ...array[index], [field]: value };
          }
          return { ...prev, experience: array };
        }
        else if (section === 'skills') {
          const array = [...prev.skills];
          if (index === array.length) {
            array.push({
              id: crypto.randomUUID(),
              name: '',
              degree: 'NOVICE' as SkillDegree,
              ...{ [field]: value }
            });
          } else {
            array[index] = { ...array[index], [field]: value };
          }
          return { ...prev, skills: array };
        }
        else if (section === 'socialLinks') {
          const array = [...prev.socialLinks];
          if (index === array.length) {
            array.push({
              id: crypto.randomUUID(),
              type: Socials.PORTFOLIO,
              link: '',
              ...{ [field]: value }
            });
          } else {
            array[index] = { ...array[index], [field]: value };
          }
          return { ...prev, socialLinks: array };
        }
      }
      return newState;
    });
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      phoneNumber: value
    }));
  };

  const handleFileUpload = (field: 'profileImage' | 'cv', e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        [field]: e.target.files?.[0]
      }));
    }
  };

  const handleRemoveItem = (section: ArraySection, index: number) => {
    setFormData(prev => {
      const newData = { ...prev };
      
      // Handle each array type separately to avoid type errors
      if (section === 'education') {
        newData.education = prev.education.filter((_, i) => i !== index);
      } 
      else if (section === 'experience') {
        newData.experience = prev.experience.filter((_, i) => i !== index);
      }
      else if (section === 'skills') {
        newData.skills = prev.skills.filter((_, i) => i !== index);
      }
      else if (section === 'socialLinks') {
        newData.socialLinks = prev.socialLinks.filter((_, i) => i !== index);
      }
      
      return newData;
    });
  };

  const addArrayItem = (section: ArraySection) => {
    setFormData(prev => {
      const newState = { ...prev };
      
      switch (section) {
        case 'education':
          return {
            ...prev,
            education: [...prev.education, {
              id: crypto.randomUUID(),
              institution: '',
              diploma: '',
              startDate: '',
              endDate: '',
              description: '',
              location: ''
            }]
          };
        case 'experience':
          return {
            ...prev,
            experience: [...prev.experience, {
              id: crypto.randomUUID(),
              position: '',
              enterprise: '',
              startDate: '',
              endDate: '',
              description: '',
              location: ''
            }]
          };
        case 'skills':
          return {
            ...prev,
            skills: [...prev.skills, {
              id: crypto.randomUUID(),
              name: '',
              degree: 'NOVICE' as SkillDegree
            }]
          };
        case 'socialLinks':
          return {
            ...prev,
            socialLinks: [...prev.socialLinks, {
              id: crypto.randomUUID(),
              type: Socials.PORTFOLIO,
              link: ''
            }]
          };
      }
      return newState;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Build form data for API request
      const profileFormData = new FormData();
      
      // Add basic user information
      profileFormData.append('firstName', formData.firstName);
      profileFormData.append('lastName', formData.lastName);
      profileFormData.append('email', formData.email);
      profileFormData.append('phoneNumber', formData.phoneNumber);
      profileFormData.append('address', formData.address);
      
      // Add files if present
      if (formData.profileImage) {
        profileFormData.append('profileImage', formData.profileImage);
      }
      
      if (formData.cv) {
        profileFormData.append('cv', formData.cv);
      }
      
      // Add arrays as JSON strings
      profileFormData.append('education', JSON.stringify(formData.education));
      profileFormData.append('experience', JSON.stringify(formData.experience));
      profileFormData.append('skills', JSON.stringify(formData.skills));
      profileFormData.append('socialLinks', JSON.stringify(formData.socialLinks));
      
      // Make API call to update profile
      // TODO: Replace with actual endpoint
      const response = await axios.put(
        `http://localhost:5000/api/profile/update`,
        profileFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            // Add authorization header if needed
            // 'Authorization': `Bearer ${token}`
          }
        }
      );
      
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content">
            {/* Breadcrumb */}
            <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
              <div className="my-auto mb-2">
                <h2 className="mb-1">Profile Settings</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to={routes.adminDashboard}>
                        <i className="ti ti-smart-home" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item">User</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Profile
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="head-icons ms-2">
                <CollapseHeader />
              </div>
            </div>
            {/* /Breadcrumb */}
            <ul className="nav nav-tabs nav-tabs-solid bg-transparent border-bottom mb-3">
              <li className="nav-item">
                <Link className="nav-link active" to={routes.profilesettings}>
                  <i className="ti ti-user me-2" />
                  Profile Settings
                </Link>
              </li>
            </ul>
            <div className="row">
              <div className="col-xl-3 theiaStickySidebar">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column list-group settings-list">
                      <Link
                        to="#"
                        onClick={() => setActiveTab('profile')}
                        className={`d-inline-flex align-items-center rounded ${activeTab === 'profile' ? 'active' : ''} py-2 px-3`}
                      >
                        <i className="ti ti-arrow-badge-right me-2" />
                        Profile Settings
                      </Link>
                      <Link
                        to="#"
                        onClick={() => setActiveTab('experience')}
                        className={`d-inline-flex align-items-center rounded ${activeTab === 'experience' ? 'active' : ''} py-2 px-3`}
                      >
                        <i className="ti ti-briefcase me-2" />
                        Work Experiences
                      </Link>
                      <Link
                        to="#"
                        onClick={() => setActiveTab('education')}
                        className={`d-inline-flex align-items-center rounded ${activeTab === 'education' ? 'active' : ''} py-2 px-3`}
                      >
                        <i className="ti ti-school me-2" />
                        Educations
                      </Link>
                      <Link
                        to="#"
                        onClick={() => setActiveTab('skills')}
                        className={`d-inline-flex align-items-center rounded ${activeTab === 'skills' ? 'active' : ''} py-2 px-3`}
                      >
                        <i className="ti ti-star me-2" />
                        Skills
                      </Link>
                      <Link
                        to="#"
                        onClick={() => setActiveTab('socialLinks')}
                        className={`d-inline-flex align-items-center rounded ${activeTab === 'socialLinks' ? 'active' : ''} py-2 px-3`}
                      >
                        <i className="ti ti-world me-2" />
                        Social Links
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <div className="border-bottom mb-3 pb-3">
                      <h4>
                        {activeTab === 'profile' && 'Profile Settings'}
                        {activeTab === 'experience' && 'Work Experiences'}
                        {activeTab === 'education' && 'Education History'}
                        {activeTab === 'skills' && 'Skills'}
                        {activeTab === 'socialLinks' && 'Social Links'}
                      </h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                      {/* Profile Settings */}
                      {activeTab === 'profile' && (
                        <>
                          <div className="border-bottom mb-3">
                            <div className="row">
                              <div className="col-md-12">
                                <div>
                                  <h6 className="mb-3">Basic Information</h6>
                                  <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                                    <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                                      {formData.profileImage ? (
                                        <img 
                                          src={URL.createObjectURL(formData.profileImage)} 
                                          alt="Profile" 
                                          className="rounded-circle"
                                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                      ) : (
                                        <i className="ti ti-photo text-gray-3 fs-16" />
                                      )}
                                    </div>
                                    <div className="profile-upload">
                                      <div className="mb-2">
                                        <h6 className="mb-1">Profile Photo</h6>
                                        <p className="fs-12">
                                          Recommended image size is 200px x 200px
                                        </p>
                                      </div>
                                      <div className="profile-uploader d-flex align-items-center">
                                        <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                                          Upload
                                          <input
                                            type="file"
                                            className="form-control image-sign"
                                            accept="image/*"
                                            onChange={(e) => handleFileUpload('profileImage', e)}
                                          />
                                        </div>
                                        <Link
                                          to="#"
                                          className="btn btn-light btn-sm"
                                        >
                                          Cancel
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="row align-items-center mb-3">
                                  <div className="col-md-4">
                                    <label className="form-label mb-md-0">
                                      First Name <span className="text-danger">*</span>
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input 
                                      type="text" 
                                      className="form-control" 
                                      value={formData.firstName}
                                      onChange={(e) => handleInputChange('profile', 'firstName', e.target.value)}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="row align-items-center mb-3">
                                  <div className="col-md-4">
                                    <label className="form-label mb-md-0">
                                      Last Name <span className="text-danger">*</span>
                                    </label>
                                  </div>
                                  <div className="col-md-8">
                                    <input 
                                      type="text" 
                                      className="form-control" 
                                      value={formData.lastName}
                                      onChange={(e) => handleInputChange('profile', 'lastName', e.target.value)}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="row align-items-center mb-3">
                                  <div className="col-md-4">
                                    <label className="form-label mb-md-0">Email <span className="text-danger">*</span></label>
                                  </div>
                                  <div className="col-md-8">
                                    <input 
                                      type="text" 
                                      className="form-control" 
                                      value={formData.email}
                                      onChange={(e) => handleInputChange('profile', 'email', e.target.value)}
                                      readOnly
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="row align-items-center mb-3">
                                  <div className="col-md-4">
                                    <label className="form-label mb-md-0">Phone <span className="text-danger">*</span></label>
                                  </div>
                                  <div className="col-md-8">
                                    <PhoneInput
                                      country={'tn'}
                                      value={formData.phoneNumber}
                                      onChange={handlePhoneChange}
                                      inputClass="form-control"
                                      containerClass="phone-input-container"
                                      specialLabel=""
                                      countryCodeEditable={false}
                                      preferredCountries={['tn']}
                                      enableSearch={true}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-bottom mb-3">
                            <h6 className="mb-3">Address Information</h6>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="row align-items-center mb-3">
                                  <div className="col-md-2">
                                    <label className="form-label mb-md-0">Address <span className="text-danger">*</span></label>
                                  </div>
                                  <div className="col-md-10">
                                    <input 
                                      type="text" 
                                      className="form-control" 
                                      value={formData.address}
                                      onChange={(e) => handleInputChange('profile', 'address', e.target.value)}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <h6 className="mb-3">Resume/CV</h6>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="file"
                                    className="form-control"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => handleFileUpload('cv', e)}
                                  />
                                  <small className="form-text text-muted">
                                    Upload your latest CV (PDF or Word format)
                                  </small>
                                </div>
                              </div>
                            </div>
                            
                            {/* CV Display Section */}
                            {(formData.cv || (userData?.profile?.cv && userData.profile.cv.length > 0)) && (
                              <div className="row mt-3">
                                <div className="col-md-12">
                                  <div className="card">
                                    <div className="card-header">
                                      <h6 className="mb-0">Current CV</h6>
                                    </div>
                                    <div className="card-body p-0">
                                      {formData.cv ? (
                                        // For newly uploaded file (not yet saved)
                                        <div className="pdf-container">
                                          {formData.cv.type === 'application/pdf' ? (
                                            <iframe
                                              src={URL.createObjectURL(formData.cv)}
                                              width="100%"
                                              height="500px"
                                              style={{ border: 'none' }}
                                              title="CV Preview"
                                            />
                                          ) : (
                                            <div className="document-preview p-3 text-center">
                                              <i className="ti ti-file-text fs-4 mb-2 d-block"></i>
                                              <p>
                                                {formData.cv.name}
                                                <br />
                                                <small className="text-muted">
                                                  (Preview not available for this file type)
                                                </small>
                                              </p>
                                              <a 
                                                href={URL.createObjectURL(formData.cv)} 
                                                className="btn btn-sm btn-primary"
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                              >
                                                Download
                                              </a>
                                            </div>
                                          )}
                                        </div>
                                      ) : userData?.profile?.cv ? (
                                        // For existing file from backend
                                        <div className="pdf-container">
                                          {userData.profile.cv.endsWith('.pdf') ? (
                                            <iframe
                                              src={userData.profile.cv}
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
                                                href={userData.profile.cv} 
                                                className="btn btn-sm btn-primary"
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                              >
                                                Download
                                              </a>
                                            </div>
                                          )}
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </>
                      )}

                      {/* Work Experiences */}
                      {activeTab === 'experience' && (
                        <div className="row">
                          {formData.experience.map((exp, index) => (
                            <div key={exp.id} className="col-12 mb-4 border-bottom pb-3">
                              <div className="position-relative">
                                {formData.experience.length > 1 && (
                                  <button 
                                    type="button" 
                                    className="btn btn-sm btn-danger position-absolute top-0 end-0"
                                    onClick={() => handleRemoveItem('experience', index)}
                                  >
                                    <i className="ti ti-trash"></i>
                                  </button>
                                )}
                                <h5 className="mb-3">Experience #{index + 1}</h5>
                                <div className="row">
                                  <div className="col-md-6 mb-3">
                                    <label className="form-label">Position <span className="text-danger">*</span></label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={exp.position}
                                      onChange={(e) => handleInputChange('experience', 'position', e.target.value, index)}
                                    />
                                  </div>
                                  <div className="col-md-6 mb-3">
                                    <label className="form-label">Enterprise <span className="text-danger">*</span></label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={exp.enterprise}
                                      onChange={(e) => handleInputChange('experience', 'enterprise', e.target.value, index)}
                                    />
                                  </div>
                                  <div className="col-md-6 mb-3">
                                    <label className="form-label">Start Date <span className="text-danger">*</span></label>
                                    <input
                                      type="date"
                                      className="form-control"
                                      value={exp.startDate}
                                      onChange={(e) => handleInputChange('experience', 'startDate', e.target.value, index)}
                                    />
                                  </div>
                                  <div className="col-md-6 mb-3">
                                    <label className="form-label">End Date <span className="text-danger">*</span></label>
                                    <input
                                      type="date"
                                      className="form-control"
                                      value={exp.endDate}
                                      onChange={(e) => handleInputChange('experience', 'endDate', e.target.value, index)}
                                    />
                                  </div>
                                  <div className="col-md-12 mb-3">
                                    <label className="form-label">Description <span className="text-danger">*</span></label>
                                    <textarea
                                      className="form-control"
                                      rows={3}
                                      value={exp.description}
                                      onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)}
                                    ></textarea>
                                  </div>
                                  <div className="col-md-12 mb-3">
                                    <label className="form-label">Location <span className="text-danger">*</span></label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={exp.location}
                                      onChange={(e) => handleInputChange('experience', 'location', e.target.value, index)}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                          <div className="col-12">
                            <button 
                              type="button" 
                              className="btn btn-primary"
                              onClick={() => addArrayItem('experience')}
                            >
                              <i className="ti ti-plus me-1"></i> Add Experience
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Education */}
                      {activeTab === 'education' && (
                        <div className="row">
                          {formData.education.map((edu, index) => (
                            <div key={edu.id} className="col-12 mb-4 border-bottom pb-3">
                              <div className="position-relative">
                                {formData.education.length > 1 && (
                                  <button 
                                    type="button" 
                                    className="btn btn-sm btn-danger position-absolute top-0 end-0"
                                    onClick={() => handleRemoveItem('education', index)}
                                  >
                                    <i className="ti ti-trash"></i>
                                  </button>
                                )}
                                <h5 className="mb-3">Education #{index + 1}</h5>
                                <div className="row">
                                  <div className="col-md-6 mb-3">
                                    <label className="form-label">Institution <span className="text-danger">*</span></label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={edu.institution}
                                      onChange={(e) => handleInputChange('education', 'institution', e.target.value, index)}
                                    />
                                  </div>
                                  <div className="col-md-6 mb-3">
                                    <label className="form-label">Diploma <span className="text-danger">*</span></label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={edu.diploma}
                                      onChange={(e) => handleInputChange('education', 'diploma', e.target.value, index)}
                                    />
                                  </div>
                                  <div className="col-md-6 mb-3">
                                    <label className="form-label">Start Date <span className="text-danger">*</span></label>
                                    <input
                                      type="date"
                                      className="form-control"
                                      value={edu.startDate}
                                      onChange={(e) => handleInputChange('education', 'startDate', e.target.value, index)}
                                    />
                                  </div>
                                  <div className="col-md-6 mb-3">
                                    <label className="form-label">End Date <span className="text-danger">*</span></label>
                                    <input
                                      type="date"
                                      className="form-control"
                                      value={edu.endDate}
                                      onChange={(e) => handleInputChange('education', 'endDate', e.target.value, index)}
                                    />
                                  </div>
                                  <div className="col-md-12 mb-3">
                                    <label className="form-label">Description <span className="text-danger">*</span></label>
                                    <textarea
                                      className="form-control"
                                      rows={3}
                                      value={edu.description}
                                      onChange={(e) => handleInputChange('education', 'description', e.target.value, index)}
                                    ></textarea>
                                  </div>
                                  <div className="col-md-12 mb-3">
                                    <label className="form-label">Location <span className="text-danger">*</span></label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={edu.location}
                                      onChange={(e) => handleInputChange('education', 'location', e.target.value, index)}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                          <div className="col-12">
                            <button 
                              type="button" 
                              className="btn btn-primary"
                              onClick={() => addArrayItem('education')}
                            >
                              <i className="ti ti-plus me-1"></i> Add Education
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Skills */}
                      {activeTab === 'skills' && (
                        <div className="row">
                          {formData.skills.map((skill, index) => (
                            <div key={skill.id} className="col-12 mb-3">
                              <div className="row position-relative">
                                {formData.skills.length > 1 && (
                                  <div className="col-auto">
                                    <button 
                                      type="button" 
                                      className="btn btn-sm btn-danger"
                                      onClick={() => handleRemoveItem('skills', index)}
                                    >
                                      <i className="ti ti-trash"></i>
                                    </button>
                                  </div>
                                )}
                                <div className="col-md-5">
                                  <label className="form-label">Skill Name <span className="text-danger">*</span></label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={skill.name}
                                    onChange={(e) => handleInputChange('skills', 'name', e.target.value, index)}
                                  />
                                </div>
                                <div className="col-md-5">
                                  <label className="form-label">Proficiency Level <span className="text-danger">*</span></label>
                                  <select
                                    className="form-control"
                                    value={skill.degree}
                                    onChange={(e) => handleInputChange('skills', 'degree', e.target.value, index)}
                                  >
                                    <option value="NOVICE">Novice</option>
                                    <option value="BEGINNER">Beginner</option>
                                    <option value="INTERMEDIATE">Intermediate</option>
                                    <option value="ADVANCED">Advanced</option>
                                    <option value="EXPERT">Expert</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          ))}
                          <div className="col-12 mt-3">
                            <button 
                              type="button" 
                              className="btn btn-primary"
                              onClick={() => addArrayItem('skills')}
                            >
                              <i className="ti ti-plus me-1"></i> Add Skill
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Social Links */}
                      {activeTab === 'socialLinks' && (
                        <div className="row">
                          {formData.socialLinks.map((link, index) => (
                            <div key={link.id} className="col-12 mb-3">
                              <div className="row position-relative">
                                {index > 1 && (
                                  <div className="col-auto">
                                    <button 
                                      type="button" 
                                      className="btn btn-sm btn-danger"
                                      onClick={() => handleRemoveItem('socialLinks', index)}
                                    >
                                      <i className="ti ti-trash"></i>
                                    </button>
                                  </div>
                                )}
                                <div className="col-md-5">
                                  <label className="form-label">Platform</label>
                                  <select
                                    className="form-control"
                                    value={link.type}
                                    onChange={(e) => handleInputChange('socialLinks', 'type', e.target.value, index)}
                                    disabled={index < 2} // Don't allow changing LinkedIn and GitHub types
                                  >
                                    {Object.values(Socials).map(platform => (
                                      <option key={platform} value={platform}>{platform}</option>
                                    ))}
                                  </select>
                                </div>
                                <div className="col-md-5">
                                  <label className="form-label">Link</label>
                                  <input
                                    type="url"
                                    className="form-control"
                                    value={link.link}
                                    onChange={(e) => handleInputChange('socialLinks', 'link', e.target.value, index)}
                                    placeholder={index === 0 ? "https://linkedin.com/in/your-profile" : 
                                              index === 1 ? "https://github.com/your-username" : "https://"}
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                          <div className="col-12 mt-3">
                            <button 
                              type="button" 
                              className="btn btn-primary"
                              onClick={() => addArrayItem('socialLinks')}
                            >
                              <i className="ti ti-plus me-1"></i> Add Social Link
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Submit Buttons */}
                      <div className="d-flex align-items-center justify-content-end mt-4">
                        <button
                          type="button"
                          className="btn btn-outline-light border me-3"
                        >
                          Cancel
                        </button>
                        <button 
                          type="submit" 
                          className="btn btn-primary"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Saving...
                            </>
                          ) : 'Save Changes'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
            <p className="mb-0">2014 - 2025 © SmartHR.</p>
            <p>
              Designed &amp; Developed By{" "}
              <Link to="#" className="text-primary">
                Dreams
              </Link>
            </p>
          </div>
        </div>
        {/* /Page Wrapper */}
      </>

    </div>
  )
}


export default Profilesettings;
