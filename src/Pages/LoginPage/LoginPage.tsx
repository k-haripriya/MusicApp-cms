import React from 'react'
import './styles.modules.scss'
import { Images } from '../../constants/Images'

const LoginPage = () => {
  return (
    <>
    <div className='container'>
      <div className='leftcontainer'>
        <img src={Images.logo} className='logo'/>
        <h1 className='appname'>RythMix</h1>
        <div className="circle">
          <img src={Images.silhouette}/>
        </div>
        <p className='slogan'>Make Every Moment Count</p>
      </div>
      <div className='rightcontainer'>

      </div>
    </div>
    </>
  )
}

export default LoginPage