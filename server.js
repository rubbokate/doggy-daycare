const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

const passport = require("./passport/setup");
const auth = require("./routes/api/auth");

const app = express();
const PORT = 3001;
const MONGO_URI = "mongodb://localhost:27017/signuplogin";

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(console.log(`MongoDB connected ${MONGO_URI}`))
    .catch(err => console.log(err));

// Bodyparser middleware, extended false does not allow nested payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(
    session({
        secret: "very secret this is",
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
);

// Passport middleware

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", auth);
app.get("/", (req, res) => res.send("Good morning sunshine!"));
app.use("/api/calendar", require("./controllers/Calendarcontroller"))
app.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`));


//===-================================================================//===-================================================================
//===-================================================================
//===-================================================================
//===-================================================================




// // const express = require("express");
// // const app = express();
// // const port = 3000;
// // app.get("/", (req, res) => res.send("Good monring sunshine!"));
// // app.listen(port, () => console.log(
// //   `Example app listening on port ${port}!`
// // ));



// const express = require("express");
// const session = require("express-session");
// // const MongoStore = require("connect-mongo")(session);
// const mongoose = require("mongoose");

// const passport = require("./passport/setup");
// const auth = require("./routes/auth");

// const app = express();
// const PORT = 5000;
// const MONGO_URI = "mongodb://localhost:27017/signuplogin";

// mongoose
//     .connect(MONGO_URI, { useNewUrlParser: true })
//     .then(console.log(`MongoDB connected ${MONGO_URI}`))
//     .catch(err => console.log(err));

// // Bodyparser middleware, extended false does not allow nested payloads
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Express Session
// app.use(
//     session({
//         secret: "very secret this is",
//         resave: false,
//         saveUninitialized: true,
//         // store: new MongoStore({ mongooseConnection: mongoose.connection })
//     })
// );

// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// // Routes
// app.use("/api/auth", auth);
// app.get("/", (req, res) => res.send("Good morning sunshine!"));

// app.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`));