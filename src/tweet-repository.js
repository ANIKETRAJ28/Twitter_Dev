const Tweet = require("./models/tweet");

class TweetRepository {

    async create(data) {
        try {
            const tweet = Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    
    async get(id) {
        try {
            const tweet = Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getComments(id) {
        try {
            const tweet = Tweet.findById(id).populate({path: "comments"});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, data) {
        try {
            const tweet = Tweet.findByIdAndUpdate(id, data, {new: true});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            const tweet = Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;