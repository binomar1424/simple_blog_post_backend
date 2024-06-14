// R E Q U I R E M E N T S
const express = require('express');
const cors = require('cors')
const userRoute = require('./components/router/user_route');
const blogRoute = require('./components/router/blog_router/blog_route');

// APP
const app = express();

// S E R V E R  P O R T
const PORT = process.env.PORT || 2300

// M I D D L E W A R E
app.use(cors(
    origin = '*'
));
app.use(express.json())

// R O U T E S
// users
app.get('/', (req, res) => {
    return res.status(200).json({msg: 'This is a simple blog server api'})
})
app.use('/users', userRoute);
// blogs
app.use('/blogs', blogRoute)

// R U N  T H E  S E R V E R
app.listen(PORT, () => {console.log('Server is running')})