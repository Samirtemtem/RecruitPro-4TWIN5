import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../routing-module/router/all_routes";
import CommonSelect from "../../core/common/commonSelect";
import CollapseHeader from "../../core/common/collapse-header/collapse-header";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-hot-toast';
import { Role, Socials } from '../../models/types';
import { SkillDegree } from '../../models/Skill';
import * as Yup from 'yup';
import axios from 'axios';

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
  // User fields
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: Role;
  createDate?: Date;
  lastLogin?: Date;
  image?: File;
  
  // Profile fields
  address: string;
  profileImage?: File;
  cv?: File;
  education: EducationFormData[];
  experience: ExperienceFormData[];
  skills: SkillFormData[];
  socialLinks: SocialLinkFormData[];
}

// Validation Schemas
const personalInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must not exceed 50 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must not exceed 50 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^[23457][0-9]{7}$/, 'Please enter a valid Tunisian phone number'),
  address: Yup.string()
    .required('Address is required')
    .min(5, 'Address must be at least 5 characters')
});

const professionalInfoSchema = Yup.object().shape({
  cv: Yup.mixed()
    .test('fileType', 'Only PDF and Word documents are allowed', (value) => {
      if (!value) return true;
      const file = value as File;
      return ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
        .includes(file.type);
    })
    .test('fileSize', 'File size must be less than 5MB', (value) => {
      if (!value) return true;
      const file = value as File;
      return file.size <= 5 * 1024 * 1024;
    }),
  profileImage: Yup.mixed()
    .test('fileType', 'Only image files are allowed', (value) => {
      if (!value) return true;
      const file = value as File;
      return file.type.startsWith('image/');
    })
    .test('fileSize', 'File size must be less than 5MB', (value) => {
      if (!value) return true;
      const file = value as File;
      return file.size <= 5 * 1024 * 1024;
    }),
  socialLinks: Yup.array().of(
    Yup.object().shape({
      type: Yup.string()
        .required('Platform is required')
        .oneOf(Object.values(Socials), 'Invalid platform'),
      link: Yup.string()
        .url('Please enter a valid URL')
        .test('validPlatformUrl', 'Invalid platform URL', function (value) {
          if (!value) return true;
          const platform = this.parent.type;
          if (platform === Socials.LINKEDIN) return value.includes('linkedin.com');
          if (platform === Socials.GITHUB) return value.includes('github.com');
          return true;
        })
    })
  ).notRequired()
});

const educationSchema = Yup.array().of(
  Yup.object().shape({
    institution: Yup.string().required('Institution is required'),
    diploma: Yup.string().required('Diploma is required'),
    startDate: Yup.string().required('Start date is required'),
    endDate: Yup.string()
      .required('End date is required')
      .test('dateOrder', 'End date must be after start date', function (value) {
        const { startDate } = this.parent;
        if (!startDate || !value) return true;
        return new Date(startDate) <= new Date(value);
      }),
    description: Yup.string().required('Description is required'),
    location: Yup.string().required('Location is required')
  })
);

const experienceSchema = Yup.array().of(
  Yup.object().shape({
    position: Yup.string().required('Position is required'),
    enterprise: Yup.string().required('Enterprise is required'),
    startDate: Yup.string().required('Start date is required'),
    endDate: Yup.string()
      .required('End date is required')
      .test('dateOrder', 'End date must be after start date', function (value) {
        const { startDate } = this.parent;
        if (!startDate || !value) return true;
        return new Date(startDate) <= new Date(value);
      }),
    description: Yup.string().required('Description is required'),
    location: Yup.string().required('Location is required')
  })
);

