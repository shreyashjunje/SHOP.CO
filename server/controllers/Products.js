const Product = require("../models/Product");
const { uploadImageToCloudinary } = require("../utils/ImageUploader");

exports.createProduct = async (req, res) => {
  try {
    //fetch data from the request body
    const { title,rating,price,description,quantity,dressStyle,category,discount,stock,sizes,colors,reviews,genders } = req.body;

    const imagesArray=req.files.imgFiles;
    const sizesArray=sizes ? JSON.parse(sizes) :undefined;
    const colorsArray=colors ? JSON.parse(colors):undefined;// Parse the JSON string to an array if provided
    const reviewsArray=reviews ? JSON.parse(reviews):undefined;
    const gendersArray=genders ? JSON.parse(genders) : ["Male","Female","Kids"];

    
    console.log(imagesArray)

    //validate data
    if(!title || !price || !quantity || !category || !discount || !stock){
      return res.status(400).json({
        success:false,
        message:"All fields are required",
      })
    }

    if(!imagesArray || imagesArray.length===0 ){
      return res.status(400).json({
        success:false,
        message:"Images are not inserted",
      })
    }

  
    // if (!req.files || !req.files.imgFiles) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "No image file uploaded",
    //   });
    // }

    const imgArray=Array.isArray(imagesArray) ? imagesArray : [imagesArray];

    // Upload images to Cloudinary
    const imagesUploadPromises=imgArray.map((file)=>{
      // console.log(file);
     return uploadImageToCloudinary(file,process.env.FOLDER_NAME);
    })
    // console.log("Array : ",imagesUploadPromises)

    const AllImagesPromise=await Promise.all(imagesUploadPromises);
    // console.log(AllImagesPromise);

    const imagesUrls=AllImagesPromise.map(file => file.secure_url)
    // console.log("urls : ",imagesUrls)
      

    // create a new produrt
    let newProduct=await Product.create({
      title,
      rating,
      price,
      description,
      quantity,
      dressStyle,
      category,
      discount,
      stock,
      sizes:sizesArray,
      colors:colorsArray,
      images:imagesUrls,
      genders:gendersArray,
      reviews:reviewsArray,

    })

    // const photo = req.files.imgFile;

    // Upload image to Cloudinary
    // const imageFile = await uploadImageToCloudinary(photo, process.env.FOLDER_NAME);

    // Create new product
    // const newProduct = await Product.create({
    //   title,
    //   image: imageFile.secure_url,
    // });

    res.status(200).json({
      success: true,
      data: newProduct,
      message: "Product created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create product",
      error: error.message,
    });
  }
};
