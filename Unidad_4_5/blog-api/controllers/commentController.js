const pool = require("../db");

/*
  - SELECT. Cuando ejecutemos un select el metodo query nos regresara un array con las filas
  - DELETE, UPDATE, INSERT. El query nos regresa un objecto de tipo ResultSetHeader, con estos parametros:
    {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 5,
        info: '',
        serverStatus: 2,
        warningStatus: 0
    }
 */

const getComments = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM comments");
  res.json(rows);
};

const getComment = async (req, res) => {
  const id = req.params.id;
  const [rows] = await pool.query("SELECT * FROM comments WHERE id = ?", [id]);
  res.json(rows);
};

const createComment = async (req, res) => {
  const { author, memoji, content } = req.body;
  const date = new Date();
  const [result] = await pool.query(
    "INSERT INTO comments (author, memoji, date, content) VALUES (?, ?, ?, ?)",
    [author, memoji, date, content]
  );

  let respuestaData = {
    success: false,
    data: []
  }
  if (result.affectedRows == 1) {
    respuestaData.success = true;
    respuestaData.data = [{ id: result.insertId, ...req.body, date: date}];
  }
  res.json(respuestaData);
};

const deleteComment = async (req, res) => {
  let respuestaData = {
    success: false,
    data: []
  }
  try {
    const id = parseInt(req.params.id);
    const [result] = await pool.query(
      "DELETE FROM comments WHERE id = ?",
      [id]
    );

    console.log(result)
    if (result.affectedRows == 1) {
      respuestaData.success = true;
    }
  } catch(error) {
    respuestaData.data = [{message: error.message}]
  }
  res.json(respuestaData)
};

const updateComment = async (req, res) => {
  const { content } = req.body;
  const comId = parseInt(req.params.id);

  let respuestaData = {
    success: false,
    data: []
  }
  try {
    const [result] = await pool.query(
      "UPDATE comments SET content = ? WHERE id = ?",
      [content, comId]
    );

    if (result.affectedRows == 1) {
      respuestaData.success = true;
    }
  } catch(error) {
    respuestaData.data = [{message: error.message}]
  }
  res.json(respuestaData)
};

module.exports = {
  getComments,
  getComment,
  createComment,
  deleteComment,
  updateComment
};
