function greetUser(name) {
    if (name == "") {
        console.log("Invalid Name")
    }
    else {
        setTimeout(() => {
            console.log(`Hello ${name}`)
        }, 2000)
    }
}
greetUser("Manvi")