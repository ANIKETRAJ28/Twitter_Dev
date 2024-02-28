import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

const create = async (req, res) => {
    try {
        const response = await commentService.create(req.query.modelId, req.query.modelType, req.query.userId, req.query.content);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created the comment",
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

export default { create }