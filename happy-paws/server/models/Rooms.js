const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const RoomsSchema = new Schema({
  id: {
    type: String
  },
  roomName: {
    type: String
  },
  roomSize: {
    type: Array
  },
  roomStatus: {
    type: Boolean
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
//     third_party_auth: [ThirdPartyProviderSchema],
//    date: {
//      type: Date,
//      default: Date.now
//    }, 
},
 { strict: false }
);
const Rooms = mongoose.model("rooms", RoomsSchema);
module.exports = Rooms;