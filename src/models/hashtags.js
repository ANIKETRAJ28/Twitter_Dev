const mongoose = require("mongoose");

const hashSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tweet"
        }
    ]
}, {timestamps: true});

const Hashtag = mongoose.model("Hashtag", hashSchema);
module.exports = Hashtag;