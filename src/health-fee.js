export default (gross) => {
  const taxRateIncreasePoint = 5804;
  const part1 = gross > taxRateIncreasePoint ? taxRateIncreasePoint : gross;
  const part2 = gross - taxRateIncreasePoint;
  const taxRate1 = 0.031;
  const taxRate2 = 0.05;

  return Math.round((part1 * taxRate1) + (part2 * taxRate2));
};
