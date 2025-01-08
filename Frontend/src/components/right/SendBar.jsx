import React, { useState } from 'react';
import { BiSolidSend } from "react-icons/bi";
import useSendmessage from '../../context/useSendmessage.jsx';
import { Useconversation } from '../../hooks/Useconversation.jsx';

function SendBar() {
  const { selectedconversation } = Useconversation()
  const [messagevalue, setmessagevalue] = useState("");
  const { senddmessages } = useSendmessage();  // Correctly destructure the function

  const handlesubmit = async () => {
    if (messagevalue.trim() !== "") {
      await senddmessages(messagevalue);  // Call the senddmessages function properly
      setmessagevalue("");  // Clear the input field after message is sent
    }
  };

  {
    if (selectedconversation && selectedconversation._id) {
      return (
        <div className='w-full bg-slate-600 space-x-10 px-5 h-[10vh] flex items-center'>
          <input
            onChange={(e) => setmessagevalue(e.target.value)}
            value={messagevalue}
            type="text"
            placeholder='Type here...'
            className='h-12 outline-none w-[70%] p-4 bg-slate-800 rounded-md'
          />
          <button onClick={handlesubmit} className='text-white'>
            <BiSolidSend size={34} />
          </button>
        </div>
      );
    }
  }

  return (
    <div className='w-full bg-slate-600 space-x-10 px-5 h-[10vh] flex items-center'>
      <input
        type="text"
        disabled
        value={""}
        // placeholder='Type here...'
        className='h-12 outline-none w-[70%] p-4 bg-slate-800 rounded-md'
      />
      <button disabled className='text-white'>
        <BiSolidSend size={34} />
      </button>
    </div>
  );
}

export default SendBar;
