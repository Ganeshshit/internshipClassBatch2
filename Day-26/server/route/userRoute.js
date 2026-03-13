const{registerUser, loginUser, getAllUser, getMe}=require('../controller/userController')
const express=require('express')
const authMiddleware = require('../middleware/auth')
const router=express.Router()

router.post('/register',registerUser)
router.post('/login',loginUser)

//Private route

router.get('/',authMiddleware,getAllUser)
//router.get('/me',authMiddleware,getMe)
module.exports=router