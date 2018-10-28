const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ChallengeModel = new Schema ({
    challengeID: {
        type: Number,
        unique: true,
        trim: true,
        required: true
    },
    challengeTitle: {
        type: String,
        trim: true,
        required: true
    },
    complete: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    value: {
        type: Number,
        trim: true
    },
    teamID: {
        type: Number,
        trim: true,
        required: true
    },
    gameID: {
        type: Number,
        trim: true,
        required: true
    }

});

const Challenge = mongoose.model("Challenge",ChallengeModel);

module.exports = Challenge;