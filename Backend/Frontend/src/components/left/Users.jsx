import React from 'react'
import User from './User'
import { getallusers } from '../../context/GetAllusers'

function Users() {
  const [allusers,setloading]=getallusers()
  console.log();
  
  return (
    <div style={{maxHeight:'calc(82vh - 1vh)'}} className='no-scrollbar  overflow-y-auto'>
      {allusers.map((user,index)=><User key={index} user={user} />)}
    </div>
  )
}

export default Users
