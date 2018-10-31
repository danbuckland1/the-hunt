const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ChallengeModel = new Schema ({
    set: {
        challengeID: {
            type: Number,
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

const Challenge = mongoose.model("Challenge", ChallengeModel);

module.exports = Challenge;