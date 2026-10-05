import React, { useState, FormEvent, ChangeEvent } from 'react';

const FileUploadPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/uploadFile', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        setMessage(`Upload failed: ${errorText}`);
        return;
      }

      const resultText = await response.text();
      setMessage(resultText || 'File uploaded successfully.');
    } catch (err) {
      setMessage(`Upload error: ${(err as Error).message}`);
    }
  };

  const handleReset = async () => {
    try {
      const response = await fetch('/uploadFile', { method: 'GET' });
      if (!response.ok) {
        const errorText = await response.text();
        setMessage(`Reset failed: ${errorText}`);
        return;
      }
      const resultText = await response.text();
      setMessage(resultText || 'Reset successful.');
    } catch (err) {
      setMessage(`Reset error: ${(err as Error).message}`);
    }
    setSelectedFile(null);
  };

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h2 className="form-label">Upload file</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="fileInput" className="form-label">
              Select file
            </label>
            <input
              id="fileInput"
              type="file"
              name="file"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Upload file
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleReset}
              style={{ marginLeft: '0.5rem' }}
            >
              Reset
            </button>
          </div>
        </form>
        {message && (
          <div className="alert-box" role="alert">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadPage;