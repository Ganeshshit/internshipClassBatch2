const express = require('express')
const dotenv=require('dotenv')
const connectDB = require('./config/db')
const app = express()
const port = 8000



dotenv.config()
connectDB()



app.listen(port, () => {
    console.log(`server running in ${port}`)
})