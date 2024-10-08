const Joi = require("joi");

//validating listing schema 
module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    
    description: Joi.string().required(),
    
    price: Joi.number().required().min(0),
    
    country: Joi.string().required(),
    
    location: Joi.string().required(),
    
    image: Joi.string().allow("", null),
    }).required()
    });
    
    
//validating review schema 
module.exports.reviewSchema = Joi.object({
  reviews: Joi.object({
    rating: Joi.number().required().min(0).max(5),
    comment: Joi.string().required(),
  }).required(),
});