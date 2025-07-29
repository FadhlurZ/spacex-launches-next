export function formatEnergy(joules: number) {
  if (joules >= 1e12) return `${(joules / 1e12).toFixed(2)} TJ`;
  if (joules >= 1e3) return `${(joules / 1e3).toFixed(2)} kJ`;
  return `${joules} J`;
}