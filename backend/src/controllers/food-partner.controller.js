const foodpartnerModel = require("../models/foodpartnermodel");
const FoodModel = require("../models/food.js");

async function getFoodByFoodPartnerId(req, res) {
  const foodPatnerId = req.params.id;

  const foodItemsByFoodPartner = await FoodModel.find({
    foodpartner: foodPatnerId,
  });
  const foodPartner = await foodpartnerModel.findById(foodPatnerId);
  if (!foodPartner) {
    return res.status(404).json({ message: "Food Partner not found" });
  }
  return res.status(200).json({
    message: "Food Partner found",
    foodPartner: {
      ...foodPartner.toObject(),
      foodItems: foodItemsByFoodPartner,
    },
  });
}


module.exports = {
  getFoodByFoodPartnerId,
};

