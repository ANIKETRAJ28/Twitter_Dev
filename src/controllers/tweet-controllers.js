import TweetService from "../services/tweet-service.js";
import upload from '../config/file-upload-s3-config.js';

const singleUploader = upload.single('image');

const tweetService = new TweetService();
const create = async (req, res) => {
    try {
        singleUploader(req, res, async function (err, data) {
            if(err) {
                return res.status(500).json({error: err});    
            }
            const payload = {...req.body};
            payload.image = req.file.location;
            const response = await tweetService.create(payload);
            return res.status(201).json({
                data: response,
                success: true,
                message: "Successfully created the tweet",
                err: {}
            });
        });
    } catch (error) {
        console.log(error);
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