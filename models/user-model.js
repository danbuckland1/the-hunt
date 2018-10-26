const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var constructModel = ( mongoose ) => {
    const userSchema = new Schema ({
        username: String,
        googleId: String,
        thumbnail: String
    });

    const User = mongoose.model('user', userSchema);
    return User;
}

module.exports = constructModel;