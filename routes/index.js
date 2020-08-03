const express = require('express');
const router = express.Router();
const path = require('path');
const apiRoutes = require('./api-routes');

router.use('/api', apiRoutes);

router.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = router;