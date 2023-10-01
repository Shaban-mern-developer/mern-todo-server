
import ActivityRoute from './routes/activityRoute.js';
import UserRoute from './routes/userRoutes.js';
import cors from 'cors';
import express from 'express';
import { config as dotenvConfig } from 'dotenv';
import database from './config/database.js';
import { json } from 'body-parser';
dotenv.config();

database();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello API');
});

app.use('/api/activity', ActivityRoute);
app.use('/api/users', UserRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
