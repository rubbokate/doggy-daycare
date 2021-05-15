const express = require("express");
const router = express.Router();
const app = express();
const passport = require("passport");
// app.post("/login", (req, res, next) => {
//     passport.authenticate("local", function (err, user, info) {
//         if (err) { return next(err); }
//         if (!user) { return res.redirect('/login'); }
//         req.logIn(user, function (err) {
//             if (err) { return next(err); }
//             return res.redirect('/users/' + user.username);
//         });
//     })(req, res, next);
// });

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
);

module.exports = router;
// if (err) {
// return res.status(400).json({ errors: err });
// }
// if (!user) {
// return res.status(400).json({ errors: "No user found" });
// }
// req.logIn(user, function(err) {
// if (err) {
// return res.status(400).json({ errors: err });
// }
// return res.status(200).json({ success: `logged in ${user.id}` });
// });
// })(req, res, next);
// });


// module.exports = router;
// const express = require("express");
// const router = express.Router();
// const passport = require("passport");
// const config = require("../config/config");
// const providerScopes = {
// google: { scope: ["profile", "email"] },
// facebook: { scope: ["email"] },
// amazon: { scope: ["profile"] },
// github: {},
// twitter: {},
// spotify: { scope: ["user-read-email"] },
// twitch: { scope: ["user:read:email"] }
// };
// router.post("/register_login", (req, res, next) => {
// passport.authenticate("local", function(err, user, info) {
// if (err) {
// return res.status(400).json({ errors: err });
// }
// if (!user) {
// return res.status(400).json({ errors: "No user found" });
// }
// req.logIn(user, function(err) {
// if (err) {
// return res.status(400).json({ errors: err });
// }
// return res.status(200).json({ success: `logged in ${user.id}` });
// });
// })(req, res, next);
// });
// // auth routers
// router.get("/:provider", (req, res, next) => {
// const provider = req.params.provider;
// const scope = providerScopes[provider];
// const state = { state: JSON.stringify(req.query) };
// const options = { ...state, ...scope };
// if (provider === "twitter") {
// req.session.state = JSON.stringify(req.query);
// }
// passport.authenticate(provider, options)(req, res, next);
// });
// // callbacks
// router.get(
// "/:provider/callback",
// (req, res, next) => {
// passport.authenticate(req.params.provider)(req, res, next);
// },
// (req, res) => {
// const profile_uri = `${config.FRONT_END_URI}/profile`;
// res.redirect(profile_uri);
// }
// );
// module.exports = router;
