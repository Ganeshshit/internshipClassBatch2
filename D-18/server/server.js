const express = require('express')
const response = require('./response')
const error=new response()
const app = express()
const port = 8000
app.listen(port, () => {
    console.log(`server run at port:${port}`)
    
})

app.get('/about', error.aboutresponse)

// app.get('/about', contact)
