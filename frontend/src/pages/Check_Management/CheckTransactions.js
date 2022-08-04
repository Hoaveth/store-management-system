import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TableTemplate from "../../components/TableTemplate";
import {
  getAllCheckTransactions,
  reset,
} from "../../features/check_management/checkSlice";
import { checkTransactionTable } from "../../utils/template";

const CheckTransactions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCheckTransactions());
    dispatch(reset());
  }, [dispatch]);

  const checkTransactions = useSelector(
    (state) => state.checks.checkTransactions
  );

  return (
    <>
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
      <div>
        <TableTemplate
          tableHeader={checkTransactionTable.tableHeaders}
          tableColumns={checkTransactionTable.tableColumns}
          tableList={checkTransactions}
          rowButtons={[
            {
              label: "Update",
              variant: "link",
              onClick: () => alert("Update"),
            },
            {
              label: "Delete",
              variant: "link",
              onClick: () => alert("Delete"),
            },
          ]}
        />
      </div>
    </>
  );
};

export default CheckTransactions;
