const express=require("express");
const app=express();
require("dotenv").config();
const PORT=process.env.PORT || 4000

const userRoutes=require("./routes/user");
const categoryRoputes=require("./routes/category");

const connectWithDb=require("./config/database");
connectWithDb();

app.use(express.json());

app.use("./api/vi/auth",userRoutes);
app.use("./api/v1/auth",categoryRoputes);


app.listen(PORT,()=>{
    console.log(`App is running on port no ${PORT}`)
})
