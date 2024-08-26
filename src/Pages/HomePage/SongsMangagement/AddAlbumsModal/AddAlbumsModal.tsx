import React, { useState } from "react";
import TransparentBackground from "../../../../Components/common/TransparentBackground/TransparentBackground";
import styles from "./styles.module.scss";
import AddPopup from "../../../../Components/common/Popup/AddPopup";
import LargeText from "../../../../Components/common/Text/LargeText";
import TextInput from "../../../../Components/common/TextInput/TextInput";
import Button from "../../../../Components/common/Button/Button";
import {
  IAddalbumPayload,
  IAddAlbumsModal,
  IUploadImagetoStorage,
} from "../../../../Types/Types";
import FileInput from "../../../../Components/common/FileInput/FileInput";
import NormalText from "../../../../Components/common/Text/NormalText";
import { UploadImagestoStorage } from "../../../../Utils/UploadToFirebaseStorage";
import AlertPopup from "../../../../Components/common/AlertMessages/AlertPopup";
import { AddAlbum } from "../../../../API/SongManagementApis";
import { useDispatch, useSelector } from "react-redux";
import { postAlbum } from "../../../../Redux/Slices/AlbumSlice";
import { AppDispatch } from "../../../../Redux/Store";
import { RootState } from "../../../../Redux/Reducers";
import Loader from "../../../../Components/common/Loader/Loader";
import { unwrapResult } from "@reduxjs/toolkit";

const AddAlbumsModal: React.FC<IAddAlbumsModal> = (props) => {
  const { closeModal } = props;
  const dispatch = useDispatch<AppDispatch>();
  const [getTitle, setTitle] = useState("");
  const [getArtist, setArtist] = useState("");
  const [getCoverImage, setCoverImage] = useState("");
  const [getReleaseDate, setReleaseDate] = useState("");
  const [getGenre, setGenre] = useState("");
  const [getCoverImageLink, setCoverImageLink] = useState();
  const [ getAlertType,setAlertType ] = useState("");
  const [ getAlertTitle, setAlertTitle ] = useState("");
  const [ getAlertPopup, setAlertPopup] = useState(false);
  const { loading , error } = useSelector((state:RootState)=>state.album);
  const AlbumFields = [
    {
      name: "Title",
      value: getTitle,
      setValue: setTitle,
    },
    {
      name: "Artist Name",
      value: getArtist,
      setValue: setArtist,
    },
    {
      name: "Release Date",
      value: getReleaseDate,
      setValue: setReleaseDate,
      type:'date'
    },
    {
      name: "Genre",
      value: getGenre,
      setValue: setGenre,
    },
    {
      name: "Cover Image",
      value: getCoverImage,
      setValue: setCoverImage,
    },
  ];

  const handleSubmit = async () => {
    if(getTitle!=="" && getArtist!=="" && getGenre!=="" && getCoverImage!=="" && getReleaseDate!=="")
    {
    if (getCoverImageLink) {
      
      let payload: IUploadImagetoStorage = {
        directoryName: "AlbumCoverImages",
        filename: getCoverImage,
        file: getCoverImageLink,
      };
      try {
        const ImageURL = await UploadImagestoStorage(payload);
        if(typeof ImageURL === 'string')
        {
        const albumpayload:IAddalbumPayload = {
          title: getTitle,
          artist: getArtist,
          coverimg: ImageURL,
          release_date: getReleaseDate,
          genre: getGenre,
        };
      
      const resultAction = await dispatch(postAlbum(albumpayload)).unwrap();
    
     
  
      if (resultAction) {
        setTitle('');
        setArtist('');
        setCoverImage('');
        setGenre('');
        setReleaseDate('');
        setCoverImage('');
        
      } else {
        setAlertType("error");
        setAlertTitle("Something Went Wrong");
        setAlertPopup(true);
      }
        
    }
      } catch (err) {
        console.log("Error in uploading images", err);
      }
      
    }}
    else{
      setAlertType("error");
      setAlertTitle("Please Enter valid Details");
      setAlertPopup(true);
    }
  };
  const handlePopupClose =()=> {
    setAlertPopup(false);
  }
  return (
    <TransparentBackground className={styles.container}>
      <AddPopup className={styles.popupContainer} closeModal={closeModal}>
        <LargeText text={"Add Album"} className={styles.titleText} />
        <div className={styles.fieldsContainer}>
          {AlbumFields.map((item, index) => {
            return item.name === "Cover Image" ? (
              <>
                <div className={styles.fileTypeContainer}>
                  <NormalText
                    text={getCoverImage === '' ? "Choose your Cover Image":getCoverImage}
                    className={styles.filetypeText}
                  />
                  <FileInput
                    setValue={setCoverImage}
                    setFile={setCoverImageLink}
                  />
                </div>
              </>
            ) : (
              <div>
                <NormalText text={item.name} className={styles.fieldTitle}/>
              <TextInput
                placeholder={`Please enter ${item.name}`}
                value={item.value}
                setValue={item.setValue}
                className={styles.fields}
                key={index}
                type={item?.type}
              />
              </div>
            );
          })}
        </div>
        <Button
          name="Submit"
          onClick={() => handleSubmit()}
          className={styles.button}
          textStyle={styles.buttonText}
        />
      </AddPopup>
      {
        getAlertPopup && <AlertPopup title={getAlertTitle} type={getAlertType} handleClose={handlePopupClose}/>
      }
      {
        loading && <Loader/>
      }
      
    </TransparentBackground>
  );
};

export default AddAlbumsModal;
