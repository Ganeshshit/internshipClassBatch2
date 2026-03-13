exports.validateCourse=function validateCourse(req,res,next){
    const{title,credits}=req.body;
    if(!title||!credits){
return res.status(400).send({message:"fill everything"})}
next()
}