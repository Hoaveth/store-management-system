const asyncHandler = require("express-async-handler");

//@desc register new supplier
//@route POST /api/users/add_supplier
//@access Public
const addSupplier = asyncHandler(async (req, res) => {});

//@desc get supplier
//@route POST /api/users/get_supplier
//@access Public
const getSupplier = asyncHandler(async (req, res) => {});

//@desc get all supplier
//@route POST /api/users/get_all_supplier
//@access Public
const getAllSupplier = asyncHandler(async (req, res) => {});

//@desc get all supplier
//@route POST /api/users/g
//@access Public
const addTransaction = asyncHandler(async (req, res) => {});

//@desc get all supplier
//@route POST /api/users/get_transaction
//@access Public
const getTransaction = asyncHandler(async (req, res) => {});

//@desc get all supplier
//@route POST /api/users/get_all_transaction
//@access Public
const getAllTransaction = asyncHandler(async (req, res) => {});

module.exports = {
  addSupplier,
  getSupplier,
  getAllSupplier,
  addTransaction,
  getTransaction,
  getAllTransaction,
};
