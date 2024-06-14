// R E Q U I R E M E N T S

const pool = require("../config/db.config");
const { query_GetUserById, query_GetAllUsers } = require("../config/db.queries");

// G E T  A L L  U S E R S
const getAllUsers = async (req, res) => {
    try {
        const users = await pool.query(query_GetAllUsers);
        return res.status(200).json(users.rows);
    } catch (error) {
        console.error('get-all-users: ', error.message);
        return res.status(500).json({msg: 'Server error'})
    }
}


// Get user by id
const getUserById = async (req, res) => {
    const {id} = req.params

    // If id is missing
    if(!id) {
        return res.status(400).json({msg: 'User id is required'})
    }
    try {
        const user = await pool.query(query_GetUserById, [id]);

        // If user does not exist
        if (user.rowCount < 1) {
            return res.status(404).json({msg: 'No user is founded'})
        }

        // If user is founded
        return res.status(200).json(user.rows)
    } catch (error) {
        console.error('get-user-by-id:', error.message);
        return res.status(500).json({msg: 'Server error'});
    }
}


// E X P O R T  M O D U L E S
module.exports = {
    getAllUsers,
    getUserById
}