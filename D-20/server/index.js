const express = require("express")
const app = express()
const port = 5000
const { findUser, searchUser, Active }= require('./module')
app.use(express.json());
app.listen(port, () => {
})
let Users = [
    { id: 1, name: 'Ganesh', email: 'ganesh@gmail.com', active: true },
    { id: 2, name: 'Benaka', email: 'benaka@gmail.com', active: false }
]
app.get('/user/active', (req, res) => {
    const users = Users.filter((u) => u.active == true)
    return res.status(200).json(users)
})
app.get('/Active', Active)
app.get('/findUser',findUser)

app.get('/user', (req, res) => {
    
})


// app.get('/user/search', (req, res) => {
//     const { email } = req.query;
//     const users = Users.find((u) => u.email == email)
//     return res.status(200).json(users)
// })

app.get('/user/search',searchUser)

app.post('/user/register', (req, res) => {
    const { name, email, active } = req.body;
    const id = (Users.lenght)+1;
    const newUser = {
        id: id,
        name: name,
        email: email,
        active: active,
    }
    Users.push(newUser)
    console.log(Users)
    return res.status(200).json(Users)
})


app.patch('/users/:id/toggle-status', (req, res) => {
    const id = req.params.id;
    console.log("ID :" + id)
    const user = Users.find((u) => u.id == id)
    console.log(user)
    user.active = !user.active
    
    return res.status(200).json(Users)
    
})


app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const { name, email, active } = req.body;
    if (!name || !email || !active) {
        return res.status(300).json({ Sucess: false, message: "All field Request" })
    }
    const user = Users.find((u) =>id == id)
    if (!user) {
        res.status(400).send({message:"Id not found"})
    }
    user.name = name
    user.email=email
    return res.status(200).json(Users)
})
app.listen(port, () => {
    console.log(`server listen at port:${port}`)
})