const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    // name: {
    //     type: String,
    //     trim: true,
    //     required: "Enter a name for transaction"
    // },
    // value: {
    //     type: Number,
    //     required: "Enter an amount"
    // },
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
    // day: {
    //     type: Date,
    //     default: Date.now
    // },
    // exercises: 
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;