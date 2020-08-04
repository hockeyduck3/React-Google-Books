const router = require('express').Router();
const controller = require('../controller/bookController');

router.post('/books', controller.createBook);

module.exports = router;
