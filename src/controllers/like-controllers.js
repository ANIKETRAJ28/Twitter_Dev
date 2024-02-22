import LikeService from "../services/like-service.js";

const likeService = new LikeService();

const toggleLike = async (req, res) => {
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.query.userId);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: "Successfully toggled like"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: "Something went wrong in controllers layer"
        });
    }
}

export default { toggleLike };