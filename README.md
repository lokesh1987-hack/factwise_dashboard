# Employee Management Dashboard

A modern and scalable Employee Management Dashboard built using **React** and **AG Grid** with client-side rendering.

This project demonstrates a clean dashboard UI with advanced table functionalities including sorting, filtering, pagination, editable cells, row selection, and custom cell renderers.

---

# Live Demo

Deployed on Netlify.

👉 Click here to view the deployed dashboard:  
[Live Dashboard Link](https://factwisedashboard.netlify.app/)

---

# Features

- Modern responsive dashboard UI
- AG Grid integration
- Client-side rendering
- Sorting
- Filtering
- Pagination
- Editable cells
- Row selection
- Custom cell renderers
- Dashboard analytics cards
- Reusable and scalable code structure
- External CSS architecture
- Optimized React hooks usage

---

# Tech Stack

- React.js
- AG Grid
- JavaScript
- CSS3

---

# Project Structure

```bash
src/
│
├── components/
│   ├── EmployeeDashboard.jsx
│   ├── layout.jsx
│   └── renderers.jsx
│
├── data/
│   ├── employeesData.js
│   └── tableData.js
│
├── hooks/
│   └── useFetchJson.js
│
├── styles/
│   └── EmployeeDashboard.css
│
├── utils/
│   └── utils.js
│
├── App.js
└── main.jsx
```

---

# Data Handling

Currently, the dashboard uses **static/hardcoded employee data** stored inside:

```bash
/data/employeesData.js
```

To keep the architecture scalable and production-ready, a reusable custom hook has also been added:

```bash
/hooks/useFetchJson.js
```

This hook is prepared for future API integration and dynamic data fetching.

---

# Component Architecture

## layout.jsx

Contains reusable dashboard layout structures and shared UI wrappers.

---

## renderers.jsx

Contains custom AG Grid cell renderers such as:

- Status Renderer
- Rating Renderer
- Badge Components
- Custom UI Renderers

---

## utils.js

Contains reusable utility/helper functions such as:

- Date formatting
- Currency formatting
- Performance calculations
- Common reusable methods

---

# AG Grid Functionalities Used

- Column Sorting
- Column Filtering
- Pagination
- Editable Cells
- Row Selection
- Custom Cell Renderers
- Responsive Grid Layout
- Dynamic Pagination Size Selector

---

# Dashboard Analytics

The dashboard includes summary cards displaying:

- Total Employees
- Active Employees
- Average Salary
- Average Performance Rating

---

# Installation & Local Setup

## Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

---

## Navigate to Project

```bash
cd employee-dashboard
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

## Open in Browser

```bash
http://localhost:5173
```

---

# Build for Production

```bash
npm run build
```

---

# Design & Architecture Decisions

- Separated reusable data configurations
- External CSS for better maintainability
- Modular folder structure
- Memoized default column configurations using `useMemo`
- Scalable structure for future API integration
- Reusable AG Grid configuration approach
- Reusable utility/helper methods
- Renderer separation for cleaner component structure

---

# Future Improvements

- API integration
- Global search
- Dark mode
- Charts & analytics
- Export to CSV/Excel
- Authentication
- Server-side pagination
- Advanced filtering

---

# Author

Developed by Liladhar Harode
```