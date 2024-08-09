import React, { useRef } from 'react'

const FileInput = () => {
    const fileInputRef = useRef<HTMLInputElement  | null>(null);
    const handleButtonClick = () => {
         fileInputRef?.current?.click();
      };
    
      const handleFileChange = (event:any) => {
        const fileName = event.target.files[0]?.name || 'No file chosen';
        console.log('Selected file:', fileName);
      };
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <button
      type="button"
      onClick={handleButtonClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#FFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginRight: '10px',
      }}
    >
      Choose File
    </button>
    {/* <span style={{ fontSize: '14px' }}>No file chosen</span> */}
    <input
      type="file"
      ref={fileInputRef}
      style={{ display: 'none' }}
      onChange={handleFileChange}
    />
  </div>
  )
}

export default FileInput