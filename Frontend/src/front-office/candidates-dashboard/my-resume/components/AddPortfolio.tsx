import React, { useState, ChangeEvent } from 'react';

const AddPortfolio: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
    }
  };

  return (
    <div className="uploading-outer">
      <div className="uploadButton">
        <input
          className="uploadButton-input"
          type="file"
          name="attachments[]"
          accept="image/*, application/pdf"
          id="upload"
          multiple
          onChange={handleFileChange}
        />
        <label className="uploadButton-button ripple-effect" htmlFor="upload">
          Add Portfolio
        </label>
        <span className="uploadButton-file-name">
          {files.length > 0 && `${files.length} file(s) selected`}
        </span>
      </div>
    </div>
  );
};

export default AddPortfolio; 