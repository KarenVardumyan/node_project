const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node_project', { useNewUrlParser: true });

module.exports = mongoose;