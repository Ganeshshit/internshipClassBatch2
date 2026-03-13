exports.validatedoctor=function validateDoctor(req,res,next){
    const{name,specialization,departmentId,experience,availability}=req.body
    if(!name||!specialization||!departmentId||!experience||!availability){
        return res.status(400).send({message:"Enter all fields"})
    }
    next()
}