import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutSuccess } from '../../Redux/Slices/AuthSlice'
import SideBar from '../../Components/HomePage/SideBar/SideBar'
import { Outlet, useNavigate } from 'react-router'
import styles from './styles.module.scss'

const HomePage = () => {
  const navigate = useNavigate();
  const handleOutletNavigation = (screenName:string) =>{
    navigate(screenName);
  }
  return (
    <div className={styles.container}>
      <SideBar handleOutletNavigation={handleOutletNavigation}/>
      <Outlet/>
    </div>
  )
}

export default HomePage