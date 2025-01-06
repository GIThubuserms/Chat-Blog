import jwt from 'jsonwebtoken'

const jwttoken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0OTg0Mzg5MCIsIm5hbWUiOiJBaG1hZCIsImlhdCI6MTU2MjA0NDQyMn0.aZWR6lsLa6P1WScm0B213qZtIxNLPLtF3Kc4cCadDYo'
const createToken=async(id,res)=>{
    const token=await jwt.sign({id},jwttoken,{expiresIn:'3d'}) 
    if(!token){
        throw new Error('Error while creating a Token')
    } 
   
    res.cookie('jwt',token)
}
export default createToken;