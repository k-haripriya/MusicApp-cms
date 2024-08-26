import React from 'react'
import { ICard } from '../../../Types/Types'
import styles from './styles.module.scss'
import NormalText from '../Text/NormalText';

const Card:React.FC<ICard> = (props) => {
  const { data } = props;
  return (
    <div className={styles.container}>
      <img src={data?.coverimg} className={styles.image}/>
      <NormalText text={data.title} className={styles.title}/>
      <NormalText text={data.artist} className={styles.artist}/>

    </div>
  )
}

export default Card