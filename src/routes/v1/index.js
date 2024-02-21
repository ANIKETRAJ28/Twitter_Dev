import express from "express";
import TweetController from "../../controllers/tweet-controllers.js";
const router = express.Router();

router.post("/tweets", TweetController.create);

export default router;