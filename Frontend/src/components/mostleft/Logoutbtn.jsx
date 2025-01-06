import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import axios from 'axios'
import Cookies from 'js-cookie'
import { getallusers } from '../../context/GetAllusers';
import {useNavigate} from 'react-router-dom'

function Logoutbtn() {
  // const [setloading] = getallusers()
  const navigate=useNavigate()

  async function handlesubmit() {
    try {
      // setloading(true)
      const response = await axios.post('api/v1/user/logout',{})
      console.log(response);
      
      if (response) {
        localStorage.removeItem('messenger')
        Cookies.remove('jwt')
        navigate('/login')
        // setloading(false)
      }
      alert(response.data.message)
    } catch (error) {
      throw new Error(error)
    }
  }
  return (
    <div className="w-[8%] md:w-[3%] bg-slate-900 flex h-screen  ">
      <div className='flex flex-col justify-end mx-auto mb-5 '>
        <button onClick={handlesubmit}>
          <RiLogoutBoxLine className='text-lg sm:text-xl hover:bg-slate-500  rounded-md md:text-3xl' />
        </button>
      </div>

    </div>
  )
}

export default Logoutbtn
