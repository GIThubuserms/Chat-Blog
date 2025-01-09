import React, { useEffect } from 'react'
import Message from './Message'
import { Useconversation } from '../../hooks/Useconversation.jsx'
import Getallmessages from '../../context/Getallmessages.jsx'
import Loading from '../Loading/Loading.jsx'
import { useRef } from 'react'
import useGetSocketmessage from '../../context/useGetSocketmessage.jsx'

function Messages() {
  const {messages,selectedconversation}=Useconversation()
  const {loading}=Getallmessages()
  const lastmessageref=useRef();
  useGetSocketmessage()
  useEffect(()=>{
   setTimeout(()=>{
    lastmessageref.current?.scrollIntoView({behaviour:"smooth"})
   },100)
  },[messages])
 
  
  return (
    <div style={{minHeight:'calc(80vh)',maxHeight:'calc(80vh)'}} className='no-scrollbar overflow-y-auto'>
      {loading && <Loading/>}
      {selectedconversation && messages.length<=0 && <div style={{minHeight:'calc(80vh)',maxHeight:'calc(80vh)'}} className='flex justify-center items-center text-lg text-white font-semibold font-sans  text-center'>Say Hi, To start a conversation</div>}
      {!selectedconversation && <div style={{minHeight:'calc(80vh)',maxHeight:'calc(80vh)'}} className='flex justify-center items-center text-lg text-white font-semibold font-sans  text-center'>Select Chat To Start A Conversation</div>}
      {messages.map((message)=> <div key={message._id} ref={lastmessageref} ><Message message={message} /></div>)}
      
    </div>
  )
}

export default Messages
