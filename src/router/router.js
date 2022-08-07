const router = require("express").Router();

// auth
const {register, getCurrentUser, login, logout} = require("../controllers/auth");



// AUTH ROUTES
router.post("/api/auth/register", register);
router.get("/api/auth/getCurrentUser/:id",getCurrentUser);
router.post("/api/auth/login",login);
router.get("/api/auth/logout/:id",logout);





module.exports = router;