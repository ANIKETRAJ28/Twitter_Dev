import UserService from "../services/user-service.js";

const userService = new UserService();

const signup = async (req, res) => {
    try {
        const response = await userService.signUp({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully signup the user",
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
    signup
};