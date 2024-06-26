import React from 'react'
import styles from './styles.module.scss'
import { TextType } from '../../../Types/Types'
import classNames from 'classnames';

const LargeText:React.FC<Partial<TextType>> = (props) => {
 const { text, className }  = props;
  return (
    <p className={classNames(styles.largeText,className)}>{text}</p>
  )
}

export default LargeText