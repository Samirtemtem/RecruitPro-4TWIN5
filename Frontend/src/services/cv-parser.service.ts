import axios from 'axios';
import { Education } from '../models/Education';
import { Experience } from '../models/Experience';
import { Skill } from '../models/Skill';

//import pdf from 'pdf-parse';
/*pdf(dataBuffer).then(function(data : any) {

        // number of pages
        console.log(data.numpages);
        // number of rendered pages
        console.log(data.numrender);
        // PDF info
        console.log(data.info);
        // PDF metadata
        console.log(data.metadata); 
        // PDF.js version
        // check https://mozilla.github.io/pdf.js/getting_started/
        console.log(data.version);
        // PDF text
        console.log(data.text); 
              
      });*/
//import { getTextExtractor } from 'office-text-extractor'
export interface ParsedCVData {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  skills?: Skill[];
  education?: Education[];
  work_experience?: Experience[];
}

export const parseCV = async (file: File): Promise<ParsedCVData> => {
  try {
    // Send to backend for parsing
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post('http://localhost:5000/api/cv/parse', formData);
    console.log(response);
    // Validate and clean parsed data
    const parsedData = response.data;
    return {
      name: parsedData.name,
      email: parsedData.email,
      phone: parsedData.phone,
      address: parsedData.address,
      skills: parsedData.skills,
      education: parsedData.education,
      work_experience: parsedData.work_experience
    };
  } catch (error) {
    if (error instanceof Error && error.message.includes('Failed to load PDF')) {
      throw new Error('Failed to read PDF file. The file might be corrupted or password protected.');
    }
    if (error instanceof Error && error.message.includes('Failed to load DOCX')) {
      throw new Error('Failed to read DOCX file. The file might be corrupted.');
    }
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 413) {
        throw new Error('File is too large. Please upload a smaller file.');
      } else if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
    }
    throw error;
  }
};



const readFileAsText = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        resolve(e.target.result as string);
      } else {
        reject(new Error('Failed to read file'));
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
};

// 