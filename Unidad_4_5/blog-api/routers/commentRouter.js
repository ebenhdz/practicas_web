const express = require('express')
const {getComments, getComment, createComment, deleteComment, updateComment} = require('../controllers/commentController')

const routerComments = express.Router()

// Consultar comentarios
routerComments.get('/comments', getComments)

// Consulta comentario por id
routerComments.get('/comments/:id', getComment)

// Crear comentario
routerComments.post('/comments', createComment)

// Actualizar comentario
routerComments.put('/comments/:id', updateComment)

// Eliminar comentario
routerComments.delete('/comments/:id', deleteComment)

module.exports = routerComments;