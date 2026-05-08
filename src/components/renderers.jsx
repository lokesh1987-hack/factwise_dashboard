/* ---------------- Status Renderer ---------------- */

export const StatusRenderer = (params) => (
  <span
    style={{
      backgroundColor: params.value ? "#dcfce7" : "#fee2e2",
      color: params.value ? "#166534" : "#991b1b",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600",
    }}
  >
    {params.value ? "Active" : "Inactive"}
  </span>
);

/* ---------------- Rating Renderer ---------------- */

export const RatingRenderer = (params) => (
  <span
    style={{
      fontWeight: "600",
      color:
        params.value >= 4.5
          ? "#16a34a"
          : params.value >= 4
            ? "#ca8a04"
            : "#dc2626",
    }}
  >
    ⭐ {params.value}
  </span>
);
