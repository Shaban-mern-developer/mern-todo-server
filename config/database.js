const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function database() {
  console.log(process.env.DATABASE_URL);
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
  }
}

module.exports = database;
