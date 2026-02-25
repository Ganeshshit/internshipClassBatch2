const http =require('http')
const server = http.createServer(function (req, res) {
    console.log('get request from the browser')
    console.log(req.url)
    const path = req.url
    switch (path) {
        case '/':
            res.writeHead(200)
            return res.end("Hello  Wrold")
        case '/contact-us':
            res.writeHead(200)
            return res.end("abc@gmail.com")
        case '/tweet':
            return res.end("Thank You")
        case '/contact':
            return res.end("61969665966")
    
        default:
           return res.end("connection lost")
            break;
    }
    //res.writeHead(200)
    //res.end("Hello World")
})
const Port = 8000
server.listen(Port, () => {
    console.log(`server running ${Port}`)
})