import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addCheckTransaction } from "../../features/check_management/checkSlice";
import {
  addSupplier,
  reset,
} from "../../features/check_management/supplierSlice";
import { EMPTY_STRING } from "../../utils/constants";

const AddTransaction = () => {
  const { user_auth } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    issueDate: null,
    checkDate: null,
    amount: null,
    supplierId: null,
    userId: user_auth.userId,
  });
  const { issueDate, checkDate, amount, supplierId, userId } = formData;
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.suppliers
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const transactionData = {
      issueDate,
      checkDate,
      amount,
      supplierId,
      userId,
    };

    dispatch(addCheckTransaction(transactionData));
  };

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Added successfully");
      setFormData(() => ({
        issueDate: null,
        checkDate: null,
        supplierId: null,
        amount: null,
        userId: user_auth.userId,
      }));
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  return (
    <main>
      <div className="page-header">
        <span className="page-title">Add Transaction</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Issue Date</label>
          <input
            type="date"
            name="issueDate"
            className="form-control"
            placeholder="Enter issue date"
            onChange={handleInputChange}
            value={issueDate}
          />
        </div>
        <div className="mb-3">
          <label>Check Date</label>
          <input
            type="date"
            name="checkDate"
            className="form-control"
            placeholder="Enter check date"
            onChange={handleInputChange}
            value={checkDate}
          />
        </div>
        <div className="mb-3">
          <label>Total Amount</label>
          <input
            type="date"
            name="amount"
            className="form-control"
            placeholder="Enter total amount"
            onChange={handleInputChange}
            value={amount}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddTransaction;
