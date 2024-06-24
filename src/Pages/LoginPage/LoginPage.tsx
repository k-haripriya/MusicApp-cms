import React from 'react'
import styles from './styles.module.scss'
import { videos } from '../../constants/videos'
import TransparentBackground from '../../Components/common/TransparentBackground/TransparentBackground'
import VideoPlayer from '../../Components/common/VideoPlayer/VideoPlayer'
import LoginContainer from '../../Components/LoginPage/LoginContainer/LoginContainer'


const LoginPage = () => {
  return (
   <div className={styles.container}>
    
    <VideoPlayer video={videos.frontpage} className={styles.videocontainer}/>
    <TransparentBackground className={styles.transparentcontainer}>
      <LoginContainer/>
    </TransparentBackground>

   </div>
  )
}

export default LoginPage