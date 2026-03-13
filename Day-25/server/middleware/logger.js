const fs = require('fs')
exports.logfile=function logfile(req,res,next){
    let time=new Date().toISOString()
    const log=`${time} /Method: ${req.method} /Path: ${req.path}\n`
    fs.appendFileSync("file.txt",log,'utf-8')
    next()
}