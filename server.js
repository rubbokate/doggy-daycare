const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes2");//--------------------

const passport = require("./passport/setup");
// 

const app = express();
const PORT = 3001;

const MONGO_URI = "mongodb://localhost:27017/doggydaycare";

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
 


mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/doggydaycare", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(console.log(`MongoDB connected ${MONGO_URI}`))
    .catch(err => console.log(err));

// Bodyparser middleware, extended false does not allow nested payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

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
// app.use("/api/auth", auth);
app.use(routes);

app.use("/api/calendar", require("./controllers/Calendarcontroller"));

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`));

