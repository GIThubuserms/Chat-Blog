import React from 'react'

function UserContact() {
  return (
    <>
      <div className='hover:bg-slate-600 p-2 rounded-md bg-slate-700  transition-all cursor-pointer  duration-200  h-[10vh] flex space-x-2 '>
            <div className="hidden lg:flex avatar online">
                <div className="lg:w-18 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div className=''>
                <h1 className='font-bold text-xs lg:text-sm'>Murtaza Saleem</h1>
                <span className='text-xs lg:text-sm'>Online</span>
            </div>
        </div>
    </>
  )
}

export default UserContact
