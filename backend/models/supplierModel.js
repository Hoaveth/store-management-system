const mongoose = require("mongoose");

const supplierSchema = mongoose.Schema(
  {
    supplierName: {
      type: String,
      required: [true, "Please add supplier name"],
    },
    supplierTerm: {
      type: Number,
      required: [false, "Please add supplier term"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Supplier", supplierSchema);
