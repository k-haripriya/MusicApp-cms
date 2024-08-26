import React from 'react'
import ReactJsAlert from "reactjs-alert"
import { IAlertPopup } from '../../../Types/Types'

const AlertPopup:React.FC<IAlertPopup>= (props) => {
  const { title, type, handleClose} =props;
  return (
    <ReactJsAlert
  status={true} 
  type={type} 
  title={title}
  Close={() => {handleClose()}}
/>
  )
}

export default AlertPopup