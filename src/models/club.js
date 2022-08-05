const mongoose = require("mongoose");
const Player = require("./player");
const ClubReviews = require("./clubReviews");

const club = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    reviews: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: ClubReviews
    },
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Player
    }
});

const Club = mongoose.model('Club',club);

module.exports = Club;