const express = require('express');
const cookieparser = require('cookie-parser')
const authRoutes = require('../src/routes/auth')
const foodRoutes = require("../src/routes/food.route")
const foodPatnerRoutes = require("../src/routes/food-patner-routes")

const app = express();
const cors = require('cors')


app.use(cookieparser())
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));


app.use('/api/auth',authRoutes)
app.use('/api/food',foodRoutes)
app.use('/api/food-partner/',foodPatnerRoutes)

module.exports= app;




