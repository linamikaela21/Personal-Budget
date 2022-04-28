const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      trim: true,
      unique: false
    },
    concept: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    amount: {
      type: Number,
      required: true,
      trim: true,
      min: 1,
      max: 1000000,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    type: {
      type: String,
      enum: ["income", "outflow"],
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Budget", budgetSchema);
