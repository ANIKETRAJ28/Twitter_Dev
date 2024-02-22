import express from "express";
import {connect} from "./config/database.js";
import routes from "./routes/index.js";
import bodyParser from "body-parser";
import {LikeRepository, UserRepository, TweetRepository} from "./repository/index.js"
import LikeService from "./services/like-service.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/api", routes);

app.listen(3000, async () => {
    console.log("server started");
    await connect();
    console.log("mongodb connected");
    const userRepository = new UserRepository();
    const tweetRepository = new TweetRepository();
    const tweets = await tweetRepository.getAll(10, 0);
    // const user = await userRepository.create({
    //     email: "Aniket@admin.com",
    //     password: "123456",
    //     name: "Aniket"
    // });
    const likeService = new LikeService();
    likeService.toggleLike(tweets[0].id, "Tweet", "65d6a93d79e73c8b7ba22188");
                        // 65d5c14b944d93e0a68c0995 65d69e208743e88b8a8c6903
});