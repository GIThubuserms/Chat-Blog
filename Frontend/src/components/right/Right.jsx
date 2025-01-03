import React from 'react'
import Messages from './Messages'
import UserContact from './UserContact'
import SendBar from './SendBar'

function Right() {
  return (
    <div className="w-[70%] bg-slate-800 ">
      <UserContact/>
      <Messages/>
      <SendBar/>
    </div>
  )
}

export default Right
