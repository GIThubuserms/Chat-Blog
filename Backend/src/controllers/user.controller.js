import User from "../models/user.model.js"
import bcrypt from 'bcrypt'

export const signup=async(req,res)=>{
const{fullname,email,password,confirmPassword}=req.body
if(!(fullname,email,password,confirmPassword)){
    return res.status(400).json({message:"Credentials are essentials"})
}
if(password !== confirmPassword){
    return res.status(400).json({message:"Confirm Password are Not Correct"})
}
const isuserexists=await User.findOne({email})
if(isuserexists){
    return res.status(400).json({message:"User Already Exists"})
}
const hashpass=await bcrypt.hash(password,10)
const newuser=await User.create({
    fullname,
    email,
    password:hashpass
})
if(!newuser){
    return res.status(500).json({message:"User Creation Failed"})
}
return res.status(200).json({message:"User Created Successfully"})
}
