import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {useAuth} from '../../context/Authcontext'
import { ToastContainer, toast } from 'react-toastify';


function Signup() {
    const {register,watch,handleSubmit,formState:{errors}}=useForm()
    const {userdata,setuserdata}=useAuth()
    const navigate=useNavigate()
     
    const password=watch('password')
    const validatepassword=(value)=>{
        return value===password||'Password and Confirm Password doesnot match'
    }
    
    const onsubmit=async(data)=>{
        //
    const apidata={
        fullname:data.fullname,
        email:data.email,
        password:data.password,
        confirmPassword:data.confirmpassword,
    } 
        try {
            const response=await axios.post('/api/v1/user/signup',apidata)
            if(response.status<400){
            const success=response.data.message
            console.log(success);
            localStorage.setItem('messenger',JSON.stringify(response.data))
            toast.success(success)
            setuserdata(response.data)
            navigate('/')
            }
        } catch (error) {
            toast.error(error.response.data?.message||error);
            
        }
       }

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <form className='w-[70%] sm:w-[40%] lg:w-[30%] space-y-3' onSubmit={handleSubmit(onsubmit)}>
                <h1 className='text-blue-600 text-3xl text-center'>ChatBlog</h1>
                <h2 className='text-center text-xl'>
                    Create a New <span className='text-blue-600'>Account</span>
                </h2>
                <div className='space-y-4'>
                    <label className="input overflow-hidden input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input {...register('fullname',{required:true})} type="text" className="grow" placeholder="Fullname" />
                    </label>
                    {errors.fullname && <span className='text-md text-red-600 '>This field is required !!</span>}


                    <label className="input overflow-hidden input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input {...register('email',{required:true})}  type="text" className="grow" placeholder="Email" />
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
                        <input {...register('password',{required:true})} type="password" className="grow" placeholder="Password" />
                    </label>
                    {errors.password && <span className='text-md text-red-600 '>This field is required !!</span>}


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
                        <input {...register('confirmpassword',{required:true,validate:validatepassword})} type="password" className="grow" placeholder="ConfirmPassword" />
                    </label>
                    {errors.confirmpassword && <span className='text-md text-red-600 '>{errors.confirmpassword.message}</span>}


                </div>
                <div className='flex flex-col items-center justify-center'>
                    <button className="btn ">Register</button>
                    <h1>Already have a account  <Link className='text-blue-600 ' to={'/login'}>Login</Link></h1>
                    {/* <h1>Already have a account ? <span className='text-blue-600'>Login</span></h1> */}

                </div>

            </form>
        </div>
    )
}

export default Signup
