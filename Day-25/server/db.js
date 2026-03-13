const mongoose=require('mongoose')

exports.connectMongo= async function connectMongo(){
    try {
        console.log("start connection")
        await mongoose.connect(process.env.MONGO_URI).then(
            console.log("Mongo DB connected successfully")
        )
    } catch (error) {
        console.log("Getting error at connection",error)
    }
    
}