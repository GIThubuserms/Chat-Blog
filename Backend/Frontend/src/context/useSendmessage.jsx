import React, { useState } from 'react';
import { Useconversation } from '../hooks/Useconversation.jsx';
import axios from 'axios';

export default function useSendmessage() {
  const { messages,selectedconversation, setmessages } = Useconversation();
  const [loading, setloading] = useState(false);

  const senddmessages = async (message) => {
    if (selectedconversation && selectedconversation._id) {
      setloading(true);
      try {
        const res = await axios.post(
          `/api/v1/message/sendmessage/${selectedconversation._id}`,
          {message}
        );
        const responseMessage = res?.data?.newmessage;
        setmessages([...messages,responseMessage]);
 
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
        throw new Error(error);
      }
    }
  };

  return {
    loading,
    senddmessages, // Returning the function to be used in SendBar
  };
}
