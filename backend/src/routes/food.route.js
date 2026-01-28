const express = require('express')
const router = express.Router();
const foodController = require("../controllers/food.controller");
const authmiddleware = require("../middlewares/auth.middleware")
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
})

// food create krne k liye
router.post("/",authmiddleware.authfoodpartnermiddleware, upload.single("video") ,foodController.createFood)

// reels user ko render krne k liye
router.get("/",authmiddleware.authUserMiddleware,foodController.getFoodItem)

// reel ko like krne k liye 
router.post("/like",authmiddleware.authUserMiddleware,foodController.likeReel)

// like  reel ko render krne k liye krne k liye 
router.get("/like/reel",authmiddleware.authUserMiddleware,foodController.getLikedFoodItem)

// reel ko save krne k liye 
router.post("/save",authmiddleware.authUserMiddleware,foodController.saveReel)

// save reels user ko render krne k liye
router.get("/save/reels",authmiddleware.authUserMiddleware,foodController.getSaveFoodItem)

module.exports= router;