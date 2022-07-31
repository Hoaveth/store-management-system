import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";

import "./CheckManagement.css";
import CheckSupplier from "./CheckSupplier";
import CheckTransactions from "./CheckTransactions";

const CheckManagement = () => {
  const [isSuppliersTabActive, setIsSuppliersTabActive] = useState(true);
  const [isTransactionsTabActive, setIsTransactionsTabActive] = useState(false);

  return (
    <main>
      <PageHeader page="Check Management" />
      <div className="page-tabs-wrapper">
        <nav className="tabs">
          <div
            className={`tab ${isSuppliersTabActive ? "is-active" : ""}`}
            onClick={() => {
              setIsTransactionsTabActive(false);
              setIsSuppliersTabActive(!isSuppliersTabActive);
            }}
          >
            <span>Suppliers</span>
          </div>
          <div
            className={`tab ${isTransactionsTabActive ? "is-active" : ""}`}
            onClick={() => {
              setIsTransactionsTabActive(!isTransactionsTabActive);
              setIsSuppliersTabActive(false);
            }}
          >
            <span>Transactions</span>
          </div>
        </nav>
      </div>
      <div className="page-content">
        {isSuppliersTabActive && <CheckSupplier />}
        {isTransactionsTabActive && <CheckTransactions />}
      </div>
    </main>
  );
};

export default CheckManagement;
