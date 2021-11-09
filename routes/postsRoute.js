const express = require('express')
const router = express.Router();
const postModel = require('../models/PostModel')

router.get('/', (req, res) => {
    postModel.find({}, (err, posts)=>{ // find is like "select all"
        if (err) {
            res.status(500).send('error')
        } else {
            posts.map((currentPost)=> {
                currentPost.img = `${process.env.URL_PUBLIC}${currentPost.img}`
        })
        res.status(200).send(posts)
        }
        
    } )
})


module.exports = router