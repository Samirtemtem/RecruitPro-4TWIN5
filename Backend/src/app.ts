import errorHandler from "./middlewares/errorMiddleware";
import mongoose from 'mongoose';
//import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/authRoutes'; // Correct import
import cvRoutes from './routes/cvRoutes';
import profileRoutes from './routes/profileRoutes';
import testRoutes from './routes/test';
import cors from 'cors';
import passport from 'passport';
import 'dotenv/config'; // TypeScript equivalent of `require('dotenv').config()`
//import session from 'express-session';
require('./config/passport');
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';

// Load environment variables from .env file
dotenv.config({ path: './.env' });

var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


import userRoutes from './routes/User';
import jobRoutes from './routes/JobPosts';
import {  getUsers, getUserByEmail } from './routes/FaceRecologin';
import faceRoutes from "./routes/FaceRecologin";
import skillRoutes from "./routes/skillRoutes";
import contactRoutes from "./routes/contactRoutes";
import applicationRoutes from "./routes/applicationRoutes";

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
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));



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

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter); 
app.use('/api/auth', authRoutes);
app.use('/api/cv', cvRoutes);

app.use('/api/skills', skillRoutes);
app.get("/getUsers", getUsers);
app.get('/getUserByEmail', getUserByEmail);
app.use("/faceRecog",faceRoutes);

console.log('Client ID:', process.env.CLIENT_ID);
console.log('Client Secret:', process.env.CLIENT_SECRET);
// Use Routes
 app.use('/api/jobs', jobRoutes);
// User Routes 
app.use("/api/user", userRoutes);

app.use('/api/profile', profileRoutes);
app.use('/api/test', testRoutes);
app.use('/api/contact',contactRoutes);

app.use('/app',applicationRoutes);

// Error handling
app.use(errorHandler);

module.exports = app;