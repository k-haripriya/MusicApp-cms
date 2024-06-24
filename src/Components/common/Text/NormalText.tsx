import React from 'react'
import styles from './styles.module.scss'
import { TextType } from '../../../Types/Types'
import classNames from 'classnames';

const NormalText:React.FC<TextType> = (props) => {
 const { text, className }  = props;
  return (
    <p className={classNames(styles.normalText,className)}>{text}</p>
  )
}

export default NormalText