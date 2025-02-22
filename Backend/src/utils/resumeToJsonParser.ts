require("dotenv").config();
const axios = require("axios");

const MODEL_NAME = process.env.MODEL_NAME;
const MAX_NEW_TOKENS = 500;

const extractFields = (text: string) => {
  const fields = {
    name: text.match(/Name:\s*(.+?)(\n|$)/i)?.[1]?.trim() || "",
    email: text.match(/Email:\s*(.+?)(\n|$)/i)?.[1]?.trim() || "",
    phone: text.match(/Phone:\s*(.+?)(\n|$)/i)?.[1]?.trim() || "",
    address: text.match(/Address:\s*([\s\S]+?)(?=\n\S+|$)/i)?.[1]?.trim() || "",
    skills: "",
    education: "",
    work_experience: ""
  };

  // Special handling for multi-line fields
  fields.skills = text.match(/Skills:\s*([\s\S]+?)(?=\n\S+|$)/i)?.[1]?.trim() || "";
  fields.education = text.match(/Education:\s*([\s\S]+?)(?=\n\S+|$)/i)?.[1]?.trim() || "";
  fields.work_experience = text.match(/Work Experience:\s*([\s\S]+?)(?=\n\S+|$)/i)?.[1]?.trim() || "";

  // Convert string fields to arrays
  return {
    ...fields,
    skills: fields.skills ? fields.skills.split(',').map(s => s.trim()).filter(s => s) : [],
    education: fields.education ? fields.education.split('\n').map(e => e.trim()).filter(e => e) : [],
    work_experience: fields.work_experience ? fields.work_experience.split(';').map(w => w.trim()).filter(w => w) : []
  };
};

export const resumeToJsonParser = async (text: string) => {
  try {


    const prompt = `<|system|>
    Extract the following information from the resume text below. 
    Respond STRICTLY in this format:
    Name: [full name]
    Email: [email address]
    Phone: [phone number with country code]
    Address: [complete mailing address]
    Skills: [comma-separated list of technical skills]
    Education: [highest education degree]
    Work Experience: [most recent job position and company]
    
    If any information is missing, leave the line out completely.
    </s>
    <|user|>
    Resume Text: ${text.substring(0, 3000)} [truncated if too long]
    </s>
    <|assistant|>`;

    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${MODEL_NAME}`,
      {
        inputs: prompt,
        parameters: {
          max_new_tokens: MAX_NEW_TOKENS,
          return_full_text: false,
          temperature: 0.2, // For more focused responses
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("RESPONSE #################################################");
    console.log(response.data);
    console.log(response); 

    const resultText = response.data[0]?.generated_text || "";
    const extractedFields = extractFields(resultText);

    return extractedFields;
  } catch (error) {
    return error;
    throw new Error("Failed to process resume");
  }

  }
