const mongoose=require('mongoose')

exports.connectMongo= async function connectMongo(){
    try {
        console.log('MongoDB connecting')
        await mongoose.connect(process.env.MONGO_URI).then(
            console.log('MongoDB connected')
        )

    } catch (error) {
        console.log('getting error at Mongodb connection',error)
    }
}