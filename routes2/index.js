const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");


// API Routes
router.use("/api", apiRoutes);
router.use("/", apiRoutes);

// router.post('/', (req, res) => console.log(res.body));

// If no API routes are hit, send the React app
router.use(function(req, res) {
    console.log("no api routes found")
    res.status(422).json({status:"422", message:"Invalid API request"});
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
});




module.exports = router;