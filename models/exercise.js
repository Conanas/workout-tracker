const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        require: true
    },
    weights: {
        type: Number,
        require: true
    },
    sets: {
        type: Number,
        require: true
    },
    reps: {
        type: Number,
        require: true
    },
    distance: {
        type: Number,
        require: true
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;