const chatRoom = require('./chatRoom.js')

const chat = new chatRoom()

chat.on('join', (user) => {
    console.log(`${user} Joind sucess fully`)
})


chat.on('sendmessage', (user, message) => {
    console.log(`${user} : ${message}`)
})

chat.on('leave', (user) => {
    console.log(`${user} leave the chat sucessfully`)
})


//!Simulation of the chat


chat.join("Ganesh")
chat.join("Adarsh")
chat.sendMessage("Ganesh", "Hay Adarsh Ganesh is here")

chat.sendMessage("Adarsh", "Hey Ganesh ardarsh is here")

chat.leaveRoom("Ganesh")
chat.sendMessage("Ganesh", "Hay adarsh How are you")

chat.leaveRoom("Adarsh")
chat.sendMessage("Adarsh", "Hay ganesh How are you")
chat.leaveRoom('Ganesh')