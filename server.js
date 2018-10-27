const axios = require("axios");
const express = require("express");
const firebase = require("firebase");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocal = require("passport-local");
// const passportOauth = require("passport-oauth");
const react = require("react");
const reactDom = require("react-dom");
const reactRouterDom = require("react-router-dom");
// const reactScripts = require("react-scripts");
const PORT = process.env.PORT || 3000;
const app = express();
const keys = require('./config/keys');
const passportSetup = require('./config/passport-setup');
// const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressSession = require("express-session");
const googleOauth = require('passport-google-oauth20');



//Making session use
// app.use(cookieSession({
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: [keys.session.cookieSession]
// }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ 
  secret: 'keyboard cat',
  resave: true, 
  saveUninitialized: true,
  secure: false 
}));

//Connecting to mongodb
mongoose.connect(keys.mongodb.dbURI, () =>{
  console.log('connected to mongodb');
});

//Construct Models
let User = require('./models/user-model')(mongoose);

//Initialize passport
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());


var GoogleStrategy = require('passport-google-oauth20').Strategy;

console.log(keys);
passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: "http://localhost:3001/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

require("./routes/api-routes.js")(app, passport, googleOauth);

// app.use('/auth', authRoutes);
// app.use('/profile', profileRoutes);

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }



// Send every other request to the React app
// Define any API routes before this runs
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
// const path = require('path')

// app.use(express.static("client/build"));

// app.get("/", (req, res) => {
//   console.log("huzzuh!");
//   res.render("/");
// });



// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

// // Server static assets if in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server running on port ${port}`));
