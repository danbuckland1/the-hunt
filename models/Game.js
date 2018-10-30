const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let GameModel = new Schema({
    gameName: {
        type: String,
        trim: true,
        required: true
    },
    teams: {
        type: Array
    }
});


const Game = mongoose.model("Game", GameModel);

module.exports = Game;