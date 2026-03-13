const mongoose=require('mongoose')


exports.connectMongo= async function  connectMongo(){
try {
    console.log("Start connection")
    await mongoose.connect(process.env.MONGO_URI).then(
        console.log("Mongo DB Connected sucess fully")
    
    )
} catch (error) {
    console.log("Gettting error at mongo DB Conection",error)
}
}


