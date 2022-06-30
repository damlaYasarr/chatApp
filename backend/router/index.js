const express=require('express')
const user=require('./user')
const router=express.Router();




router.use('/chat', user);



module.exports=router