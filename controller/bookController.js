const db = require('../model');

module.exports = {
    createBook: function(req, res) {
        db.Book.create(req.body).then(book => {
            res.json(book);
        })
        .catch(err => res.status(422).json(err));
    }
}
