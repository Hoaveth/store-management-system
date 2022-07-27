const express = require("express");
const router = express.Router();
const {
  addSupplier,
  getAllSupplier,
  getSupplier,
  addCheckTransaction,
  deleteCheckTransaction,
  getAllCheckTransaction,
  getCheckTransaction,
  updateSupplier,
  deleteSupplier,
  updateCheckTransaction,
} = require("../controllers/checkController");

const { protect } = require("../middleware/authMiddleware");

//suppliers
router.post("/add_supplier", protect, addSupplier);
router.get("/get_all_supplier", protect, getAllSupplier);
router.get("/get_supplier", protect, getSupplier);
router.put("/update_supplier", protect, updateSupplier);
router.delete("/delete_supplier", protect, deleteSupplier);

//transactions
router.post("/add_check_transaction", protect, addCheckTransaction);
router.get("/get_all_check_transaction", protect, getAllCheckTransaction);
router.get("/get_check_transaction", protect, getCheckTransaction);
router.put("/update_check_transaction", protect, updateCheckTransaction);
router.delete("/delete_check_transaction", protect, deleteCheckTransaction);

module.exports = router;
