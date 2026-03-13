const express = require('express')
const dotenv=require('dotenv')
const {logfile}=require('./middleware/logger')
const patientroute=require('./routes/patientroute')
const userRoute=require('./routes/user.router')
const noteRoute=require('./routes/noteroute')
const { connectMongo } = require('./config/db')
const doctorRoute=require('./routes/doctor.route')

const app = express()
const PORT = 8000
//app.use(dotenv)
dotenv.config()
app.listen(PORT,(req,res)=>{
    console.log(`Server running in ${PORT}`)
})
connectMongo()
app.use(express.json())
app.use(logfile)
app.use('/user',userRoute)
app.use('/patients',patientroute)
app.use('/doctors',doctorRoute)
app.use('/note',noteRoute)
r










