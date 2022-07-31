import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import PageHeader from "../../components/PageHeader";
import {
  addSupplier,
  reset,
} from "../../features/check_management/supplierSlice";
import { EMPTY_STRING } from "../../utils/constants";

const AddSupplier = () => {
  const [formData, setFormData] = useState({
    supplierName: EMPTY_STRING,
    supplierTerm: EMPTY_STRING,
  });
  const { supplierName, supplierTerm } = formData;
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.suppliers
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const supplierData = {
      supplierName,
      supplierTerm,
    };

    dispatch(addSupplier(supplierData));
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
        supplierName: EMPTY_STRING,
        supplierTerm: EMPTY_STRING,
      }));
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch, isLoading]);

  return (
    <main>
      <PageHeader page="Check Management" />
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <span className="form-title">Add Supplier</span>
        </div>
        <div className="mb-3">
          <label>Supplier Name</label>
          <input
            type="username"
            name="supplierName"
            className="form-control"
            placeholder="Enter supplier name"
            onChange={handleInputChange}
            value={supplierName}
          />
        </div>
        <div className="mb-3">
          <label>Supplier Terms</label>
          <input
            type="number"
            name="supplierTerm"
            className="form-control"
            placeholder="Enter supplier check term"
            onChange={handleInputChange}
            value={supplierTerm}
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

export default AddSupplier;
