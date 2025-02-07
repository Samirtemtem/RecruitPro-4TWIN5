import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register-wizard.scss';
import ImageWithBasePath from '../core/common/imageWithBasePath';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

type FormSection = 'personal' | 'professional' | 'educationHistory' | 'workExperience' | 'skills' | 'terms';

interface Education {
  id: number;
  institution: string;
  diploma: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

interface Experience {
  id: number;
  position: string;
  enterprise: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

interface Skill {
  id: number;
  name: string;
  degree: SkillDegree;
}

type SkillDegree = 'NOVICE' | 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';

interface SocialLink {
  id: number;
  platform: 'LINKEDIN' | 'GITHUB' | 'PORTFOLIO' | 'OTHER';
  link: string;
}

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  address: string;
  profileImage: File | null;
  cv: File | null;

  // Professional Information
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  socialLinks: SocialLink[];

  // Terms
  agreeToTerms: boolean;
}

const RequiredLabel: React.FC<{ text: string }> = ({ text }) => (
  <label className="form-label">
    {text} <span className="text-danger">*</span>
  </label>
);

const RegisterWizard = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
    profileImage: null,
    cv: null,
    education: [{
      id: 0,
      institution: '',
      diploma: '',
      startDate: '',
      endDate: '',
      description: '',
      location: ''
    }],
    experience: [{
      id: 0,
      position: '',
      enterprise: '',
      startDate: '',
      endDate: '',
      description: '',
      location: ''
    }],
    skills: [{
      id: 0,
      name: '',
      degree: 'NOVICE'
    }],
    socialLinks: [
      {
        id: 1,
        platform: 'LINKEDIN',
        link: ''
      },
      {
        id: 2,
        platform: 'GITHUB',
        link: ''
      }
    ],
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<{
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    password?: string | null;
    confirmPassword?: string | null;
    phoneNumber?: string | null;
    address?: string | null;
    cv?: string | null;
    education?: (string | null)[];
    educationFields?: { 
      [key: number]: { 
        institution?: string | null; 
        diploma?: string | null; 
        startDate?: string | null; 
        endDate?: string | null;
        description?: string | null;
        location?: string | null;
      } 
    };
    experience?: (string | null)[];
    experienceFields?: { 
      [key: number]: { 
        position?: string | null; 
        enterprise?: string | null; 
        startDate?: string | null; 
        endDate?: string | null;
        description?: string | null;
        location?: string | null;
      } 
    };
    skills?: (string | null)[];
    socialLinks?: (string | null)[];
    terms?: string | null;
  }>({});

