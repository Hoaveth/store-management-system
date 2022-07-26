import React, { useEffect, useState } from "react";
import CreditTransactions from "./CreditTransactions";
import Customers from "./Customers";
import Spinner from "../../components/Spinner";
const CreditManagement = () => {
  const [isTransactionsTabActive, setIsTransactionsTabActive] = useState(true);
  const [isCustomersTabActive, setIsCustomersTabActive] = useState(false);

  return (
    <main>
      <div className="page-header">
        <span className="page-title">Credit Management</span>
      </div>
      <div className="page-tabs-wrapper">
        <nav className="tabs">
          <div
            className={`tab ${isTransactionsTabActive ? "is-active" : ""}`}
            onClick={() => {
              setIsTransactionsTabActive(!isTransactionsTabActive);
              setIsCustomersTabActive(false);
            }}
          >
            <span>Credit Transactions</span>
          </div>
          <div
            className={`tab ${isCustomersTabActive ? "is-active" : ""}`}
            onClick={() => {
              setIsTransactionsTabActive(false);
              setIsCustomersTabActive(!isCustomersTabActive);
            }}
          >
            <span>Customers</span>
          </div>
        </nav>
      </div>
      <div className="page-content">
        {isCustomersTabActive && <Customers />}
        {isTransactionsTabActive && <CreditTransactions />}
      </div>
    </main>
  );
};

export default CreditManagement;
