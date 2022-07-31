import React from "react";
import { useNavigate } from "react-router-dom";

const CheckTransactions = () => {
  const navigate = useNavigate();

  return (
    <div className="page-content-header">
      <span className="page-content-title">Check Transactions</span>
      <button
        type="button"
        class="btn-outline"
        onClick={() => navigate("/check_management/add_check_transaction")}
      >
        Add Transaction
      </button>
    </div>
  );
};

export default CheckTransactions;
