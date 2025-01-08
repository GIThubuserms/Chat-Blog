import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import  {useAuth} from '../../context/Authcontext'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'


function Login() {
   const {register,handleSubmit,formState:{errors}}=useForm()
   const {userdata,setuserdata}=useAuth()
   const navigate=useNavigate()

   const onsubmit=async(data)=>{
    const apidata={ 
        email:data.email,
        password:data.password,
    }  
    
        try {
            const response=await axios.post('/api/v1/user/login',apidata)
            if(response.status<400){
            const success=response?.data.message
            console.log(success);
            localStorage.setItem('messenger',JSON.stringify(response.data))
            setuserdata(response.data)
            toast.success("User Logged In successfully")
            navigate('/')
            }
        } catch (error) {
            console.log(error);
            
            toast.error(error.response?.data?.error);
            
        }
   }

  return (
    <div className='flex flex-col items-center justify-center w-full'>
    <form className='w-[70%] sm:w-[40%] lg:w-[30%] space-y-4 ' onSubmit={handleSubmit(onsubmit)} >
        <h1 className='text-blue-600 text-3xl text-center'>ChatBlog</h1>
        <h2 className='text-center text-xl'>
            Welcome back to <span className='text-blue-600'>Chat</span>
        </h2>
        <div className='space-y-4'>
           
            <label className="input overflow-hidden input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input {...register("email",{required:true})} type="text" className="grow " placeholder="Email" />
            </label>
            {errors.email && <span className='text-md text-red-600 '>This field is required !!</span>}


            <label className="input overflow-hidden input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd" />
                </svg>
                <input  {...register("password",{required:true})} type="password" className="grow" placeholder="Password" />
            </label>
            {errors.password && <span className='text-md text-red-600'>This field is required !!</span>}

          
        </div>
        <div className='flex flex-col items-center justify-center'>
            <button className="btn ">Login</button>
            <h1>Donot have a account  <Link className='text-blue-600 ' to={'/signup'}>Register</Link></h1>
            {/* <h1>Donot have a account ? <span className='text-blue-600'>Register</span></h1> */}

        </div>

    </form>
</div>
  )
}

export default Login