const skillsSchema = Yup.array().of(
  Yup.object().shape({
    name: Yup.string().required('Skill name is required'),
    degree: Yup.string()
      .required('Proficiency level is required')
      .oneOf(['NOVICE', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'], 'Invalid proficiency level')
  })
);

const RequiredLabel: React.FC<{ text: string }> = ({ text }) => (
  <label className="form-label">
    {text} <span className="text-danger">*</span>
  </label>
);

// Add these type definitions after the imports
type FormSection = 'education' | 'experience' | 'skills' | 'socialLinks';
type FormField = keyof FormData;

const Profile = () => {
  const route = all_routes;
  const [isLoading, setIsLoading] = useState(false);
  const [formFeedback, setFormFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [errors, setErrors] = useState<{[key: string]: string | null}>({});

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    role: Role.CANDIDATE,
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
    // Fetch user profile data and populate the form
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const hardcodedEmail = "dzadza@za.daz"; // TODO: Replace with actual user email from auth
        const { data } = await axios.get(`http://localhost:5000/api/auth/user/${hardcodedEmail}`);
        
        const userData = data.user;

        // Helper function to format date from ISO to YYYY-MM-DD
        const formatDate = (isoDate: string) => {
          if (!isoDate) return '';
          return new Date(isoDate).toISOString().split('T')[0];
        };

        // Update form data with user data
        setFormData(prev => ({
          ...prev,
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
          email: userData.email || '',
          phoneNumber: userData.phoneNumber || '',
          role: userData.role || Role.CANDIDATE,
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
        }));
      } catch (error) {
        console.error('Error fetching profile:', error);
        toast.error('Failed to load profile data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (section: FormSection | 'personal', field: string, value: any, index?: number) => {
    setFormData(prev => {
      const newState = { ...prev };

      if (index !== undefined && (section === 'education' || section === 'experience' || section === 'skills' || section === 'socialLinks')) {
        const array = [...prev[section]];
        if (index === array.length) {
          // Add new item based on section type
          let newItem;
          switch (section) {
            case 'education':
              newItem = {
                id: crypto.randomUUID(),
                institution: '',
                diploma: '',
                startDate: '',
                endDate: '',
                description: '',
                location: ''
              } as EducationFormData;
              break;
            case 'experience':
              newItem = {
                id: crypto.randomUUID(),
                position: '',
                enterprise: '',
                startDate: '',
                endDate: '',
                description: '',
                location: ''
              } as ExperienceFormData;
              break;
            case 'skills':
              newItem = {
                id: crypto.randomUUID(),
                name: '',
                degree: 'NOVICE' as SkillDegree
              } as SkillFormData;
              break;
            case 'socialLinks':
              newItem = {
                id: crypto.randomUUID(),
                type: Socials.PORTFOLIO,
                link: ''
              } as SocialLinkFormData;
              break;
          }
          array.push({ ...newItem, [field]: value });
        } else {
          // Update existing item
          array[index] = { ...array[index], [field]: value };
        }
        return {
          ...prev,
          [section]: array
        };
      } else {
        return {
          ...prev,
          [field as FormField]: value
        };
      }
    });
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      phoneNumber: value
    }));
  };

  const handleFileUpload = (field: 'profileImage' | 'cv', file: File) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleRemoveItem = (section: FormSection, index: number) => {
    setFormData(prev => {
      const newData = { ...prev };
      switch (section) {
        case 'education':
          newData.education = prev.education.filter((_, i) => i !== index);
          break;
        case 'experience':
          newData.experience = prev.experience.filter((_, i) => i !== index);
          break;
        case 'skills':
          newData.skills = prev.skills.filter((_, i) => i !== index);
          break;
        case 'socialLinks':
          newData.socialLinks = prev.socialLinks.filter((_, i) => i !== index);
          break;
      }
      return newData;
    });
  };

  const addArrayItem = (section: FormSection) => {
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
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      
      // Validate all sections
      await Promise.all([
        personalInfoSchema.validate(formData, { abortEarly: false }),
        professionalInfoSchema.validate(
          { cv: formData.cv, profileImage: formData.profileImage, socialLinks: formData.socialLinks },
          { abortEarly: false }
        ),
        educationSchema.validate(formData.education, { abortEarly: false }),
        experienceSchema.validate(formData.experience, { abortEarly: false }),
        skillsSchema.validate(formData.skills, { abortEarly: false })
      ]);

      // TODO: Submit profile update
      // const response = await updateProfile(formData);
      
      setFormFeedback({
        type: 'success',
        message: 'Profile updated successfully!'
      });
      
      toast.success('Profile updated successfully!');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors: {[key: string]: string} = {};
        error.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
        });
        setErrors(newErrors);
      }
      
      setFormFeedback({
        type: 'error',
        message: 'Failed to update profile. Please check the form for errors.'
      });
      
      toast.error('Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div className="page-wrapper">
      <div className="content container-fluid">
          {/* Breadcrumb */}
        <div className="page-header">
          <div className="row">
            <div className="col">
              <h3 className="page-title">Profile</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active">Profile</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="row">
          <div className="col-md-12">
          <div className="card">
            <div className="card-body">
                {formFeedback && (
                  <div className={`alert alert-${formFeedback.type}`}>
                    {formFeedback.message}
              </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Basic Information */}
                  <div className="form-group">
                    <h4 className="card-title">Basic Information</h4>
                  <div className="row">
                      {/* Profile Image Upload */}
                      <div className="col-md-12 mb-4">
                        <div className="profile-img-wrap">
                          <div className="profile-img">
                            {formData.profileImage ? (
                              <img src={URL.createObjectURL(formData.profileImage)} alt="Profile" />
                            ) : (
                              <div className="avatar-placeholder">
                                <i className="fa fa-user"></i>
                              </div>
                            )}
                          </div>
                          <div className="fileupload btn">
                            <span className="btn-text">Change Profile</span>
                                <input
                              className="upload" 
                                  type="file"
                              accept="image/*"
                              onChange={(e) => e.target.files && handleFileUpload('profileImage', e.target.files[0])}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Personal Information */}
                    <div className="col-md-6">
                        <div className="form-group">
                          <RequiredLabel text="First Name" />
                          <input
                            type="text"
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('personal', 'firstName', e.target.value)}
                          />
                          {errors.firstName && (
                            <div className="invalid-feedback">{errors.firstName}</div>
                          )}
                        </div>
                      </div>

                    <div className="col-md-6">
                        <div className="form-group">
                          <RequiredLabel text="Last Name" />
                          <input
                            type="text"
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('personal', 'lastName', e.target.value)}
                          />
                          {errors.lastName && (
                            <div className="invalid-feedback">{errors.lastName}</div>
                          )}
                        </div>
                      </div>

                    <div className="col-md-6">
                        <div className="form-group">
                          <RequiredLabel text="Email" />
                          <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            value={formData.email}
                            onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                          />
                          {errors.email && (
                            <div className="invalid-feedback">{errors.email}</div>
                          )}
                        </div>
                      </div>

                    <div className="col-md-6">
                        <div className="form-group">
                          <RequiredLabel text="Phone Number" />
                          <PhoneInput
                            country={'tn'}
                            value={formData.phoneNumber}
                            onChange={handlePhoneChange}
                            inputClass={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                            containerClass="phone-input-container"
                            specialLabel=""
                            countryCodeEditable={false}
                            preferredCountries={['tn']}
                            enableSearch={true}
                          />
                          {errors.phoneNumber && (
                            <div className="invalid-feedback d-block">{errors.phoneNumber}</div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <RequiredLabel text="Address" />
                          <input
                            type="text"
                            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                            value={formData.address}
                            onChange={(e) => handleInputChange('personal', 'address', e.target.value)}
                          />
                          {errors.address && (
                            <div className="invalid-feedback">{errors.address}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="form-group mt-4">
                    <h4 className="card-title">Professional Information</h4>
                  <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                          <label>CV</label>
                          <input
                            type="file"
                            className={`form-control ${errors.cv ? 'is-invalid' : ''}`}
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => e.target.files && handleFileUpload('cv', e.target.files[0])}
                          />
                          {errors.cv && (
                            <div className="invalid-feedback">{errors.cv}</div>
                          )}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="col-md-12">
                        <h5 className="card-title">Social Links</h5>
                        {formData.socialLinks.map((link, index) => (
                          <div key={link.id} className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Platform</label>
                                <select
                                  className="form-control"
                                  value={link.type}
                                  onChange={(e) => handleInputChange('socialLinks', 'type', e.target.value, index)}
                                >
                                  {Object.values(Socials).map(platform => (
                                    <option key={platform} value={platform}>{platform}</option>
                                  ))}
                                </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                              <div className="form-group">
                                <label>Link</label>
                                <input
                                  type="url"
                                  className="form-control"
                                  value={link.link}
                                  onChange={(e) => handleInputChange('socialLinks', 'link', e.target.value, index)}
                                  placeholder="https://"
                          />
                        </div>
                            </div>
                          </div>
                        ))}
                        <button
                          type="button"
                          className="btn btn-primary mt-2"
                          onClick={() => addArrayItem('socialLinks')}
                        >
                          Add Social Link
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="form-group mt-4">
                    <h4 className="card-title">Education</h4>
                    {formData.education.map((edu, index) => (
                      <div key={edu.id} className="row position-relative mb-3">
                        <div className="remove-btn" onClick={() => handleRemoveItem('education', index)}>
                          <i className="fas fa-times"></i>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <RequiredLabel text="Institution" />
                            <input
                              type="text"
                              className="form-control"
                              value={edu.institution}
                              onChange={(e) => handleInputChange('education', 'institution', e.target.value, index)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <RequiredLabel text="Diploma" />
                            <input
                              type="text"
                              className="form-control"
                              value={edu.diploma}
                              onChange={(e) => handleInputChange('education', 'diploma', e.target.value, index)}
                            />
                      </div>
                    </div>
                    <div className="col-md-6">
                          <div className="form-group">
                            <RequiredLabel text="Start Date" />
                            <input
                              type="date"
                              className="form-control"
                              value={edu.startDate}
                              onChange={(e) => handleInputChange('education', 'startDate', e.target.value, index)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <RequiredLabel text="End Date" />
                            <input
                              type="date"
                              className="form-control"
                              value={edu.endDate}
                              onChange={(e) => handleInputChange('education', 'endDate', e.target.value, index)}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <RequiredLabel text="Description" />
                            <textarea
                              className="form-control"
                              value={edu.description}
                              onChange={(e) => handleInputChange('education', 'description', e.target.value, index)}
                            />
                    </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <RequiredLabel text="Location" />
                            <input
                              type="text"
                              className="form-control"
                              value={edu.location}
                              onChange={(e) => handleInputChange('education', 'location', e.target.value, index)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => addArrayItem('education')}
                    >
                      Add Education
                    </button>
                  </div>

                  {/* Experience */}
                  <div className="form-group mt-4">
                    <h4 className="card-title">Work Experience</h4>
                    {formData.experience.map((exp, index) => (
                      <div key={exp.id} className="row position-relative mb-3">
                        <div className="remove-btn" onClick={() => handleRemoveItem('experience', index)}>
                          <i className="fas fa-times"></i>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <RequiredLabel text="Position" />
                            <input
                              type="text"
                              className="form-control"
                              value={exp.position}
                              onChange={(e) => handleInputChange('experience', 'position', e.target.value, index)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <RequiredLabel text="Enterprise" />
                            <input
                              type="text"
                              className="form-control"
                              value={exp.enterprise}
                              onChange={(e) => handleInputChange('experience', 'enterprise', e.target.value, index)}
                            />
                </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <RequiredLabel text="Start Date" />
                            <input
                              type="date"
                              className="form-control"
                              value={exp.startDate}
                              onChange={(e) => handleInputChange('experience', 'startDate', e.target.value, index)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <RequiredLabel text="End Date" />
                            <input
                              type="date"
                              className="form-control"
                              value={exp.endDate}
                              onChange={(e) => handleInputChange('experience', 'endDate', e.target.value, index)}
                            />
                      </div>
                    </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <RequiredLabel text="Description" />
                            <textarea
                              className="form-control"
                              value={exp.description}
                              onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <RequiredLabel text="Location" />
                            <input
                              type="text"
                              className="form-control"
                              value={exp.location}
                              onChange={(e) => handleInputChange('experience', 'location', e.target.value, index)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => addArrayItem('experience')}
                    >
                      Add Experience
                    </button>
                    </div>

                  {/* Skills */}
                  <div className="form-group mt-4">
                    <h4 className="card-title">Skills</h4>
                    {formData.skills.map((skill, index) => (
                      <div key={skill.id} className="row position-relative mb-3">
                        <div className="remove-btn" onClick={() => handleRemoveItem('skills', index)}>
                          <i className="fas fa-times"></i>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <RequiredLabel text="Skill Name" />
                            <input
                              type="text"
                              className="form-control"
                              value={skill.name}
                              onChange={(e) => handleInputChange('skills', 'name', e.target.value, index)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <RequiredLabel text="Proficiency Level" />
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
                  <button
                    type="button"
                      className="btn btn-primary"
                      onClick={() => addArrayItem('skills')}
                  >
                      Add Skill
                  </button>
                </div>

                  {/* Submit Buttons */}
                  <div className="form-group mt-4">
                    <button type="submit" className="btn btn-primary me-2" disabled={isLoading}>
                      {isLoading ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button type="button" className="btn btn-secondary">Cancel</button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
