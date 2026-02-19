const fs=require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,'./input.txt'),'utf-8',readFileCallback);
function readFileCallback(err,data){
    if (err) {        
        console.log('Error reading file:', err);
        return;
    }   
    console.log(data);
}
// readFileCallback(null,'File read successfully');

setTimeout(readFileCallback, 6000, null, 'File read successfully after 2 seconds');
console.log('This will log before the file read callback is executed.');


