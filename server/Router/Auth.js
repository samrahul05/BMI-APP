
const express = require('express')
const router = express.Router()
const {Signup,Login,BasicInformation,Symptoms,GetUserdata,BMI} =require('../Controller/Auth')
const verifyToken = require('../Modules/verifyToken')




router.post('/signup',Signup)
router.post('/login',Login)
router.post('/BasicInformation',verifyToken,BasicInformation)
router.post('/Symptoms',verifyToken,Symptoms)
router.get('/GetUserdata',verifyToken,GetUserdata)
router.post('/BMI',verifyToken,BMI)


module.exports=router
