import calculateTotalDeductions from './total-deductions';

export default (gross, creditPoints, baseSalary) => {
  const totalDeductions = calculateTotalDeductions(gross, creditPoints, baseSalary);
  return gross - totalDeductions;
};
