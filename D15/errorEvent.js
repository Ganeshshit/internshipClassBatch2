const EventEmiter=require('events')

const eventEmiter = new EventEmiter()

eventEmiter.on('error', (err) => {
    console.error(`Error Occured :${err.message}`)

})

eventEmiter.emit('error', new Error('Something WEnt wrong'))