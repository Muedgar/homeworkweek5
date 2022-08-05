// const clubModel = require("../models/");
// const clubReviewModel = require("../models/clubReviews");


// // crud club
// const addClub = async (req,res) => {
//     try {
//         const {name} = req.body;
//         const club = await clubModel.create({name});
//         res.status(201).json(club);
//     }catch(error) {
//         console.log(error.message);
//     }
// }

// const updateClub = async (req,res) => {
//     try {
//         const {name} = req.body;
//         const club = await clubModel.findOneAndUpdate({_id: req.params.id},{name});
//         res.status(200).json(club);
//     }catch(error) {
//         console.log(error.message);
//     }
// }

// const deleteClub = async (req,res) => {
//     try {
//         const club = await clubModel.findOneAndDelete({_id: req.params.id});
//         res.status(200).json(club);
//     }catch(error) {
//         console.log(error.message);
//     }
// }

// const getOneClub = async (req,res) => {
//     try {
//         const club = await clubModel.findOne({_id: req.params.id}).populate('reviews').exec(function (err, data) {
//             if(err) console.log(err);
//             console.log("club found",data);
//             res.status(200).json(data);
//         });
//     }catch(error) {
//         console.log(error.message);
//     }
// }

// const getAllClubs = async (req,res) => {
//     try {
//         console.log("trying to return all clubs");
//         const clubs = await clubModel.find({});
//         res.status(200).json(clubs);
//     }catch(error) {
//         console.log(error.message);
//     }
// }



// // crud review

// const addClubReview = async (req,res) => {
//     try {
//         const {id,name, text} = req.body;
//         if(!id) {
//             const review = await clubReviewModel.create({club: name,text});
//             console.log(review._id);
//             const club = await clubModel.findOneAndUpdate({_id:req.params.id}, {reviews: review.id}, {new: true})
//             res.status(201).json({status: "review created...", review,club});
//         }else {
//             await clubReviewModel.findOne({_id:id}).then(async d=> {
                
//                 d.text.push(text);
//                 console.log(d);
//                 const review = await clubReviewModel.findByIdAndUpdate({_id:id},{club: d.club, text: d.text},{new: true});
//                 const club = await clubModel.findOneAndUpdate({_id:req.params.id}, {reviews: review.id}, {new: true})
//                 res.status(200).json({status: "review created...", review,club});
//             });
//         }
        
        
//     }catch(error) {
//         console.log(error.message);
//     }
// }

// //
// const getAllClubReviews = async (req,res) => {
//     try {
//         const allReviews = await clubReviewModel.find({});
//         res.status(200).json(allReviews);
//     }catch(error) {
//         console.log(error.message);
//     }
// }

// module.exports = {
//     addClub,
//     updateClub,
//     deleteClub,
//     getOneClub,
//     getAllClubs,
//     addClubReview,
//     getAllClubReviews
// }