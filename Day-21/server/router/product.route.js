const express=require('express')
const {allProducts,productsPrice}=require('../users');

const router=express.Router();

router.get('/',allProducts)
router.get('/filter',productsPrice)

module.exports=router