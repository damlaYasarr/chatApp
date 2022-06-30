const express=require('express');
const { createUser,logUser } = require('../controller/user');
const {jwttoken}=require('./../middleware/auth/auth')
const Router=express.Router(); 





Router.post('/user', createUser); 
Router.post('/login', logUser)
//jwttoken post yapılacağı zaman test edlir

module.exports=Router; 
