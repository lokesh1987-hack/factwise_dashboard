import { dateFormatter } from "../utils/utils";
import { RatingRenderer, StatusRenderer } from "../components/renderers";

/* ---------------- Column Definitions ---------------- */
export const colDefs = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "firstName",
    headerName: "First Name",
    width: 150,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 260,
  },
  {
    field: "department",
    headerName: "Department",
    width: 160,
  },
  {
    field: "position",
    headerName: "Position",
    width: 220,
  },
  {
    field: "salary",
    headerName: "Salary",
    width: 150,
    valueFormatter: (params) => `$${params.value.toLocaleString()}`,
  },
  {
    field: "hireDate",
    headerName: "Hire Date",
    width: 160,
    valueFormatter: dateFormatter,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "location",
    headerName: "Location",
    width: 160,
  },
  {
    field: "performanceRating",
    headerName: "Performance",
    width: 160,
    cellRenderer: RatingRenderer,
  },
  {
    field: "projectsCompleted",
    headerName: "Projects",
    width: 140,
  },
  {
    field: "isActive",
    headerName: "Status",
    width: 140,
    cellRenderer: StatusRenderer,
  },
  {
    field: "manager",
    headerName: "Manager",
    width: 200,
  },
];
