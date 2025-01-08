import React, { useState } from 'react'
import { Useconversation } from '../../hooks/Useconversation.jsx'
import { useSocketContext } from '../../context/SocketContext.jsx'

function User({user}) {
    const {selectedconversation,setselectedconversation}=Useconversation()
    const isSelected=selectedconversation?._id===user?._id 
    // console.log(isSelected);
    // console.log(selectedconversation);
    const {loggedinusers}=useSocketContext()
    
    const online=loggedinusers.includes(user._id)
    
    return (
        <div onClick={()=>setselectedconversation(user)} className={` ${isSelected?"bg-slate-600  ":""} hover:bg-slate-600 rounded-lg  transition-all cursor-pointer overflow-x-auto no-scrollbar duration-300 px-4 py-3 flex space-x-2 my-3 lg:m-5`}>
            <div className={`hidden lg:flex avatar ${online?"online":"offline"}`}>
                <div className="lg:w-14 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div className=''>
                <h1 className='font-bold text-xs lg:text-sm'>{user.fullname}</h1>
                <span className='text-xs lg:text-sm'>{user.email}</span>
            </div>
        </div>
    )
}

export default User
