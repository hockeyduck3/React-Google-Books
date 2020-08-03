const router = require('express').Router();
const controller = require('../controller/bookController');

router.post('/api/books', (req, res) => {
    res.json(controller.createBook)
});

module.exports = router;
