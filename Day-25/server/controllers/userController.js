const User=require('../models/userModel')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const generateTokens = require('../utility/token');


exports.registerUser= async function registerUser(req,res){
    try {

        const {name,email,password}=req.body;

        if(!name||!email||!password){
            return res.status(400).send({status:"NOT OK",sucess:false,message:"Enter all fields"})
        }
        const user= await User.findOne({email:email.toLowerCase()})
        if (user) {
            return res.status(400).send({status:"NOT OK",sucess:false,message:"Emal already exit"})
            
        }
        const hasshPasswprd=await bcrypt.hash(password,10)
        //console.log(hassh)
        const newUser={name:name,email:email,password:hasshPasswprd}
        console.log(newUser)
        await User.create(newUser)

        return res.status(200).json({status:"OK",sucess:true,message:"User created Sucess fully",User:newUser})
        

    } catch (error) {
        console.log("Errror occcured :::",error)
    }

}
exports.LoginUser=async function LoginUser(req,res){
   
    try {
        const {email,password}=req.body;
        const user= await User.findOne({email:email.toLowerCase()})
        console.log(user)
        if(!user){
            return res.status(400).send({status:"NOT OK",sucess:false,message:"User not exist"})
        }
        const match=await bcrypt.compare(password,user.password)
        console.log(match)
        if(!match){
            return res.status(400).send({status:"NOT OK",sucess:false,message:"User login failed"})
        }


        const {accessToken,refreshToken}= await generateTokens(
            user._id,
            user.email,
            user.role

        )

        
        console.log("Acess Token",accessToken)
        console.log("Refresh token",refreshToken)
        //User.refreshToken=refreshToken;
    //await User.save()
    console.log("Refresh token saved sucessfully")
        return res.status(200).send({status:"OK",sucess:true,message:"User Login successful",user:user,acessToke:accessToken})

    } catch (error) {
        console.log(error) 
    }
}
