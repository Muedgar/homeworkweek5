const mongoose = require("mongoose");

const clubReviews = new mongoose.Schema({
    club: {
        type: String,
        required: true,
        default: "all clubs"
    },
    text: {
        type: Array,
        required: true
    }
});

const ClubReviews = mongoose.model('ClubReviews',clubReviews);

module.exports = ClubReviews;