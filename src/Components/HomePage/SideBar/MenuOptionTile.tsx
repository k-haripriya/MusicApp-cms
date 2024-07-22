import React from 'react'
import { IMenuTile, ISideBar } from '../../../Types/Types'
import styles from './styles.module.scss'
import NormalText from '../../common/Text/NormalText'

const MenuOptionTile:React.FC<IMenuTile> = (props) => {
    const {item,handleOutletNavigation} = props
  return (
    <div className={styles.menuOptionContainer} onClick={()=>{handleOutletNavigation(item.screenName,item.name)}}>
        <NormalText text={item.name} className={styles.menuOptionText}/>
    </div>
  )
}

export default MenuOptionTile