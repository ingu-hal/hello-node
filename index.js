const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send("here you go");
})
app.listen(8080)
