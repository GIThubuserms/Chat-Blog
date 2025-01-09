import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Authprovider} from './context/Authcontext.jsx'
import { createBrowserRouter, createRoutesFromElements,Navigate,Route, RouterProvider} from 'react-router-dom'
import Signup from './components/Signup/Signup.jsx'
import Login from './components/Login/Login.jsx'
import ProtectedRoutes from './components/routes/ProtectedRoutes.jsx'
import App from './App.jsx'
import { SocketProvider } from './context/SocketContext.jsx'
import { ToastContainer, toast } from 'react-toastify';

const isuserauth=localStorage.getItem('messenger')
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/signup" element={isuserauth?<Navigate to={'/'}/>:<Signup />} />
      <Route path="/login" element={isuserauth?<Navigate to={'/'}/>:<Login />} />
      <Route element={<ProtectedRoutes/>}>
      <Route path='/' element={<App/>}></Route>
    </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Authprovider>
    <ToastContainer/>
    <SocketProvider>
    <RouterProvider router={router}></RouterProvider>
 </SocketProvider>
  </Authprovider>
)
