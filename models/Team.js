const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TeamModel = new Schema({
    teamName: {
        type: String,
        trim: true,
        required: true
    },
    gameID: {
        type: String,
        trim: true,
        required: true
    },
    googleID: {
        type: String,
        trim: true,
        required: true
    }

});

const Team = mongoose.model("Team",TeamModel);

module.exports = Team;