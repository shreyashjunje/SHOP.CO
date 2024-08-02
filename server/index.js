const express=require("express");
const app=express();
require("dotenv").config();
const PORT=process.env.PORT || 8000

// const userRoutes=require("./routes/user");
// const categoryRoputes=require("./routes/category");
const productRoutes =require("./routes/product")
const fileUpload = require("express-fileupload");


const connectWithDb=require("./config/database");
connectWithDb();

const cloudinaryConnect=require("./config/cloudinary")
cloudinaryConnect()

app.use(express.json());
app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp",
    })
  );
// app.use("/api/vi/auth",userRoutes);
// app.use("/api/v1/auth",categoryRoputes);
app.use("/api/v1/",productRoutes)


app.listen(PORT,()=>{
    console.log(`App is running on port no ${PORT}`)
})
