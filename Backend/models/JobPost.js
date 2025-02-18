const mongoose = require('mongoose');
const path = require('path');

const JobPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: [String], required: true },
    department: { type: String, enum: ['ELECTROMECANIQUE', 'GENIE-CIVIL', 'TIC'] },
    status: { type: String, enum: ['OPEN', 'CLOSED', 'PENDING'], default: 'OPEN' },
    publishDate: { type: Date, default: Date.now },
    deadline: { type: Date, required: true },
    experience: { type: Number, required: true },
    image: { type: String, default: 'images/logo.png' } // Relative path to image
},{ timestamps: true });

const JobPost = mongoose.model('JobPost', JobPostSchema);

module.exports = JobPost;
