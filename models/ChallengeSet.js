const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ChallengeSetModel = new Schema ({
    challengeID: {
        type: Number,
        trim: true,
        // required: true
    },
    challengeTitle: {
        type: String,
        trim: true,
        // required: true
    },
    complete: {
        type: Boolean,
        // required: true
    },
    photoURL: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    value: {
        type: Number,
        trim: true
    }
});

const ChallengeSet = mongoose.model("Challenge", ChallengeSetModel);

module.exports = ChallengeSet;