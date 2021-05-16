const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  name: {type: String},
  email: {type: String,required: true, unique: false},
  // email_is_verified: {type: Boolean,default: false},
  pets: {type: String},
  rooms:  {type: String},
  startDate: {type: Date, default: Date.now},
  endDate: {type: Date, default: Date.now},
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;