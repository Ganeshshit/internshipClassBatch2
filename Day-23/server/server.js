const express=require('express')
const app=express()
const bookroute=require('./routes/bookRoutes')
const memberroute=require('./routes/memberRoutes')
const authorroute=require('./routes/authorRoutes')
const PORT=8000
app.listen(PORT,()=>{
    console.log(`server running in ${PORT}`)
})
app.get('/home',(req,res)=>{
    return res.status(200).send({message:"Welcome"})
})
app.use(express.json())
app.use('/books',bookroute)
app.use('/members',memberroute)
app.use('/authors',authorroute)