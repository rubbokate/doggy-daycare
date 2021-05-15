const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingsSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  email_is_verified: {
    type: Boolean,
    default: false
  },
  pets: {
    type: Array
  },
  rooms: {
    type: Array
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  referral_code: {
    type: String,
    default: function () {
      let hash = 0;
      for (let i = 0; i < this.email.length; i++) {
        hash = this.email.charCodeAt(i) + ((hash << 5) - hash);
      }
      let res = (hash & 0x00ffffff).toString(16).toUpperCase();
      return "00000".substring(0, 6 - res.length) + res;
    }
  },
  referred_by: {
    type: String,
    default: null
  },
  //    third_party_auth: [ThirdPartyProviderSchema],
  //    date: {
  //      type: Date,
  //      default: Date.now
  //    }
},
  { strict: false }
);
const bookings = mongoose.model("bookings", BookingsSchema);
module.exports = bookings;