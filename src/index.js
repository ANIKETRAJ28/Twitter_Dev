import express from "express";
const app = express();
import {connect} from "./config/database.js";
import TweetService from "./services/tweet-service.js";
app.listen(3000, async () => {
    console.log("server started");
    await connect();
    console.log("mongodb connected");
    const tweetService = new TweetService();
    await tweetService.create({content: "#new Tweet created after refactoring"});
});