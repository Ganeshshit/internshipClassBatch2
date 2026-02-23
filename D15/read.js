const fs = require('fs')
function callback(err, data) {
    if (err) {
        console.log("Error",err.message)
    } else {
        console.log(data)
    }
}
const container = fs.readFileSync('file2.txt', 'utf-8', callback)
fs.appendFileSync("file.txt",container,'utf-8')
