import React from 'react'
import { ICard } from '../../../Types/Types'
import styles from './styles.module.scss'
import NormalText from '../Text/NormalText';
import { EViewType } from '../../../Enums/Enums';

const Card:React.FC<ICard> = (props) => {
  const { data, getAignmentType} = props;
  console.log()
  return (
    <div className={getAignmentType===EViewType.DOCK ? styles.container:styles.stackcontainer}>
      <img src={data?.coverimg} className={styles.image}/>
      <NormalText text={data.title} className={styles.title}/>
      <NormalText text={data.artist} className={styles.artist}/>

    </div>
  )
}

export default Card