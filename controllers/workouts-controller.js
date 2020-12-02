let db = require("../models");

module.exports = function (app) {
    app.post("/api/workouts/", async function (req, res) {
        try {
            let workouts = await db.Workout.create(req.body);
            res.json(workouts);
        } catch (error) {
            console.log(error);
        }
    });
    app.put("/api/workouts/:id", function (req, res) {
        // console.log(`put: ${req.body}`, req.params.id)
    })
}