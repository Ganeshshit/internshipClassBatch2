function selectDemo() {
    let byId = document.getElementById("title");
    let byClass = document.getElementsByClassName("text");
    let byTag = document.getElementsByTagName("p");
    let query = document.querySelector(".text");
    let queryAll = document.querySelectorAll("p");
    console.log(byId, byClass, byTag, query, queryAll);
}
// selectDemo();
function changeText() {
    let selectOldtext = document.getElementsByClassName("oldtext");
    selectOldtext[0].innerHTML = "The text has been changed!";
    selectOldtext[1].innerHTML = "The text has been changed!";
}

function changeStyel() {
    let heading = document.getElementById('h1')
    heading.style.color = 'red'
    heading.style.fontFamily = 'cursive'
    heading.style.fontSize = '100px'
    heading.style.backgroundColor = 'yellow'
    let darkmood = document.getElementById('dark')
    darkmood.style.backgroundColor = 'black'
}
function addUser() {
    let newUser = document.createElement("li");
    for (let i = 0; i < 9; i++) {
        newUser.innerHTML = "User" + (i + 1);
        let userList = document.querySelector(".userList ol");
        userList.appendChild(newUser.cloneNode(true));
    }
    let userList = document.querySelector(".userList ol");
    userList.appendChild(newUser);
}

function removeUser() {
    let lastChild = document.querySelector(".userList ol li:last-child");
    lastChild.remove()
}