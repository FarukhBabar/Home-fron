import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const ProtectedRoutes = () => {
    const user = localStorage.getItem('user')
    return user ? <Outlet/> : <Navigate to='/log'/>
  
}

export default ProtectedRoutes