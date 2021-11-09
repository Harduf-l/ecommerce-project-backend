const express = require('express')
const router = express.Router();
const commentModel = require('../models/CommentModel')


var {commentSchema } = require("../models/validations/Comment");
var validator = require("express-joi-validation").createValidator({  passError: false });


router.get('/', (req, res) => {
    commentModel.find({}, (err, comments)=>{ // find is like "select all"
        err ? res.status(500).send('error'):
        res.status(200).send(comments)
    } )
})


router.get('/:id', (req, res) => {
    commentModel.findOne({id: req.params.id}, (err, comment)=>{ // find is like "select all"
        err ? res.status(500).send('error'):
        res.status(200).send(comment)
    } )
})


router.post('/', validator.body(commentSchema), (req, res) => {
    const comment = new commentModel(req.body); 
    comment.save().then(() => res.send(comment))
})


router.put('/:id', (req, res) => { // set is replacing the former user, with req.body 
    commentModel.findOneAndUpdate({id: req.params.id},{$set: req.body}, (err, updatedComment)=>{
        err ? res.status(500).send('error'):
        res.status(200).send(updatedComment)
    } )
})


router.delete('/:id', (req, res) => {
    commentModel.findOneAndDelete({id: req.params.id}, (err)=>{
        err ? res.send('error'):
        res.status(200).send('comment deleted')
    } )
})

    

module.exports = router