  const [isLoading, setIsLoading] = useState(false);
  const [formFeedback, setFormFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleInputChange = (section: FormSection, field: string, value: any, index?: number) => {
    setFormData(prev => {
      let newState = { ...prev };

      switch (section) {
        case 'personal':
          newState = { ...prev, [field]: value };
          break;

        case 'professional':
          if (field === 'socialLinks' && typeof index === 'number') {
            const newLinks = [...prev.socialLinks];
            if (index === 0) { // Add new link
              newLinks.push({ id: prev.socialLinks.length + 1, platform: 'OTHER', link: '' });
            } else {
              // Determine if we're updating the platform or the link
              const linkIndex = index - 1;
              if (field.includes('platform')) {
                newLinks[linkIndex] = { ...newLinks[linkIndex], platform: value };
              } else {
                newLinks[linkIndex] = { ...newLinks[linkIndex], link: value };
              }
            }
            newState = { ...prev, socialLinks: newLinks };
          } else {
            newState = { ...prev, [field]: value };
          }
          break;

        case 'educationHistory':
          if (typeof index === 'number') {
            const newEducation = [...prev.education];
            if (index === newEducation.length) {
              // Adding new education entry
              newEducation.push({
                id: prev.education.length + 1,
                institution: '',
                diploma: '',
                startDate: '',
                endDate: '',
                description: '',
                location: ''
              });
            } else {
              // Updating existing education entry
              newEducation[index] = {
                ...newEducation[index],
                [field]: value
              };
            }
            newState = { ...prev, education: newEducation };
          }
          break;

        case 'workExperience':
          if (typeof index === 'number') {
            const newExperience = [...prev.experience];
            if (index === newExperience.length) {
              // Adding new experience entry
              newExperience.push({
                id: prev.experience.length + 1,
                position: '',
                enterprise: '',
                startDate: '',
                endDate: '',
                description: '',
                location: ''
              });
            } else {
              // Updating existing experience entry
              newExperience[index] = {
                ...newExperience[index],
                [field]: value
              };
            }
            newState = { ...prev, experience: newExperience };
          }
          break;

        case 'skills':
          if (typeof index === 'number') {
            const newSkills = [...prev.skills];
            if (index === newSkills.length) {
              // Adding new skill entry
              newSkills.push({
                id: prev.skills.length + 1,
                name: '',
                degree: 'NOVICE'
              });
            } else {
              // Updating existing skill entry
              newSkills[index] = {
                ...newSkills[index],
                [field]: value
              };
            }
            newState = { ...prev, skills: newSkills };
          }
          break;

        case 'terms':
          newState = { ...prev, agreeToTerms: value };
          break;
      }

      // Validate the changed field immediately
      const newErrors = { ...errors };

      // Field validation
      switch (field) {
        case 'firstName':
        case 'lastName':
          if (!value.trim()) {
            newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
          } else {
            newErrors[field] = null;
          }
          break;

        case 'email':
          if (!value || !validateEmail(value)) {
            newErrors.email = 'Valid email is required';
          } else {
            newErrors.email = null;
          }
          break;

        case 'password':
          if (!value) {
            newErrors.password = 'Password is required';
          } else if (!validatePassword(value)) {
            newErrors.password = 'Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number';
          } else {
            newErrors.password = null;
          }
          if (prev.confirmPassword && value !== prev.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
          } else if (prev.confirmPassword) {
            newErrors.confirmPassword = null;
          }
          break;

        case 'confirmPassword':
          if (!value) {
            newErrors.confirmPassword = 'Please confirm your password';
          } else if (value !== prev.password) {
            newErrors.confirmPassword = 'Passwords do not match';
          } else {
            newErrors.confirmPassword = null;
          }
          break;

        case 'address':
          if (!value.trim()) {
            newErrors.address = 'Address is required';
          } else {
            newErrors.address = null;
          }
          break;
        case 'cv':
          if (!value) {
            newErrors.cv = 'CV is required';
          } else {
            newErrors.cv = null;
          }
          break;
      }

      // Array field validation
      if (index !== undefined) {
        switch (section) {
          case 'educationHistory':
            if (!newErrors.education) newErrors.education = [];
            const educationEntry = newState.education[index];
            
            // Initialize field-specific errors object if not exists
            if (!newErrors.educationFields) newErrors.educationFields = [];
            if (!newErrors.educationFields[index]) newErrors.educationFields[index] = {};
            
            // Validate each field individually
            if (!educationEntry.institution.trim()) {
              newErrors.educationFields[index].institution = 'Institution is required';
            } else {
              newErrors.educationFields[index].institution = null;
            }
            
            if (!educationEntry.diploma.trim()) {
              newErrors.educationFields[index].diploma = 'Diploma is required';
            } else {
              newErrors.educationFields[index].diploma = null;
            }
            
            if (!educationEntry.startDate) {
              newErrors.educationFields[index].startDate = 'Start date is required';
            } else {
              newErrors.educationFields[index].startDate = null;
            }
            
            if (!educationEntry.endDate) {
              newErrors.educationFields[index].endDate = 'End date is required';
            } else if (educationEntry.startDate && educationEntry.endDate &&
              new Date(educationEntry.startDate) > new Date(educationEntry.endDate)) {
              newErrors.educationFields[index].endDate = 'End date must be after start date';
            } else {
              newErrors.educationFields[index].endDate = null;
            }
            
            if (!educationEntry.description.trim()) {
              newErrors.educationFields[index].description = 'Description is required';
            } else {
              newErrors.educationFields[index].description = null;
            }
            
            if (!educationEntry.location.trim()) {
              newErrors.educationFields[index].location = 'Location is required';
            } else {
              newErrors.educationFields[index].location = null;
            }
            
            // Set overall education error state
            if (Object.values(newErrors.educationFields[index]).some(error => error !== null)) {
              newErrors.education[index] = 'Please fix the errors below';
            } else {
              newErrors.education[index] = null;
              if (newErrors.education.every(e => e === null)) {
                delete newErrors.education;
              }
            }
            break;

          case 'workExperience':
            if (!newErrors.experience) newErrors.experience = [];
            const experienceEntry = newState.experience[index];
            
            // Initialize field-specific errors object if not exists
            if (!newErrors.experienceFields) newErrors.experienceFields = [];
            if (!newErrors.experienceFields[index]) newErrors.experienceFields[index] = {};
            
            // Validate each field individually
            if (!experienceEntry.position.trim()) {
              newErrors.experienceFields[index].position = 'Position is required';
            } else {
              newErrors.experienceFields[index].position = null;
            }
            
            if (!experienceEntry.enterprise.trim()) {
              newErrors.experienceFields[index].enterprise = 'Enterprise is required';
            } else {
              newErrors.experienceFields[index].enterprise = null;
            }
            
            if (!experienceEntry.startDate) {
              newErrors.experienceFields[index].startDate = 'Start date is required';
            } else {
              newErrors.experienceFields[index].startDate = null;
            }
            
            if (!experienceEntry.endDate) {
              newErrors.experienceFields[index].endDate = 'End date is required';
            } else if (experienceEntry.startDate && experienceEntry.endDate &&
              new Date(experienceEntry.startDate) > new Date(experienceEntry.endDate)) {
              newErrors.experienceFields[index].endDate = 'End date must be after start date';
            } else {
              newErrors.experienceFields[index].endDate = null;
            }
            
            if (!experienceEntry.description.trim()) {
              newErrors.experienceFields[index].description = 'Description is required';
            } else {
              newErrors.experienceFields[index].description = null;
            }
            
            if (!experienceEntry.location.trim()) {
              newErrors.experienceFields[index].location = 'Location is required';
            } else {
              newErrors.experienceFields[index].location = null;
            }
            
            // Set overall experience error state
            if (Object.values(newErrors.experienceFields[index]).some(error => error !== null)) {
              newErrors.experience[index] = 'Please fix the errors below';
            } else {
              newErrors.experience[index] = null;
              if (newErrors.experience.every(e => e === null)) {
                delete newErrors.experience;
              }
            }
            break;

          case 'skills':
            if (!newErrors.skills) newErrors.skills = [];
            if (!newState.skills[index].name.trim() || !newState.skills[index].degree) {
              newErrors.skills[index] = 'Skill name and degree are required';
            } else {
              newErrors.skills[index] = null;
              if (newErrors.skills.every(e => e === null)) {
                delete newErrors.skills;
              }
            }
            break;

          case 'professional':
            if (field === 'socialLinks' && typeof value === 'string' && value.startsWith('http')) {
              if (!newErrors.socialLinks) newErrors.socialLinks = [];
              if (!validateUrl(value)) {
                newErrors.socialLinks[index] = 'Please enter a valid URL';
              } else {
                newErrors.socialLinks[index] = null;
                if (newErrors.socialLinks.every(e => e === null)) {
                  delete newErrors.socialLinks;
                }
              }
            }
            break;
        }
      }

      setErrors(newErrors);
      return newState;
    });
  };

  const addArrayItem = (section: FormSection) => {
    setFormData(prev => {
      switch (section) {
        case 'educationHistory':
          return {
            ...prev,
            education: [
              ...prev.education,
              {
                id: 0,
                institution: '',
                diploma: '',
                startDate: '',
                endDate: '',
                description: '',
                location: ''
              }
            ]
          };
        case 'workExperience':
          return {
            ...prev,
            experience: [
              ...prev.experience,
              {
                id: 0,
                position: '',
                enterprise: '',
                startDate: '',
                endDate: '',
                description: '',
                location: ''
              }
            ]
          };
        case 'skills':
          return {
            ...prev,
            skills: [
              ...prev.skills,
              {
                id: 0,
                name: '',
                degree: 'NOVICE'
              }
            ]
          };
        case 'professional':
          return {
            ...prev,
            socialLinks: [...prev.socialLinks, { id: 0, platform: 'OTHER', link: '' }]
          };
        default:
          return prev;
      }
    });
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    // Remove country code (+216) and any non-digit characters
    const cleanNumber = phoneNumber.replace(/\D/g, '').slice(-8);
    // Tunisian phone numbers are 8 digits starting with 2, 3, 4, 5, 7, or 9
    const tunisianPhoneRegex = /^[23457][0-9]{7}$/;
    return tunisianPhoneRegex.test(cleanNumber);
  };

  const validatePassword = (password: string): boolean => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const validateUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: any = {};

    switch (step) {
      case 1: // Personal Information
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
          newErrors.email = 'Please enter a valid email';
        }
        if (!formData.password) {
          newErrors.password = 'Password is required';
        } else if (!validatePassword(formData.password)) {
          newErrors.password = 'Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number';
        }
        if (!formData.confirmPassword) {
          newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.phoneNumber) {
          newErrors.phoneNumber = 'Phone number is required';
        } else if (!validatePhoneNumber(formData.phoneNumber)) {
          newErrors.phoneNumber = 'Please enter a valid Tunisian phone number (8 digits starting with 2, 3, 4, 5, 7, or 9)';
        }
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        break;

      case 2: // Professional Information
        if (!formData.cv) newErrors.cv = 'CV is required';

        formData.socialLinks.forEach((link, index) => {
          if (link.link) {
            if (!validateUrl(link.link)) {
              if (!newErrors.socialLinks) newErrors.socialLinks = [];
              newErrors.socialLinks[index] = 'Please enter a valid URL';
            } else if (link.platform === 'LINKEDIN' && !link.link.includes('linkedin.com')) {
              if (!newErrors.socialLinks) newErrors.socialLinks = [];
              newErrors.socialLinks[index] = 'Please enter a valid LinkedIn URL';
            } else if (link.platform === 'GITHUB' && !link.link.includes('github.com')) {
              if (!newErrors.socialLinks) newErrors.socialLinks = [];
              newErrors.socialLinks[index] = 'Please enter a valid GitHub URL';
            }
          }
        });
        break;

      case 3: // Education - Optional
        break;

      case 4: // Experience - Optional
        break;

      case 5: // Skills - Optional
        break;

      case 6: // Terms
        if (!formData.agreeToTerms) {
          newErrors.terms = 'You must agree to the terms and conditions';
        }
        break;
    }

