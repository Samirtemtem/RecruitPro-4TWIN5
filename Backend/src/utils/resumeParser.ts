import { IEducation } from '../models/Education';
import { IExperience } from '../models/Experience';
import { ISkill } from '../models/Skill';
import pdf from 'pdf-parse';
import fs from 'fs';
import { resumeToJsonParser } from './resumeToJsonParser';

export const parseCV = async (filepath: string) => {

}



// Regular expressions for different languages
const patterns = {
  en: {
    email: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,
    phone: /(\+\d{1,4}[-.\s]?\d{1,3}[-.\s]?\d{1,4}[-.\s]?\d{1,4})|(\d{8,})/g,
    dates: /(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s*[-–]?\s*\d{4}/gi,
    location: /([A-Za-z\s]+),\s*([A-Z]{2})/g,
    university: /([A-Za-z\s]+(?:University|College|Institute|School)(?:\s*\([^)]+\))?)/gi,
    degree: /Bachelor\s+of\s+[A-Za-z\s]+(?:;[^;]+)*|Master\s+of\s+[A-Za-z\s]+|Ph\.D\.\s+in\s+[A-Za-z\s]+|[A-Za-z\s]+Diploma/gi
  },
  fr: {
    email: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,
    phone: /(\+\d{1,4}[-.\s]?\d{1,3}[-.\s]?\d{1,4}[-.\s]?\d{1,4})|(\d{8,})/g,
    dates: /(?:janv|févr|mars|avr|mai|juin|juil|août|sept|oct|nov|déc)[a-z]*\.?\s*[-–]?\s*\d{4}/gi,
    location: /([A-Za-z\s]+),\s*([A-Z]{2})/g,
    university: /([A-Za-z\s]+(?:Université|École|Institut)(?:\s*\([^)]+\))?)/gi
  }
};

// Section markers
const sectionMarkers = {
  en: {
    education: ['education', 'academic background', 'academic history', 'qualifications'],
    experience: ['experience', 'work history', 'employment history', 'professional experience', 'relevant experience'],
    skills: ['skills', 'competencies', 'technical skills', 'expertise']
  },
  fr: {
    education: ['formation', 'parcours académique', 'études'],
    experience: ['expérience', 'parcours professionnel', 'emplois'],
    skills: ['compétences', 'expertises', 'savoir-faire']
  }
};

export const detectLanguage = async (text: string): Promise<'en' | 'fr'> => {
  try {
    const { franc } = await import('franc-min');
    const lang = franc(text, { only: ['eng', 'fra'] });
    return lang === 'eng' ? 'en' : 'fr';
  } catch (error) {
    console.error('Error detecting language:', error);
    return 'en';
  }
};

const extractDates = (text: string): { startDate?: Date; endDate?: Date } => {
  const matches = Array.from(text.matchAll(patterns.en.dates));
  
  if (matches.length >= 2) {
    return {
      startDate: new Date(matches[0][0]),
      endDate: new Date(matches[1][0])
    };
  } else if (matches.length === 1) {
    return {
      startDate: new Date(matches[0][0])
    };
  }
  
  return {};
};

const cleanText = (text: string): string => {
  return text
    .replace(/[•●]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s*,\s*/g, ', ')
    .trim();
};

const parseEducation = (text: string): Partial<IEducation>[] => {
  const content = text.replace(/^EDUCATION\s*$/mi, '').trim();
  
  const entries = content.split(/\n{2,}/)
    .filter(entry => entry.trim().length > 0)
    .filter(entry => !sectionMarkers.en.education.some(marker => 
      entry.toLowerCase().trim() === marker));

  return entries.map(entry => {
    const lines = entry.split('\n').map(cleanText);
    const dates = extractDates(entry);
    
    const universityMatches = Array.from(entry.matchAll(patterns.en.university));
    const institution = universityMatches.length > 0 ? universityMatches[0][1].trim() : lines[0];
    
    const locationMatches = Array.from(entry.matchAll(patterns.en.location));
    const location = locationMatches.length > 0 ? locationMatches[0][0] : '';
    
    const degreeMatches = Array.from(entry.matchAll(patterns.en.degree));
    const diploma = degreeMatches.length > 0 ? degreeMatches[0][0] : '';

    return {
      institution,
      diploma,
      startDate: dates.startDate || new Date(),
      endDate: dates.endDate || new Date(),
      location,
      description: ''  // Not needed as per your comment
    };
  });
};

