// Create an anonymous credential
// const credentials = Realm.Credentials.anonymous();
// try {
//   const user = await app.logIn(credentials);
//   console.log("Successfully logged in!", user.id);
//   return user;
// } catch (err) {
//   console.error("Failed to log in", err.message);
// }

// export default credentials;

const passport = require("passport")

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'passwd'
},
function(username, password, done) {
  // ...
}
));