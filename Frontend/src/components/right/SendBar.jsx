import React from 'react'
import { BiSolidSend } from "react-icons/bi";


function SendBar() {
  return (
    <div className='w-full bg-slate-600 space-x-10 px-5 h-[10vh] flex items-center '>
      <input type="text" placeholder='Type here...' className='h-12  outline-none w-[70%] p-4  bg-slate-800 rounded-md'  />
      <button className='text-white'><BiSolidSend size={34}/></button>
    </div>
  )
}

export default SendBar
