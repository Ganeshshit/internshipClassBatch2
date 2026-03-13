const jwt=require('jsonwebtoken')
const User=require('../models/userModel')

const authMiddleware=async(req,res,next)=>{
    const authHeader=req.headers['authorization']
    if(!authHeader){
        return res.status(400).send({status:"NOT OK",success:false,message:" User authentication wrong "})
    }
    const token=authHeader.split(' ')[1]

    const decode=jwt.verify(token,process.env.JWT_SECRET)
    const user=await User.findById(decode.id)
    req.user={
        id:decode.id,
        email:decode.email
    }
    next()
}
module.exports=authMiddleware