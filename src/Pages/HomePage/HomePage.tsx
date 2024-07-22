import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutSuccess } from '../../Redux/Slices/AuthSlice'
import SideBar from '../../Components/HomePage/SideBar/SideBar'
import { Outlet, useNavigate } from 'react-router'
import styles from './styles.module.scss'
import Header from '../../Components/HomePage/Header/Header'
import { setHeader } from '../../Redux/Slices/Headerslice'

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOutletNavigation = (screenName:string,header:string) =>{
    navigate(screenName);
    dispatch(setHeader({name:header}));
  }
  return (
    <div className={styles.container}>
      <div>
      <SideBar handleOutletNavigation={handleOutletNavigation}/>
      </div>
      <div className={styles.rightcontainer}>
        <Header/>
        <Outlet/>

      </div>
    </div>
  )
}

export default HomePage