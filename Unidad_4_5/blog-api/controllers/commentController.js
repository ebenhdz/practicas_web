const pool = require('../db');

const getComments = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM comments');
    console.log(rows)
    res.json(rows)
}

module.exports = {
    getComments
}