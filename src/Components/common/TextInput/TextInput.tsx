import React from 'react'
import styles from './styles.module.scss'
import { TextInputType } from '../../../Types/Types'
import classNames from 'classnames';

const TextInput:React.FC<TextInputType>= (props) => {
  const { placeholder, className } = props;
  return (
        <input placeholder={placeholder} className={classNames(styles.container,className)}  />
  )
}

export default TextInput