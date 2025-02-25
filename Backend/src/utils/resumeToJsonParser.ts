// This module provides a parser for extracting structured information from resume text.
// It utilizes a machine learning model to convert unstructured resume data into a JSON format.
// The main exported function is `resumeToJsonParser`, which takes resume text as input and returns an object containing fields such as name, email, phone, address, skills, education, and work experience.
// Dependencies: dotenv for environment variables, axios for making API requests.
require("dotenv").config();
const axios = require("axios");

const MODEL_NAME = process.env.MODEL_NAME;
const MAX_NEW_TOKENS = 1000;

// Add these interfaces at the top of the file
interface Skill {
  name: string;
  degree: string;
}

interface Education {
  institution: string;
  diploma: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

interface Experience {
  position: string;
  enterprise: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

interface ParsedData {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  skills?: Skill[];
  education?: Education[];
  experience?: Experience[];
}

const extractFields = (text: string) => {
  console.log("Extracting fields from text:", text);
  try {
    // Find the start of the JSON object after the "# Response" marker
    const responseMarker = '# Response\n';
    const startIndex = text.indexOf(responseMarker);
    if (startIndex === -1) {
      throw new Error('Could not find JSON response marker');
    }
    
    const jsonStartIndex = text.indexOf('{', startIndex);
    if (jsonStartIndex === -1) {
      throw new Error('Could not find start of JSON object');
    }

    // Extract the JSON part and clean it up
    let jsonText = text.substring(jsonStartIndex);
    
    // Find the last complete object in experience array
    const lastCompleteExperience = jsonText.lastIndexOf('"location":');
    if (lastCompleteExperience !== -1) {
      // Find the end of this object
      const endOfLocation = jsonText.indexOf('"}', lastCompleteExperience);
      if (endOfLocation !== -1) {
        // Truncate at this point and close all open structures
        jsonText = jsonText.substring(0, endOfLocation + 2) + ']}';
      }
    }

    // Ensure the JSON is properly closed
    let depth = 0;
    let inString = false;
    let escape = false;
    
    // Count open brackets/braces
    for (let i = 0; i < jsonText.length; i++) {
      const char = jsonText[i];
      if (escape) {
        escape = false;
        continue;
      }
      if (char === '\\') {
        escape = true;
        continue;
      }
      if (char === '"' && !escape) {
        inString = !inString;
        continue;
      }
      if (!inString) {
        if (char === '{' || char === '[') {
          depth++;
        } else if (char === '}' || char === ']') {
          depth--;
        }
      }
    }

    // Close any unclosed structures
    while (depth > 0) {
      jsonText += '}';
      depth--;
    }

    console.log("Cleaned JSON text:", jsonText);

    // Parse the JSON
    const parsedData = JSON.parse(jsonText) as ParsedData;
    
    // Create the fields object with the expected structure and validation
    const fields = {
      name: parsedData.name || "",
      email: parsedData.email || "",
      phone: parsedData.phone || "",
      address: parsedData.address || "",
      skills: Array.isArray(parsedData.skills) ? parsedData.skills.filter((skill: Skill) => skill && skill.name) : [],
      education: Array.isArray(parsedData.education) ? parsedData.education.filter((edu: Education) => edu && edu.institution) : [],
      work_experience: Array.isArray(parsedData.experience) ? parsedData.experience.filter((exp: Experience) => exp && exp.position) : []
    };

    // Log successful parsing
    console.log("Successfully parsed fields:", fields);
    return fields;
  } catch (error: unknown) {
    console.error("Error parsing JSON:", error);
    // Throw a more descriptive error
    if (error instanceof Error) {
      throw new Error(`Failed to parse resume data: ${error.message}`);
    }
    throw new Error('Failed to parse resume data: Unknown error');
  }
};

export const resumeToJsonParser = async (text: string) => {
  try {
    const prompt = `<|system|>
    Extract key information from the resume text below into a JSON object.
    Keep all descriptions very brief and concise.
    Limit experience descriptions to one sentence.
    Include only the most relevant skills.
    Format dates as YYYY-MM.
    Your response must be a valid JSON object with no trailing commas.
    Start your response with "# Response" followed by the JSON object.
    
    Required JSON format:
    {
      "name": "[full name]",
      "email": "[email]",
      "phone": "[phone]",
      "address": "[city, state]",
      "skills": [
        {
          "name": "[skill]",
          "degree": "INTERMEDIATE"
        }
      ],
      "education": [
        {
          "institution": "[school]",
          "diploma": "[degree]",
          "startDate": "YYYY-MM",
          "endDate": "YYYY-MM",
          "description": "[brief description]",
          "location": "[city, state]"
        }
      ],
      "experience": [
        {
          "position": "[title]",
          "enterprise": "[company]",
          "startDate": "YYYY-MM",
          "endDate": "YYYY-MM",
          "description": "[one sentence description]",
          "location": "[city, state]"
        }
      ]
    }`;

    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${MODEL_NAME}`,
      {
        inputs: prompt + "\n\nResume Text: " + text.substring(0, 2000),
        parameters: {
          max_new_tokens: MAX_NEW_TOKENS,
          return_full_text: false,
          temperature: 0.3,
          max_length: 2000,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Raw API response:", response.data);

    // Extract the generated text from the response
    const resultText = response.data[0]?.generated_text || "";
    console.log("Generated text:", resultText);
    
    return extractFields(resultText);
  } catch (error: unknown) {
    console.error("Error in resumeToJsonParser:", error);
    if (error instanceof Error) {
      throw new Error("Failed to process resume: " + error.message);
    }
    throw new Error("Failed to process resume: Unknown error");
  }
};
