import React from 'react'
import './styles.modules.scss'
import { Images } from '../../constants/Images'

const LoginPage = () => {
  return (
    <>
    <div className='container'>
      <div className='leftcontainer'>
        <img src={Images.logo} className='logo'/>
        <p className='appname'>RythMix</p>
      </div>
      <div className='rightcontainer'>

      </div>
    </div>
    </>
  )
}

export default LoginPage