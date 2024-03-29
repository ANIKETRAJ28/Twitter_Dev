import TweetRepository from "../../src/repository/tweet-repository.js";
import Tweet from "../../src/models/tweet.js";

jest.mock('../../src/models/tweet')

test('should create a new tweet and return it', async () => {
    const data = {
        content: 'Testing tweet'
    }
    const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
        return {...data, createdAt: '2022-02-12', updatedAt: '2022-02-12'}
    });
    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data);
    expect(spy).toHaveBeenCalled();
    expect(tweet.content).toBe(data.content);
    expect(tweet.createdAt).toBeDefined();
});

// test('actually calling model', async () => {
//     const data = {
//         content: 'gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
//     };
//     const tweet = await Tweet.create(data);
//     expect(tweet).toBeUndefined();
// });

test('should throw error', async () => {
        const data = {
            content: 'Testing tweet'
        };
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
           throw Error('something went wrong');
        });
        const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data).catch(err => {
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toBe('something went wrong');
    });
});

// import { execute } from "../../src/services/dummy-service.js";
// import { helper } from "../../src/services/helper-service.js";

// jest.mock("../../src/services/helper-service.js");

// test("result is true and returns Learning JS", () => {
//     helper.mockReturnValue(true);
//     const result = execute();
//     expect(result).toBe("Learning JS");
// });

// test("result is false and returns Learning TS", () => {
//     helper.mockReturnValue(false);
//     const result = execute();
//     expect(result).toBe("Learning TS");
// });