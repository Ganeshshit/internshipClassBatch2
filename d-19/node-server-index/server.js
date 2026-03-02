const http = require('http')
const { url } = require('inspector')
const server = http.createServer(function (req, res) {
    console.log('get request from the browser')
    res.writeHead(200)
    //res.end("Hello World")
    console.log(req,Headers)
    console.log(req, url)
    const method=req.method
    const path = req.url
    switch (method) {
        case'get':
            switch (path) {
                case '/books':
                    res.writeHead(200)
                    return res.end({books})
            }

    }
})
const Port = 8001
server.listen(Port, () => {
    console.log("server running ${Port}")
})