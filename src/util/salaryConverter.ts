// Converts a double to an SGD string with no decimal places.
export const sgdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "SGD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
