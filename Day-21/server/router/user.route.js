const express=require('express');
const { allusers, userid, createUser ,getNormalResponse} = require('../controlller/user.controller');

const router=express.Router();
function getAllUserMiddleware(req,res,next){
    console.log("Middleware executed")
    console.log(router.length)
    next()
}
router.get('/',getAllUserMiddleware,allusers)
router.get('/:id',userid)
router.post('/create',createUser)
router.get('/getNormalRes',()=>{console.log("getNormalRes Middleware")},getNormalResponse)

module.exports=router