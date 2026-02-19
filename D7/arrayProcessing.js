let arr = []

function arrSum(arr) {
    if (arr.length==0) {
        console.log("No Data")
        return
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)

}
// console.log(arrSum(arr))

setTimeout(arrSum,3000,arr)

