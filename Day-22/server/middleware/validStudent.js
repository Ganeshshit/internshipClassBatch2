exports.validateStudent=function validateStudent(req,res,next){
        const{name,year}=req.body;
        if(!name||!year){
    return res.status(400).send({message:"fill everything"})}
    next()
}