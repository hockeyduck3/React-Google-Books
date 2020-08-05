const db = require('../model');

module.exports = {
    gatherBooks: function(req, res) {
        db.Book.find().then(books => {
            res.json(books);
        }).catch(err => res.status(422).json(err));
    },

    createBook: function(req, res) {
        db.Book.create(req.body).then(book => {
            res.json(book);
        })
        .catch(err => res.status(422).json(err));
    },
    
    deleteBook: function(req, res) {
        db.Book.findByIdAndDelete(req.params.id, function(err) {
            if (err) throw(err);

            res.json('Deleted');
        })
    }
}
