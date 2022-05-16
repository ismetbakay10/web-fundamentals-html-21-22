import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import companyRoute from './routes/CompanyRoute.js';
import './commons/database.js';

const app = express();
const port = 3001;

// cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/companies', companyRoute);

app.listen(port, () => {
  console.log(`Example app listening on port port`);
});
