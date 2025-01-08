import mongoose from "mongoose";
import { Conversation } from "../models/Conversation.model.js";
import { Message } from "../models/message.model.js";
import {io,getrecieversocketid} from '../../index.js'

export const sendmessage = async (req, res) => {
  try {
    const senderId = req.user._id;
    const {message} = req.body;
    let {recieverId} = req.params;
    recieverId=new mongoose.Types.ObjectId(recieverId)
    
    const conversation = await Conversation.findOne({
    participants: { $all: [senderId, recieverId] }
    });
    
    if (conversation) {
      const newmessage = await Message.create({
        SenderId:senderId,
        ReceiverId:recieverId,
        Message:message
      });
      if (!newmessage) {
        return res.status(200).json({ message: "error in sending a message" });
      }
      const socketidofreciver=getrecieversocketid(recieverId)
      console.log(socketidofreciver);
      
      if(socketidofreciver){
        io.to(socketidofreciver).emit('messagetoyou',newmessage)
      }

      conversation.messages.push(newmessage._id);
      conversation.save();
      return res.status(200).json({ message: "Message Sent" ,conversation,newmessage});

    }
   
    if (!conversation) {
      const newmessage = await Message.create({
        SenderId:senderId,
        ReceiverId:recieverId,
        Message:message,
      });
      if (!newmessage) {
        return res.status(400).json({ message: "error in sending a message" });
      }
      const socketidofreciver=getrecieversocketid(recieverId)
      console.log(socketidofreciver);
      
      if(socketidofreciver){
        io.to(socketidofreciver).emit('messagetoyou',newmessage)
      }
      
      const newconversation = await Conversation.create({
        participants: [senderId, recieverId],
        messages:[newmessage._id]
      });
      if (!newconversation) {
        return res.status(400).json({ message: "error in creating a Chat " });
    }
    //   newconversation.messages.push(newmessage._id)
    //   newconversation.save()
     
      return res.status(200).json({ message: "Message Sent" ,newconversation,newmessage});

    }

    return res.status(200).json({ message: "Message Sent" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error while sending a message " });
  }
};

export const getmessages=async (req,res)=>{
try {
    
    const senderId = req.user._id;
    let {recieverId} = req.params;
    recieverId=new mongoose.Types.ObjectId(recieverId)
   
    
    const conversation = await Conversation.findOne({
        participants: { $all: [senderId, recieverId] }
    }).populate('messages')
         
    if(conversation){
        const messages=conversation.messages
        return res.status(200).json(messages)
    }

    if(!conversation){
        return res.status(200).json([])
    }
    console.log('testing678')

} catch (error) {
    console.log(error);
    
    return res.status(200).json({message:"Error while getting your chats"})
}
}
