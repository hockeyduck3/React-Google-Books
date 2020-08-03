const router = require('express').Router();
const controller = require('../controller/bookController');

router.post('/api/books', controller.createBook);

module.exports = router;
