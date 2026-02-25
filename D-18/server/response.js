class response{
    aboutresponse(req, res) {
        return res.status(200).send({ message: "Sucess", response: "Hello" })  
    }
}
module.exports=response