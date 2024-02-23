import Like from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository {
    constructor() {
        super(Like);
    }

    async findBy(data) {
        try {
            const response = Like.findOne(data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

export default UserRepository;