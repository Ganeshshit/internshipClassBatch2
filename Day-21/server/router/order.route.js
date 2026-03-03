const express=require('express')
const {allOrders,Userorders,createOrder,createOrderforId}=require('../users');
const { route } = require('./user.route');

const router=express.Router();

router.get('/',allOrders)
router.get('/:id',Userorders)
router.post('/create',createOrder)
router.post('/create/:id',createOrderforId)

module.exports=router
