import React from 'react'
import SearchBox from './SearchBox'
import User from './User'
import Users from './Users'

function Left() {
  return (
    <div className='w-[30%] bg-black '>
      <h1 className='text-white px-2  sm:px-8 md:px-10 text-xl sm:text-xl font-sans md:text-3xl font-bold'>Chats</h1>
      <SearchBox/>
      <hr></hr>
      <Users/>
    </div>
  )
}

export default Left
