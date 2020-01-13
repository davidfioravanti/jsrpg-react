const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let player = new Schema({
    player_name: {
        type: String
    },
    player_username: {
        type: String
    },
    player_password: {
        type: String
    }
});

module.exports = mongoose.model('Player', player);