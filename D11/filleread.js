const fs=require('fs')
let data=fs.readFile("index.txt","utf-8",((data)=>{console.log(data)}))
// console.log(data)