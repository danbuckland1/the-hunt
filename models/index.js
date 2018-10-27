//Exporting all of our models so that we can require them in server.js

module.exports = {
    Game: require("./Game"),
    Team: require("./Team"),
    Challenge: require("./Challenge")
};