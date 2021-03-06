const router = require("express").Router();
const Workout = require("../models/workout.js");


router.get("/api/workouts", (req, res) => {
    // find all workout records 
    Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});


router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
        .then(dbWorkouts => {
            console.log(dbWorkouts)
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});


router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});


router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log(body)
    console.log(params.id)
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);  
        });
});

module.exports = router;