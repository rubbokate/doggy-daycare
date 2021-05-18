const router = require("express").Router();
const bookingRoutes = require("./booking");
const auth = require("./auth");
const user = require("./user");

router.use("/auth", auth);
// Booking routes
router.use("/booking", bookingRoutes);

router.use("/register_login", user);

module.exports = router;