const router = require('express').Router();
const controller = require('../controller/bookController');

router.get('/books', controller.gatherBooks);
router.post('/books', controller.createBook);

router.delete('/books/:id', controller.deleteBook);

module.exports = router;
