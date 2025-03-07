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

type FormSection = 'personal' | 'education' | 'experience' | 'skills' | 'socialLinks' | 'terms';

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

interface ValidationError {
  field: string;
  message: string;
}

interface ErrorState {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  cv?: string | null;
  education?: Array<string | null>;
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
  experience?: Array<string | null>;
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
  skills?: Array<string | null>;
  socialLinks?: Array<string | null>;
  terms?: string | null;
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
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .test('log', 'Logging value', (value) => {
      console.log('Confirm password value:', value);
      return true;
    }),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{11}$/, 'Please enter a valid Tunisian phone number')
    .test('log', 'Logging value', (value) => {
      console.log('Phone number value:', value); 
      return true;
    }),
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

const RegisterWizard: React.FC = () => {
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

  const [isLoading, setIsLoading] = useState(false);
  const [isParsingCV, setIsParsingCV] = useState(false);
  const [parsingFeedback, setParsingFeedback] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  const navigate = useNavigate();

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'firstName':
        if (!value) return 'First name is required';
        if (value.length < 2 || value.length > 50) return 'First name must be between 2 and 50 characters';
          break;
      case 'lastName':
        if (!value) return 'Last name is required';
        if (value.length < 2 || value.length > 50) return 'Last name must be between 2 and 50 characters';
        break;
      case 'email':
        if (!value) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
        break;
      case 'password':
        if (!value) return 'Password is required';
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value)) 
          return 'Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number';
        break;
      case 'confirmPassword':
        if (!value) return 'Please confirm your password';
        if (value !== formData.password) return 'Passwords must match';
        break;
      case 'phoneNumber':
        if (!value) return 'Phone number is required';
        if (!/^\d{11}$/.test(value.replace(/\D/g, ''))) return 'Please enter a valid 11-digit number';
        break;
      case 'address':
        if (!value) return 'Address is required';
        if (value.length < 5) return 'Address must be at least 5 characters';
        break;
    }
    return '';
  };

  const handleInputChange = (section: FormSection, field: string, value: any, index?: number) => {
    if (section === 'personal') {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));

      const error = validateField(field, value);
      setErrors(prev => ({
        ...prev,
        [field]: error
      }));
    } else if (section === 'terms') {
      setFormData(prev => ({
        ...prev,
        agreeToTerms: value
      }));
          } else {
      setFormData(prev => {
        const newState = { ...prev };

        if (index !== undefined) {
          switch (section) {
            case 'education':
            const newEducation = [...prev.education];
            if (index === newEducation.length) {
              newEducation.push({
                id: crypto.randomUUID(),
                institution: '',
                diploma: '',
                startDate: '',
                endDate: '',
                description: '',
                location: ''
              });
              }
              newEducation[index] = { ...newEducation[index], [field]: value };
              return { ...prev, education: newEducation };

            case 'experience':
            const newExperience = [...prev.experience];
            if (index === newExperience.length) {
              newExperience.push({
                id: crypto.randomUUID(),
                position: '',
                enterprise: '',
                startDate: '',
                endDate: '',
                description: '',
                location: ''
              });
              }
              newExperience[index] = { ...newExperience[index], [field]: value };
              return { ...prev, experience: newExperience };

        case 'skills':
            const newSkills = [...prev.skills];
            if (index === newSkills.length) {
              newSkills.push({
                id: crypto.randomUUID(),
                name: '',
                degree: 'NOVICE' as SkillDegree
              });
              }
              newSkills[index] = { ...newSkills[index], [field]: value };
              return { ...prev, skills: newSkills };

            case 'socialLinks':
              const newLinks = [...prev.socialLinks];
              if (index === newLinks.length) {
                newLinks.push({
                  id: crypto.randomUUID(),
                  type: Socials.PORTFOLIO,
                  link: ''
                });
              }
              newLinks[index] = { ...newLinks[index], [field]: value };
              return { ...prev, socialLinks: newLinks };
          }
        }
        
        return {
          ...prev,
          [field]: value
        };
      });
    }
  };

  const validateProfessionalInfo = () => {
    const newErrors: {[key: string]: string} = {};
    let hasErrors = false;

    // Validate CV
    if (!formData.cv) {
            newErrors.cv = 'CV is required';
      hasErrors = true;
          } else {
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      if (!allowedTypes.includes(formData.cv.type)) {
        newErrors.cv = 'Only PDF and Word documents are allowed';
        hasErrors = true;
      }
      if (formData.cv.size > 5 * 1024 * 1024) {
        newErrors.cv = 'File size must be less than 5MB';
        hasErrors = true;
      }
    }

    // Validate profile image if provided
    if (formData.profileImage) {
      if (!formData.profileImage.type.startsWith('image/')) {
        newErrors.profileImage = 'Only image files are allowed';
        hasErrors = true;
      }
      if (formData.profileImage.size > 5 * 1024 * 1024) {
        newErrors.profileImage = 'File size must be less than 5MB';
        hasErrors = true;
      }
    }

    // Validate social links
    formData.socialLinks.forEach((link, index) => {
      if (link.link) {
        if (!link.link.startsWith('https://')) {
          newErrors[`socialLinks_${index}`] = 'URL must start with https://';
          hasErrors = true;
        } else if (link.type === Socials.LINKEDIN && !link.link.includes('linkedin.com')) {
          newErrors[`socialLinks_${index}`] = 'Invalid LinkedIn URL';
          hasErrors = true;
        } else if (link.type === Socials.GITHUB && !link.link.includes('github.com')) {
          newErrors[`socialLinks_${index}`] = 'Invalid GitHub URL';
          hasErrors = true;
        }
      }
    });

      setErrors(newErrors);
    return !hasErrors;
  };

  const handleNext = () => {
    let isValid = true;

    if (activeStep === 1) {
      // Validate all fields in step 1
      const newErrors: {[key: string]: string} = {};
      ['firstName', 'lastName', 'email', 'password', 'confirmPassword', 'phoneNumber', 'address'].forEach(field => {
        const error = validateField(field, formData[field as keyof FormData] as string);
        if (error) {
          newErrors[field] = error;
          isValid = false;
          }
        });
        setErrors(newErrors);
    } else if (activeStep === 2) {
      isValid = validateProfessionalInfo();
      }

    if (!isValid) {
      return;
    }

      if (activeStep < 6) {
        setDirection('next');
        setActiveStep(activeStep + 1);
      } else if (activeStep === 6) {
        handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (activeStep > 1) {
      setDirection('prev');
      setActiveStep(activeStep - 1);
    }
  };

  const handleSubmit = async () => {
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
      
      // Filter out social links with empty links before sending
      const validSocialLinks = formData.socialLinks.filter(link => link.link && link.link.trim() !== '');
      submitData.append('socialLinks', JSON.stringify(validSocialLinks.map(link => ({
          type: link.type,
        link: link.link.trim()
        }))));

        const response = await registerUser(submitData);
      console.log('response:', response);
      // Display success message from backend
      if (response.message) {
        toast.success(response.message);
        // If registration is successful, redirect after a delay
        setTimeout(() => {
          navigate('/LoginUser');
        }, 2000);
      }
       // Scroll to top to show error messages
       window.scrollTo(0, 0);
      
       // Clear previous errors
       setErrors({});
      if(response.error){
        toast.error(response.error);
        var error = response;
      }
       // Log the error object
       console.log('Full error object:', error);
       console.log('error.response:', error.error);
       console.log('error.response:', error.code);
       // The error object is returned directly from the auth service
       if (error.code && error.error) {
         // Always show the error message in a toast
         toast.error(error.error);
 
         // Handle specific error codes
         switch (error.code) {
           case 'USER_EXISTS':
             setErrors(prev => ({
               ...prev,
               email: error.error
             }));
             setActiveStep(1);
             break;
 
           case 'INVALID_EMAIL':
           case 'INVALID_PASSWORD':
           case 'INVALID_FIRSTNAME':
           case 'INVALID_LASTNAME':
           case 'INVALID_PHONE':
           case 'INVALID_ADDRESS':
             const field = error.code.toLowerCase().split('_')[1];
             setErrors(prev => ({
               ...prev,
               [field]: error.error
             }));
             setActiveStep(1);
             break;
 
           case 'INVALID_CV_TYPE':
           case 'INVALID_CV_SIZE':
             setErrors(prev => ({
               ...prev,
               cv: error.error
             }));
             setActiveStep(2);
             break;
 
           case 'INVALID_IMAGE_TYPE':
           case 'INVALID_IMAGE_SIZE':
             setErrors(prev => ({
               ...prev,
               profileImage: error.error
             }));
             setActiveStep(2);
             break;
 
           case 'MISSING_FIELDS':
             toast.error('Please fill in all required fields');
             setActiveStep(1);
             break;
 
           default:
             toast.error(error.error || 'An unexpected error occurred');
         }
       } else {
         // Handle network or unexpected errors
         toast.error('An unexpected error occurred. Please try again later.');
         console.error('Unexpected error:', error);
       }
     

      } catch (error: any) {
      // Scroll to top to show error messages
        window.scrollTo(0, 0);
      
      // Clear previous errors
      setErrors({});

      // Log the error object
      console.log('Full error object:', error);
      console.log('error.response:', error.error);
      console.log('error.response:', error.code);
      // The error object is returned directly from the auth service
      if (error.code && error.error) {
        // Always show the error message in a toast
        toast.error(error.error);

        // Handle specific error codes
        switch (error.code) {
          case 'USER_EXISTS':
            setErrors(prev => ({
              ...prev,
              email: error.error
            }));
            setActiveStep(1);
            break;

          case 'INVALID_EMAIL':
          case 'INVALID_PASSWORD':
          case 'INVALID_FIRSTNAME':
          case 'INVALID_LASTNAME':
          case 'INVALID_PHONE':
          case 'INVALID_ADDRESS':
            const field = error.code.toLowerCase().split('_')[1];
            setErrors(prev => ({
              ...prev,
              [field]: error.error
            }));
            setActiveStep(1);
            break;

          case 'INVALID_CV_TYPE':
          case 'INVALID_CV_SIZE':
            setErrors(prev => ({
              ...prev,
              cv: error.error
            }));
            setActiveStep(2);
            break;

          case 'INVALID_IMAGE_TYPE':
          case 'INVALID_IMAGE_SIZE':
            setErrors(prev => ({
              ...prev,
              profileImage: error.error
            }));
            setActiveStep(2);
            break;

          case 'MISSING_FIELDS':
            toast.error('Please fill in all required fields');
            setActiveStep(1);
            break;

          default:
            toast.error(error.error || 'An unexpected error occurred');
        }
      } else {
        // Handle network or unexpected errors
        toast.error('An unexpected error occurred. Please try again later.');
        console.error('Unexpected error:', error);
      }
      } finally {
        setIsLoading(false);
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
  };

  const handleRemoveEducation = (index: number) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const handleRemoveExperience = (index: number) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const handleRemoveSkill = (index: number) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
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
            // Remove any '+216' prefix if present
            const phoneNumber = parsedData.phone.replace('+216', '').trim();
            newData.phoneNumber = phoneNumber;
            parsedFields.push('phone number');
          }

          // Update address if not already set
          if (parsedData.address && !prev.address) {
            newData.address = parsedData.address;
            parsedFields.push('address');
          }

          // Update skills
          if (parsedData.skills && parsedData.skills.length > 0) {
            newData.skills = parsedData.skills.map(skill => ({
              id: crypto.randomUUID(),
              name: skill.name,
              degree: skill.degree as SkillDegree
            }));
            parsedFields.push(`${parsedData.skills.length} skills`);
          }

          // Update education
          if (parsedData.education && parsedData.education.length > 0) {
            newData.education = parsedData.education.map(edu => ({
                id: crypto.randomUUID(),
              institution: edu.institution,
              diploma: edu.diploma,
              startDate: edu.startDate,
              endDate: edu.endDate,
              description: edu.description,
              location: edu.location
            }));
            parsedFields.push(`${parsedData.education.length} education entries`);
          }

          // Update experience
          if (parsedData.work_experience && parsedData.work_experience.length > 0) {
            newData.experience = parsedData.work_experience.map(exp => ({
                id: crypto.randomUUID(),
              position: exp.position,
              enterprise: exp.enterprise,
              startDate: exp.startDate,
              endDate: exp.endDate,
              description: exp.description,
              location: exp.location
            }));
            parsedFields.push(`${parsedData.work_experience.length} work experiences`);
          }

          return newData;
        });

        // Show success message with details of what was parsed
          setParsingFeedback({
            type: 'success',
            message: `Successfully parsed: ${parsedFields.join(', ')}. Please review and complete any missing information.`
          });
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
    { number: 2, title: 'Professional Information', description: 'Social media and online presence' },
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
            <div className="d-lg-flex align-items-center justify-content-center d-none flex-wrap vh-100 ">
              <div>
                <ImageWithBasePath src="assets/img/bg/download.svg" alt="Registration" />
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
                                <label className="form-label">First Name <span className="text-danger">*</span></label>
                                <input
                                  type="text"
                                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                  value={formData.firstName}
                                  onChange={(e) => handleInputChange('personal', 'firstName', e.target.value)}
                                />
                                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-label">Last Name <span className="text-danger">*</span></label>
                                <input
                                  type="text"
                                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                  value={formData.lastName}
                                  onChange={(e) => handleInputChange('personal', 'lastName', e.target.value)}
                                />
                                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-label">Email <span className="text-danger">*</span></label>
                                <input
                                  type="email"
                                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                  value={formData.email}
                                  onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-label">Password <span className="text-danger">*</span></label>
                                <div className="pass-group">
                                  <input
                                    type="password"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    value={formData.password}
                                    onChange={(e) => handleInputChange('personal', 'password', e.target.value)}
                                  />
                                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-label">Confirm Password <span className="text-danger">*</span></label>
                                <div className="pass-group">
                                  <input
                                    type="password"
                                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                    value={formData.confirmPassword}
                                    onChange={(e) => handleInputChange('personal', 'confirmPassword', e.target.value)}
                                  />
                                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                                <PhoneInput
                                  country={'tn'}
                                  value={formData.phoneNumber}
                                  onChange={(value) => handleInputChange('personal', 'phoneNumber', value)}
                                  inputClass={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                                  containerClass="phone-input-container"
                                  specialLabel=""
                                  countryCodeEditable={false}
                                  preferredCountries={['tn']}
                                  enableSearch={true}
                                />
                                {errors.phoneNumber && <div className="invalid-feedback d-block">{errors.phoneNumber}</div>}
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label className="form-label">Address <span className="text-danger">*</span></label>
                                <input
                                  type="text"
                                  className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                  value={formData.address}
                                  onChange={(e) => handleInputChange('personal', 'address', e.target.value)}
                                />
                                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
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
                                <label className="form-label">Current CV <span className="text-danger">*</span></label>
                                <input
                                  type="file"
                                  className={`form-control ${errors.cv ? 'is-invalid' : ''}`}
                                  accept=".pdf,.doc,.docx"
                                  onChange={handleCVUpload}
                                  disabled={isParsingCV}
                                />
                                {errors.cv && <div className="invalid-feedback">{errors.cv}</div>}
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
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label>Profile Image (Optional)</label>
                                <input
                                  type="file"
                                  className={`form-control ${errors.profileImage ? 'is-invalid' : ''}`}
                                  accept="image/*"
                                  onChange={(e) => handleInputChange('personal', 'profileImage', e.target.files?.[0])}
                                />
                                {errors.profileImage && <div className="invalid-feedback">{errors.profileImage}</div>}
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
                                      className={`form-control ${errors.socialLinks_0 ? 'is-invalid' : ''}`}
                                      value={formData.socialLinks[0].link}
                                      onChange={(e) => handleInputChange('socialLinks', 'link', e.target.value, 0)}
                                      placeholder="https://linkedin.com/in/your-profile"
                                    />
                                    {errors.socialLinks_0 && <div className="invalid-feedback">{errors.socialLinks_0}</div>}
                                  </div>
                                </div>

                                {/* GitHub Profile */}
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>GitHub Profile</label>
                                    <input
                                      type="text"
                                      className={`form-control ${errors.socialLinks_1 ? 'is-invalid' : ''}`}
                                      value={formData.socialLinks[1].link}
                                      onChange={(e) => handleInputChange('socialLinks', 'link', e.target.value, 1)}
                                      placeholder="https://github.com/your-username"
                                    />
                                    {errors.socialLinks_1 && <div className="invalid-feedback">{errors.socialLinks_1}</div>}
                                  </div>
                                </div>

                                {/* Additional Social Links */}
                                {formData.socialLinks.slice(2).map((link, index) => (
                                  <div className="col-12" key={index + 2}>
                                    <div className="repeatable-section">
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <label>Platform</label>
                                            <select
                                              className={`form-control ${errors[`socialLinks_${index + 2}`] ? 'is-invalid' : ''}`}
                                              value={link.type}
                                              onChange={(e) => handleInputChange('socialLinks', 'type', e.target.value, index + 2)}
                                            >
                                              {Object.values(Socials).map(platform => (
                                                <option key={platform} value={platform}>{platform}</option>
                                              ))}
                                            </select>
                                            {errors[`socialLinks_${index + 2}`] && (
                                              <div className="invalid-feedback">{errors[`socialLinks_${index + 2}`]}</div>
                                            )}
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <label>Link</label>
                                            <input
                                              type="url"
                                              className={`form-control ${errors[`socialLinks_${index + 2}`] ? 'is-invalid' : ''}`}
                                              value={link.link}
                                              onChange={(e) => handleInputChange('socialLinks', 'link', e.target.value, index + 2)}
                                              placeholder="https://"
                                            />
                                            {errors[`socialLinks_${index + 2}`] && (
                                              <div className="invalid-feedback">{errors[`socialLinks_${index + 2}`]}</div>
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
                                    onClick={() => handleInputChange('socialLinks', 'link', '', formData.socialLinks.length)}
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
                              <div key={edu.id} className="education-form-group mb-4 p-3 border rounded position-relative">
                                <div className="remove-btn" onClick={() => handleRemoveEducation(index)}>
                                  <i className="fas fa-times"></i>
                                </div>
                                <h5 className="mb-3">Education #{index + 1}</h5>
                                <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                      <label>Institution</label>
                                    <input
                                      type="text"
                                        className="form-control"
                                      value={edu.institution}
                                        onChange={(e) => handleInputChange('education', 'institution', e.target.value, index)}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                      <label>Diploma</label>
                                    <input
                                      type="text"
                                        className="form-control"
                                      value={edu.diploma}
                                        onChange={(e) => handleInputChange('education', 'diploma', e.target.value, index)}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                      <label>Start Date</label>
                                    <input
                                      type="date"
                                        className="form-control"
                                      value={edu.startDate}
                                        onChange={(e) => handleInputChange('education', 'startDate', e.target.value, index)}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                      <label>End Date</label>
                                    <input
                                      type="date"
                                        className="form-control"
                                      value={edu.endDate}
                                        onChange={(e) => handleInputChange('education', 'endDate', e.target.value, index)}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        className="form-control"
                                      value={edu.description}
                                        onChange={(e) => handleInputChange('education', 'description', e.target.value, index)}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Location</label>
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
                            <div className="row">
                              <div className="col-lg-12">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => handleInputChange('education', '', '', formData.education.length)}
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
                              <>
                                <div key={work.id} className="row position-relative mb-3">
                                <div className="remove-btn" onClick={() => handleRemoveExperience(index)}>
                                  <i className="fas fa-times"></i>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                      <label>Position</label>
                                    <input
                                      type="text"
                                        className="form-control"
                                      value={work.position}
                                        onChange={(e) => handleInputChange('experience', 'position', e.target.value, index)}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                      <label>Enterprise</label>
                                    <input
                                      type="text"
                                        className="form-control"
                                      value={work.enterprise}
                                        onChange={(e) => handleInputChange('experience', 'enterprise', e.target.value, index)}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                      <label>Start Date</label>
                                    <input
                                      type="date"
                                        className="form-control"
                                      value={work.startDate}
                                        onChange={(e) => handleInputChange('experience', 'startDate', e.target.value, index)}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                      <label>End Date</label>
                                    <input
                                      type="date"
                                        className="form-control"
                                      value={work.endDate}
                                        onChange={(e) => handleInputChange('experience', 'endDate', e.target.value, index)}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        className="form-control"
                                      value={work.description}
                                        onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Location</label>
                                    <input
                                      type="text"
                                        className="form-control"
                                      value={work.location}
                                        onChange={(e) => handleInputChange('experience', 'location', e.target.value, index)}
                                    />
                                  </div>
                                </div>
                              </div>
                                {index < formData.experience.length - 1 && (
                                  <div className="col-12">
                                    <div style={{ height: '3px', backgroundColor: '#f0f0f0', margin: '1rem 0' }} />
                                  </div>
                                )}
                              </>
                            ))}
                            <div className="row">
                              <div className="col-lg-12">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => handleInputChange('experience', '', '', formData.experience.length)}
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
                              <div key={skill.id} className="row position-relative mb-3">
                                <div className="remove-btn" onClick={() => handleRemoveSkill(index)}>
                                  <i className="fas fa-times"></i>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Skill Name</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={skill.name}
                                      onChange={(e) => handleInputChange('skills', 'name', e.target.value, index)}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Degree</label>
                                    <select
                                      className="form-control"
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
                                  </div>
                                </div>
                              </div>
                            ))}
                            <div className="row">
                              <div className="col-lg-12">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => handleInputChange('skills', '', '', formData.skills.length)}
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