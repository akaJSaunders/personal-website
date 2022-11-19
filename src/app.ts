import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const app: Express = express();

app.use(express.static('public'))

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
  res.render('pages/index.ejs');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});