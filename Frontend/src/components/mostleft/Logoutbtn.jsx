import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";

function Logoutbtn() {
  return (
      <div className="w-[8%] md:w-[3%] bg-slate-900 flex h-screen  ">
        <div className='flex flex-col justify-end mx-auto mb-5 '>
        <button>
            <RiLogoutBoxLine className='text-lg sm:text-xl hover:bg-slate-500  rounded-md md:text-3xl'  />
        </button>
        </div>
      
    </div>
  )
}

export default Logoutbtn
