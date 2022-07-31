const asyncHandler = require("express-async-handler");
const Supplier = require("../models/supplierModel");
const Check = require("../models/checkModel");

//@desc register new supplier
//@route POST /api/users/add_supplier
//@access Public
const addSupplier = asyncHandler(async (req, res) => {
  const { supplierName, supplierTerm } = req.body;

  if (!supplierName || !supplierTerm) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //create supplier
  const supplier = await Supplier.create({
    supplierName,
    supplierTerm,
  });

  if (supplier) {
    res.status(201).json({
      _id: supplier.id,
      supplierName: supplier.supplierName,
      supplierTerm: supplier.supplierTerm,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

//@desc get supplier
//@route POST /api/users/get_supplier
//@access Public
const getSupplier = asyncHandler(async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);
  //return all data
  res.status(200).json(supplier);
});

//@desc update supplier
//@route POST /api/users/update_supplier
//@access Public
const updateSupplier = asyncHandler(async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);

  if (!supplier) {
    res.status(400);
    throw new error("Goal not found.");
  }

  const updatedSupplier = await Supplier.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  //return all data
  res.status(200).json(updatedSupplier);
});

//@desc get all supplier
//@route POST /api/users/get_all_supplier
//@access Public
const getAllSupplier = asyncHandler(async (req, res) => {
  const suppliers = await Supplier.find();
  //return all data
  res.status(200).json(suppliers);
});

//@desc delete  supplier
//@route POST /api/users/delete_check_transaction
//@access Public
const deleteSupplier = asyncHandler(async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);

  if (!supplier) {
    res.status(400);
    throw new error("Goal not found.");
  }

  await supplier.remove();
  //return all data
  res.status(200).json({ id: req.params.id });
});

//@desc get all supplier
//@route POST /api/users/g
//@access Public
const addCheckTransaction = asyncHandler(async (req, res) => {
  const { checkDate, issueDate, amount, userId, supplierId } = req.body;

  if (!checkDate || !issueDate || !userId || !amount || !supplierId) {
    res
      .status(400)
      .json({ statusCode: 400, message: "Please add all fields." });
    throw new Error("Please add all fields");
  }

  //create supplier
  const check = await Check.create({
    checkDate,
    issueDate,
    amount,
    supplierId,
    userId,
  });

  if (check) {
    res.status(201).json({
      _id: check.id,
      checkDate: check.checkDate,
      issueDate: check.issueDate,
      amount: check.amount,
      supplierId: check.supplierId,
      userId: check.userId,
    });
  } else {
    res.status(400).json({ statusCode: 400, message: "Invalid data." });
    throw new Error("Invalid User data");
  }
});

//@desc update checkTransaction
//@route POST /api/users/update_check_transaction
//@access Public
const updateCheckTransaction = asyncHandler(async (req, res) => {
  const checkTransaction = await Check.findById(req.params.id);

  if (!checkTransaction) {
    res.status(400);
    throw new error("Check transaction not found.");
  }

  const updatedCheck = await Check.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  //return all data
  res.status(200).json(updatedCheck);
});

//@desc get all supplier
//@route POST /api/users/get_transaction
//@access Public
const getCheckTransaction = asyncHandler(async (req, res) => {
  const checkTransaction = await Check.find();
  //return all data
  res.status(200).json(checkTransaction);
});

//@desc get all transactions
//@route POST /api/users/get_all_transaction
//@access Public
const getAllCheckTransaction = asyncHandler(async (req, res) => {
  const checkTransaction = await Check.find();
  //return all data
  res.status(200).json(checkTransaction);
});

//@desc delete  supplier
//@route POST /api/users/delete_check_transaction
//@access Public
const deleteCheckTransaction = asyncHandler(async (req, res) => {
  const checkTransaction = await Check.findById(req.params.id);

  if (!checkTransaction) {
    res.status(400);
    throw new error("Check transaction not found.");
  }

  await checkTransaction.remove();
  //return all data
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  addSupplier,
  getSupplier,
  getAllSupplier,
  updateSupplier,
  deleteSupplier,
  addCheckTransaction,
  getCheckTransaction,
  getAllCheckTransaction,
  deleteCheckTransaction,
  updateCheckTransaction,
};
