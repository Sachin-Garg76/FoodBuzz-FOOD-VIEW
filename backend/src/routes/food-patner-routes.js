const express= require('express');
const router= express.Router();
const foodController = require("../controllers/food-partner.controller");
const authmiddleware = require("../middlewares/auth.middleware");

// food partner n kitni reel upload ki hai uske liye GET  API 
router.get("/:id",authmiddleware.authfoodpartnermiddleware,foodController.getFoodByFoodPartnerId)

module.exports= router;