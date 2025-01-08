import React from 'react'
import { Useconversation } from '../../hooks/Useconversation.jsx'
import { useSocketContext } from '../../context/SocketContext.jsx'


function UserContact() {
  const{selectedconversation}=Useconversation()
  const {loggedinusers}=useSocketContext()
  
    
{if (selectedconversation && selectedconversation._id)
{
  const online=loggedinusers.includes(selectedconversation?._id)

  return (
    <>

      <div className='hover:bg-slate-600 p-2 rounded-md bg-slate-700  transition-all cursor-pointer  duration-200  h-[10vh] flex space-x-2 '>
            <div className={`hidden lg:flex avatar ${online?"online":"offline"}`}>
                <div className="lg:w-18 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div className=''>
                <h1 className='font-bold text-xs lg:text-sm'>{selectedconversation.fullname
                }</h1>
                <span className='text-xs lg:text-sm'>{online?"Online":"Offline"}</span>
            </div>
        </div>
    </>
  )
}
}

return (
  <>
  
    <div className='hover:bg-slate-600 p-2 rounded-md bg-slate-700  transition-all cursor-pointer  duration-200  h-[10vh] flex space-x-2 '>
          <div className="hidden  avatar online">
              <div className="lg:w-18 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
          </div>
          <div className=''>
              <h1 className='font-bold text-xs lg:text-sm'></h1>
              <span className='text-xs lg:text-sm'></span>
          </div>
      </div>
  </>
)
}
 

export default UserContact
