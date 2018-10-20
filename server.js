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



app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });