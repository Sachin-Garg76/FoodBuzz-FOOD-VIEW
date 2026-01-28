const userModel = require("../models/usermodels");
const foodpartnerModel = require("../models/foodpartnermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { fullName, email, password } = req.body;
  const isUserExist = await userModel.findOne({ email });
  if (isUserExist) {
    return res.status(400).json({
      message: "User Already exist",
    });
  }
  const hashedpassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullName,
    email,
    password: hashedpassword,
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "User register successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

async function loginuser(req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email,
  });
  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      fullName: user.fullName,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);
  res.status(200).json({
    message: "Login Successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

async function registerfoodpartner(req, res) {
  const { BussinessName, fullName, email, password, MobileNo, Address } =
    req.body;

  const isAccountAlreadyExist = await foodpartnerModel.findOne({
    email,
  });

  if (isAccountAlreadyExist) {
    return res.status(400).json({
      message: "food partner account already exists",
    });
  }

  const hashedpassword = await bcrypt.hash(password, 10);

  const foodpartner = await foodpartnerModel.create({
    BussinessName,
    MobileNo,
    fullName,
    email,
    password: hashedpassword,
    Address,
  });
  const token = jwt.sign(
    {
      id: foodpartner._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);

  res.status(201).json({
    message: "Food partner registered successfully",
    foodpartner: {
      _id: foodpartner._id,
      email: foodpartner.email,
      fullName: foodpartner.fullName,
      Address: foodpartner.Address,
      MobileNo: foodpartner.MobileNo,
      BussinessName: foodpartner.BussinessName,
    },
  });
}

async function loginfoodpartner(req, res) {
  const { email, password } = req.body;
  const foodpartner = await foodpartnerModel.findOne({
    email,
  });
  if (!foodpartner) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, foodpartner.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign(
    {
      id: foodpartner._id,
      role: "foodpartner",
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

 

  res.status(200).json({
    message: "Foodpartner login successfully",
    foodpartner: {
      _id: foodpartner._id,
      email: foodpartner.email,
      name: foodpartner.name,
    },
  });
}
async function logout(req, res) {
  res.clearCookie("token");

  res.status(200).json({
    message: "Logout successfully",
  });
}
const checkLogin = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ loggedIn: false });
  }

  return res.status(200).json({ loggedIn: true });
};

module.exports = {
  registerUser,
  loginuser,
  logout,
  registerfoodpartner,
  loginfoodpartner,
  checkLogin,
};
