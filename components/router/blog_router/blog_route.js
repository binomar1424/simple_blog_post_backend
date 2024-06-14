// Requirements
const express = require('express');
const { getAllBlogs, newBlog } = require('./blog_router_logic');

// 
const blogRoute = express.Router()

blogRoute.get('/', getAllBlogs);
blogRoute.post('/new', newBlog)
 
module.exports = blogRoute;