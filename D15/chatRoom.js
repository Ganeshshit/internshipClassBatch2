const EventEmiter = require('events')

class chatRoom extends EventEmiter {
    constructor() {
        super()
        this.users = new Set()
    }
    join(user) {
        this.users.add(user)
        this.emit('join', user)
    }

    sendMessage(user, message) {
        if (this.users.has(user)) {
            this.emit('sendmessage', user, message)

        }
        else {
            console.log(`${user} Not allow in the room `)
        }


    }
    leaveRoom(user) {
        if (this.users.has(user)) {
            this.users.delete(user)
            this.emit('leave', user)
        }
        else {
            console.log(`${user} Not present in the room`)
        }
    }
}


module.exports = chatRoom
