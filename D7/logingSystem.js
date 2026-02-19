const dbUserName="Ganesh"
const dbPassword="123"

function loging(userName, password) {
    if (userName == dbUserName && password == dbPassword) {
        console.log("Login Success")
    }
    else {
        console.log("Login Failed")
    }
}
setTimeout(loging,2000,dbUserName,dbPassword);
console.log("Checking credentials...")
