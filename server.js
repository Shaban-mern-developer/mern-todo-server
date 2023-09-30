const ActivityRoute = require('./routes/activityRoute');
const UserRoute = require('./routes/userRoutes');
const serverless = require('serverless-http');
const cors = require('cors');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const database = require('./config/database');
const bodyParser = require('body-parser');

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
module.exports = {
  handler: serverless(app),
};
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
