const User = require('../model/user.model')

exports.registerUser = async function registerUser(req, res) {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(200).json({ status: "NOT OK", sucess: false, message: "All Field required", User: newUser })
        }
        const newUser = { name: name, email: email, password: password }
        await userModel.create(newUser)
        return res.status(200).json({ status: "OK", sucess: true, message: "User crested Sucess fully", User: newUser })
    } catch (error) {
        console.log("Error occured:::",error)
    }
}
exports.loginUser = async function LoginUser(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email.toLowerCase() })
        console.log(user)
        if (!user) {
            return res.status(400).send({status:"NOT OK",sucess:false,message:"User not exist"})
        }
        const match = await bcrypt.compare(password, user.password)
        console.log(match)
        if (!match) {
            return res.status(400).send({status:"NOT OK",sucess:false,message:"User login failed"})
        }
        return res.status(200).send({status:"OK",sucess:true,message:"User  login successfull"})
    } catch { error } {
        console.log(error)
    }
}