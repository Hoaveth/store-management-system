import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import PageHeader from "../../components/PageHeader";
import { addCheckTransaction } from "../../features/check_management/checkSlice";
import { reset } from "../../features/check_management/checkSlice";
import { EMPTY_STRING } from "../../utils/constants";

const AddTransaction = () => {
  const { user_auth } = useSelector((state) => state.auth);
  const { suppliers } = useSelector((state) => state.suppliers);

  const [formData, setFormData] = useState({
    issueDate: null,
    checkDate: null,
    amount: null,
    supplierId: null,
    userId: user_auth._id,
  });
  const { issueDate, checkDate, amount, supplierId, userId } = formData;
  const { isError, isSuccess, error } = useSelector((state) => state.checks);

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
      dispatch(reset());
    }

    if (isError || error) {
      toast.error(error.message);
    }

    dispatch(reset());
  }, [user_auth._id, isError, isSuccess, error, dispatch]);

  return (
    <main>
      <PageHeader page="Check Management" />
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <span className="form-title"> Check Transaction</span>
        </div>
        <div className="mb-3">
          <label>Supplier </label>
          <select
            className="form-control"
            onChange={handleInputChange}
            aria-label="Default select example"
            name="supplierId"
            defaultValue={{ label: "Select Dept", value: 0 }}
          >
            <option value={EMPTY_STRING}>Choose a supplier</option>
            {suppliers &&
              suppliers.map((item) => (
                <option value={item._id}>{item.supplierName}</option>
              ))}
          </select>
        </div>
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
            type="number"
            name="amount"
            className="form-control"
            placeholder="Enter total amount"
            step="any"
            min="0"
            onChange={handleInputChange}
            value={amount}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn">
            Add Check
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddTransaction;
