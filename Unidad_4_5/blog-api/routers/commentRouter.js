const express = require('express')
const {getComments} = require('../controllers/commentController')
const routerComments = express.Router()


// Consultar comentarios
routerComments.get('/comments', getComments)

// Crear comentario
routerComments.post('/comments', (req, res) => {
    const comment = req.body;
    const newId = Math.floor(Math.random() * 10000)
    const date = timeAgo(new Date());
    console.log(date)
    res.send({ success: true,  data: {...comment, id: newId, date: date}})
})

// Actualizar comentario
routerComments.put('/comments/:id', (req, res) => {
    const commentId = req.params.id;
    res.send({ success: true,  data: []})
})

// Eliminar comentario
routerComments.delete('/comments/:id', (req, res) => {
    const commentId = req.params.id;
    res.send({ success: true,  data: null})
})

function timeAgo(input) {
    const date = (input instanceof Date) ? input : new Date(input);
    const formatter = new Intl.RelativeTimeFormat('en');
    const ranges = {
      years: 3600 * 24 * 365,
      months: 3600 * 24 * 30,
      weeks: 3600 * 24 * 7,
      days: 3600 * 24,
      hours: 3600,
      minutes: 60,
      seconds: 1
    };
    const secondsElapsed = (date.getTime() - Date.now()) / 1000;
    if(secondsElapsed < 1) {
        return '0 seconds';
    }
    for (let key in ranges) {
        if (ranges[key] < Math.abs(secondsElapsed)) {
          const delta = secondsElapsed / ranges[key];
          return formatter.format(Math.round(delta), key);
      }
    }
}

module.exports = routerComments;