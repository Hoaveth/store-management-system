import React from "react";

const PageHeader = ({ page }) => {
  return (
    <div className="page-header">
      <span className="page-title">{page}</span>
    </div>
  );
};

export default PageHeader;
