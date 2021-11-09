const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productReviewsSchema = new Schema({
    id: Number, 
    rating: Number,
    title: String,
    content: String,
    name: String,
    productId: String,
    productId2: {type: Schema.Types.ObjectId, ref: 'products'},
})


   


// productReviewsSchema.set('toJSON', {
//     virtuals: true,
//     versionKey: false,
//     transform: function (doc, ret) {
//         ret.id = ret._id
//         delete ret._id
//     }
// });


module.exports = mongoose.model('productsReviews', productReviewsSchema )

