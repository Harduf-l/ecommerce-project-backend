const OrderModel = require('../models/OrderModel')

exports.getAll = (req, res) => {
    OrderModel.find({}, (err, orders)=>{ // find is like "select all"
        if (err){
            res.status(500).send('error')
        }  else {
        res.header('Content-Range', 'posts 0-20/20')
        res.status(200).send(orders)
    }
    } )
}

exports.getAllByEmail = (req, res) => {
    OrderModel.find({firebaseEmail: req.params.id}, (err, orders)=>{ // find is like "select all"
        if (err){
            res.status(500).send('error')
        }  else {
        res.header('Content-Range', 'posts 0-20/20')
        res.status(200).send(orders)
    }
    } )
}


exports.getById = (req, res) => {
    OrderModel.findOne({id: req.params.id}, (err, order)=>{ // find is like "select all"
        err ? res.status(500).send('error'):
        res.status(200).send(order)
    } )
}

exports.post = (req, res) => {
    const order = new OrderModel(req.body); 
    order.save().then(() => res.send(order))
}

exports.put = (req, res) => { // set is replacing the former user, with req.body 
    OrderModel.findOneAndUpdate({id: req.params.id},{$set: req.body}, (err, updatedorder)=>{
        err ? res.status(500).send('error'):
        res.status(200).send(updatedorder)
    } )
}

exports.delete = (req, res) => {
    OrderModel.findOneAndDelete({id: req.params.id}, (err)=>{
    err ? res.send('error'):
    res.status(200).send('order deleted')
} )
}

