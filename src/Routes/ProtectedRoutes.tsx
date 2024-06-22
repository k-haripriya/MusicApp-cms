import React from 'react'
import { Navigate } from 'react-router-dom';
import { ProtectedRouteType } from '../Types/Types';

const ProtectedRoutes:React.FC<ProtectedRouteType>=({children}) => {
  const isAuthenticated = false;
  return (
    isAuthenticated ? <>{children}</>: <Navigate to='/'/>
  )
}

export default ProtectedRoutes