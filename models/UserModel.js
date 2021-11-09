const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    id: Number,
    email: String,
    phone: String,
    address: String,
    active: Boolean,
    orders: Array
})

// userSchema.set('toJSON', {
//     virtuals: true,
//     versionKey: false,
//     transform: function (doc, ret) {
//         ret.id = ret._id
//         delete ret._id
//     }
// });


module.exports = mongoose.model('User', userSchema )

