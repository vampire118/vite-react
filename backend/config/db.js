const mongoose = require('mongoose');

const connectDB = () => {
  console.log(process.env.DB_URI);
  // mongoose.connect('mongodb://127.0.0.1:27017/test')
  //   .then(() => console.log('Connected!'))
  mongoose.connect(process.env.DB_URI, { // Use environment variable
    //   // useNewUrlParser: true,
    //   // useUnifiedTopology: true
  })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));
};

module.exports = connectDB;