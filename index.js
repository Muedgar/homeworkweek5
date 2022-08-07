const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const router = require("./src/router/router");

let RedisStore = require("connect-redis")(session);

const {connectRedis} = require('./db/redis')

require("dotenv").config();

const app = express();


app.use(express.json());

app.use(cookieParser());


const start = async (port, mongo)=> {
    try {
        await mongoose.connect(mongo).then(d=> {
            app.listen(port,() => {
                console.log("DB connected and running on: http://localhost:"+port);
            });
        }).catch(e=> new Error(e));
    } catch (error) {
        throw new Error(error);
    }
}

start(process.env.PORT,process.env.MONGO_URI);

const redisClient = connectRedis()
redisClient.connect().then().catch(console.error)



app.use(
  session({
    secret: process.env.SESSION_SECRET,
    ttl: 1 * 1 * 1 * 60,
    store: new RedisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: false,
  })
);


app.use(router);