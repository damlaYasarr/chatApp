const express=require('express');
const { createUser,logUser,getVerfy,
    IsActive } = require('../controller/user');
const {jwttoken}=require('./../middleware/auth/auth')
const Router=express.Router(); 





Router.post('/user', createUser); 
Router.post('/login', logUser)
//burası  hesap etkinleştrme syfasında kullanılacak login sayfasına 
//dön butonu eklenecek
Router.get('/verify/:id',getVerfy)
//jwttoken post yapılacağı zaman test edlir
Router.get('/IsActive', IsActive)
module.exports=Router; 
