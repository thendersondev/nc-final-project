const {
    fetchUsers,
    fetchUser,
    addUser,
    changeUser,
    removeUser
 } = require("../models/model_users")

 function getUsers(req,res,next) {
    fetchUsers().then((data)=>{
        res.status(200).send({'users': data})
    })
    .catch(next)
}

function getUser(req,res,next) {
    fetchUser(req.params.user).then((data)=>{
        res.status(200).send({'user': data})
    })
    .catch(next)
}

function postUser(req,res,next) {
    const { name , user } = req.body
    addUser(name,user).then((data)=>{
        res.status(204).send({'user': data})
    })
    .catch(next)
}

function patchUser(req,res,next) {
    const { name , user } = req.body
    changeUser(req.params.user,name,user).then((data)=>{
        res.status(200).send({'user': data})
    })
    .catch(next)
}

function deleteUser(req,res,next) {
    removeUser(req.params.user).then((data)=>{
        res.status(200).send({'user': data})
    })
    .catch(next)
}

module.exports = {
    getUsers,
    postUser,
    getUser,
    patchUser,
    deleteUser
}