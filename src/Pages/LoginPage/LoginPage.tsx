import React, { useState } from 'react'
import styles from './styles.module.scss'
import { videos } from '../../constants/videos'
import TransparentBackground from '../../Components/common/TransparentBackground/TransparentBackground'
import VideoPlayer from '../../Components/common/VideoPlayer/VideoPlayer'
import LoginContainer from '../../Components/LoginPage/LoginContainer/LoginContainer'
import { useDispatch } from 'react-redux'
import { LoginAPI } from '../../API/LoginApis'
import jwtDecode from 'jwt-decode'
import { loginSuccess } from '../../Redux/Slices/AuthSlice'
import { useNavigate } from 'react-router'
import { sendLoginMailAPI } from '../../API/MailApis'


const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ getUserEmail, setUserEmail ] = useState('');
  const [ getUserPassword, setUserPassword ] = useState('');

  const sendMailToTheUser = async(mail:string) =>{
    try{
      const response = await sendLoginMailAPI(mail);
    }catch(err)
    {
      console.log("Error in sending mail",err)
    }
  }
  const handleSubmit = async () =>{
    const data = {
      email:getUserEmail,
      password:getUserPassword
    }
    try{
      const res = await LoginAPI(data);
      console.log(JSON.stringify(res))
      const decodedData:any = jwtDecode(res.access);
      let payload = {
        authToken:res.access,
        refreshToken:res.refresh,
        user:{
          username:decodedData.username,
          email:decodedData.email
        }
      }
      dispatch(loginSuccess(payload));
      // sendMailToTheUser(decodedData.email);
      navigate('/home');
      
    }catch(err)
    {
      console.log("Error in calling login Api",err)
    }
  }
  return (
   <div className={styles.container}>
    
    <VideoPlayer video={videos.frontpage} className={styles.videocontainer}/>
    <TransparentBackground className={styles.transparentcontainer}>
      <LoginContainer getUserEmail={getUserEmail} setUserEmail={setUserEmail} getUserPassword={getUserPassword} setUserPassword={setUserPassword} handleSubmit={handleSubmit}/>
    </TransparentBackground>

   </div>
  )
}

export default LoginPage