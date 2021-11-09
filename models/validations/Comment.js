const Joi = require("joi");

const commentSchema = Joi.object({
    postId: Joi.required(),
    id: Joi.required(),
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string().required().pattern(/[a-zA-Z0-9-_.]+@[a-z]+.[a-z]{2,4}/),
    body: Joi.string().min(4).max(100).required()
});


module.exports = {
  commentSchema
};
