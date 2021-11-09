const reviewModel = require('../models/ProductsReviewsModel')
const { ObjectId } = require('mongodb');



// exports.getAll = (req, res) => {

//     reviewModel.find({}, (err, reviews)=>{ // find is like "select all"
//         if (err){
//             res.status(500).send('error')
//         }  else {
//         res.header('Content-Range', 'posts 0-20/20')
//         res.status(200).send(reviews)
//     }
//     } )
// }


exports.getAll = async function(req, res, next){

    try{
        const reviews = await reviewModel.find({});
        res.send(reviews);
    }
    catch(err){
        res.status(500).send(err);
    }
}



exports.getGroup = (req, res) => {

    reviewModel.find({productId: req.params.id}, (err, review)=>{ // find is like "select all"
        err ? res.status(500).send('error'):
        res.status(200).send(review)
    } )
}



exports.getById = async function(req, res, next){

    try{
        const review = await reviewModel.findOne({id: req.params.id}).populate({path: 'productId2', select: 'header'});;
        res.send(review);
    }
    catch(err){
        res.status(500).send(err);
    }
}


// exports.getById = (req, res) => {
//     reviewModel.findOne({id: req.params.id}, (err, order)=>{ // find is like "select all"
//         err ? res.status(500).send('error'):
//         res.status(200).send(order)
//     } )
// }

exports.post = (req, res) => {

    const review = new reviewModel(req.body); 
    // review.productId2 = ObjectId(req.body.productId2);
    review.save().then(() => res.send(review))
}


exports.put = (req, res) => { // set is replacing the former user, with req.body 
    reviewModel.findOneAndUpdate({id: req.params.id},{$set: req.body}, (err, updatedReview)=>{
        err ? res.status(500).send('error'):
        res.status(200).send(updatedReview)
    } )
}

exports.delete = (req, res) => {
    reviewModel.findOneAndDelete({id: req.params.id}, (err)=>{
    err ? res.send('error'):
    res.status(200).send('review deleted')
} )
}

