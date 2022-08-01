const mongoose = require("mongoose");
const Player = require("./player");
const ClubReviews = require("./clubReviews");

const club = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    reviews: {
        review: [{type: mongoose.Schema.Types.ObjectId, ref: ClubReviews}]
    }
});

const Club = mongoose.model('Club',club);

module.exports = Club;