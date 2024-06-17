// Requirements
const express = require('express');
const cors = require('cors');
const multer = require('multer');

const useCors = cors({
    origin: ['http://localhost:5173', 'https://binomar-blog.netlify.app', 'https://simple-blog-66vo.onrender.com'],
    credentials: true
});

// Accept json
const useJson = express.json();

// Multer
const multerStorageForProfile = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images/products')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
const upload_profile = multer({storage: multerStorageForProfile});

module.exports = {
    useCors,
    useJson,
    upload_profile,
}