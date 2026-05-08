import React, { useMemo, useState } from "react";
import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import DashboardHeader from "./components/DashboardHeader";

import employeesData from "./data/employeesData";
import { colDefs } from "./data/tableData";

import "./EmployeeDashboard.css";

const EmployeeDashboard = () => {
  const [rowData] = useState(employeesData);

  const rowSelection = {
    mode: "multiRow",
    headerCheckbox: false,
  };

  /* ---------------- Default Column Config ---------------- */

  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      filter: true,
      editable: true,
      resizable: true,
    };
  }, []);

  const paginationPageSizeSelector = useMemo(() => {
    return [10, 20, 50, 100];
  }, []);

  return (
    <div className="dashboard-container">
      {/* ---------------- Header ---------------- */}
      <DashboardHeader rowData={rowData} />

      {/* ---------------- AG Grid ---------------- */}

      <AgGridProvider modules={[AllCommunityModule]}>
        <div className="grid-wrapper">
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            pagination={true}
            paginationPageSizeSelector={paginationPageSizeSelector}
            paginationPageSize={10}
            animateRows={true}
            rowSelection={rowSelection}
            onSelectionChanged={(event) =>
              console.log("Selected Rows:", event.api.getSelectedRows())
            }
            onCellValueChanged={(event) =>
              console.log(`Updated ${event.colDef.field}:`, event.newValue)
            }
          />
        </div>
      </AgGridProvider>
    </div>
  );
};

export default EmployeeDashboard;
