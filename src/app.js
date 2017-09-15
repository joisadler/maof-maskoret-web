import express from 'express';
import morgan from 'morgan';

const app = express();
const logger = morgan('combined');
app.use(logger);

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const data = { title: 'Hey!', message: 'Hello there!' };
  res.render('index', data);
});

export default app;
