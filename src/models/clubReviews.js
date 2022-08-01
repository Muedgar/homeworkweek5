const mongoose = require("mongoose");

const clubReviews = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

const ClubReviews = mongoose.model('ClubReviews',clubReviews);

module.exports = ClubReviews;