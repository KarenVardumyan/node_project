const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node_project', { useNewUrlParser: true })
    .then((result) => {
        console.log('Connection to database completed successfully!');
    })
    .catch((error) => {
        console.log('Could not connect to database!');
    })

module.exports = mongoose;