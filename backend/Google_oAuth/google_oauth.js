const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const {GoogleAuthModel} = require("../Models/googleModel");
const { v4: uuidv4 } = require("uuid");

passport.use(
  new GoogleStrategy(
    {
      clientID:"774145332227-35e4t430rm2ar3vqrsoumqji0qkho9q2.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:7000/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {

            let email = profile._json.email;
            let name=profile._json.name;
         
              const user = new GoogleAuthModel({
                email,
                password: uuidv4(),
                name,
                token:accessToken
              });
              await user.save();
              const { _id, password} = user;
              const payload = {
                _id,
                name,
                email,
                password,
                url: profile._json.picture,
                accessToken
              };
            //   console.log(profile)
              return cb(null, payload);
        }
 
    
  )
);

module.exports = passport;