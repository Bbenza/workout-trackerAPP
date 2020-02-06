const router = require("express").Router();
const db = require("../models");

// Routes
// =============================================================

//  GET "/api/workouts"
router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .find()
    .limit(1)
    .sort({ $natural: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT "/api/workouts"
router.put("/workouts/:id", (req, res, next) => {
  let body = req.body;
  let id = req.params.id;
  console.log(body);
  db.Workout.findByIdAndUpdate(id, { $push: { exercises: body } })
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//POST "/api/workouts"

router.post("/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET "/api/"
router.get("/workouts/range", (req, res) => {
  db.Workout.find({})
    .find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
