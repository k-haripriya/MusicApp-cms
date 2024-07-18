import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutSuccess } from '../../Redux/Slices/AuthSlice'

const HomePage = () => {
  const dispatch = useDispatch()
  return (
    <div>
       <button onClick={()=>dispatch(logoutSuccess())}>Logout</button>
    </div>
  )
}

export default HomePage