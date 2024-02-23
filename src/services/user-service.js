import { UserRepository } from "../repository/index.js"

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp(data) {
        try {
            const user = this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            const response = this.userRepository.findBy({email});
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;