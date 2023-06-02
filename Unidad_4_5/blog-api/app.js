const express = require('express');
const cors = require('cors');
const routerComments = require('./routers/commentRouter');

const app = express();

app.use(cors())
app.use(express.json())

app.use(routerComments)

app.listen(3000, () => {
    console.log("Server API running 3000")
})