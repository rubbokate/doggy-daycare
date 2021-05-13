const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThirdPartyProviderSchema = new Schema({
  provider_name: {
    type: String,
    default: null,
  },
  provider_id: {
    type: String,
    default: null,
  },
  provider_data: {
    type: {},
    default: null,
  },
});

// Create Schema
const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    email_is_verified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
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
      },
    },
    referred_by: {
      type: String,
      default: null,
    },
    third_party_auth: [ThirdPartyProviderSchema],
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { strict: false }
);
const User = mongoose.model("users", UserSchema);

module.exports = User;

// =================================================================



// const mongoose = require(“mongoose”);
// const BookingsSchema = new mongoose.Schema({
//   id: {
//     type: String
//   },
//   name: {
//     type: String
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   email_is_verified: {
//     type: Boolean,
//     default: false
//   },
//   pets: {
//     type: Array
//   },
//   rooms: {
//     type: Array
//   },
//   startDate: {
//     type: Date
//   },
//   endDate: {
//     type: Date
//   }
//   // referral_code: {
//   //   type: String,
//   //   default: function () {
//   //     let hash = 0;
//   //     for (let i = 0; i < this.email.length; i++) {
//   //       hash = this.email.charCodeAt(i) + ((hash << 5) - hash);
//   //     }
//   //     let res = (hash & 0x00ffffff).toString(16).toUpperCase();
//   //     return “00000".substring(0, 6 - res.length) + res;
//   //   }
//   // },
//   //   referred_by: {
//   //     type: String,
//   //     default: null
//   //   },
//   //   third_party_auth: [ThirdPartyProviderSchema],
//   //   date: {
//   //     type: Date,
//   //     default: Date.now
//   //   }
//   // },
//   // { strict: false }
// });
// const bookings = mongoose.model(“bookings”, BookingsSchema);
// module.exports = bookings;
// 10:58
// ===========================================
// 10:59
// const mongoose = require(“mongoose”);
// const RoomsSchema = new mongoose.Schema({
//   id: {
//     type: String
//   },
//   roomName: {
//     type: String
//   },
//   roomSize: {
//     type: Array
//   },
//   roomStatus: {
//     type: Boolean
//   }
//   // referral_code: {
//   //   type: String,
//   //   default: function () {
//   //     let hash = 0;
//   //     for (let i = 0; i < this.email.length; i++) {
//   //       hash = this.email.charCodeAt(i) + ((hash << 5) - hash);
//   //     }
//   //     let res = (hash & 0x00ffffff).toString(16).toUpperCase();
//   //     return “00000".substring(0, 6 - res.length) + res;
//   //   }
//   // },
//   //   referred_by: {
//   //     type: String,
//   //     default: null
//   //   },
//   //   third_party_auth: [ThirdPartyProviderSchema],
//   //   date: {
//   //     type: Date,
//   //     default: Date.now
//   //   }
//   // },
//   // { strict: false }
// });
// const Rooms = mongoose.model(“rooms”, RoomsSchema);
// module.exports = Rooms;
// 10:59
// =============================================
// 10:59
// const mongoose = require(“mongoose”);
// // const ThirdPartyProviderSchema = new mongoose.Schema({
// //   provider_name: {
// //     type: String,
// //     default: null
// //   },
// //   provider_id: {
// //     type: String,
// //     default: null
// //   },
// //   provider_data: {
// //     type: {},
// //     default: null
// //   }
// // });
// // Create Schema
// const UserSchema = new mongoose.Schema({
//   id: {
//     type: String
//   },
//   name: {
//     type: String
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   email_is_verified: {
//     type: Boolean,
//     default: false
//   },
//   password: {
//     type: String
//   }
//   //   referral_code: {
//   //     type: String,
//   //     default: function () {
//   //       let hash = 0;
//   //       for (let i = 0; i < this.email.length; i++) {
//   //         hash = this.email.charCodeAt(i) + ((hash << 5) - hash);
//   //       }
//   //       let res = (hash & 0x00ffffff).toString(16).toUpperCase();
//   //       return “00000".substring(0, 6 - res.length) + res;
//   //     }
//   //   },
//   //   referred_by: {
//   //     type: String,
//   //     default: null
//   //   },
//   //   third_party_auth: [ThirdPartyProviderSchema],
//   //   date: {
//   //     type: Date,
//   //     default: Date.now
//   //   }
//   // },
//   // { strict: false }
// });
// const User = mongoose.model(“users”, UserSchema);
// module.exports = User;

// const User =  mongoose.model("Users", UserSchema);
// module.exports = User;

