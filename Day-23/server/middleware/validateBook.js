exports.validateBook=function validateBook(req,res,next){
    const{title,genre,authorId,totalCopies,availableCopies}=req.body
    if(!title||!genre||!authorId||!totalCopies||!availableCopies){
        return res.status(400).send({message:"enter all fields"})
    }
    next()
}