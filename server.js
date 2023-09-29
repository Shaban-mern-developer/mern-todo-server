
const ActivityRoute = require('./routes/activityRoute')
const UserRoute= require('./routes/userRoutes')
const cors = require('cors');
const express = require('express');
const app = express();
const dotenv = require('dotenv')
const database = require('./config/database')
const bodyParser = require('body-parser')

app.use(express.json());

app.use(cors())
app.use(bodyParser.json());
database()

const port = process.env.PORT || 8000

app.get('/', async (req, res) => {
    res.send('Hello Api')
})
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  
app.use('/api/activity', ActivityRoute)
app.use('/api/users', UserRoute)

app.listen(port, () => {
    console.log(`Listening port on ${port}`);
})
