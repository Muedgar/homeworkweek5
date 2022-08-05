const mongoose = require("mongoose");

const playerReviews = new mongoose.Schema({
    player: {
        type: String,
        required: true
    },
    text: {
        type: Array,
        required: true
    }
});

const PlayerReviews = mongoose.model('PlayerReviews',playerReviews);

module.exports = PlayerReviews;