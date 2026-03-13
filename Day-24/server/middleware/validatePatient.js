exports.validatePatient=function validatePatient(req,res,next){
    const{name,age,gender,bloodGroup,phone,condition,status}=req.body
    if(!name||!age||!gender||!bloodGroup||!phone||!condition||!status){
        return res.status(400).send({message:"Enter all fields"})
    }
    next()
}