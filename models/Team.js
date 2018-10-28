const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TeamModel = new Schema({
    teamID: {
        type: Number,
        unique: true,
        trim: true,
        required: true
    },
    teamName: {
        type: String,
        trim: true,
        required: true
    },
    gameID: {
        type: Number,
        trim: true,
        required: true
    }
});

const Team = mongoose.model("Team",TeamModel);

module.exports = Team;