const express = require('express');
const { getAllProducts, newProduct } = require('./product_route_logic');
const { upload_profile } = require('../../middleware/middlewares');

const productRoute = express.Router();

productRoute.get('/', getAllProducts);

productRoute.post('/new', upload_profile.single('product_image'), newProduct);

module.exports = productRoute