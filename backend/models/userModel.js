const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add your first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please add your last name"],
    },
    userName: {
      type: String,
      required: [true, "Please add your username"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add your password"],
    },
    role: {
      type: Number,
      required: [false, "Please add a role"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
