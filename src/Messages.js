export default class Messages {
  constructor() {
    this.englishMessages = {
      greeting: 'Welcome!',
      please: 'Please, answer the questions below:',
      timeQuestion: 'How much time you worked this month?',
      hh: 'Hours: ',
      mm: 'Minutes: ',
      chickenQuestion: 'How many chickens you slaughtered this month?',
      chabadQuestion: 'How many days this month was the Chabad slaughter?',
      hourlySalaryQuestion: 'How much do you earn per hour?',
      creditPointsQuestion: 'How many credit points do you have in Income Tax?',
      holidaysQuestion: 'How many holidays was this month?',
      holidayGiftQuestion: 'Should you get a holiday gift this month?',
      yes: 'yes',
      no: 'no',
      thanks: 'Thank you for answering all the questions!',
      calculate: 'Calculate',
      grossSalary: 'Your expected gross salary this month should be:',
      incomeTax: 'Income Tax:',
      socialSecurity: 'Social Security:',
      healthFee: 'Health Fee:',
      providentFund: 'Provident Fund:',
      totalDeductions: 'Total deductions:',
      netSalary: 'Your expected net salary this month should be:',
      goodLuck: 'Good luck!',
      newCalculation: 'New calculation',
    };

    this.russianMessages = {
      greeting: 'Добро пожаловать!',
      please: 'Ответьте, пожалуйста, на следующие вопросы:',
      timeQuestion: 'Сколько времени вы проработали в этом месяце?',
      hh: 'Часы: ',
      mm: 'Минуты: ',
      chickenQuestion: 'Сколько кур вы порезали за этот месяц?',
      chabadQuestion: 'Сколько дней в этом месяце была хабадская шхита?',
      hourlySalaryQuestion: 'Сколько вы получаете за час?',
      creditPointsQuestion: 'Сколько льготных пунктов у вас имеется в подоходном налоге?',
      holidaysQuestion: 'Сколько праздничных дней было в этом месяце?',
      holidayGiftQuestion: 'Положен ли вам праздничный подарок в этом месяце?',
      yes: 'да',
      no: 'нет',
      thanks: 'Спасибо за то, что ответили на все вопросы!',
      calculate: 'Подсчитать',
      grossSalary: 'Ваша ожидаемая зарплата брутто в этом месяце составит:',
      incomeTax: 'Подоходный налог:',
      socialSecurity: 'Социальное страхование:',
      healthFee: 'Медицинское страхование:',
      providentFund: 'Пенсионный взнос:',
      totalDeductions: 'Общая сумма вычетов:',
      netSalary: 'Ваша ожидаемая зарплата нетто в этом месяце составит:',
      goodLuck: 'Всего доброго!',
      newCalculation: 'Новый рассчёт',
    };

    this.hebrewMessages = {
      greeting: '!ברוך הבא',
      please: ':נא ענה על השאלות הבאות',
      timeQuestion: '?כמה זמן עבדת החודש',
      hh: ' :שעות',
      mm: ' :דקות',
      chickenQuestion: '?כמה עופות שחטת החודש',
      chabadQuestion: 'כמה ימים התקיימה שחיטת חבד החודש?',
      hourlySalaryQuestion: '?כמה אתה מקבל בשעה',
      creditPointsQuestion: 'כמה נקודות זיכוי במס הכנסה יש לך?',
      holidaysQuestion: 'כמה ימי חג היו החודש?',
      holidayGiftQuestion: 'אתה אמור לקבל מתנת חג החודש?',
      yes: 'כן',
      no: 'לא',
      calculate: 'לחשב',
      thanks: '!תודה שענית על כל השאלות',
      grossSalary: 'משכורתך ברוטו לחודש זה צריכה להיות:',
      incomeTax: 'מס הכנסה:',
      socialSecurity: 'ביטוח לאומי:',
      healthFee: 'דמי בריאות:',
      providentFund: 'קופת גמל:',
      totalDeductions: 'סה"כ ניכויים:',
      netSalary: 'משכורתך נטו לחודש זה צריכה להיות:',
      goodLuck: 'כל טוב!',
      newCalculation: 'חישוב חדש',
    };
  }

  getEnglishMessage(messageName) {
    return this.englishMessages[messageName];
  }

  getRussianMessage(messageName) {
    return this.russianMessages[messageName];
  }

  getHebrewMessage(messageName) {
    return this.hebrewMessages[messageName];
  }
}
