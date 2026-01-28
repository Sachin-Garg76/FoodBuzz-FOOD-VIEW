require("dotenv").config();
const app = require("./src/App");
const connectDB = require('./src/db/db')
connectDB()




const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`SERVER STARTED AT ${PORT}`);
})