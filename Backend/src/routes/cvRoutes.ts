import express from 'express';
import multer from 'multer';
import {resumeToJsonParser} from '../utils/resumeToJsonParser';
const storage = multer.memoryStorage();
import fs from 'fs';
import pdf from 'pdf-parse';
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only PDF files are allowed'));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

const router = express.Router();

// Route for CV parsing
router.post('/parse', upload.single('file'), async (req, res) => {
  try {
           const filePath = `public/resumes/${req.file?.originalname}`;
           fs.writeFileSync(filePath, req.file?.buffer as Buffer); // Save the file to the public/resumes directory
            // Extract text based on file type
           let dataBuffer = fs.readFileSync(filePath as string);      
          // you can extract text from a file too, like so:
           await pdf(dataBuffer).then(async function(data: any) {
            const text = data.text;
            console.log(text);
            let parsedData = await resumeToJsonParser(text as string);
            console.log("################################################# AI RESULT");
            console.log(parsedData);
            res.status(200).json(parsedData);
          });
         // text = await extractor.extractText({ input: path, type: 'file' })
         // const parsedData = await parseCV(filePath); 
  } catch (error) {
    res.status(500).json({ message: 'Error parsing CV', error: error as Error });
  }
});

export default router; 