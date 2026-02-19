function getUserAdderss(user) {
    console.log(`User Village : ${user.address.Village}`)

}


let user = {
    name: 'Ganesh',
    age: 21,
    gender: "Male",
    address: {
        adddres1: {
            Village: "Haripur",
            City: "Egra",
            Dict: "PS Egra",
            State: "West Bengal",
            Country: "India"
        },
        adddres2: {
            Village: "Bengalore",
            City: "Marathali",
            Dict: "Electronic",
            State: "Karnatak",
            Country: "India"
        }

    }
}
// console.log(getUserAdderss(user))
getUserAdderss(user)