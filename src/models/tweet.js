const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
}, {timestamps: true});

tweetSchema.virtual("contentWithEmail").get(function () {
    return `${this.content} \nCreated By: ${this.userEmail}`;
});

tweetSchema.pre("save", function(next) {
    console.log("insode hook");
    this.content = this.content + ".....";
    next();
});

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;