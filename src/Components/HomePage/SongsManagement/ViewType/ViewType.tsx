import React from 'react'
import styles from './styles.module.scss'
import { EViewType } from '../../../../Enums/Enums'
import { Images } from '../../../../constants/Images'
import { IViewType } from '../../../../Types/Types'
import classNames from 'classnames'

const ViewType:React.FC<IViewType> = (props) => {
  const { handleViewType, getAlignmentType } = props;
  const data = [
    {
        name:EViewType.STACK,
        icon:Images.stack,
    },
    {
        name:EViewType.DOCK,
        icon:Images.dock
    }
  ]
  return (
    <div className={styles.container}>
       {data.map((item,index)=>{
        return(
                <img src={item.icon} className={classNames(getAlignmentType === item.name ? [styles.icon,styles.activeIcon]:styles.icon)} onClick={()=>handleViewType(item.name)}/>
        )
       })}
    </div>
  )
}

export default ViewType