const parseExperience = (text: string): Partial<IExperience>[] => {
  const content = text
    .replace(/^(?:RELEVANT\s+)?EXPERIENCE\s*$/mi, '')
    .replace(/HONORS & AWARDS[\s\S]*$/, '')
    .trim();
  
  const entries = content.split(/(?:\n{2,}|\n(?=(?:[A-Z][a-z]+|[A-Z]+)(?:\s+(?:[A-Z][a-z]+|[A-Z]+))*\s*(?:[-–]\s*|,\s*)))/m)
    .filter(entry => entry.trim().length > 0)
    .filter(entry => !sectionMarkers.en.experience.some(marker => 
      entry.toLowerCase().trim() === marker));

  return entries.map(entry => {
    const lines = entry.split('\n').map(cleanText);
    const dates = extractDates(entry);
    
    const locationMatches = Array.from(entry.matchAll(patterns.en.location));
    const location = locationMatches.length > 0 ? locationMatches[0][0] : '';
    
    const position = lines[0].replace(patterns.en.location, '').trim();
    const enterprise = lines[1]?.split(/(?=\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))/i)[0]?.trim() || '';

    return {
      position: position.replace(/^Server\s*/, '').trim(),
      enterprise,
      startDate: dates.startDate || new Date(),
      endDate: dates.endDate || new Date(),
      location,
      description: ''  // Not needed as per your comment
    };
  });
};

const parseSkills = (text: string): Partial<ISkill>[] => {
  const content = text.replace(/^SKILLS\s*$/mi, '').trim();
  
  const skillsList = content
    .split(/(?:[,;:]|\n+)/)
    .map(cleanText)
    .map(skill => skill.replace(/^(?:Language|Technical|Software|Tools|Programming)s?\s*:?\s*/i, '').trim())
    .filter(skill => skill.length > 0);

  return skillsList.map(skill => {
    const name = skill
      .replace(/(?:proficient|advanced|expert|intermediate|skilled|basic|beginner|familiar)\s+(?:in|with)?\s*/i, '')
      .replace(/\s+in\s+/, ' ')
      .trim();
      
    const degree = skill.match(/proficient|advanced|expert/i) ? 'ADVANCED' :
                  skill.match(/intermediate|skilled/i) ? 'INTERMEDIATE' :
                  skill.match(/basic|beginner|familiar/i) ? 'BEGINNER' : 'INTERMEDIATE';
                  
    return { name, degree };
  });
};

export interface ParsedCVData {
  email?: string;
  phoneNumber?: string;
  education?: Partial<IEducation>[];
  experience?: Partial<IExperience>[];
  skills?: Partial<ISkill>[];
}

export const parseText = async (text: string, language: 'en' | 'fr'): Promise<ParsedCVData> => {
  const emailMatch = text.match(patterns[language].email);
  const phoneMatch = text.match(patterns[language].phone);

  const sections = text.split(/(?=\b(?:EDUCATION|(?:RELEVANT\s+)?EXPERIENCE|SKILLS|COMPETENCIES|HONORS & AWARDS)\b)/i);
  
  let educationSection = '';
  let experienceSection = '';
  let skillsSection = '';

  sections.forEach(section => {
    const sectionLower = section.toLowerCase().trim();
    if (sectionMarkers[language].education.some(marker => sectionLower.startsWith(marker))) {
      educationSection = section;
    } else if (sectionMarkers[language].experience.some(marker => sectionLower.startsWith(marker))) {
      experienceSection = section;
    } else if (sectionMarkers[language].skills.some(marker => sectionLower.startsWith(marker))) {
      skillsSection = section;
    }
  });

  return {
    email: emailMatch ? emailMatch[0] : undefined,
    phoneNumber: phoneMatch ? phoneMatch[0] : undefined,
    education: educationSection ? parseEducation(educationSection) : [],
    experience: experienceSection ? parseExperience(experienceSection) : [],
    skills: skillsSection ? parseSkills(skillsSection) : []
  };
};