const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
    },
    reps: {
      type: Number,
    },
    load: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
