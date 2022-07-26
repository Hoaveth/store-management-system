const express = require("express");
const router = express.Router();
const {
  addSupplier,
  getAllSupplier,
  getSupplier,
  addTransaction,
  getAllTransaction,
  getTransaction,
} = require("../controllers/checkController");

const { protect } = require("../middleware/authMiddleware");

//suppliers
router.post("/add_supplier", protect, addSupplier);
router.get("/get_all_supplier", protect, getAllSupplier);
router.get("/get_supplier", protect, getSupplier);

//transactions
router.post("/add_transaction", protect, addTransaction);
router.get("/get_all_transaction", protect, getAllTransaction);
router.get("/get_transaction", protect, getTransaction);

module.exports = router;
