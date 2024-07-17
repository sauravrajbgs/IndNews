const express=require('express'
);
const app=express();
require ('dotenv').config();
const PORT=process.env.PORT ||3000;
app.use(express.json());

require("../server/config/Database").connect()

// route import and mount 
const user = require("../server/Routers/userRouter");
app.use("/api/v1",user);

// Activate 
app.listen(PORT,() => {
    console.log("Server Run at ",PORT);
})


app.get("/", (req,res) => {
    res.send("saurav kumar");
})