const { bookSchema } = require("../models");
const getbook = () => {
  return bookSchema.find();
};

const addbook = () => {
  return bookSchema.create();
};

const deletebook = () => {
  return bookSchema.findByIdAndDelete();
};

const updatebook = () => {
  return bookSchema.findByIdAndUpdate();
};

module.exports = { getbook, addbook, deletebook, updatebook };
