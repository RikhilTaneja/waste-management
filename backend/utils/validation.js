const Joi = require("joi");

module.exports.userValidation = Joi.object({
    username: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
    address: Joi.string().required(),
    society: Joi.string(),
    complaints: Joi.string().hex().length(24),
    posts: Joi.string().hex().length(24),
    contact: Joi.object()
});

module.exports.societyValidation = Joi.object({
    name: Joi.string().required(),
    location: Joi.string().required(),
    reviews: Joi.array(),
    residents: Joi.number().required()
})