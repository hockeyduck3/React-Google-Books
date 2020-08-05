const router = require('express').Router();
const controller = require('../controller/bookController');

router.get('/books', controller.gatherBooks);
router.post('/books', controller.createBook);

module.exports = router;
