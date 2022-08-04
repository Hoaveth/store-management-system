import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import PageHeader from "../../components/PageHeader";
import { addCheckTransaction } from "../../features/check_management/checkSlice";
import { reset } from "../../features/check_management/checkSlice";
import { getSupplier } from "../../features/check_management/supplierSlice";
import { EMPTY_STRING } from "../../utils/constants";

const AddTransaction = () => {
  const initialState = {
    issueDate: "",
    checkDate: "",
    amount: "",
    supplierId: null,
    supplierName: "",
    userId: null,
    userName: "",
  };

  const [
    {
      issueDate,
      checkDate,
      amount,
      supplierId,
      userId,
      userName,
      supplierName,
    },
    setFormState,
  ] = useState(initialState);

  const { user_auth } = useSelector((state) => state.auth);
  const { suppliers } = useSelector((state) => state.suppliers);
  const { isError, isAddSuccess, error } = useSelector((state) => state.checks);

  const selectInputRef = useRef();
  const dispatch = useDispatch();

  const clearState = () => {
    setFormState({ ...initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const transactionData = {
      issueDate,
      checkDate,
      amount,
      supplierId,
      userId: user_auth._id,
      userName: user_auth.userName,
      supplierName,
    };

    dispatch(addCheckTransaction(transactionData));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (isAddSuccess) {
      toast.success("Added successfully");
      clearState();
      selectInputRef.current.selectedIndex = 0;
      dispatch(reset());
    }

    if (isError || error) {
      toast.error(error.message);
    }

    dispatch(reset());
  }, [user_auth.userId, isError, isAddSuccess, error, dispatch]);

  useEffect(() => {
    if (supplierId !== null) {
      let supplier = suppliers.filter(
        (supplier) => supplier._id === supplierId
      );
      setFormState((prevState) => ({
        ...prevState,
        supplierName: supplier[0].supplierName,
      }));
    }
  }, supplierId);

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
            ref={selectInputRef}
            className="form-control"
            onChange={handleInputChange}
            aria-label="Default select example"
            name="supplierId"
            value={supplierId || ""}
          >
            <option value={null}>Choose a supplier</option>
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
