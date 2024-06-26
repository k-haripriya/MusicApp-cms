import React from 'react'
import NormalText from '../../common/Text/NormalText'
import styles from './styles.module.scss'
import LargeText from '../../common/Text/LargeText'
import { Strings } from '../../../constants/Strings'
import TextInput from '../../common/TextInput/TextInput'
import Button from '../../common/Button/Button'

const LoginContainer = () => {
  return (
    <div className={styles.container}>
      <LargeText text={Strings.common.appname} className={styles.large}/>
      <TextInput placeholder='Enter You Email' className={styles.textInputStyle}/>
      <TextInput placeholder='Enter Your Password' className={styles.textInputStyle}/>
      <Button name='Login' onClick={()=>{}} className={styles.buttonStyles} textStyle={styles.buttonText}/>
      <NormalText text={Strings.common.appSlogan} className={styles.normal}/>
    </div>
  )
}

export default LoginContainer