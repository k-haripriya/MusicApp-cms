import React from 'react'
import styles from './styles.module.scss'
import { IAddPopup } from '../../../Types/Types'
import classNames from 'classnames';
import { ReactComponent as CloseIcon } from '../../../assets/icons/closeicon.svg'

const AddPopup:React.FC<IAddPopup> = (props) => {
  const { children,className,closeModal } = props;
  return (
    <div className={classNames(styles.container,className)}>
      <CloseIcon height={15} width={15} style={{alignSelf:'flex-end'}} onClick={()=>{closeModal()}}/>
      {children}
      </div>
  )
}

export default AddPopup