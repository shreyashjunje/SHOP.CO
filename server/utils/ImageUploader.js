const cloudinary = require('cloudinary').v2;

exports.uploadImageToCloudinary = async (file, folder) => {
  try {
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload(file.tempFilePath, { folder }, (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      });
    });
    // console.log(result)
    return result;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
