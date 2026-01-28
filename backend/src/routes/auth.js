const express = require('express');
const authController = require('../controllers/auth.controller')

const router = express.Router();





// user auth API'S 
router.post('/user/register',authController.registerUser);
router.post('/user/login',authController.loginuser);


// foodpartner auth API'S 
router.post('/food-partner/register',authController.registerfoodpartner);
router.post('/food-partner/login',authController.loginfoodpartner);

// logout k liye 
router.post('/logout',authController.logout);

// check krne k liye ki user login hai ya nhi 
router.get("/check", authController.checkLogin);

module.exports = router;