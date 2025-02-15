import errorHandler from "./middlewares/errorMiddleware";
import mongoose from 'mongoose';
//import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/authRoutes'; // Correct import
import cors from 'cors';
import passport from 'passport';
import 'dotenv/config'; // TypeScript equivalent of `require('dotenv').config()`
//import session from 'express-session';
require('./config/passport');

var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');




// Allow requests from your frontend (e.g., localhost:3000)
const corsOptions = {
  origin: 'http://localhost:3000', // Allow only the frontend origin (you can use '*' to allow all origins)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allow all common methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers (or '*' to allow all headers)
  credentials: true, // Allow cookies or authorization headers
};




// Load environment variables from .env file
//dotenv.config();




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



var app = express();


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));



// Apply CORS middleware
app.use(cors(corsOptions));
// Passport Initialization
app.use(passport.initialize());
//app.use(passport.session()); // Required for persistent login sessions


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter); 
app.use('/api/auth', authRoutes);




// Error handling
app.use(errorHandler);

module.exports = app;
