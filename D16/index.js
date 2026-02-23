// const http = require('http')
const http = require('http')

const server = http.createServer(function (req, res) {
    console.log("")
    res.writeHead(200)
    res.end("THanks for the visiting")


})
const PORT = 8000
server.listen(PORT, () => {
    console.log(`Server listen at PORT : ${PORT}`)
})