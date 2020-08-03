const mongoose = require('mongoose');
const Scehma = mongoose.Schema;

const bookSchema = new Scehma({
    title: {
        type: String,
        required: true 
    },

    authors: {
        type: Array,
        required: true
    },

    categories: {
        type: Array
    },

    description : {
        type: String
    },

    image: {
        type: String
    },

    link: {
        type: String
    } 
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
