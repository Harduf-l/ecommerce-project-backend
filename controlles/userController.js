const userModel = require('../models/UserModel')
// var nodemailer = require('nodemailer');



exports.getAll = (req, res) => { 
    userModel.find({}, (err, users)=>{ // find is like "select all"
        if (err){
            res.status(500).send('error')
        }  else {
        res.header('Content-Range', 'posts 0-20/20')
        res.status(200).send(users)
    }
    } )
}

exports.getById = (req, res) => {
    userModel.findOne({id: req.params.id}, (err, user)=>{ // find is like "select all"
        err ? res.status(500).send('error'):
        res.status(200).send(user)
    } )
}

exports.getByEmail = (req, res) => {
    userModel.findOne({email: req.params.id}, (err, user)=>{ 
        err ? res.status(500).send('error'):
        res.status(200).json(user)
    } )
}

exports.post = (req, res) => {
    const user = new userModel(req.body); 
    user.save().then(() => res.send(user))
}

exports.put = (req, res) => { // set is replacing the former user, with req.body 
    userModel.findOneAndUpdate({id: req.params.id},{$set: req.body}, (err, updatedUser)=>{
        err ? res.status(500).send('error'):
        res.status(200).send(updatedUser)
    } )
}

exports.putOrders = (req, res) => { // set is replacing the former user, with req.body 
    userModel.findOneAndUpdate({email: req.params.id},{$set: req.body}, (err, updatedUser)=>{
        err ? res.status(500).send('error'):
        res.status(200).send(updatedUser)
    } )
}



exports.deleteByEmail = (req, res) => {
    userModel.findOneAndDelete({email: req.params.id}, (err)=>{
        err ? res.send('error'):
        res.status(200).send('user deleted')
    } )
    }

exports.delete = (req, res) => {
userModel.findOneAndDelete({id: req.params.id}, (err)=>{
    err ? res.send('error'):
    res.status(200).send('user deleted')
} )
}

