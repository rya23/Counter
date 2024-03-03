const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const counterSchema = new Schema({
    count: {
        type: String,
        default: '0'
    }
});

module.exports = mongoose.model('Counter', counterSchema)