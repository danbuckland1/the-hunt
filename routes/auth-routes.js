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
