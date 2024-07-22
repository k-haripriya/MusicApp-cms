import React from 'react'
import styles from './styles.module.scss'
import { Images } from '../../../constants/Images'
import LargeText from '../../common/Text/LargeText'
import MenuOptionTile from './MenuOptionTile'
import { IMenuList, ISideBar } from '../../../Types/Types'
import NormalText from '../../common/Text/NormalText'

const SideBar:React.FC<ISideBar>= (props) => {
    const { handleOutletNavigation } = props;
    
  const menuList:IMenuList[] = [
    {
        name:'DashBoard',
        screenName:'/home'
    },
    {
        name:'Songs Management',
        screenName:'songs'
    },
    {
        name:'Users Management',
        screenName:'dashboard'
    },
    {
        name:'Artists Management',
        screenName:'dashboard'
    },
    {
        name:'Playlists Management',
        screenName:'dashboard',
    }
  ]
  return (
    <div className={styles.container}>
        <img src={Images.logo} className={styles.logo}/>
        <div className={styles.menuOptions}>
        {
            menuList.map((item)=>{
                return(<>
                <MenuOptionTile item={item} handleOutletNavigation={handleOutletNavigation}/>
                </>)
            })
        }
        </div>
        
        <div className={styles.logoutcontainer}>
            <img src={Images.logout} className={styles.logoutbtn}/>
            <NormalText text='Logout' className={styles.menuOptionText}/>
        </div>
    </div>
  )
}

export default SideBar