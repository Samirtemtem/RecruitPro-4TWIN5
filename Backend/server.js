require("dotenv").config({ path: "./config.env" });console.log('Application Loaded');
console.log('Environment Variables Loaded');
console.log('Express Server Loaded');
console.log('Mongoose Loaded');
console.log('Cors Loaded');
console.log('Job Routes Loaded');
console.log('User Routes Loaded');
console.log('Path Loaded');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jobRoutes = require('./routes/JobPosts');
const userRoutes = require('./routes/User');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve images folder
app.use('/images', express.static(path.join(__dirname, 'images')));


// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/recruitpro', {


}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Use Routes
app.use('/api/jobs', jobRoutes);

// User Routes 
app.use("/api/user", userRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
