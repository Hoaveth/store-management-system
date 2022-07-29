import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TableTemplate from "../../components/TableTemplate";
import { getAllSuppliers } from "../../features/check_management/supplierSlice";
import { suppliersTable } from "../../utils/template";

const CheckSupplier = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const suppliers = useSelector((state) => state.suppliers.suppliers);

  useEffect(() => {
    dispatch(getAllSuppliers());
  }, []);

  return (
    <div>
      <div className="page-content-header">
        <span className="page-content-title">Suppliers</span>
        <button
          type="button"
          class="btn-outline"
          onClick={() => navigate("/check_management/add_supplier")}
        >
          Add Supplier
        </button>
      </div>
      <div>
        <TableTemplate
          tableHeader={suppliersTable.tableHeaders}
          tableColumns={suppliersTable.tableColumns}
          tableList={suppliers}
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
    </div>
  );
};

export default CheckSupplier;
