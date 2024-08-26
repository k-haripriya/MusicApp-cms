import React from 'react'
import { ICard } from '../../../Types/Types'
import styles from './styles.module.scss'
import NormalText from '../Text/NormalText';
import { EViewType } from '../../../Enums/Enums';
import Button from '../Button/Button';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import classNames from 'classnames';

const Card:React.FC<ICard> = (props) => {
  const { data, getAignmentType} = props;
  console.log()
  return (
    <div className={getAignmentType===EViewType.DOCK ? styles.container:styles.stackcontainer}>
      <div className={styles.imageandname}>
      <img src={data?.coverimg} className={styles.image}/>
      <div className={styles.nameContainer}>
      <NormalText text={data.title} className={styles.title}/>
      <NormalText text={data.artist} className={styles.artist}/>
      </div>
      </div>
      <div className={styles.buttonView}>
      <Button name='Edit' className={styles.editbutton} onClick={()=>{}} textStyle={styles.buttonText}/>
      <Button name='Delete' className={classNames(styles.editbutton,styles.deleteButton)} onClick={()=>{}} textStyle={styles.buttonText}/>
      </div>


    </div>
  )
}

export default Card