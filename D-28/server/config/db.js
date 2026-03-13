const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        console.log("starting DB connection...")
        mongoose.connect(process.env.MONGO_URI)
            .then(() => console.log('Connected!'));
    } catch (err) {
        console.error("Database connection failed:",err)
    }
}
module.exports=connectDB