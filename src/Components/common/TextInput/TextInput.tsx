import React, { ChangeEvent } from 'react'
import styles from './styles.module.scss'
import { TextInputType } from '../../../Types/Types'
import classNames from 'classnames';

const TextInput:React.FC<TextInputType>= (props) => {
  const { placeholder, className, value, setValue } = props;
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  return (
        <input placeholder={placeholder} className={classNames(styles.container,className)} value={value} onChange={handleTextChange} />
  )
}

export default TextInput