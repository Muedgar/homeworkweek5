const express = require("express");
const {router} = require("./src/routes/routes");
const mongoose = require("mongoose"); 
require("dotenv").config();
const app = express();

mongoose.connect(process.env.MONGO_URI).then(d=> console.log("db connected"));

app.use(express.json());

app.use(router);

app.get('/', (req,res) => {
    res.status(200).json({status: "Server running..."});
});
app.listen(process.env.PORT || 5000, () => {
    console.log("server running...");
});