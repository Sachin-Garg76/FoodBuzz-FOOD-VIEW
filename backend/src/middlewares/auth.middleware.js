const foodpartnerModel = require("../models/foodpartnermodel");
const userModel = require('../models/usermodels');
const jwt = require("jsonwebtoken")

async function authfoodpartnermiddleware(req,res,next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Unauthorized access"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const foodpartner = await foodpartnerModel.findById(decoded.id);

        req.foodpartner = foodpartner;
        next();
    }catch(err){
        return res.status(401).json({
            message:"Invalid token"
        })
    }
}

async function authUserMiddleware(req,res,next){
    const token = req.cookies.token;
    

    if(!token){
        return res.status(401).json({
            message:"Unauthorized access"
        })
    }

    try{
     const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decoded.id);

        req.user = user;   
        next();
    }catch(err){
        return res.status(401).json({
            message:"Invalid token"
        })
    }
}

module.exports = {
    authfoodpartnermiddleware,
    authUserMiddleware
};