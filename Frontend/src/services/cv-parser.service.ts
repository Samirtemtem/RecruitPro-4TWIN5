import axios from 'axios';
import mammoth from 'mammoth';
import dotenv from 'dotenv';
import fs from 'fs';
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
  skills?: string[];
  education?: string[];
  work_experience?: string[];
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
      name: cleanField(parsedData.name),
      email: cleanEmail(parsedData.email),
      phone: cleanPhone(parsedData.phone),
      address: cleanField(parsedData.address),
      skills: cleanArray(parsedData.skills),
      education: cleanArray(parsedData.education),
      work_experience: cleanArray(parsedData.work_experience)
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

// Helper functions for data cleaning
const cleanField = (field?: string): string | undefined => {
  if (!field) return undefined;
  return field.trim().replace(/\s+/g, ' ');
};

const cleanEmail = (email?: string): string | undefined => {
  if (!email) return undefined;
  email = email.trim().toLowerCase();
  return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? email : undefined;
};

const cleanPhone = (phone?: string): string | undefined => {
  if (!phone) return undefined;
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  // Check if it's a valid Tunisian number (8 digits starting with 2,3,4,5,7)
  return cleaned.match(/^[23457]\d{7}$/) ? cleaned : undefined;
};

const cleanArray = (arr?: string[]): string[] | undefined => {
  if (!arr || !Array.isArray(arr)) return undefined;
  return arr
    .map(item => item.trim())
    .filter(item => item.length > 0)
    .filter((item, index, self) => self.indexOf(item) === index); // Remove duplicates
};