const mysql = require('mysql2/promise');
require('dotenv').config();

/*
Primer forma de conectar a la bd:
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  })
*/

const {createPool} = require('mysql2/promise');

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3306,
    database: 'blog',
    ssl: {"rejectUnauthorized":true}
})

// Alternativa para crear el pool: Pasar la URL de conexion
//const pool = createPool(process.env.DATABASE_URL)

module.exports = pool