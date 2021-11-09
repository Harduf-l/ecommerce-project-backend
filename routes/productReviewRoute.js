require('../data/database')
const express = require('express')
const router = express.Router();
const productReviewController = require('../controlles/productReviewController')

var validator = require("express-joi-validation").createValidator({passError: true});
var {reviewSchema } = require("../models/validations/Review");

const joiErrors = function(err,req, res, next){
  console.log(err)
  console.log(err.error)

    if (err && err.error && err.error.isJoi) {
  
      console.log(err.error)
      const errors = [];
  
      err.error.details.forEach(err => {
        const error = {}
        error.field = err.message.split("\"")[1];
        error.message = err.message.split("\" ")[1]
        errors.push(error)
      });
  
      // we had a joi error, let's return a custom 400 json response
      res.status(400).json(errors);
    } else {
      // pass on to another error handler
      next(err);
    }
  }


router.get('/', productReviewController.getAll)

router.get('/category/:id', productReviewController.getGroup)

router.get('/:id', productReviewController.getById)

router.post('/', validator.body(reviewSchema),joiErrors, productReviewController.post)


router.put('/:id', productReviewController.put)


router.delete('/:id', productReviewController.delete)

module.exports = router