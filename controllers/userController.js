const User = require('../models/userModel');

const { generateToken } = require('../helpers/jwt');
const fs = require('fs');
require('dotenv').config();

let getAll = (req, res) => {
    let user = new User();
    let data = user.allUsers();

    res.send(data);
}

let create = (req, res) => {
    let user = new User();
    let data = req.body;
    let newData = user.saveUser(data);
    res.send({message: 'Create Success!', data: newData});
}

let update = (req, res) => {
    let user = new User();
    let data = req.body;
    let updateData = user.updateUser(req.params.userId, data);
    res.send({message: "Success Update!", data: updateData});
}

let view = (req, res) => {
    res.setHeader('Content-type','application/json');
    let user = new User();
    if(req.params.userId !== undefined) {
        res.send(user.allUsers().find(item => item.id == req.params.userId));
    } else {
        res.send(getData());
    }
}

let deletes = (req, res) => {
    let user = new User();
    let data = req.body;
    let updateData = user.deleteUser(req.params.userId);
    res.send({message: "Delete User Successfully!", data: updateData});
}

let login = (req, res) => {
    try {
        const { username, password } = req.body;

        let user = new User();
        let myUser = {};
        user.allUsers().find(item => {
            if(item.username == username && item.password == password) {
                myUser = item;
            }
        });

        if(!username || !password || (typeof myUser === 'Object' && !myUser.hasOwnProperty('username'))) {
            console.log('Error');
            return res.status(401).json({message: "Username or Password not match"});
        }

        let token = generateToken(myUser);
        //res.cookie("token",token, {maxAge: process.env.JWT_EXPIRED_SECONDS * 1000});
        res.status(200).json({token});
    } catch(err) {
        console.log(err);
        res.status(500).json({message: err.toString(), status: "Error!"});
    }
}

let register = (req,res) => {
    let user = new User();
    let data = req.body;
    let newData = user.saveUser(data);
    res.send({message: 'Sign up Succesfully!', data: newData});
}

module.exports = { 
    getAll, 
    create, 
    update, 
    view, 
    deletes, 
    login, 
    register
 }