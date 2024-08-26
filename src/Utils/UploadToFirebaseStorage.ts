import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase.config'
import { IUploadImagetoStorage } from "../Types/Types";
export const UploadImagestoStorage = async (props:IUploadImagetoStorage) =>{
    const { directoryName, file, filename} = props;
    const storageRef = ref(storage, `${directoryName}/${filename}`);
    return new Promise((resolve,reject)=>{
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve( downloadURL);
          }).catch((err)=>{
            console.log("error",err)
            reject(err);
          });
        }
      );})
}