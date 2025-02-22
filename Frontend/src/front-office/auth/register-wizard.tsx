import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register-wizard.scss';
import ImageWithBasePath from '../../core/common/imageWithBasePath';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { register as registerUser } from '../../services/auth.service';
import { Education, EducationInput } from '../../models/Education';
import { Experience, ExperienceInput } from '../../models/Experience';
import { Skill, SkillDegree, skillDegreeDescriptions } from '../../models/Skill';
import { Profile, ProfileFormData, SocialLink, SocialPlatform } from '../../models/Profile';
import { Role, Socials } from '../../models/types';
import * as Yup from 'yup';
import { parseCV, ParsedCVData } from '../../services/cv-parser.service';

import { toast } from 'react-hot-toast';

type FormSection = 'personal' | 'professional' | 'educationHistory' | 'workExperience' | 'skills' | 'terms';

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
  password: string;
  confirmPassword: string;
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
  agreeToTerms: boolean;
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
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      'Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number'
    ),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^[23457][0-9]{7}$/, 'Please enter a valid Tunisian phone number'),
  address: Yup.string()
    .required('Address is required')
    .min(5, 'Address must be at least 5 characters')
});

const professionalInfoSchema = Yup.object().shape({
  cv: Yup.mixed()
    .required('CV is required')
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

const termsSchema = Yup.object().shape({
  agreeToTerms: Yup.boolean()
    .required('You must accept the terms and conditions')
    .oneOf([true], 'You must accept the terms and conditions')
});

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

  const [isParsingCV, setIsParsingCV] = useState(false);
  const [parsingFeedback, setParsingFeedback] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  const navigate = useNavigate();

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
            newLinks[index] = { ...newLinks[index], link: value };
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
                id: crypto.randomUUID(),
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
                id: crypto.randomUUID(),
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
                id: crypto.randomUUID(),
                name: '',
                degree: 'NOVICE' as SkillDegree
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
                id: crypto.randomUUID(),
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
                id: crypto.randomUUID(),
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
                id: crypto.randomUUID(),
                name: '',
                degree: 'NOVICE' as SkillDegree
              }
            ]
          };
        case 'professional':
          return {
            ...prev,
            socialLinks: [
              ...prev.socialLinks,
              {
                id: crypto.randomUUID(),
                type: Socials.PORTFOLIO,
                link: ''
              }
            ]
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

  const validateStep = async (step: number): Promise<boolean> => {
    try {
      const newErrors: any = {};

      switch (step) {
        case 1: // Personal Information
          await personalInfoSchema.validate(formData, { abortEarly: false });
          break;

        case 2: // Professional Information
          await professionalInfoSchema.validate(
            { cv: formData.cv, profileImage: formData.profileImage, socialLinks: formData.socialLinks },
            { abortEarly: false }
          );
          break;

        case 3: // Education
          if (formData.education.length > 0) {
            await educationSchema.validate(formData.education, { abortEarly: false });
          }
          break;

        case 4: // Experience
          if (formData.experience.length > 0) {
            await experienceSchema.validate(formData.experience, { abortEarly: false });
          }
          break;

        case 5: // Skills
          if (formData.skills.length > 0) {
            await skillsSchema.validate(formData.skills, { abortEarly: false });
          }
          break;

        case 6: // Terms
          await termsSchema.validate({ agreeToTerms: formData.agreeToTerms }, { abortEarly: false });
          break;
      }

      setErrors({});
      return true;
    } catch (validationError) {
      if (validationError instanceof Yup.ValidationError) {
        const newErrors: any = {};
        validationError.inner.forEach((error) => {
          if (error.path) {
            const path = error.path.split('.');
            if (path.length === 1) {
              newErrors[path[0]] = error.message;
            } else if (path.length === 2) {
              const [arrayName, index] = path;
              if (!newErrors[`${arrayName}Fields`]) {
                newErrors[`${arrayName}Fields`] = {};
              }
              if (!newErrors[`${arrayName}Fields`][index]) {
                newErrors[`${arrayName}Fields`][index] = {};
              }
              newErrors[`${arrayName}Fields`][index][path[1]] = error.message;
            }
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleNext = async () => {
    const isValid = await validateStep(activeStep);

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

  const handleSubmit = async () => {
    let isValid = true;
    for (let step = 1; step <= 6; step++) {
      if (!validateStep(step)) {
        isValid = false;
        setActiveStep(step);
        break;
      }
    }

    if (isValid) {
      setIsLoading(true);
      try {
        const submitData = new FormData();

        // Add user information
        submitData.append('firstName', formData.firstName);
        submitData.append('lastName', formData.lastName);
        submitData.append('email', formData.email);
        submitData.append('password', formData.password);
        submitData.append('phoneNumber', formData.phoneNumber);
        submitData.append('role', Role.CANDIDATE);
        submitData.append('address', formData.address);

        // Add files
        if (formData.profileImage) {
          submitData.append('profileImage', formData.profileImage);
        }
        if (formData.cv) {
          submitData.append('cv', formData.cv);
        }

        // Add arrays as JSON strings
        submitData.append('education', JSON.stringify(formData.education));
        submitData.append('experience', JSON.stringify(formData.experience));
        submitData.append('skills', JSON.stringify(formData.skills));
        submitData.append('socialLinks', JSON.stringify(formData.socialLinks.map(link => ({
          type: link.type,
          link: link.link
        }))));

        const response = await registerUser(submitData);

        setFormFeedback({
          type: 'success',
          message: 'Registration successful! Redirecting to login...'
        });

        if (response.token) {
          localStorage.setItem('token', response.token);
        }

        setTimeout(() => {
          navigate('/login');
        }, 2000);

      } catch (error: any) {
        setFormFeedback({
          type: 'error',
          message: error?.message || 'Registration failed. Please try again.'
        });
        
        window.scrollTo(0, 0);
      } finally {
        setIsLoading(false);
      }
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

  const handleCVUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
        'text/csv',
        'text/html',
        'text/xml',
        'application/rtf'
      ];
      if (!allowedTypes.includes(file.type)) {
        setParsingFeedback({
          type: 'error',
          message: 'Please upload a PDF, DOCX, or text-based file (TXT, CSV, HTML, XML, RTF).'
        });
        return;
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setParsingFeedback({
          type: 'error',
          message: 'File size must be less than 5MB.'
        });
        return;
      }

      // Update CV file in form data
      setFormData(prev => ({
        ...prev,
        cv: file
      }));

      try {
        // Show parsing status
        setIsParsingCV(true);
        const fileType = file.type === 'application/pdf' ? 'PDF' : 
                        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ? 'DOCX' : 
                        'text-based';
        setParsingFeedback({ 
          type: 'info', 
          message: `Parsing your ${fileType} CV...`
        });

        // Parse CV using backend service
        const parsedData = await parseCV(file);
        
        // Track what was successfully parsed
        const parsedFields: string[] = [];
        
        // Update form with parsed data
        setFormData(prev => {
          const newData = { ...prev };

          // Update name if available
          if (parsedData.name && !prev.firstName) {
            const nameParts = parsedData.name.split(' ');
            if (nameParts.length >= 2) {
              newData.firstName = nameParts[0];
              newData.lastName = nameParts.slice(1).join(' ');
              parsedFields.push('name');
            }
          }

          // Update email if not already set
          if (parsedData.email && !prev.email) {
            newData.email = parsedData.email;
            parsedFields.push('email');
          }

          // Update phone number if not already set
          if (parsedData.phone && !prev.phoneNumber) {
            newData.phoneNumber = parsedData.phone;
            parsedFields.push('phone number');
          }

          // Update address if not already set
          if (parsedData.address && !prev.address) {
            newData.address = parsedData.address;
            parsedFields.push('address');
          }

          // Update skills
          if (parsedData.skills && parsedData.skills.length > 0) {
            newData.skills = parsedData.skills.map(skillName => ({
              id: crypto.randomUUID(),
              name: skillName,
              degree: 'INTERMEDIATE' as SkillDegree
            }));
            parsedFields.push(`${parsedData.skills.length} skills`);
          }

          // Update education
          if (parsedData.education && parsedData.education.length > 0) {
            newData.education = parsedData.education.map(edu => {
              // Try to extract institution and diploma if in format "Diploma at Institution"
              const match = edu.match(/^(.*?)\s+at\s+(.*)$/);
              return {
                id: crypto.randomUUID(),
                institution: match ? match[2] : edu,
                diploma: match ? match[1] : '',
                startDate: '',
                endDate: '',
                description: '',
                location: ''
              };
            });
            parsedFields.push(`${parsedData.education.length} education entries`);
          }

          // Update experience
          if (parsedData.work_experience && parsedData.work_experience.length > 0) {
            newData.experience = parsedData.work_experience.map(exp => {
              // Try to extract position and company if in format "Position at Company"
              const match = exp.match(/^(.*?)\s+at\s+(.*)$/);
              return {
                id: crypto.randomUUID(),
                position: match ? match[1] : exp,
                enterprise: match ? match[2] : '',
                startDate: '',
                endDate: '',
                description: '',
                location: ''
              };
            });
            parsedFields.push(`${parsedData.work_experience.length} work experiences`);
          }

          return newData;
        });

        // Show success message with details of what was parsed
        if (parsedFields.length > 0) {
          setParsingFeedback({
            type: 'success',
            message: `Successfully parsed: ${parsedFields.join(', ')}. Please review and complete any missing information.`
          });
        } else {
          setParsingFeedback({
            type: 'info',
            message: 'CV was processed but no relevant information was found. Please fill in the information manually.'
          });
        }
      } catch (error) {
        console.error('Error parsing CV:', error);
        setParsingFeedback({
          type: 'error',
          message: error instanceof Error ? error.message : 'Failed to parse CV. Please check the file format or fill in the information manually.'
        });
      } finally {
        setIsParsingCV(false);
      }
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

                    {/* Feedback Message */}
                    {formFeedback && (
                      <div className={`alert alert-${formFeedback.type === 'success' ? 'success' : 'danger'} mb-4`}>
                        {formFeedback.message}
                      </div>
                    )}

                    {/* Loading Overlay */}
                    {isLoading && (
                      <div className="position-absolute w-100 h-100 top-0 left-0 d-flex justify-content-center align-items-center" style={{ background: 'rgba(255, 255, 255, 0.8)', zIndex: 1000 }}>
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    )}

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
                                  accept=".pdf,.doc,.docx,.txt"
                                  onChange={handleCVUpload}
                                  disabled={isParsingCV}
                                />
                                {errors.cv && (
                                  <div className="invalid-feedback">{errors.cv}</div>
                                )}
                                {isParsingCV && (
                                  <div className="parsing-status mt-2">
                                    <div className="spinner-border text-primary spinner-border-sm me-2" role="status">
                                      <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <span className="text-primary">Resume parsing...</span>
                                  </div>
                                )}
                                {parsingFeedback && (
                                  <div className={`parsing-feedback alert alert-${parsingFeedback.type} mt-2`}>
                                    {parsingFeedback.message}
                                  </div>
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
                                      type="text"
                                      className={`form-control ${errors.socialLinks?.[0] ? 'is-invalid' : ''}`}
                                      value={formData.socialLinks[0].link}
                                      onChange={(e) => handleInputChange('professional', 'socialLinks', e.target.value, 0)}
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
                                      type="text"
                                      className={`form-control ${errors.socialLinks?.[1] ? 'is-invalid' : ''}`}
                                      value={formData.socialLinks[1].link}
                                      onChange={(e) => handleInputChange('professional', 'socialLinks', e.target.value, 1)}
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
                                              value={link.type}
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
                                    />
                                    {errors.skills?.[index] && (
                                      <div className="invalid-feedback">{errors.skills[index]}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <RequiredLabel text="Degree" />
                                    <select
                                      className={`form-control ${errors.skills?.[index] ? 'is-invalid' : ''}`}
                                      value={skill.degree}
                                      onChange={(e) => handleInputChange('skills', 'degree', e.target.value, index)}
                                    >
                                      <option value="">Select Degree</option>
                                      <option value="NOVICE">NOVICE</option>
                                      <option value="BEGINNER">BEGINNER</option>
                                      <option value="INTERMEDIATE">INTERMEDIATE</option>
                                      <option value="ADVANCED">ADVANCED</option>
                                      <option value="EXPERT">EXPERT</option>
                                    </select>
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

                        {/* Step 6: Terms */}
                        <div className={`tab-pane ${activeStep === 6 ? 'active' : ''}`}>
                          <div className="mb-4">
                            <h4>Terms</h4>
                          </div>
                          <div className="form-group">
                            <label>
                              <input
                                type="checkbox"
                                checked={formData.agreeToTerms}
                                onChange={(e) => handleInputChange('terms', 'agreeToTerms', e.target.checked)}
                              />
                              I agree to the terms and conditions
                            </label>
                            {errors.terms && (
                              <div className="invalid-feedback">{errors.terms}</div>
                            )}
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
                            className="btn btn-outline-primary rounded-pill me-2"
                            onClick={handlePrevious}
                          >
                            <i className="ti ti-arrow-left me-2"></i>Previous
                          </button>
                        )}
                        {activeStep < 6 ? (
                          <button
                            type="button"
                            className="btn btn-primary rounded-pill"
                            onClick={handleNext}
                          >
                            Next<i className="ti ti-arrow-right ms-2"></i>
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="btn btn-primary rounded-pill"
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