    console.log('Step:', step, 'Errors:', newErrors);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    const isValid = validateStep(activeStep);
    console.log('Step:', activeStep, 'Valid:', isValid);

    if (isValid) {
      if (activeStep < 6) {
        setDirection('next');
        setActiveStep(activeStep + 1);
      } else if (activeStep === 6) {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (activeStep > 1) {
      setDirection('prev');
      setActiveStep(activeStep - 1);
      setErrors({});
    }
  };

  const handleSubmit = () => {
    let isValid = true;
    for (let step = 1; step <= 6; step++) {
      if (!validateStep(step)) {
        isValid = false;
        setActiveStep(step);
        break;
      }
    }

    if (isValid) {
      console.log('Form submitted:', formData);
    }
  };

  const getSkillDegreeDescription = (degree: SkillDegree): string => {
    switch (degree) {
      case 'NOVICE':
        return 'Basic theoretical knowledge but limited practical experience';
      case 'BEGINNER':
        return 'Can perform basic tasks with guidance';
      case 'INTERMEDIATE':
        return 'Can work independently on most tasks';
      case 'ADVANCED':
        return 'Can handle complex problems and mentor others';
      case 'EXPERT':
        return 'Recognized authority with comprehensive knowledge';
      default:
        return '';
    }
  };

  const handlePhoneChange = (value: string, country: any) => {
    setFormData(prev => ({
      ...prev,
      phoneNumber: value
    }));

    // Clear previous errors
    if (errors.phoneNumber) {
      setErrors(prev => ({
        ...prev,
        phoneNumber: undefined
      }));
    }

    // Validate for Tunisia specifically
    if (country.countryCode === 'tn' && !validatePhoneNumber(value)) {
      setErrors(prev => ({
        ...prev,
        phoneNumber: 'Tunisian phone numbers must be 8 digits'
      }));
    }
  };

  const handleRemoveEducation = (index: number) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
    if (errors.education) {
      const newErrors = { ...errors };
      newErrors.education = [...(newErrors.education || [])].filter((_, i) => i !== index);
      if (newErrors.education.length === 0) delete newErrors.education;
      setErrors(newErrors);
    }
  };

