let users = ["Ganesh", "Benka", "Manvi"]
let salrys=[10,20,13,16]

// users.forEach((user,) => {
//     console.log(`Index ${index} : ${user}`)
//     console.log(`Upper case User Name index ${index} : ${user.toUpperCase()}`)
//     // console.log(arr)
// })
function printArray(numbers) {
    numbers.forEach(number => {
        console.log(`${number+10}`)
    });
}

salrys.forEach((salary) => {
    salary = salary + 200
})

console.log(forEachReturn)
// printArray(users)