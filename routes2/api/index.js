const router = require("express").Router();
const bookingRoutes = require("./booking");
const auth = require("./auth");

router.use("/auth", auth);
// Book routes
router.use("/booking", bookingRoutes);

module.exports = router;