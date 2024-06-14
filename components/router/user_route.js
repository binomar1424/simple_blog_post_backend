// R E Q U I R E M E N T S
const express = require('express');
const { getAllUsers, getUserById } = require('./user_route_logic');

// A S S I G N  R O U T E 
const userRoute = express.Router();

// R O U T E
userRoute.get('/', getAllUsers);

// get user by id
userRoute.get('/byid/:id', getUserById);

// E X P O R T  M O D U L E
module.exports = userRoute;