const express=require('express')
const dotenv=require('dotenv')
const{connectMongo}=require('./db')
const app=express()
const{logfile}=require('./middleware/logger')
const userRoute=require('./route/userRoute')
const authMiddleware = require('./middleware/auth')
const PORT=8000
app.listen(PORT,(req,res)=>{
    console.log(`server running on ${PORT}`)
})

dotenv.config()
connectMongo()
app.use(express.json())
// app.use(authMiddleware)
app.use(logfile)
app.use('/user',userRoute)