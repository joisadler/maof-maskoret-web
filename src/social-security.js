export default (gross) => {
  const taxRateIncreasePoint = 5804;
  const part1 = gross > taxRateIncreasePoint ? 5804 : gross;
  const part2 = gross - 5804;
  const taxRate1 = 0.0385;
  const taxRate2 = 0.07;
  const someDeduction = 200; // I don't really know what does this deduction mean but it must be here

  return Math.round(((part1 * taxRate1) + (part2 * taxRate2)) - someDeduction);
};
