// Get all users
const query_GetAllUsers = 'SELECT * FROM user_table';
// Get user by phone number
const query_GetUserByPhoneNumber = 'SELECT * FROM user_table where phone_number = $1';
// Get user by id
const query_GetUserById = 'SELECT * FROM user_table where id = $1';


// Get all blogs
const query_GetAllBlogs = 'SELECT * FROM blog_table';
// Add new blog
const query_AddNewBlog = 'INSERT INTO blog_table (id, blog_title, blog_img, publisher_name, published_date, blog_value) VALUES ($1, $2, $3, $4, $5, $6)'

// Get all products
const query_GetAllProducts = 'SELECT * FROM product_table';
// Add new product
const query_AddNewProduct = 'INSERT INTO product_table (id, product_name, product_image, product_price, product_quantity, updated_on) VALUES ($1, $2, $3, $4, $5, $6)'

// E X P O R T
module.exports = {
    query_GetAllUsers,
    query_GetUserByPhoneNumber,
    query_GetUserById,
    query_GetAllBlogs,
    query_AddNewBlog,
    // 
    query_GetAllProducts,
    query_AddNewProduct,
}