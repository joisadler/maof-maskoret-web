import calculateProvidentFund from './provident-fund';

export default (gross, creditPoints, baseSalary) => {
  const providentFund = calculateProvidentFund(baseSalary);
  const providentFundCreditRate = 0.35;
  const providentFundCredit = providentFund * providentFundCreditRate;
  const creditPoint = 215;
  const creditPointsCredit = creditPoint * creditPoints;
  const credits = providentFundCredit + creditPointsCredit;
  const taxRateIncreasePoint1 = 6221;
  const taxRateIncreasePoint2 = 8921;
  const taxRateIncreasePoint3 = 14321;
  const taxRateIncreasePoint4 = 19901;
  const taxRate1 = 0.1;
  const taxRate2 = 0.14;
  const taxRate3 = 0.2;
  const taxRate4 = 0.31;

  const part1 = gross <= taxRateIncreasePoint1 ?
    gross :
    taxRateIncreasePoint1;
  const part2 = gross <= taxRateIncreasePoint1 ?
    0 :
    gross <= taxRateIncreasePoint2 ?
    gross - part1 :
    taxRateIncreasePoint2 - part1;
  const part3 = gross <= taxRateIncreasePoint2 ?
    0 :
    gross <= taxRateIncreasePoint3 ?
    gross - part1 - part2 :
    taxRateIncreasePoint3 - part1 - part2;
  const part4 = gross <= taxRateIncreasePoint3 ?
    0 :
    gross <= taxRateIncreasePoint4 ?
    gross - part1 - part2 - part3 :
    taxRateIncreasePoint4 - part1 - part2 - part3;

  return Math.round(((part1 * taxRate1)
  + (part2 * taxRate2)
  + (part3 * taxRate3)
  + (part4 * taxRate4))
  - credits);
};
