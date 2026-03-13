const mongoose=require('mongoose')

const userSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true

        },
        password:{
            type:String,
            required:true
        },
        role:{
            type:String,
            default:"User"
        },
        refreshToke:{
            type:String,
            select:false
        }
    },
    {timestamps:true}
)
module.exports=mongoose.model("Users",userSchema)