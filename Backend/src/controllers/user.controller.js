import User from "../models/user.model.js"
import bcrypt from 'bcrypt'
import createToken from "../utils/jwt.js"

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
const newwuser={
    _id:newuser._id,
    fullname:newuser.fullname,
    email:newuser.email,
}

await createToken(newuser._id,res)
return res.status(200).json({message:"User Created Successfully",newwuser})
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!(email&&password)) {
            return res.status(400).json({ error: "Email and password is required" });
          }
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "User Not Found" });
      }
       const isMatch=await user.verifypassword(password)
      // const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: "Password doesnot match" });
      }

      await createToken(user._id, res);
      return res.status(201).json({
        message: "User logged in successfully",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };


export const logout = async (req, res) => {
    try {
      res.clearCookie("jwt");
     return res.status(201).json({ message: "User logged out successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

export const alluser=async(req,res)=>{
 try {
  const loggedinuserid=req.user._id

  
   const allusers=await User.find({_id:{$ne:loggedinuserid}}).select('-password ')   
   return res.status(201).json({message:"User fetched",allusers})

 } catch (error) {
  console.log(error);
  res.status(500).json({message:"Server error"})
  
 }

}  