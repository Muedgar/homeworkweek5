const mongoose = require("mongoose");

const player = new mongoose.Schema({
    name: {
        type: Array,
        required: true
    },
    reviews: {
        type: mongoose.Schema.Types.ObjectId
    }
});

const Player = mongoose.model('Player',player);

module.exports = Player;