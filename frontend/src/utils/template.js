export const suppliersTable = {
  tableHeaders: ["Supplier Name", "Supplier Term", "Actions"],
  tableColumns: [
    { key: "supplierName", center: true },
    { key: "supplierTerm", colored: true },
  ],
};

export const checkTransactionTable = {
  tableHeaders: ["Issue Date", "Check Date", "Supplier", "Amount", "Actions"],
  tableColumns: [
    { key: "issueDate", center: true },
    { key: "checkDate", colored: true },
    { key: "supplierName", center: true },
    { key: "amount", center: true },
  ],
};
