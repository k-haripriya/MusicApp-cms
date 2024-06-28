import React from 'react'
import { Navigate } from 'react-router-dom';
import { ProtectedRouteType } from '../Types/Types';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Reducers';

const ProtectedRoutes:React.FC<ProtectedRouteType>=({children}) => {
  const isAuthenticated = useSelector((state:RootState)=>state.auth.isAuthenticated);
  return (
    isAuthenticated ? <>{children}</>: <Navigate to='/'/>
  )
}

export default ProtectedRoutes