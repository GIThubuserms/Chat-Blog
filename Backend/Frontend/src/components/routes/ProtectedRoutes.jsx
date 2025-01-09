import React from 'react'
import { useAuth } from '../../context/Authcontext'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
  const {userdata}=useAuth()
  console.log(userdata);
  return userdata?<Outlet/>:<Navigate to={'/login'}/>
}

export default ProtectedRoutes
