var users = require("../model/users.model")
const { v4: uuidv4} = require("uuid")

const getUsers = (req,res)=>{
    res.status(200).json({ users})
};

const createUser = (req,res)=>{

    console.log(req.body.username);
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email
    }
    users.push(newUser)
    res.status(200).json(users)
}

const updateUser = (req,res)=>{
    const userid = req.params.id
    console.log(userid)
    const {username, email} = req.body

    users.filter( (user)=> user.id === userid).map( (selectedUser)=>{
        selectedUser.username = username
        selectedUser.email = email
    })
    res.status(200).json( users)
}

const deleteUser = (req,res)=>{
    const userid = req.params.id;

    users = users.filter( (user)=> user.id !== userid)
    res.status(200).json(users);
}
module.exports = {
    getUsers,createUser,updateUser,deleteUser
}