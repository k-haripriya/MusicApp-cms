import React, { useState } from 'react'
import NormalText from '../../common/Text/NormalText'
import styles from './styles.module.scss'
import LargeText from '../../common/Text/LargeText'
import { Strings } from '../../../constants/Strings'
import TextInput from '../../common/TextInput/TextInput'
import Button from '../../common/Button/Button'
import { LoginAPI } from '../../../API/LoginApis'

const LoginContainer = () => {
  const [ getUserEmail, setUserEmail ] = useState('');
  const [ getUserPassword, setUserPassword ] = useState('');
  const handleSubmit = async () =>{
    const data = {
      email:getUserEmail,
      password:getUserPassword
    }
    try{
      const res = await LoginAPI(data);
      console.log(JSON.stringify(res))
    }catch(err)
    {
      console.log("Error in calling login Api",err)
    }
  }
  return (
    <div className={styles.container}>
      <LargeText text={Strings.common.appname} className={styles.large}/>
      <TextInput placeholder='Enter You Email' className={styles.textInputStyle} value={getUserEmail} setValue={setUserEmail}/>
      <TextInput placeholder='Enter Your Password' className={styles.textInputStyle} value={getUserPassword} setValue={setUserPassword}/>
      <Button name='Login' onClick={()=>{handleSubmit()}} className={styles.buttonStyles} textStyle={styles.buttonText}/>
      <NormalText text={Strings.common.appSlogan} className={styles.normal}/>
    </div>
  )
}

export default LoginContainer