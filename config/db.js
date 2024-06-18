const mysql = require('mysql2');
const util = require('util');

// Create the connection pool
const pool = mysql.createPool({
    host: process.env.APP_DB_HOST,
    user: process.env.APP_DB_USER,
    password: process.env.APP_DB_PASSWORD,
    database: process.env.APP_DB_NAME,
    connectionLimit: 10, // Maximum number of connections in the pool
});

// Promisify the pool query method
pool.query = util.promisify(pool.query);

module.exports = pool;