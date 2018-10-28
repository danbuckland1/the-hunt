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
module.exports = function(app, passport, googleOauth, mongoose, User){
  // passport.serializeUser( (user, done) => {
  //   done(null, user.profileId);
  // });
  
  // passport.deserializeUser( (profileId, done) => {
  //   User.findOne({
  //     profileId: profileId
  //   })
  //   .then( user => {
  //     console.log(user);
  //     done(null, user);
  //   })
  //   .catch( err => {
  //     done(error, false);
  //   })

  // });

  app.get('/api/email', (req,res) => {
    console.log(req.user);
    if(req.isAuthenticated()){
      res.json({
        user: req.user
      });
    }
    else {
      res.json({
        error: "You are not logged in"
      })
    }
    
  });


  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000/' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('http://localhost:3000/game');
  });

}