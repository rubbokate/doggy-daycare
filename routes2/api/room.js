const router = require("express").Router();
const roomController = require("../../controllers/roomController");

// Matches with "/api/books"
router.route("/")
  .get(roomController.findAll)
  .post(roomController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(roomController.findById)
  .put(roomController.update)
  .delete(roomController.remove);

module.exports = router;
