const mongoose = require("mongoose");
const PlayerReviews = require("./playerReviews");

const player = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    reviews: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: PlayerReviews
    }
});

const Player = mongoose.model('Player',player);

module.exports = Player;