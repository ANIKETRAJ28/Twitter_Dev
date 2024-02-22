import express from "express";
import TweetController from "../../controllers/tweet-controllers.js";
import LikeController from "../../controllers/like-controllers.js";
import CommentController from "../../controllers/comment-controllers.js"
const router = express.Router();

router.post("/tweets", TweetController.create);
router.get("/tweets/:id", TweetController.getTweet);
router.post("/likes/toggle", LikeController.toggleLike);
router.post("/comments", CommentController.create);

export default router;