let mongoose = require("mongoose");
const { Workout } = require("../models");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
	useNewUrlParser: true,
	useFindAndModify: false
});

let workoutSeed = [
	{
		day: new Date().setDate(new Date().getDate() - 10),
		exercises: [
			{
				type: "resistance",
				name: "Bicep Curl",
				duration: 20,
				weight: 100,
				reps: 10,
				sets: 4
			}
		]
	},
	{
		day: new Date().setDate(new Date().getDate() - 9),
		exercises: [
			{
				type: "resistance",
				name: "Lateral Pull",
				duration: 20,
				weight: 300,
				reps: 10,
				sets: 4
			}
		]
	},
	{
		day: new Date().setDate(new Date().getDate() - 8),
		exercises: [
			{
				type: "resistance",
				name: "Push Press",
				duration: 25,
				weight: 185,
				reps: 8,
				sets: 4
			}
		]
	},
	{
		day: new Date().setDate(new Date().getDate() - 7),
		exercises: [
			{
				type: "cardio",
				name: "Running",
				duration: 25,
				distance: 4
			}
		]
	},
	{
		day: new Date().setDate(new Date().getDate() - 6),
		exercises: [
			{
				type: "resistance",
				name: "Bench Press",
				duration: 20,
				weight: 285,
				reps: 10,
				sets: 4
			}
		]
	},
	{
		day: new Date().setDate(new Date().getDate() - 5),
		exercises: [
			{
				type: "resistance",
				name: "Bench Press",
				duration: 20,
				weight: 300,
				reps: 10,
				sets: 4
			}
		]
	},
	{
		day: new Date().setDate(new Date().getDate() - 4),
		exercises: [
			{
				type: "resistance",
				name: "Quad Press",
				duration: 30,
				weight: 300,
				reps: 10,
				sets: 4
			}
		]
	},
	{
		day: new Date().setDate(new Date().getDate() - 3),
		exercises: [
			{
				type: "resistance",
				name: "Bench Press",
				duration: 20,
				weight: 300,
				reps: 10,
				sets: 4
			}
		]
	},
	{
		day: new Date().setDate(new Date().getDate() - 2),
		exercises: [
			{
				type: "resistance",
				name: "Military Press",
				duration: 20,
				weight: 300,
				reps: 10,
				sets: 4
			}
		]
	},
	{
		day: new Date().setDate(new Date().getDate() - 1),
		exercises: [
			{
				type: "resistance",
				name: "Bench",
				duration: 20,
				weight: 300,
				reps: 10,
				sets: 4
			}
		]
	}
];

async function createWorkout(index) {
	try {
		let exercises = [];
		let exercise = await db.Exercise.create(workoutSeed[index].exercises[0]);
		exercises.push(exercise);
		let workout = new Workout({
			day: workoutSeed[index].day,
			exercises: [exercise._id]
		});
		workout.totalDuration = workout.setTotalDuration(exercises);
		await db.Workout.create(workout);
	} catch (error) {
		console.log(error);
	}
}

async function plantSeeds() {
	try {
		await db.Workout.deleteMany();
		await db.Exercise.deleteMany();
		for (var i = 0; i < workoutSeed.length; i++) {
			await createWorkout(i);
		}
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(-1);
	}
}

plantSeeds();

// db.Workout.deleteMany({})
// 	.then(() => db.Workout.collection.insertMany(workoutSeed))
// 	.then(data => {
// 		console.log(data.result.n + " records inserted!");
// 		process.exit(0);
// 	})
// 	.catch(err => {
// 		console.error(err);
// 		process.exit(1);
// 	});
