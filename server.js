require('dotenv').config();
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
const PORT = process.env.PORT || 8080;
const app = express();
const keys = require("./config/keys");
const passportSetup = require("./config/passport-setup");
// const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const googleOauth = require("passport-google-oauth20");

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
app.use(
  expressSession({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    secure: false
  })
);


//Connecting to mongodb
mongoose.connect(
  keys.mongodb.dbURI,{ useNewUrlParser: true },
  () => {
    console.log("connected to mongodb");
  }
);

//Construct Models
const User = require("./models/user-model");
const db = require("./models");

//Initialize passport
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

var GoogleStrategy = require("passport-google-oauth20").Strategy;

// console.log(keys);
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    function(accessToken, refreshToken, data, cb) {
      var email = data.emails[0].value;
      var profileId = data.id;

      User.findOne({
        googleId: profileId
      })
        .then(user => {
          if (!user) {
            User.create({
              googleId: profileId,
              email: email
            }).then(user => {
              return cb(null, user);
            });
          }
          else{
            return cb(null, user);
          }
        })
        .catch(err => {
          console.log(err);
          return cb(err, null);
        })
    }
  ));

//Saving profile to session
  passport.serializeUser( (user, done) => {
    done(null, user.googleId);
});
//Retreiving user information using the session
passport.deserializeUser( (googleId, done) => {
  User.findOne({
    googleId: googleId
    })
    .then( user => {
        console.log(user);
        done(null, user);
    })
    .catch( err => {
        done(error, false);
    })
});


require("./routes/api-routes.js")(app, passport, googleOauth, mongoose, db);

// app.use('/auth', authRoutes);
// app.use('/profile', profileRoutes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

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
