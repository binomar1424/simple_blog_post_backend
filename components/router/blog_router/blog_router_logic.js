const pool = require("../../config/db.config");
const {v4: uuid} = require('uuid');
const { query_GetAllBlogs, query_AddNewBlog } = require("../../config/db.queries");

const getAllBlogs = async (req, res) => {
    try {
        const resp = await pool.query(query_GetAllBlogs)
        return res.status(200).json(resp.rows);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({msg: 'Server error'})
    }
}


const newBlog = async (req, res) => {
    const {blog_title, blog_img, publisher_name, blog_value} = req.body;
    if (!blog_title || !blog_img || !publisher_name || !blog_value) {
        return res.status(400).json({msg: 'Fill all the data'})
    }

    try {
        const unique_id = uuid();
        const currentTime = new Date().toLocaleString();
        await pool.query(query_AddNewBlog, [unique_id, blog_title, blog_img, publisher_name, currentTime, blog_value]);
        return res.status(201).json({msg: 'Blog is successfully added'})
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({msg: 'Server error'})
    }
}


module.exports = {
    getAllBlogs,
    newBlog
}