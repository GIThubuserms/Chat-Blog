import React from 'react'

function User() {
    return (
        <div className='hover:bg-slate-600 rounded-lg  transition-all cursor-pointer overflow-x-auto no-scrollbar duration-200 lg:px-5 flex space-x-2 my-3 lg:m-5'>
            <div className="hidden lg:flex avatar online">
                <div className="lg:w-14 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div className=''>
                <h1 className='font-bold text-xs lg:text-sm'>Murtaza Saleem</h1>
                <span className='text-xs lg:text-sm'>murtazasaleem@gmail.com</span>
            </div>
        </div>
    )
}

export default User
