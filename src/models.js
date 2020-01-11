const mongoose = require('./mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        unique: true,
        dropDups: true
    },
    surname: {
        type: String,
        required: [true, 'User surname is required'],
    },
});

exports.Users = mongoose.model('users', userSchema);
