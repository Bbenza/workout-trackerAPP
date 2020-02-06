const router = require("express").Router();

var PATH = require("path");


// get index
router.get("/", function(req, res) {
  res.sendFile(PATH.join(__dirname, "../public/index.html"));
});


// get exercise
router.get("/exercise", function(req, res) {
  res.sendFile(PATH.join(__dirname, "../public/exercise.html"));
});


// get stats
router.get("/stats", function(req, res) {
  res.sendFile(PATH.join(__dirname, "../public/stats.html"));
});


module.exports = router;