  const handleRemoveExperience = (index: number) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
    if (errors.experience) {
      const newErrors = { ...errors };
      newErrors.experience = [...(newErrors.experience || [])].filter((_, i) => i !== index);
      if (newErrors.experience.length === 0) delete newErrors.experience;
      setErrors(newErrors);
    }
  };

  const handleRemoveSkill = (index: number) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
    if (errors.skills) {
      const newErrors = { ...errors };
      newErrors.skills = [...(newErrors.skills || [])].filter((_, i) => i !== index);
      if (newErrors.skills.length === 0) delete newErrors.skills;
      setErrors(newErrors);
    }
  };

  const steps = [
    { number: 1, title: 'Personal Information', description: 'Basic details and contact information' },
    { number: 2, title: 'Professional Details', description: 'Social media and online presence' },
    { number: 3, title: 'Education', description: 'Academic background and qualifications' },
    { number: 4, title: 'Experience', description: 'Work history and professional experience' },
    { number: 5, title: 'Skills', description: 'Professional skills and expertise levels' },
    { number: 6, title: 'Terms', description: 'Review and accept terms' }
  ];

  return (
    <div className="container-fuild">
      <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div className="row">
          {/* Left Side - Image */}
          <div className="col-lg-5">
            <div className="d-lg-flex align-items-center justify-content-center d-none flex-wrap vh-100 bg-primary-transparent">
              <div>
                <ImageWithBasePath src="assets/img/bg/authentication-bg-02.svg" alt="Registration" />
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
              <div className="col-md-10 mx-auto">
                <div className="card border-0 shadow-none">
                  <div className="card-body">
                    {/* Logo */}
                    <div className="text-center mb-4">
                      <ImageWithBasePath src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
                    </div>

                    {/* Form Title */}
                    <div className="text-center mb-4">
                      <h2 className="mb-2">Registration Form</h2>
                      <p className="text-muted">Please complete all steps to create your account</p>
                    </div>

                    {/* Progress Steps */}
                    <div className="wizard-steps mb-4">
                      <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                        {[
                          { step: 1, icon: 'ti ti-user' },
                          { step: 2, icon: 'ti ti-briefcase' },
                          { step: 3, icon: 'ti ti-school' },
                          { step: 4, icon: 'ti ti-building' },
                          { step: 5, icon: 'ti ti-star' },
                          { step: 6, icon: 'ti ti-check' }
                        ].map(({ step, icon }) => (
                          <li className="nav-item" key={step}>
                            <button
                              className={`nav-link ${activeStep === step ? 'active' : ''} ${activeStep > step ? 'completed' : ''}`}
                              disabled
                            >
                              <span className="step-icon">
                                <i className={icon}></i>
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Form Content */}
                    <div className={`wizard ${direction}`}>
                      <div className="tab-content">
                        {/* Step 1: Personal Information */}
                        <div className={`tab-pane ${activeStep === 1 ? 'active' : ''}`}>
                          <div className="mb-4">
                            <h4>Personal Information</h4>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
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
                            <div className="col-lg-6">
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
                            <div className="col-lg-6">
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
                            <div className="col-lg-6">
                              <div className="form-group">
                                <RequiredLabel text="Password" />
                                <div className="pass-group">
                                  <input
                                    type="password"
                                    className={`form-control pass-input ${errors.password ? 'is-invalid' : ''}`}
                                    value={formData.password}
                                    onChange={(e) => handleInputChange('personal', 'password', e.target.value)}
                                  />
                                  <span className={`fas toggle-password`}></span>
                                </div>
                                {errors.password && (
                                  <div className="invalid-feedback">{errors.password}</div>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <RequiredLabel text="Confirm Password" />
                                <div className="pass-group">
                                  <input
                                    type="password"
                                    className={`form-control pass-input ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                    value={formData.confirmPassword}
                                    onChange={(e) => handleInputChange('personal', 'confirmPassword', e.target.value)}
                                  />
                                  <span className={`fas toggle-password`}></span>
                                </div>
                                {errors.confirmPassword && (
                                  <div className="invalid-feedback">{errors.confirmPassword}</div>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-6">
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
                            <div className="col-lg-12">
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
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label>Profile Image (Optional)</label>
                                <input
                                  type="file"
                                  className="form-control"
                                  accept="image/*"
                                  onChange={(e) => handleInputChange('personal', 'profileImage', e.target.files?.[0])}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Step 2: Professional Information */}
                        <div className={`tab-pane ${activeStep === 2 ? 'active' : ''}`}>
                          <div className="mb-4">
                            <h4>Professional Information</h4>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <RequiredLabel text="Current CV" />
                                <input
                                  type="file"
                                  className={`form-control ${errors.cv ? 'is-invalid' : ''}`}
                                  accept=".pdf,.doc,.docx"
                                  onChange={(e) => handleInputChange('professional', 'cv', e.target.files?.[0])}
                                />
                                {errors.cv && (
                                  <div className="invalid-feedback">{errors.cv}</div>
                                )}
                              </div>
                            </div>
                            <div className="col-12">
                              <h5 className="mb-3">Social Links</h5>
                              <div className="row">
                                {/* LinkedIn Profile */}
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>LinkedIn Profile</label>
                                    <input
                                      type="url"
                                      className={`form-control ${errors.socialLinks?.[0] ? 'is-invalid' : ''}`}
                                      value={formData.socialLinks[0].link}
                                      onChange={(e) => handleInputChange('professional', 'link', e.target.value, 1)}
                                      placeholder="https://linkedin.com/in/your-profile"
                                    />
                                    {errors.socialLinks?.[0] && (
                                      <div className="invalid-feedback">{errors.socialLinks[0]}</div>
                                    )}
                                  </div>
                                </div>

                                {/* GitHub Profile */}
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>GitHub Profile</label>
                                    <input
                                      type="url"
                                      className={`form-control ${errors.socialLinks?.[1] ? 'is-invalid' : ''}`}
                                      value={formData.socialLinks[1].link}
                                      onChange={(e) => handleInputChange('professional', 'link', e.target.value, 2)}
                                      placeholder="https://github.com/your-username"
                                    />
                                    {errors.socialLinks?.[1] && (
                                      <div className="invalid-feedback">{errors.socialLinks[1]}</div>
                                    )}
                                  </div>
                                </div>

                                {/* Additional Social Links */}
                                {formData.socialLinks.slice(2).map((link, index) => (
                                  <div className="col-12" key={index + 2}>
                                    <div className="repeatable-section">
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <RequiredLabel text="Platform" />
                                            <select
                                              className="form-control"
                                              value={link.platform}
                                              onChange={(e) => handleInputChange('professional', 'socialLinks', e.target.value, index + 2)}
                                            >
                                              <option value="">Select Platform</option>
                                              <option value="PORTFOLIO">Portfolio</option>
                                              <option value="OTHER">Other</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <RequiredLabel text="Link" />
                                            <input
                                              type="url"
                                              className={`form-control ${errors.socialLinks?.[index + 2] ? 'is-invalid' : ''}`}
                                              value={link.link}
                                              onChange={(e) => handleInputChange('professional', 'socialLinks', e.target.value, index + 2)}
                                              placeholder="https://"
                                            />
                                            {errors.socialLinks?.[index + 2] && (
                                              <div className="invalid-feedback">{errors.socialLinks[index + 2]}</div>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Add Social Link Button */}
                              <div className="row mt-3">
                                <div className="col-12">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => addArrayItem('professional')}
                                  >
                                    Add Another Social Link
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Step 3: Education History */}
                        <div className={`tab-pane ${activeStep === 3 ? 'active' : ''}`}>
                          <div className="mb-4">
                            <h4>Education History</h4>
                          </div>
                          <div className="row">
                            {formData.education.map((edu, index) => (
                              <div key={index} className="row position-relative mb-3">
                                <div className="remove-btn" onClick={() => handleRemoveEducation(index)}>
                                  <i className="fas fa-times"></i>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <RequiredLabel text="Institution" />
                                    <input
                                      type="text"
                                      className={`form-control ${errors.educationFields?.[index]?.institution ? 'is-invalid' : ''}`}
                                      value={edu.institution}
                                      onChange={(e) => handleInputChange('educationHistory', 'institution', e.target.value, index)}
                                    />
                                    {errors.educationFields?.[index]?.institution && (
                                      <div className="invalid-feedback">{errors.educationFields[index].institution}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <RequiredLabel text="Diploma" />
                                    <input
                                      type="text"
                                      className={`form-control ${errors.educationFields?.[index]?.diploma ? 'is-invalid' : ''}`}
                                      value={edu.diploma}
                                      onChange={(e) => handleInputChange('educationHistory', 'diploma', e.target.value, index)}
                                    />
                                    {errors.educationFields?.[index]?.diploma && (
                                      <div className="invalid-feedback">{errors.educationFields[index].diploma}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <RequiredLabel text="Start Date" />
                                    <input
                                      type="date"
                                      className={`form-control ${errors.educationFields?.[index]?.startDate ? 'is-invalid' : ''}`}
                                      value={edu.startDate}
                                      onChange={(e) => handleInputChange('educationHistory', 'startDate', e.target.value, index)}
                                    />
                                    {errors.educationFields?.[index]?.startDate && (
                                      <div className="invalid-feedback">{errors.educationFields[index].startDate}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <RequiredLabel text="End Date" />
                                    <input
                                      type="date"
                                      className={`form-control ${errors.educationFields?.[index]?.endDate ? 'is-invalid' : ''}`}
                                      value={edu.endDate}
                                      onChange={(e) => handleInputChange('educationHistory', 'endDate', e.target.value, index)}
                                    />
                                    {errors.educationFields?.[index]?.endDate && (
                                      <div className="invalid-feedback">{errors.educationFields[index].endDate}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                      className={`form-control ${errors.educationFields?.[index]?.description ? 'is-invalid' : ''}`}
                                      value={edu.description}
                                      onChange={(e) => handleInputChange('educationHistory', 'description', e.target.value, index)}
                                    />
                                    {errors.educationFields?.[index]?.description && (
                                      <div className="invalid-feedback">{errors.educationFields[index].description}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Location</label>
                                    <input
                                      type="text"
                                      className={`form-control ${errors.educationFields?.[index]?.location ? 'is-invalid' : ''}`}
                                      value={edu.location}
                                      onChange={(e) => handleInputChange('educationHistory', 'location', e.target.value, index)}
                                    />
                                    {errors.educationFields?.[index]?.location && (
                                      <div className="invalid-feedback">{errors.educationFields[index].location}</div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                            <div className="row">
                              <div className="col-lg-12">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => addArrayItem('educationHistory')}
                                >
                                  Add Another Education
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Step 4: Work Experience */}
                        <div className={`tab-pane ${activeStep === 4 ? 'active' : ''}`}>
                          <div className="mb-4">
                            <h4>Work Experience</h4>
                          </div>
                          <div className="row">
                            {formData.experience.map((work, index) => (
                              <div key={index} className="row position-relative mb-3">
                                <div className="remove-btn" onClick={() => handleRemoveExperience(index)}>
                                  <i className="fas fa-times"></i>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <RequiredLabel text="Position" />
                                    <input
                                      type="text"
                                      className={`form-control ${errors.experienceFields?.[index]?.position ? 'is-invalid' : ''}`}
                                      value={work.position}
                                      onChange={(e) => handleInputChange('workExperience', 'position', e.target.value, index)}
                                    />
                                    {errors.experienceFields?.[index]?.position && (
                                      <div className="invalid-feedback">{errors.experienceFields[index].position}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <RequiredLabel text="Enterprise" />
                                    <input
                                      type="text"
                                      className={`form-control ${errors.experienceFields?.[index]?.enterprise ? 'is-invalid' : ''}`}
                                      value={work.enterprise}
                                      onChange={(e) => handleInputChange('workExperience', 'enterprise', e.target.value, index)}
                                    />
                                    {errors.experienceFields?.[index]?.enterprise && (
                                      <div className="invalid-feedback">{errors.experienceFields[index].enterprise}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <RequiredLabel text="Start Date" />
                                    <input
                                      type="date"
                                      className={`form-control ${errors.experienceFields?.[index]?.startDate ? 'is-invalid' : ''}`}
                                      value={work.startDate}
                                      onChange={(e) => handleInputChange('workExperience', 'startDate', e.target.value, index)}
                                    />
                                    {errors.experienceFields?.[index]?.startDate && (
                                      <div className="invalid-feedback">{errors.experienceFields[index].startDate}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <RequiredLabel text="End Date" />
                                    <input
                                      type="date"
                                      className={`form-control ${errors.experienceFields?.[index]?.endDate ? 'is-invalid' : ''}`}
                                      value={work.endDate}
                                      onChange={(e) => handleInputChange('workExperience', 'endDate', e.target.value, index)}
                                    />
                                    {errors.experienceFields?.[index]?.endDate && (
                                      <div className="invalid-feedback">{errors.experienceFields[index].endDate}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                      className={`form-control ${errors.experienceFields?.[index]?.description ? 'is-invalid' : ''}`}
                                      value={work.description}
                                      onChange={(e) => handleInputChange('workExperience', 'description', e.target.value, index)}
                                    />
                                    {errors.experienceFields?.[index]?.description && (
                                      <div className="invalid-feedback">{errors.experienceFields[index].description}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Location</label>
                                    <input
                                      type="text"
                                      className={`form-control ${errors.experienceFields?.[index]?.location ? 'is-invalid' : ''}`}
                                      value={work.location}
                                      onChange={(e) => handleInputChange('workExperience', 'location', e.target.value, index)}
                                    />
                                    {errors.experienceFields?.[index]?.location && (
                                      <div className="invalid-feedback">{errors.experienceFields[index].location}</div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                            <div className="row">
                              <div className="col-lg-12">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => addArrayItem('workExperience')}
                                >
                                  Add Another Work Experience
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Step 5: Skills */}
                        <div className={`tab-pane ${activeStep === 5 ? 'active' : ''}`}>
                          <div className="mb-4">
                            <h4>Skills</h4>
                          </div>
                          <div className="row">
                            {formData.skills.map((skill, index) => (
                              <div key={index} className="row position-relative mb-3">
                                <div className="remove-btn" onClick={() => handleRemoveSkill(index)}>
                                  <i className="fas fa-times"></i>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <RequiredLabel text="Skill Name" />
                                    <input
                                      type="text"
                                      className={`form-control ${errors.skills?.[index] ? 'is-invalid' : ''}`}
                                      value={skill.name}
                                      onChange={(e) => handleInputChange('skills', 'name', e.target.value, index)}
                                      placeholder="e.g., JavaScript, Project Management, Digital Marketing"
                                    />
                                    {errors.skills?.[index] && (
                                      <div className="invalid-feedback">{errors.skills[index]}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <RequiredLabel text="Proficiency Level" />
                                    <select
                                      className={`form-control ${errors.skills?.[index] ? 'is-invalid' : ''}`}
                                      value={skill.degree}
                                      onChange={(e) => handleInputChange('skills', 'degree', e.target.value as SkillDegree, index)}
                                    >
                                      <option value="">Select Proficiency Level</option>
                                      <option value="NOVICE">Novice - Basic understanding</option>
                                      <option value="BEGINNER">Beginner - Limited experience</option>
                                      <option value="INTERMEDIATE">Intermediate - Practical application</option>
                                      <option value="ADVANCED">Advanced - Deep understanding</option>
                                      <option value="EXPERT">Expert - Comprehensive mastery</option>
                                    </select>
                                    <small className="form-text text-muted">
                                      {getSkillDegreeDescription(skill.degree)}
                                    </small>
                                    {errors.skills?.[index] && (
                                      <div className="invalid-feedback">{errors.skills[index]}</div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                            <div className="row">
                              <div className="col-lg-12">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => addArrayItem('skills')}
                                >
                                  Add Another Skill
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Step 6: Review & Submit */}
                        <div className={`tab-pane ${activeStep === 6 ? 'active' : ''}`}>
                          <div className="mb-4">
                            <h4>Terms & Conditions</h4>
                            <p className="text-muted">Please read and accept our terms and conditions to complete your registration.</p>
                          </div>
                          <div className="terms-content">
                            <h5>1. User Registration Agreement</h5>
                            <p>By registering for an account on our platform, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

                            <h5>2. Professional Information</h5>
                            <p>You certify that all professional information provided, including work experience, education history, and skills, is truthful and accurate. Any misrepresentation may result in immediate account termination and possible legal consequences.</p>

                            <h5>3. Privacy and Data Protection</h5>
                            <p>We are committed to protecting your personal information. Your data will be collected, stored, and processed in accordance with our Privacy Policy and applicable data protection laws. We implement appropriate security measures to protect your information.</p>

                            <h5>4. Account Usage</h5>
                            <p>Your account is for personal and professional use only. You may not:</p>
                            <ul>
                              <li>Share your account credentials with third parties</li>
                              <li>Use the platform for any illegal or unauthorized purpose</li>
                              <li>Upload false or misleading information</li>
                              <li>Attempt to access restricted areas of the platform</li>
                            </ul>

                            <h5>5. Content Ownership</h5>
                            <p>You retain ownership of the content you submit to our platform. However, by submitting content, you grant us a worldwide, non-exclusive license to use, reproduce, and display your content for platform-related purposes.</p>

                            <h5>6. Platform Updates</h5>
                            <p>We reserve the right to modify, suspend, or discontinue any part of our services at any time. We will make reasonable efforts to notify users of significant changes that may affect their use of the platform.</p>

                            <h5>7. Termination</h5>
                            <p>We reserve the right to suspend or terminate your account if you violate these terms or engage in any activity that we determine to be harmful to other users or our platform's operation.</p>

                            <h5>8. Communication Preferences</h5>
                            <p>By accepting these terms, you agree to receive important notifications about your account, security updates, and platform announcements. You can manage your communication preferences in your account settings.</p>

                            <h5>9. Liability Limitations</h5>
                            <p>We strive to maintain platform availability but cannot guarantee uninterrupted access. We are not liable for any damages arising from platform unavailability or loss of data.</p>

                            <h5>10. Changes to Terms</h5>
                            <p>We may update these terms from time to time. Continued use of the platform after such changes constitutes acceptance of the new terms.</p>
                          </div>
                          <div className="form-group mt-4">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className={`custom-control-input ${errors.terms ? 'is-invalid' : ''}`}
                                id="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={(e) => handleInputChange('terms', 'agreeToTerms', e.target.checked)}
                              />
                              <label className="custom-control-label" htmlFor="agreeToTerms">
                                I have read and agree to the Terms & Conditions
                              </label>
                              {errors.terms && (
                                <div className="invalid-feedback d-block">{errors.terms}</div>
                              )}
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="wizard-footer mt-4">
                      <div className="actions d-flex justify-content-between">
                        {activeStep > 1 && (
                          <button
                            type="button"
                            className="btn btn-outline-primary rounded-pill"
                            onClick={handlePrevious}
                          >
                            <i className="ti ti-arrow-left me-2"></i>Previous
                          </button>
                        )}
                        {activeStep < 6 ? (
                          <button
                            type="button"
                            className="btn btn-primary rounded-pill ms-auto"
                            onClick={handleNext}
                          >
                            Next<i className="ti ti-arrow-right ms-2"></i>
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="btn btn-primary rounded-pill ms-auto"
                            onClick={handleSubmit}
                            disabled={!formData.agreeToTerms}
                          >
                            <i className="ti ti-check me-2"></i>Complete Registration
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterWizard;
