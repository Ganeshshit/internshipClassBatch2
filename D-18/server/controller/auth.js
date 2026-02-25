class auth{
    constructor() {
        this.dBuser = [{
            id:1,userId:"Benaka",password:"ben"
        }]
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.getUserData=this.getUserData.bind(this)
    }
    login(req, res) {
        try {
            const userId = req.body;
            const password = req.body;
            console.log(userId)
            console.log(passWord)
            const user=this.dBuser.find((u)=>u.userId===userId)
            if (userId == dBuser.userId && password == dBuser.passWord) {
                return res.status(200).send({ message: "Sucess", response: "Hello" })
            }
                return res.status(200).send({ message: "Failed", response: "Login Failed" })
        }
        catch (error) {
            return res.status(400).send({"error":error.message})
        }
        }
    }
    register(req,res) {
        try {
            const { userId, passWord } = req.body
            console.log(userId)
            const user = this.dBuser.find((u) => u.userId == userId)
            if (user) {
                return res.status(200).send({ message: "Sucess" })
            }
        } catch (error) {
            return res.status(400).send({sucess:"flase",message:"error"})
        }
        
    }
    getUserData(req,res) {
        return res.status(200).send({ message: "Sucess",res:this.dBuser})
    }
}