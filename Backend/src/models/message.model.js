import mongoose, {Schema} from 'mongoose'


const MessageSchema=new Schema({
   SenderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
   },
   ReceiverId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
   },
   Message:{
    type:String,
    required:[true,"message cant be empty"]
   }
},{timestamps:true})


export const Message=mongoose.model('Message',MessageSchema)