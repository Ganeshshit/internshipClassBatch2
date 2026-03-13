
const fs=require('fs')
exports.logfile=function logfile(req,res,next){
   const log= `${Date.now()} / Method : ${req.method} /Path :${req.path} `
   '\n'
    fs.appendFileSync('logfile.txt',log,"utf-8")
    next()
}