var passport = require("passport"),
  OAuthStrategy = require("passport-oauth").OAuthStrategy;

passport.use(
  "provider",
  new OAuthStrategy(
    {
      requestTokenURL: "https://www.provider.com/oauth/request_token",

      accessTokenURL: "https://www.provider.com/oauth/access_token",

      userAuthorizationURL: "https://www.provider.com/oauth/authorize",

      clientKey: keys.google.clientID,

      clientSecret: keys.google.clientSecret,

      callbackURL: "/auth/google/redirect"
    },
    function(token, tokenSecret, profile, done) {
      User.findOrCreate(function(err, user) {
        done(err, user);
      });
    }
  )
);

// Redirect the user to the OAuth provider for authentication.  When
// complete, the provider will redirect the user back to the application at
//     /auth/provider/callback
app.get("/auth/google", passport.authenticate("google"));

// The OAuth provider has redirected the user back to the application.
// Finish the authentication process by attempting to obtain an access
// token.  If authorization was granted, the user will be logged in.
// Otherwise, authentication has failed.
app.get(
  "/auth/google/redirect",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);
