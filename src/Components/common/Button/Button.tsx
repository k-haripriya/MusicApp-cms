import React from 'react'
import styles from './styles.module.scss'

const Button = () => {
  return (
    <button className={styles.container} onClick={()=>console.log("button clicked")}>
        <p>Login</p>
      </button>
  )
}

export default Button