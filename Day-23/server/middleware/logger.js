const fs = require('fs')
exports.logfile = function logfile(req,res,next){
    const log=`${Date.now()}/Method: ${req.method} /Path: ${req.path}`
    fs.appendFileSync("file.txt",log,'utf-8')
}