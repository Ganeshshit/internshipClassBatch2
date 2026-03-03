const {users}=require('../model/user.model')

  exports.allusers=function allusers(req,res){
    
    if(users.length==0){
        return res.status(400).send({message:"No users available"})
    }
    return res.status(200).json(users)
}
exports.userid=function userid(req,res){
    const id=req.params.id
    const userid=users.find((i)=>i.id==id)
    if(!userid){
        return res.status(400).send({message:"no id found"})
    }
    return res.status(200).json(userid)
}
exports.createUser=function createUser(req,res){
 const{name,city}=req.body;
 const newUsers={
    id:users.length+1,
    name:name,
    city:city
 }
 if(!name||!city){
    return res.status(400).send({message:"fill everything"})
 }
    
    users.push(newUsers)
    return res.status(200).json(users)
}
exports.getNormalResponse=function getNormalResponse(req,res){
    return res.status(200).json({sucess:true,message:"Get response SuceessFully"})
}