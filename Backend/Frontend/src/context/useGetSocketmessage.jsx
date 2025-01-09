import React, { useEffect } from 'react'
import {useSocketContext}  from './SocketContext.jsx'
import {Useconversation}  from '../hooks/Useconversation.jsx'
import sound from '../../src/assets/noti.mp3'

function useGetSocketmessage() {

    const {socket}=useSocketContext()
    const {messages,setmessages}=Useconversation()

    useEffect(()=>{
        if(socket){
        console.log(socket);
        socket.on('messagetoyou',(msg)=>{
            const noti=new Audio(sound)
            noti.play()
            setmessages([...messages,msg])
        })
        return ()=>{socket.off('messagetoyou')}
    }
    },[messages,setmessages])
}

export default useGetSocketmessage
