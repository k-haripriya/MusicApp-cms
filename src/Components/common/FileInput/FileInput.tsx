import React, { useRef } from 'react'
import styles from './styles.module.scss'
import NormalText from '../Text/NormalText';
import { IFileInput } from '../../../Types/Types';

const FileInput:React.FC<IFileInput> = (props) => {
  const { setValue, setFile } = props;
    const fileInputRef = useRef<HTMLInputElement  | null>(null);
    const handleButtonClick = () => {
         fileInputRef?.current?.click();
      };
    
      const handleFileChange = (event:any) => {
        if(event.target.files[0]?.name)
        {
          setValue(event.target.files[0].name);
          setFile(event.target.files[0])
        }
      };
  return (
    <div className={styles.container}>
    <button
      type="button"
      onClick={handleButtonClick}
      className={styles.button}
    >
      Choose File
    </button>
    <input
      type="file"
      ref={fileInputRef}
      className={styles.input}
      onChange={handleFileChange}
    />
  </div>
  )
}

export default FileInput