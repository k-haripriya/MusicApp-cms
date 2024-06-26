import React from 'react'
import styles from './styles.module.scss'
import { Buttonprops } from '../../../Types/Types'
import classNames from 'classnames';

const Button:React.FC<Buttonprops> = (props) => {
  const { name, onClick, className, textStyle} = props;
  return (
    <button className={classNames(styles.container,className)} onClick={()=>console.log("button clicked")}>
        <p className={textStyle}>Login</p>
      </button>
  )
}

export default Button