const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: String,
    rating: Number,
    header: String,
    quantity: Number,
    shortDesc: String,
    longDesc: String,
    loveDesc: String,
    storageInfo: String,
    price: Number,
    salePrice: Number,
    vegan: Boolean,
    lowcarb: Boolean,
    category: String,
    pic1: String,
    pic2: String,
    pic3: String,
    originalPic: String, 
})

module.exports = mongoose.model('products', productSchema )

