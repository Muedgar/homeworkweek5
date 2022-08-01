const clubModel = require("../models/club");
const clubReviewModel = require("../models/clubReviews");
const redis = require('redis');

let client = redis.createClient();

client.on('connect', function(){
    console.log('Connected to Redis...');
  });

// crud club
const addClub = async (req,res) => {
    try {
        const {name} = req.body;

        client.hmset(id, [
            'name', name
          ], function(err, reply){
            if(err){
              console.log(err.message);
            }
            res.status(201).json(reply);
          });
        
    }catch(error) {
        console.log(error.message);
    }
}

const updateClub = async (req,res) => {
    try {
        const {name} = req.body;
        const club = await clubModel.findOneAndUpdate({_id: req.params.id},{name},{new: true});
        res.status(200).json(club);
    }catch(error) {
        console.log(error.message);
    }
}

const deleteClub = async (req,res) => {
    try {
        const club = await clubModel.findOneAndDelete({_id: req.params.id});
        res.status(200).json(club);
    }catch(error) {
        console.log(error.message);
    }
}

const getOneClub = async (req,res) => {
    try {
        // const club = await clubModel.findOne({_id: req.params.id}).populate('reviews').exec(function (err, data) {
        //     if(err) console.log(err);
        //     res.status(200).json(club);
        // });

        console.log("trying to return all clubs...");
        client.hgetall(req.body.name, function(err, obj){
            if(!obj){
              console.log({
                error: 'Club does not exist'
              });
            } else {
              res.status(200).json(obj);
            }
          });
    }catch(error) {
        console.log(error.message);
    }
}

const getAllClubs = async (req,res) => {
    try {
        
        
    }catch(error) {
        console.log(error.message);
    }
}



// crud review

const addClubReview = async (req,res) => {
    try {
        const {text} = req.body;
        const club = await clubReviewModel.create({text}, {new: true});
        console.log(club);
        res.status(201).json(club);
    }catch(error) {
        console.log(error.message);
    }
}

module.exports = {
    addClub,
    updateClub,
    deleteClub,
    getOneClub,
    getAllClubs,
    addClubReview
}