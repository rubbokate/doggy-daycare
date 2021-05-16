const router = require("express").Router();
const bookingController = require("../../controllers/bookingController");

// Matches with "/api/booking"
router.route("/")
  .get(bookingController.findAll)
  .post(bookingController.create);

// Matches with "/api/booking/:id"
router
  .route("/:id")
  .get(bookingController.findById)
  // .put(bookingController.update)
  // .delete(bookingController.remove);

module.exports = router;
