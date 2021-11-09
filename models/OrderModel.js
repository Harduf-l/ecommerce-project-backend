const mongoose = require('mongoose')

const Schema = mongoose.Schema;



const ordersSchema = new Schema({
    orderSubTotal: Number,
    status: String,
    deliveryType: String,
    customerId: Number,
    products: Array, 
    id: Number, 
    firebaseEmail: String
})

// ordersSchema.set('toJSON', {
//     virtuals: true,
//     versionKey: false,
//     transform: function (doc, ret) {
//         ret.id = ret._id
//         delete ret._id
//     }
// });

module.exports = mongoose.model('Order', ordersSchema )

