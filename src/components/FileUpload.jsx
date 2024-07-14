import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onFileUpload, disabled }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      onFileUpload(data);
    };
    reader.readAsArrayBuffer(file);
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled,
    accept: '.xlsx, .xls'
  });

  return (
    <div {...getRootProps({ className: `dropzone ${disabled ? 'disabled' : ''}` })}>
      <input {...getInputProps()} disabled={disabled} />
      {
        isDragActive ?
          <p>Drop the files here...</p> :
          <p>Drag 'n' drop an Excel file here, or click to select one</p>
      }
    </div>
  );
};

export default FileUpload;
