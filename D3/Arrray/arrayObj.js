let userList = [{
    name: "Ganesh",
    age: 2,
    address: "India",
    status:"active"
}, {
    name: "Adarsh",
    age: 22,
    address: "India",
    status: "active"
}, {
    name: "Abhishek",
    age: 23,
    address: "India",
    status: "inactive"
}
]

console.log("Name:" + userList[0].name)
// // Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
function returnLegalUser(userList) {
    // const legalUser = userList.filter(userList.age > 18)
    // const legalUser = userList.filter(function(user) {
    //     return user.age > 18
    // })
    let legalUser = []
    for (i = 0; i < userList.length; i++) {
        // console.log("Legal User Name: " + legalUser[i].name)
        if (userList[i].age > 18) {
            legalUser.push(userList[i])
        }
    }
    // console.log(legalUser)
    return legalUser
}
console.log(returnLegalUser(userList))