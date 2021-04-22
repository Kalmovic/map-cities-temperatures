export function toCelsius(k) {
  const formula = k - 273.15;
  return Math.round((formula + Number.EPSILON) * 100) / 100;
}
