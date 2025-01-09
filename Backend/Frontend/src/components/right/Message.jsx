import React from 'react'

function Message({ message }) {
    const loggedinuser = JSON.parse(localStorage.getItem('messenger'));
    const itsme = loggedinuser.user._id === message.SenderId
    const chatposition = itsme ? " chat-end" : "chat-start";
    const chatcolor = itsme ? "bg-blue-500":"" ;
    let messagedate=new Date(message.createdAt)
     messagedate=messagedate.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});
     
    return (
        <div className="p-4">
        <div className={`chat ${chatposition}`}>
          <div className={`chat-bubble text-white ${chatcolor}`}>
            {message.Message}
          </div>
          <div className="chat-footer">{messagedate}</div>
        </div>
      </div>
    );
}

export default Message;
