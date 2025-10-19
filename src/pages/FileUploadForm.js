import React, { useState } from 'react';

const formStyles = {
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  maxWidth: '400px',
  margin: '20px auto',
  textAlign: 'center'
};

const buttonStyles = {
  marginTop: '15px',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const FileUploadForm = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onFileUpload(file);
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div style={formStyles}>
      <h2>Upload Dataset (CSV/Excel)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".csv, .xlsx, .xls"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button type="submit" style={buttonStyles}>
          Analyze Data
        </button>
      </form>
    </div>
  );
};

export default FileUploadForm;
