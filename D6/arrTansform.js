let arr = [1, 2, 3, 4, 5];
// // // 1. map
// // let newArr=arr.map((item)=>item*2);
// // console.log(newArr); // [2, 4, 6, 8, 10]

function transformArr(i) {
    return i * 2
}

// console.log(arr.map())

let newArr = arr.map(transformArr)
console.log("Nwew rr" + newArr)

