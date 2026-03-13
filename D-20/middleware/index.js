const fs = require("fs")
const express = require('express')

const app = express()
const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server Run at PORT: ${PORT}`)
})
function middleWare1(req, res, next) {
    console.log("It's First Middleware")
    next()
}
function middleWare2(req, res, next) {
    console.log("Middleware 2 Not send the next")
    next()
}
function logFIle(req, res, next) {
    const log = `${Date.now()} Get request from the browser Method :${req.method} ,Path :${req.path} \n`
    fs.appendFileSync("log.txt", log, "utf-8")
    next()
}

app.get('/getUserData', middleWare1, middleWare2, logFIle, (req, res) => {
    const header = req.headers
    const path = req.path


    // console.log("Header:",header)
    console.log("PAth", path)
    const log = `${Date.now()} Get request from the browser Method :${req.method} ,Path :${req.path}`
    console.log(log)
    console.log("Hello Word")
    return res.status(200).json({ sucess: true, message: "After Middleware 1 pass next" })
})

app.get('/home', logFIle,(req, res) => {
    return res.status(200).json({Status:"OK",sucess:true,message:"Response geted"})
})