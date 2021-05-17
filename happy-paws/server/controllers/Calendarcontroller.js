// const router = require("express").Router();
// const Event = require("../models/event"); 
// const moment = require("moment");

// router.post("/create-event", async (req, res) => {
//   const event = Event(req.body);
//   await event.save();
//   res.sendStatus(201);
// });
// router.get("/get-events", async (req, res) => {
//   const events = await Event.find({
//     start: { $gte: moment(req.query.start).toDate() },
//     end: { $lte: moment(req.querey.end).toDate() },
//   }); 
//   res.send(events);
// });

// module.exports = router; 
const db = require("../models");

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        db.calendar
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.calendar
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.calendar
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.calendar
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.calendar
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

