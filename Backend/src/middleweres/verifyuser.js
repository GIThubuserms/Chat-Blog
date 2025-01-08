import User from "../models/user.model.js";
import jwt from 'jsonwebtoken'

const jwttoken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0OTg0Mzg5MCIsIm5hbWUiOiJBaG1hZCIsImlhdCI6MTU2MjA0NDQyMn0.aZWR6lsLa6P1WScm0B213qZtIxNLPLtF3Kc4cCadDYo'
export const verifyuser=async(req,res,next)=>{
try {
    const token=req.cookies?.jwt
        
   if(!token){
       return res.status(400).json({message:"Token Not Verified"})
    }
    
    const verfiedtoken=jwt.verify(token,jwttoken)
  
    if(!verfiedtoken){
      return   res.status(400).json({message:"User Not Verified"})
    }
     
    const verifieduser=await User.findById(verfiedtoken.id).select('-password')
    if(!verifieduser){
       return  res.status(400).json({message:"User Not Found"})
    }
   
   req.user=verifieduser
   next()
} catch (error) {
 console.log('Error :'+error);
 return res.status(400).json({message:"User Verfication Error "})
    
}
}