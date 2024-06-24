// R E Q U I R E M E N T S
const express = require('express');
const userRoute = require('./components/router/user_route');
const blogRoute = require('./components/router/blog_router/blog_route');
const productRoute = require('./components/router/product_router/product_route');
const { useCors, useJson } = require('./components/middleware/middlewares');

// APP
const app = express();

// S E R V E R  P O R T
const PORT = process.env.PORT || 2300

// M I D D L E W A R E
app.use(useCors);
app.use(useJson);

// R O U T E S

// initail
app.get('/', (req, res) => {
    return res.status(200).json({msg: 'This is a simple blog server api'})
})

// users
app.use('/users', userRoute);

// blogs
app.use('/blogs', blogRoute)

// products
app.use('/products', productRoute);

// profile images route
app.use('/product_images', express.static('images/products'));

// R U N  T H E  S E R V E R
app.listen(PORT, () => {console.log('Server is running on: ', PORT)});