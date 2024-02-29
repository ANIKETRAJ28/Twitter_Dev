import express from "express";
import TweetController from "../../controllers/tweet-controllers.js";
import LikeController from "../../controllers/like-controllers.js";
import CommentController from "../../controllers/comment-controllers.js"
import UserController from "../../controllers/user-controller.js";
import { authenticate } from "../../middlewares/authenticate.js";

const router = express.Router();

router.post("/tweets", authenticate, TweetController.create);
router.get("/tweets/:id", TweetController.getTweet);
router.post("/likes/toggle", LikeController.toggleLike);
router.post("/comments", authenticate, CommentController.create);
router.post("/signup", UserController.signup);
router.post("/login", UserController.login);

export default router;