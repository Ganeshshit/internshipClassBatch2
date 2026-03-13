exports.validateMember=function validateMember(req,res,next){
    const{name,email,membershipType}=req.body
    if(!name||!email||!membershipType){
        return res.status(400).send({message:"enter all fields"})
    }
    next()
}