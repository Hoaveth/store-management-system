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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Supplier", supplierSchema);
