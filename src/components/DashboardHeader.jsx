import React from "react";

function DashboardHeader({ rowData }) {
  const totalEmployees = rowData.length;

  const activeEmployees = rowData.filter((emp) => emp.isActive).length;

  const avgSalary = Math.round(
    rowData.reduce((acc, emp) => acc + emp.salary, 0) / rowData.length,
  );

  const avgPerformance = (
    rowData.reduce((acc, emp) => acc + emp.performanceRating, 0) /
    rowData.length
  ).toFixed(1);
  return (
    <>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Employee Management Dashboard</h1>

        <p className="dashboard-subtitle">
          Employee analytics dashboard built with AG Grid.
        </p>
      </div>
      {/* ---------------- Stats Cards ---------------- */}

      <div className="stats-grid">
        {[
          {
            title: "Total Employees",
            value: totalEmployees,
          },
          {
            title: "Active Employees",
            value: activeEmployees,
          },
          {
            title: "Average Salary",
            value: `$${avgSalary.toLocaleString()}`,
          },
          {
            title: "Avg Performance",
            value: avgPerformance,
          },
        ].map((card, index) => (
          <div key={index} className="stats-card">
            <p className="stats-title">{card.title}</p>

            <h2 className="stats-value">{card.value}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default DashboardHeader;
