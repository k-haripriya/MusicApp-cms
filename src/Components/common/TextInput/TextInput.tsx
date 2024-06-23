import React from 'react'
import styles from './styles.module.scss'
import { TextInputType } from '../../../Types/Types'

const TextInput:React.FC<TextInputType>= (props) => {
  const { placeholder } = props;
  return (
        <input placeholder={placeholder} className={styles.container} />
  )
}

export default TextInput