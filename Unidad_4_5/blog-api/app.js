const express = require('express');
const cors = require('cors');
const routerComments = require('./routers/commentRouter');

const app = express();

app.use(cors())
app.use(express.json())

app.use(routerComments)

const PUERTO = 3000;
app.listen(PUERTO, () => {
    console.log(`Servidor API corrriendo en el puerto ${PUERTO}`)
})