CREATE DATABASE simple_blog_db;

CREATE TABLE blog_table (
    id VARCHAR PRIMARY KEY,
    blog_title VARCHAR NOT NULL, 
    blog_img VARCHAR NOT NULL, 
    publisher_name VARCHAR NOT NULL, 
    published_date DATE NOT NULL
);