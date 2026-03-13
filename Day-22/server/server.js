const express=require('express')
const app=express()
const courseroute=require('./routes/coursesroutes')
const studentroute=require('./routes/studentroutes')

const PORT=8000
const {logfile}=require('./middleware/logger')
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})
app.get("/home",logfile,(req,res)=>{
    return res.status(200).send({status:"OK",sucess:true,message:"Get response suces full"})
})

app.use(express.json())
app.use('/students',studentroute)
app.use('/courses',courseroute)
