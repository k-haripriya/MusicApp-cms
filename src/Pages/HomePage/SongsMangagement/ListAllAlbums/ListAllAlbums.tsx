import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../Redux/Reducers'
import Card from '../../../../Components/common/Card/Card';
import styles from './styles.module.scss'

const ListAllAlbums = () => {
 const allalbums = useSelector((state:RootState)=>state.album);
  return (
    <div className={styles.container}>
    {allalbums.albums.map((item,index)=>{
        return <Card data={item} key={index}/>
    })}
    </div>
  )
}

export default ListAllAlbums