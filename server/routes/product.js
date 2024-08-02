const express = require("express")
const router = express.Router()

const {
    createProduct
} = require("../controllers/Products")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account

router.post("/createProduct",createProduct)

module.exports = router