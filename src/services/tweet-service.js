import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        // this regx exteacts all the hashtags
        const tags = content.match(/#[a-zA-Z0-9_]+/g)
                    .map(tag => tag.substring(1))
                    .map(tag => tag.toLowerCase());
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfAlreadyPresentTags = alreadyPresentTags.map((tag) => tag.title);
        let newTags = tags.filter(tag => !titleOfAlreadyPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]};
        });
        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach(tag => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet;
    }

    async get(tweetId) {
        const result = await this.tweetRepository.getComments(tweetId);
        return result;
    }
}

export default TweetService
