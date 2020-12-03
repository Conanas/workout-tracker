const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	day: {
		type: Date,
		default: Date.now
	},
	exercises: [
		{
			type: Schema.Types.ObjectId,
			ref: "Exercise"
		}
	],
	totalDuration: {
		type: Number
	}
});

workoutSchema.methods.setTotalDuration = (exercises) => {
	let acc = exercises.reduce((acc, curr) => {
		acc.totalDuration = (acc.totalDuration || 0) + curr.duration;
		return acc;
	}, {});
	this.totalDuration = acc.totalDuration;
	return this.totalDuration;
};

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
