import React, { useState } from 'react'
import Button from '../../../Components/common/Button/Button'
import styles from './styles.module.scss'
import AddAlbumsModal from './AddAlbumsModal/AddAlbumsModal';
import ListAllAlbums from './ListAllAlbums/ListAllAlbums';

const SongsManagement = () => {
  const [ getAddAlbumModal, setAlbumModal ] = useState(false);
  const handleAddSong = () =>{
    setAlbumModal(!getAddAlbumModal);
  }
  return (
    <>
    <Button name={'Add Album'} onClick={()=>handleAddSong()} className={styles.buttonstyles} textStyle={styles.buttontext}/>
      <ListAllAlbums/>
      {
        getAddAlbumModal && <AddAlbumsModal closeModal={handleAddSong}/>
      }
    </>
     
  )
}

export default SongsManagement