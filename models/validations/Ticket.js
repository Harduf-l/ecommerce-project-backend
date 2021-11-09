const Joi = require("joi");

const Ticketchema = Joi.object({
subject: Joi.string().min(2).max(20).required(),
  content: Joi.string().min(2).max(300).required(),
  id: Joi.required(),
  response: Joi.string().allow(null, ''),
  status: Joi.required(),
  name: Joi.string().required(),
  email: Joi.string().required(),
});



module.exports = {
    Ticketchema
};
