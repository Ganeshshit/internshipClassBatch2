const{registerUser, LoginUser}=require('../controllers/userController')
const express=require('express')
const router=express.Router()
router.post('/create',registerUser)

router.post('/login',LoginUser)
module.exports=router;
