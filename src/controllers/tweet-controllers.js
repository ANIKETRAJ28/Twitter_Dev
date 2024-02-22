import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();
const create = async (req, res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created the tweet",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong",
            err: error
        });
    }
}

const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully fetched the tweet",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong",
            err: error
        });
    }
}

export default {
    create,
    getTweet
}