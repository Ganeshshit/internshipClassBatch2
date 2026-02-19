const fs = require('fs')
let content = fs.readFileSync('task.txt', 'utf-8')
fs.appendFile("input.txt", content, (err) => {
    console.log(err)
})