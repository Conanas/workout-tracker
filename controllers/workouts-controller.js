let db = require("../models");

module.exports = function (app) {

	app.get("/api/workouts", async function (req, res) {
		try {
			let workouts = await db.Workout.find().populate("exercises");
			res.json(workouts);
		} catch (error) {
			console.log(error);
		}
	});

	// app.get("/api/workouts/range", function (req, res) {
	// 	db.Workout.find().then(workouts => {
	// 		res.json(workouts);
	// 	}).catch(error => {
	// 		res.json(error);
	// 	});
	// });

	app.post("/api/workouts", async function (req, res) {
		try {
			let workouts = await db.Workout.create(req.body);
			res.json(workouts);
		} catch (error) {
			console.log(error);
		}
	});

	// app.put("/api/workouts/:id", function (req, res) {

	// });
};