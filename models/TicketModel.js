const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    id: Number,
    name: String,
    subject: String,
    content: String,
    email: String,
    status: String,
    response: String
})

module.exports = mongoose.model('ticket', ticketSchema )

