import React, { useState } from 'react';
import { AddCV } from './AddCV';
import { parseCV } from '../../../../services/cv-parser.service';
import { toast } from 'react-hot-toast';

const ResumeForm: React.FC = () => {
  const [isParsingCV, setIsParsingCV] = useState(false);
  const [showParsedData, setShowParsedData] = useState(false);
  const [parsedData, setParsedData] = useState<any>(null);

  const handleCVUpload = async (file: File) => {
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
      toast.error('Please upload a PDF, DOCX, or text-based file (TXT, CSV, HTML, XML, RTF).');
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB.');
      return;
    }

    try {
      setIsParsingCV(true);
      const parsedData = await parseCV(file);
      setParsedData(parsedData);
      setShowParsedData(true);
      toast.success('CV uploaded and parsed successfully!');
    } catch (error) {
      console.error('Error parsing CV:', error);
      toast.error('Failed to parse CV. Please try again.');
    } finally {
      setIsParsingCV(false);
    }
  };

  return (
    <div className="resume-outer">
      <div className="form-group">
        <label>Upload Your CV (This will start the resume parsing process and override your current resume)</label>
        <div className="form-group col-lg-6 col-md-12">
          <AddCV 
            onUpload={handleCVUpload} 
            isLoading={isParsingCV}
            showParsedData={showParsedData}
            setShowParsedData={setShowParsedData}
            parsedData={parsedData}
            setParsedData={setParsedData}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeForm; 