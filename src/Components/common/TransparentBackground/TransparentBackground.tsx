import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { transparentContainerType } from '../../../Types/Types'

const TransparentBackground:React.FC<transparentContainerType> = (props) => {
  const { className,children} = props; 
  return (
    <div className={classNames(styles.container,className)} >
       {children}
    </div>
  )
}

export default TransparentBackground