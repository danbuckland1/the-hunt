// const passport = require("passport");
// OAuthStrategy = require("passport-oauth").OAuthStrategy;
// const router = require("express").Router();

// //auth login
// router.get("/login", (req, res) => {
//   res.render("login", { user: req.user });
// });

// //auth google 
// router.get(
//   "/google",
//   passport.authenticate("google", {
//     scope: ["profile"]
//   }), function(){

//   }

// );

// router.get('/dean', function(req, res){
//   console.log("hello");
// });

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: '/'}), 
//   function(req, res){
//     res.redirect('/');
//   });


  
// The OAuth provider has redirected the user back to the application.
// Finish the authentication process by attempting to obtain an access
// token.  If authorization was granted, the user will be logged in.
// Otherwise, authentication has failed.

// //google redirect 
// router.get(
//   "/google/redirect",
//   passport.authenticate("google"),
//   (req, res) => {
//     res.redirect("/profile");
//   }
// );

// module.exports = router;
module.exports = function(app, passport, googleOauth) {
  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

  app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
  });
  app.get('/something', (req, res) => {
    res.json({something: 'something'});
  });
};