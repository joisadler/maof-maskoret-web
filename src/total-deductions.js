import calculateIncomeTax from './income-tax';
import calculateSocialSecurity from './social-security';
import calculateHealthFee from './health-fee';
import calculateProvidentFund from './provident-fund';

export default (gross, creditPoints, baseSalary) => {
  const incomeTax = calculateIncomeTax(gross, creditPoints, baseSalary);
  const socialSecurity = calculateSocialSecurity(gross);
  const healthFee = calculateHealthFee(gross);
  const providentFund = calculateProvidentFund(baseSalary);

  return incomeTax + socialSecurity + healthFee + providentFund;
};
