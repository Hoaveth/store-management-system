const mongoose = require("mongoose");

const checkSchema = mongoose.Schema(
  {
    checkDate: {
      type: Date,
      required: [false, "Please add check date"],
    },
    issueDate: {
      type: Date,
      required: [true, "Please add issue date"],
    },
    amount: {
      type: Number,
      required: [true, "Please add an amount"],
    },
    supplierId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Supplier",
    },
    supplierName: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    userName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Check", checkSchema);
