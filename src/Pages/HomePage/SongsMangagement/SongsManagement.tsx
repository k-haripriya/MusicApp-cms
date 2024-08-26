import React, { useEffect, useState } from 'react'
import Button from '../../../Components/common/Button/Button'
import styles from './styles.module.scss'

import { getAlbumData } from '../../../Redux/Slices/AlbumSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../Redux/Store';

import { EViewType } from '../../../Enums/Enums';
import ListAllAlbums from '../../../Components/HomePage/SongsManagement/ListAllAlbums/ListAllAlbums';
import AddAlbumsModal from '../../../Components/HomePage/SongsManagement/AddAlbumsModal/AddAlbumsModal';
import ViewType from '../../../Components/HomePage/SongsManagement/ViewType/ViewType';
import LargeText from '../../../Components/common/Text/LargeText';

const SongsManagement = () => {
  const [ getAddAlbumModal, setAlbumModal ] = useState(false);
  const [ getAlignmentType, setAlignmentType ] = useState(EViewType.DOCK);
  const dispatch = useDispatch<AppDispatch>();
  const handleAddSong = () =>{
    setAlbumModal(!getAddAlbumModal);
  }
  const handleViewType = (type:string) =>{
    setAlignmentType(type);
  }
  useEffect(()=>{
    dispatch(getAlbumData());
 },[getAddAlbumModal])
  return (
    <>
    <div className={styles.container}>
      <LargeText text='All Albums' className={styles.headerText}/>
      <div>
      <Button name={'Add Album'} onClick={()=>handleAddSong()} className={styles.buttonstyles} textStyle={styles.buttontext}/>
      <ViewType handleViewType={handleViewType} getAlignmentType={getAlignmentType}/>
      </div>
    </div>
    <ListAllAlbums getAlignmenttype={getAlignmentType}/>

      {
        getAddAlbumModal && <AddAlbumsModal closeModal={handleAddSong} />
      }
    </>
     
  )
}

export default SongsManagement