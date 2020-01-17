const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    displayName: {
        type: String
    },
    gold: {
        type: Number
    },
    playerHealth: {
        type: Number
    },
    enemyHealth: {
        type: Number
    },
    lastEncouter: {
        type: String
    }
});

module.exports = mongoose.model('User', user);