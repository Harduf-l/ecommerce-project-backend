const Joi = require("joi");

const reviewSchema = Joi.object({
  title: Joi.string().min(2).max(50).required(),
  content: Joi.string().required(),
  id: Joi.required(),
  rating: Joi.required(),
  name: Joi.string().required(),
  productId: Joi.string().required(),
});


module.exports = {
  reviewSchema
};
