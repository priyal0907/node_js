let mongoose = require("mongoose");
let bookSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    pages: {
        type: Number,
        require: true
    },
    published_date: {
        type: Date,
        default: Date.now
    },
    availability: {
        type: String,
        enum: ['Available', 'Checked Out', 'Reserved'],
        default: 'Available'
    },
    language: {
        type: String,
        require: false
    }
});

let books = mongoose.model("Books", bookSchema)
module.exports = books;