const express = require("express");
const app = express();
const connect = require("./config/database");
const Tweet = require("./models/tweet");
const Comment = require("./models/comments");
const TweetRepository = require("./tweet-repository");

app.listen(3000, async () => {
    console.log("server started");
    await connect();
    console.log("mongodb connected");
    // const tweet = await Tweet.create({
    //     content: "First tweet",
    //     userEmail: "c@d.com"
    // });
    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.getComments("65cf67e6a94bfd4a6a6ba94e");
    // const tweet = await Tweet.findOne({userEmail: "c@d.com"});
    // const tweet = await tweetRepo.create({content: "This is tweet with comments"});
    // tweet.comments.push({content: "first comment"});
    // await tweet.save();
    // console.log(tweet);
    // const tweet = await tweetRepo.create({content: "Tweet with comments segrigated"});
    // const comment =  await Comment.create({content: "Segrigated comment"});
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);
    const tweet = await tweetRepo.getAll(4, 2);
    console.log(tweet[0].contentWithEmail);
});