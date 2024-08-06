require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./config/passport');
const connectDB = require('./config/db');
const routes = require('./routes/routes');

// Initialize Express
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET, // Use environment variable
  resave: false,
  saveUninitialized: false
}));

// Passport initialization
passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', routes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
