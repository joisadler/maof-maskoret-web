import express from 'express';
import morgan from 'morgan';
import toGross from './to-gross';
import calculateProvidentFund from './provident-fund';
import calculateIncomeTax from './income-tax';
import calculateHealthFee from './health-fee';
import calculateSocialSecurity from './social-security';
import calculateTotalDeductions from './total-deductions';
import calculateNetSalary from './net-salary';
import Messages from './Messages';

export default () => {
  const app = express();
  const logger = morgan('combined');
  app.use(logger);

  app.use(express.static('assets'));

  app.set('views', './views');
  app.set('view engine', 'pug');

  app.get('/', (req, res) => {
    res.redirect('/en');
  });

  let language = 'en';

  const messages = new Messages();
  const message = (messageName) => {
    switch (language) {
      case 'he':
        return messages.getHebrewMessage(messageName);
      case 'ru':
        return messages.getRussianMessage(messageName);
      default:
        return messages.getEnglishMessage(messageName);
    }
  };

  app.get('/en', (req, res) => {
    language = 'en';
    const greeting = message('greeting');
    const please = message('please');
    const timeQuestion = message('timeQuestion');
    const hh = message('hh');
    const mm = message('mm');
    const chickenQuestion = message('chickenQuestion');
    const chabadQuestion = message('chabadQuestion');
    const hourlySalaryQuestion = message('hourlySalaryQuestion');
    const creditPointsQuestion = message('creditPointsQuestion');
    const holidaysQuestion = message('holidaysQuestion');
    const holidayGiftQuestion = message('holidayGiftQuestion');
    const thanks = message('thanks');
    const yes = message('yes');
    const no = message('no');
    const calculate = message('calculate');
    const data = {
      language,
      greeting,
      please,
      timeQuestion,
      hh,
      mm,
      chickenQuestion,
      chabadQuestion,
      hourlySalaryQuestion,
      creditPointsQuestion,
      holidaysQuestion,
      holidayGiftQuestion,
      yes,
      no,
      thanks,
      calculate,
    };
    res.render('index', data);
  });

  app.get('/ru', (req, res) => {
    language = 'ru';
    const greeting = message('greeting');
    const please = message('please');
    const timeQuestion = message('timeQuestion');
    const hh = message('hh');
    const mm = message('mm');
    const chickenQuestion = message('chickenQuestion');
    const chabadQuestion = message('chabadQuestion');
    const hourlySalaryQuestion = message('hourlySalaryQuestion');
    const creditPointsQuestion = message('creditPointsQuestion');
    const holidaysQuestion = message('holidaysQuestion');
    const holidayGiftQuestion = message('holidayGiftQuestion');
    const thanks = message('thanks');
    const yes = message('yes');
    const no = message('no');
    const calculate = message('calculate');
    const data = {
      language,
      greeting,
      please,
      timeQuestion,
      hh,
      mm,
      chickenQuestion,
      chabadQuestion,
      hourlySalaryQuestion,
      creditPointsQuestion,
      holidaysQuestion,
      holidayGiftQuestion,
      yes,
      no,
      thanks,
      calculate,
    };
    res.render('index', data);
  });

  app.get('/he', (req, res) => {
    language = 'he';
    const greeting = message('greeting');
    const please = message('please');
    const timeQuestion = message('timeQuestion');
    const hh = message('hh');
    const mm = message('mm');
    const chickenQuestion = message('chickenQuestion');
    const chabadQuestion = message('chabadQuestion');
    const hourlySalaryQuestion = message('hourlySalaryQuestion');
    const creditPointsQuestion = message('creditPointsQuestion');
    const holidaysQuestion = message('holidaysQuestion');
    const holidayGiftQuestion = message('holidayGiftQuestion');
    const thanks = message('thanks');
    const yes = message('yes');
    const no = message('no');
    const calculate = message('calculate');
    const data = {
      language,
      greeting,
      please,
      timeQuestion,
      hh,
      mm,
      chickenQuestion,
      chabadQuestion,
      hourlySalaryQuestion,
      creditPointsQuestion,
      holidaysQuestion,
      holidayGiftQuestion,
      yes,
      no,
      thanks,
      calculate,
    };
    res.render('index', data);
  });

  app.get('/calculate', (req, res) => {
    language = req.query.lang || language;
    const hh = Number(req.query.hh) || 0;
    const mm = Number(req.query.mm) || 0;
    const numberOfChickens = Number(req.query.numberOfChickens) || 0;
    const chabadDays = Number(req.query.chabadDays) || 0;
    const hourlySalary = Number(req.query.hourlySalary) || 0;
    const creditPoints = Number(req.query.creditPoints) || 2.25;
    const holidaysNumber = Number(req.query.holidaysNumber) || 0;
    const gift = req.query.gift;
    const holidayGift = gift === 'yes' ? toGross(250) : 0;
    const minutes = (hh * 60) + mm;
    const hours = (minutes / 60).toFixed(2);
    const salaryForHours = Math.round(hours * hourlySalary);
    const tariffForOneChicken = 0.21;
    const baseSalary = numberOfChickens * tariffForOneChicken;
    const chabadPremiumForOneDay = 50;
    const chabad = chabadDays * chabadPremiumForOneDay;
    const vacationDays = 11;
    const vacationMoney = Math.round(baseSalary / vacationDays / 2);
    const salaryForHoliday = vacationMoney;
    const holidays = holidaysNumber * salaryForHoliday;
    const gross = salaryForHours
     + chabad
     + vacationMoney
     + holidays
     + holidayGift;
    const providentFund = calculateProvidentFund(baseSalary);
    const incomeTax = calculateIncomeTax(gross, creditPoints, baseSalary);
    const healthFee = calculateHealthFee(gross);
    const socialSecurity = calculateSocialSecurity(gross);
    const totalDeductions = calculateTotalDeductions(gross, creditPoints, baseSalary);
    const netSalary = calculateNetSalary(gross, creditPoints, baseSalary);

    const grossSalaryMessage = message('grossSalary');
    const providentFundMessage = message('providentFund');
    const incomeTaxMessage = message('incomeTax');
    const healthFeeMessage = message('healthFee');
    const socialSecurityMessage = message('socialSecurity');
    const totalDeductionsMessage = message('totalDeductions');
    const netSalaryMessage = message('netSalary');
    const goodLuck = message('goodLuck');
    const newCalculation = message('newCalculation');
    let url = req.url;
    if (url.includes('lang')) {
      url = url.slice(0, -8);
    }
    const data = {
      grossSalaryMessage,
      gross,
      providentFundMessage,
      providentFund,
      incomeTaxMessage,
      incomeTax,
      healthFeeMessage,
      healthFee,
      socialSecurityMessage,
      socialSecurity,
      totalDeductionsMessage,
      totalDeductions,
      netSalaryMessage,
      netSalary,
      goodLuck,
      newCalculation,
      language,
      url,
    };
    res.render('result', data);
  });

  return app;
};
