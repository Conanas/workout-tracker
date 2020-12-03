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
	},
	totalWeight: {
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

workoutSchema.methods.setTotalWeight = exercises => {
	let acc = exercises.reduce((acc, curr) => {
		if (curr.type === "resistance") {
			acc.totalWeight = (acc.totalWeight || 0) + curr.weight;
		} else {
			acc.totalWeight = (acc.totalWeight || 0) + 0;
		}
		return acc;
	}, {});
	this.totalWeight = acc.totalWeight;
	return this.totalWeight;
};

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
