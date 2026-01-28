const mongoose = require("mongoose");

const foodpartnerSchmea = new mongoose.Schema(
  {
    BussinessName: {
      type: String,
      require: true,
    },
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    MobileNo: {
      type: Number,
      require: true,
    },
    password: {
      type: String,
      require:true
    },
    Address: {
      type: String,
      require:true
    },
  },
  {
    timestamps: true,
  }
);
const foodpartnerModel = mongoose.model("foodpatner",foodpartnerSchmea);
module.exports = foodpartnerModel;
