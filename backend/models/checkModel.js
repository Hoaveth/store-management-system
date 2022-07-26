const mongoose = require("mongoose");

const checkSchema = mongoose.Schema(
  {
    checkData: {
      type: Number,
      required: [false, "Please add supplier term"],
    },
    checkDate: {
      type: Date,
      required: [false, "Please add check date"],
    },
    issueDate: {
      type: Date,
      required: [true, "Please add issue date"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Check", checkSchema);
