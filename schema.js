const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow("", null),
  location: Joi.string().required(),
  country: Joi.string().required(),
  price: Joi.number().min(0).required(),
  image: Joi.object({
    url: Joi.string().allow("", null),
  }).optional(), 
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
