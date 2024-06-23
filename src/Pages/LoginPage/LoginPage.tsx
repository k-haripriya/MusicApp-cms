import React from 'react'
import styles from './styles.module.scss'
import { videos } from '../../constants/videos'
import TransparentBackground from '../../Components/common/TransparentBackground/TransparentBackground'


const LoginPage = () => {
  return (
   <div className={styles.container}>
    <video autoPlay loop muted className={styles.videocontainer}>
      <source src={videos.frontpage} />
    </video>
    <TransparentBackground/>

   </div>
  )
}

export default LoginPage