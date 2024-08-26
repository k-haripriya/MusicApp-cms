import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../Redux/Reducers'
import Card from '../../../common/Card/Card';
import styles from './styles.module.scss'
import { IAddalbumPayload, IListAlbums } from '../../../../Types/Types';

const ListAllAlbums:React.FC<IListAlbums> = (props) => {
  const { getAlignmenttype } = props;
 const allalbums = useSelector((state:RootState)=>state.album);
 
  return (
    <div className={styles.container}>
    {allalbums.albums.map((item:IAddalbumPayload,index)=>{
        return <Card data={item} key={index} getAignmentType={getAlignmenttype}/>
    })}
    </div>
  )
}

export default ListAllAlbums