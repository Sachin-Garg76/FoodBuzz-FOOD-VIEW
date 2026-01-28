const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("mongodb connect");
    })
    .catch((err) => {
      console.log("Error : ", err);
    })
}

module.exports = connectDB;