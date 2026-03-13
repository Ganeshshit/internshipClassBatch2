const jwt=require('jsonwebtoken')

const generateTokens=(userId,email,role)=>{
    const accessToken = jwt.sign(
        {
            id:userId,
            email:email,
            role:role
            
        },
        process.env.JWT_SECRET,
        {
            expiresIn:'15m'
        }
    );
    const refreshToken=jwt.sign({userId:userId},process.env.JWT_SECRET,{expiresIn:"7d"})
    //console.log("Acees token in utility",accessToken)
    return {accessToken,refreshToken}
}

module.exports=generateTokens