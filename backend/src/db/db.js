const mongoose = require("mongoose");
function connectDB() {
  mongoose
    .connect(process.env.Your_MONGODB_URI)
    .then(() => {
      console.log("mongodb connected ");
    })
    .catch((err) => {
      console.log("Error : ", err);
    })
}
module.exports = connectDB;
