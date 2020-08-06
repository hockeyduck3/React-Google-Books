const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const server = express();
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Serve the static files from the React server
server.use(express.static(path.join(__dirname, 'client/build')));

server.use(routes);

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks');

server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
