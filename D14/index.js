const express = require('express')
const cors= require('cors')
const app = express()
PORT = 8000


app.use(cors())
app.get('/api', (req, res) => {
    return res.json({ "satatus": "Sucess", "message": " Hello Server run" })
})

app.listen(PORT, () => {
    console.log(`Server run in port ${PORT}`)
})