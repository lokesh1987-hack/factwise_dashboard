/* ---------------- Date Formatter ---------------- */

export const dateFormatter = (params) => {
  return new Date(params.value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};