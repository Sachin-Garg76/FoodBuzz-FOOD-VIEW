const foodModel = require("../models/food");
const StorageServices = require("../services/storage.services");
const { v4: uuid } = require("uuid");
const likeModel = require("../models/like");
const SaveModel = require("../models/Save");

async function createFood(req, res) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }
  const fileuploadResult = await StorageServices.uploadfile(
    req.file.buffer,
    uuid()
  );
  const foodItem = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    video: fileuploadResult.url,
    foodpartner: req.foodpartner._id,
  });
  res.status(201).json({
    message: "food created successfuly",
    food: foodItem,
  });
}

async function getFoodItem(req, res) {
  const foodItems = await foodModel.find({});
  res.status(200).json({
    message: "Food Items Fetch successfully",
    foodItems,
  });
}
async function likeReel(req, res) {
  const { foodId } = req.body;
  const user = req.user;
  if (!user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const isAlreadyLiked = await likeModel.findOne({
    user: user._id,
    food: foodId,
  });
  if (isAlreadyLiked) {
    await likeModel.deleteOne({
      user: user._id,
      food: foodId,
    });

    return res.status(200).json({
      message: "UNLIKED",
      liked: false,
    });
  }
  await likeModel.create({
    user: user._id,
    food: foodId,
  });

  return res.status(201).json({
    message: "LIKED",
    liked: true,
  });
}

async function saveReel(req, res) {
  const { foodId } = req.body;
  const user = req.user;
  if (!user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  const isAlreadySaved = await SaveModel.findOne({
    user: user._id,
    food: foodId,
  });

  if (isAlreadySaved) {
    await SaveModel.deleteOne({
      user: user._id,
      food: foodId,
    });
    return res.status(200).json({
      message: "Reel Unsaved Successfully",
    });
  }
  const save = await SaveModel.create({
    user: user._id,
    food: foodId,
  });
  return res.status(201).json({
    message: "Reel Save Successfully",
    save,
  });
}

async function getSaveFoodItem(req, res) {
  const user = req.user;

  const foodItems = await SaveModel.find({ user: user._id }).populate("food");

  res.status(200).json({
    message: "Food Items Fetch successfully",
    foodItems,
  });
}
async function getLikedFoodItem(req, res) {
  const user = req.user;

  const foodItems = await likeModel.find({ user: user._id }).populate("food");

  res.status(200).json({
    message: "Food Items Fetch successfully",
    foodItems,
  });
}

module.exports = {
  createFood,
  getFoodItem,
  likeReel,
  saveReel,
  getSaveFoodItem,
  getLikedFoodItem
};
