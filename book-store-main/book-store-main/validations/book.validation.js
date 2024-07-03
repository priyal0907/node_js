const Joi = require("joi");

const addbook = {
  body: Joi.object().keys({
    bookName: Joi.string().required().trim(),
    bookPrice: Joi.number().required(),
    author: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
  }),
};

module.exports = {
  addbook,
};
