const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    require: true,
    trim: true,
  },
  bookPrice: {
    type: Number,
    require: true,
  },
  author: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: Number,
    require: true,
    trim: true,
  },
});

const book = mongoose.model("bookSchema", bookSchema);

module.exports = book;
