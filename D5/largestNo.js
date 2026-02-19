let array = [10, 45, 2, 99, 23]

function findLargest(array) {
    let largest = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]
        }
    }
    return largest;
}
console.log("The largest number is: " + findLargest(array))