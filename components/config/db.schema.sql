CREATE DATABASE simple_blog_db;

CREATE TABLE blog_table (
    id VARCHAR PRIMARY KEY,
    blog_title VARCHAR NOT NULL, 
    blog_img VARCHAR NOT NULL, 
    publisher_name VARCHAR NOT NULL, 
    published_date DATE NOT NULL
);

CREATE TABLE product_table (
    id VARCHAR PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_image VARCHAR(255) NOT NULL, 
    product_price VARCHAR(255) NOT NULL, 
    product_quantity VARCHAR(255) NOT NULL, 
    updated_on DATE NOT NULL
);