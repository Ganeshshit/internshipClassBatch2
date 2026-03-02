
let Users = [
    { id: 1, name: 'Ganesh', email: 'ganesh@gmail.com', active: true },
    { id: 2, name: 'Benaka', email: 'benaka@gmail.com', active: false }
]
exports.findUser = function findeUser(req, res) {
    return res.status(200).json({Sucess:true,Message:"User Found"})
}
exports.searchUser = function searchuser(req, res) {
    const { email } = req.query;
    const user = Users.find((u) => u.email == email)
    if (!user) {
        return res.status(400).json({Sucess:false,message:"User Not found"})
    }
    return res.status(200).json(user)
}
exports.Active = function active(req, res) {
    const user = Users.filter((u) => u.active == true)
    return res.status(200).json(user)
}