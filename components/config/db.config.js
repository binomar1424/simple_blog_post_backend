// Requirements
const Pool = require('pg').Pool;

// Assign pool
const pool = new Pool({
    user: 'sultan',
    password: 'kaalay',
    database: 'simple_blog_db',
    host: 'localhost',
    port: '5432'
})

// On connection
pool.connect()
.then(() => {
    console.log('DB is connected');
})
.catch((err) => {
    console.error('DB is not conneted :', err.message);
});

// Export db pool
module.exports = pool;