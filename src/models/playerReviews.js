const mongoose = require("mongoose");

const playerReviews = new mongoose.Schema({
    text: {
        type: Text,
        required: true
    }
});

const PlayerReviews = mongoose.model('PlayerReviews',playerReviews);

module.exports = PlayerReviews;