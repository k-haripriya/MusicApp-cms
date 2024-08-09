import React, { useState } from 'react'
import TransparentBackground from '../../../../Components/common/TransparentBackground/TransparentBackground'
import styles from './styles.module.scss'
import AddPopup from '../../../../Components/common/Popup/AddPopup'
import LargeText from '../../../../Components/common/Text/LargeText'
import TextInput from '../../../../Components/common/TextInput/TextInput'
import Button from '../../../../Components/common/Button/Button'
import { IAddAlbumsModal } from '../../../../Types/Types'
import FileInput from '../../../../Components/common/FileInput/FileInput'

const AddAlbumsModal:React.FC<IAddAlbumsModal> = (props) => {
  const {closeModal} = props;
  const [ getTitle, setTitle ] = useState('');
  const [ getArtist, setArtist ] = useState('');
  const [ getCoverImage, setCoverImage ] = useState('');
  const [ getReleaseDate, setReleaseDate ] = useState('');
  const [ getGenre, setGenre ] = useState('');
  const AlbumFields = [
    {
      name : "Title",
      value : getTitle,
      setValue : setTitle,
    },
    {
      name : "Artist Name",
      value : getArtist,
      setValue : setArtist,
    },
    {
      name : "Cover Image",
      value : getCoverImage,
      setValue : setCoverImage,
    },
    {
      name : "Release Date",
      value : getReleaseDate,
      setValue : setReleaseDate,
    },
    {
      name : "Genre",
      value : getGenre,
      setValue : setGenre,
    }
  ]
  return (
    <TransparentBackground className={styles.container}>
       <AddPopup className={styles.popupContainer} closeModal={closeModal}>
        <LargeText text={'Add Album'} className={styles.titleText}/>
        <div className={styles.fieldsContainer}>
        {
          AlbumFields.map((item,index)=>{
            return(
              item.name === "Cover Image" ? <FileInput/>:
              <TextInput placeholder={`Please enter ${item.name}`} value={item.value} setValue={item.setValue} className={styles.fields} key={index}/>
            )
          })
        }
        </div>
        <Button name='Submit' onClick={()=>{}} className={styles.button} textStyle={styles.buttonText}/>
        </AddPopup>
    </TransparentBackground>
  )
}

export default AddAlbumsModal