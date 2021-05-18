import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all bookings
  getBookings: function () {
    return axios.get("/api/booking");
  },
  // Gets the booking with the given id
  getBooking: function (id) {
    return axios.get("/api/booking/" + id);
  },
  // Deletes the booking with the given id
  deleteBooking: function (id) {
    return axios.delete("/api/booking/" + id);
  },
  // Saves a booking to the database
  saveBooking: function (bookingData) {
    return axios.post("/api/booking", bookingData);
  },

  saveUser: function (userData) {
    return axios.post("/api/register_login", userData);
  },

  getUsers: function () {
    return axios.get("/api/register_login");
  },

  getUser: function (id) {
    return axios.get("/api/register_login/" + id);
  }
};
