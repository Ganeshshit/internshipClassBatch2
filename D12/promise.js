
function callback() {
    console.log("Hello World")
}


// setTimeout(callback, 0)

// let ctr = 0
// for (let i = 0; i < 1000000000; i++) {
//     ctr += 1;
// }
// // console.log("HElloWorld")
// console.log(ctr)

// function setTimeoutPromisified(ms) {

//     let P = new Promise(resolve => setTimeout(resolve, ms));
//     return P;
// }
// function callBackError() {
//     console.log("Error")
// }

// setTimeoutPromisified(3000).then(callback).catch()
// const fs = require("fs")

// function readFilePromisified(filepath, encoding) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filepath, encoding, (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }
// function callBackSucess(data) {
//     console.log(data)
// }
// function callBackError(err) {
//     console.log("Here is the error for the file reading", err.message)
// }

// readFilePromisified("file.txt", "utf-8").then(callBackSucess).catch(callBackError)
// //
// // const { resolve } = require("path")

// let data = fs.readFileSync("file.txt", "base64")
// // console.log(data)


function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    setTimeoutPromisified(3000).then(function () {
        console.log("hello");
        setTimeoutPromisified(5000).then(function () {
            console.log("hello there");
        });
    });
});

