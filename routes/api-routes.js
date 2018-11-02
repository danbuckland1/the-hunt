let db = require("../models/index");

// module.exports = router;
module.exports = function(app, passport, googleOauth, mongoose, db){

//====================ROUTES FOR LOGIN/AUTHENTICATION====================
  app.get('/api/email', (req,res) => {
    if(req.isAuthenticated()){
      console.log("Authenticated");
      res.json({
        user: req.user
      });
    }
    else {
      console.log("Unauthenticated");
    }
    
  });

  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000/' }),
    function(req, res) {
      res.redirect('http://localhost:3000/create');
      return req.user.googleId
  });
  

//====================ROUTES FOR GAMES====================
//Creates New Game to game collection
  app.post("/api/newgame", (req,res) => {
    db.Game.create(req.body)
    .then (results => {
      res.json(results);
    })
    .catch (error => {
      console.log(error);
    })
  });

  app.get("/api/pullGame/:gameid", (req,res) => {
    db.Game.findOne({_id: req.params.gameid})
    .then (results => {
      res.json(results);
    })
    .catch (error => {
      console.log(error);
    })
  });

  app.post("/api/insertTeam", (req,res) => {
    db.Game.findByIdAndUpdate(
      req.body.gameID, 
      {$push: {teams: req.body.teamID}},
      {new: true})
      .then(results => {
        res.json(results);
      })
      .catch (error => {
        console.log(error);
      })
  })


//====================ROUTES FOR TEAMS====================
  app.post("/api/newTeam", (req,res) => {
    db.Team.create(req.body)
    .then (results => {
      res.json(results);
    })
    .catch (error => {
      console.log(error);
    })
  })

  app.get("/api/pullTeam/:gameid/:teamname", (req,res) => {
    db.Team.findOne({gameID: req.params.gameid, teamName: req.params.teamname}) 
      .then (results => {
        res.json(results);
      })
      .catch (error => {
        console.log(error);
      }) 
  })
  	 
//====================ROUTES FOR CHALLENGES====================

app.post("/api/newteamdash", (req, res) => {
  db.Challenge.create(req.body)
    .then ( results => {
      res.json(results);
    })
    .catch( error => {
      console.log(error);
    })
});


}//END module.exports