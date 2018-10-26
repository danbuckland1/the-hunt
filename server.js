
const axios = require ('axios');
const express = require ("express");
const firebase = require ("firebase");
const mongodb = require ("mongodb");
const mongoose = require ("mongoose");
const passport = require ("passport");
const passportLocal = require ("passport-local");
const passportOauth = require ("passport-oauth");
const react = require ("react");
const reactDom = require ("react-dom");
const reactRouterDom = require ("react-router-dom");
const reactScripts = require ("react-scripts");
const PORT = process.env.PORT || 3000;

//Connecting to mongodb
mongoose.connect(keys.mongodb.dbURI, () =>{
  console.log('connected to mongodb');
});

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, () => {

    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });


