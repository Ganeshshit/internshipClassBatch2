const EventEmiter= require('events')


const eventemiter = new EventEmiter()


eventemiter.on('hello', () => {
    console.log("Hello User")
})

eventemiter.emit("hello")

