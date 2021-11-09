const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const postSchema = new Schema({
    id: Number,
    userId: Number,
    title: String,
    body: String,
    img: String
})

module.exports = mongoose.model('posts', postSchema )

