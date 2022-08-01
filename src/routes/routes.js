const router = require("express").Router();

const {
    addClub,
    updateClub,
    deleteClub,
    getOneClub,
    getAllClubs,
    addClubReview
} = require("../controllers/club");

// club
router.post("/api/club/addClub", addClub);
router.patch("/api/club/updateClub/:id", updateClub);
router.delete("/api/club/deleteClub/:id", deleteClub);
router.get("/api/club/getOneClub/:id", getOneClub);
router.get("/api/club/getAllClubs", getAllClubs);
router.post("/api/club/addClubReview", addClubReview);

module.exports = {router};