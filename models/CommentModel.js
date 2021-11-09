const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    postId: Number,
    id: Number,
    name: String,
    email: String,
    body: String
})

module.exports = mongoose.model('comments', commentSchema )

