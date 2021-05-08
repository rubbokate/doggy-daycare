const bcrypt = require("bcryptjs");
const User = require("../models/Users");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

// Local Strategy
passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
        // Match User
        User.findOne({ email: email })
            .then(user => {
                // Create new User
                if (!user) {
                    const newUser = new User({ email, password });
                    // Hash password before saving in database
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    return done(null, user);
                                })
                                .catch(err => {
                                    return done(null, false, { message: err });
                                });
                        });
                    });
                    // Return other user
                } else {
                    // Match password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: "Wrong password" });
                        }
                    });
                }
            })
            .catch(err => {
                return done(null, false, { message: err });
            });
    })
);

module.exports = passport;




// const bcrypt = require("bcryptjs");
// const passport = require("passport");
// const _ = require("lodash");
// const LocalStrategy = require("passport-local").Strategy;
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
// const AmazonStrategy = require("passport-amazon").Strategy;
// const GitHubStrategy = require("passport-github").Strategy;
// const TwitterStrategy = require("passport-twitter").Strategy;
// const SpotifyStrategy = require("passport-spotify").Strategy;
// const TwitchStrategy = require("passport-twitch-new").Strategy;

// const User = require("../models/Users");
// const credentials = require("./credentials");

// const findByEmailOrCreate = (email, req, profile, done) => {
//     // third party auth provider requires slightly different handling of passing the referral code
//     const raw_referred_by = req.query.state || req.session.state;
//     const referred_by = _.isEmpty(req.query) ? "" : JSON.parse(raw_referred_by.replace(/&#34;/g, '"')).referral_code;
//     const name = profile.displayName || profile.username || profile.display_name;

//     User.findOne({ email: email }).then(user => {
//         if (!user) {
//             const newUser = new User({
//                 name,
//                 email,
//                 email_is_verified: true,
//                 referred_by: referred_by,
//                 third_party_auth: [
//                     {
//                         provider_name: profile.provider,
//                         provider_id: profile.id,
//                         provider_data: profile
//                     }
//                 ]
//             });
//             newUser
//                 .save()
//                 .then(user => {
//                     return done(null, user);
//                 })
//                 .catch(err => {
//                     return done(null, false);
//                 });
//         } else {
//             // ToDo: Check for third_party_auth if we already have a entry
//             // in our third_party_auth array, if not push into it
//             return done(null, user);
//         }
//     });
// };

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => {
//         done(err, user);
//     });
// });

// // Local Strategy
// passport.use(
//     new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
//         // Match User
//         User.findOne({ email: email })
//             .then(user => {
//                 // Create new User
//                 if (!user) {
//                     const newUser = new User({ email, password });
//                     // Hash password before saving in database
//                     bcrypt.genSalt(10, (err, salt) => {
//                         bcrypt.hash(newUser.password, salt, (err, hash) => {
//                             if (err) throw err;
//                             newUser.password = hash;
//                             newUser
//                                 .save()
//                                 .then(user => {
//                                     return done(null, user);
//                                 })
//                                 .catch(err => {
//                                     return done(null, false, { message: err });
//                                 });
//                         });
//                     });
//                     // Return other user
//                 } else {
//                     // Match password
//                     bcrypt.compare(password, user.password, (err, isMatch) => {
//                         if (err) throw err;

//                         if (isMatch) {
//                             return done(null, user);
//                         } else {
//                             return done(null, false, { message: "Wrong password" });
//                         }
//                     });
//                 }
//             })
//             .catch(err => {
//                 return done(null, false, { message: err });
//             });
//     })
// );

// // Google Strategy
// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: credentials.GOOGLE.client_id,
//             clientSecret: credentials.GOOGLE.client_secret,
//             callbackURL: "/api/auth/google/callback",
//             passReqToCallback: true
//         },
//         (req, accessToken, refreshToken, profile, done) => {
//             const email = profile.emails.filter(email => email.verified)[0].value;
//             findByEmailOrCreate(email, req, profile, done);
//         }
//     )
// );

// // Facebook Strategy
// passport.use(
//     new FacebookStrategy(
//         {
//             clientID: credentials.FACEBOOK.client_id,
//             clientSecret: credentials.FACEBOOK.client_secret,
//             callbackURL: "/api/auth/facebook/callback",
//             passReqToCallback: true,
//             profileFields: [
//                 "id",
//                 "email",
//                 "gender",
//                 "link",
//                 "locale",
//                 "name",
//                 "displayName",
//                 "timezone",
//                 "updated_time",
//                 "verified"
//             ]
//         },
//         function(req, accessToken, refreshToken, profile, done) {
//             const email = profile.emails[0].value;
//             findByEmailOrCreate(email, req, profile, done);
//         }
//     )
// );

// // Github Strategy
// passport.use(
//     new GitHubStrategy(
//         {
//             clientID: credentials.GITHUB.client_id,
//             clientSecret: credentials.GITHUB.client_secret,
//             callbackURL: "/api/auth/github/callback",
//             passReqToCallback: true,
//             scope: "user:email"
//         },
//         function(req, accessToken, refreshToken, profile, done) {
//             const email = profile.emails.filter(email => email.verified && email.primary)[0].value;
//             findByEmailOrCreate(email, req, profile, done);
//         }
//     )
// );

// // Amazon Strategy
// passport.use(
//     new AmazonStrategy(
//         {
//             clientID: credentials.AMAZON.client_id,
//             clientSecret: credentials.AMAZON.client_secret,
//             callbackURL: "/api/auth/amazon/callback",
//             passReqToCallback: true
//         },
//         function(req, accessToken, refreshToken, profile, done) {
//             const email = profile.emails[0].value;
//             findByEmailOrCreate(email, req, profile, done);
//         }
//     )
// );

// // Twitter Strategy
// passport.use(
//     new TwitterStrategy(
//         {
//             consumerKey: credentials.TWITTER.client_id,
//             consumerSecret: credentials.TWITTER.client_secret,
//             userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true",
//             callbackURL: "/api/auth/twitter/callback",
//             passReqToCallback: true
//         },
//         function(req, accessToken, refreshToken, profile, done) {
//             const email = profile.emails[0].value;
//             findByEmailOrCreate(email, req, profile, done);
//         }
//     )
// );

// // Sportif Strategy
// passport.use(
//     new SpotifyStrategy(
//         {
//             clientID: credentials.SPOTIFY.client_id,
//             clientSecret: credentials.SPOTIFY.client_secret,
//             callbackURL: "/api/auth/spotify/callback",
//             passReqToCallback: true
//         },
//         function(req, accessToken, refreshToken, profile, done) {
//             const email = profile.emails[0].value;
//             findByEmailOrCreate(email, req, profile, done);
//         }
//     )
// );

// // TWITCH Strategy
// passport.use(
//     new TwitchStrategy(
//         {
//             clientID: credentials.TWITCH.client_id,
//             clientSecret: credentials.TWITCH.client_secret,
//             callbackURL: "/api/auth/twitch/callback",
//             passReqToCallback: true
//         },
//         function(req, accessToken, refreshToken, profile, done) {
//             const email = profile.email;
//             findByEmailOrCreate(email, req, profile, done);
//         }
//     )
// );

// module.exports = passport;

