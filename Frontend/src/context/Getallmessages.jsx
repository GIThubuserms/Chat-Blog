import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Useconversation } from '../hooks/Useconversation.jsx';

function Getallmessages() {
  const [loading,setloading]=useState(false)
  const {messages,selectedconversation,setmessages}=Useconversation()
  useEffect(()=>{
        const getmessages=async()=>{
            if(selectedconversation&&selectedconversation._id){
                setloading(true)
                try {
                const res=await axios.post(`/api/v1/message/getmessage/${selectedconversation._id}`)
                console.log(res);
                setmessages(res.data) 
                setloading(false)  
            } catch (error) {
                throw new Error(error)
            }
        }          
        }
    getmessages()
  },[setmessages,selectedconversation])
return {loading}
}

export default Getallmessages
