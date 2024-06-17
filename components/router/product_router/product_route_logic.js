const pool = require("../../config/db.config");
const {v4: uuid} = require('uuid');
const { query_GetAllProducts, query_AddNewProduct } = require("../../config/db.queries");

const getAllProducts = async (req, res) => {
    try {
        const resp = await pool.query(query_GetAllProducts)
        return res.status(200).json(resp.rows);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({msg: 'Server error'})
    }
}


const newProduct = async (req, res) => {
    const {product_name, product_price, product_quantity} = req.body;
    const product_image = req.file;

    if (!product_name || !product_image || !product_price || !product_quantity) {
        return res.status(400).json({msg: 'Fill all the data'})
    } 

    try {
        const unique_id = uuid();
        const currentTime = new Date().toLocaleString();
        const img = product_image.filename;
        // console.log(img)
        console.log(img, product_name, product_price, product_quantity)
        await pool.query(query_AddNewProduct, [unique_id, product_name, img, product_price, product_quantity, currentTime]);
        return res.status(201).json({msg: 'Product is successfully added'})
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({msg: 'Server error'})
    }
}

module.exports = {
    getAllProducts,
    newProduct
}