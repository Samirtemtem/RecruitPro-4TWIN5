const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    enum: ["DEPARTMENT-MANAGER", "HR-MANAGER", "EMPLOYEE"], // Adjust roles as needed
    default: "User",
  },
  privilege: {
    type: String,
    enum: ["JOB-POSTING", "REGULAR"], // Enum for privilege
    default: "REGULAR", // Default privilege value
  },
  department: {
    type: String,
    enum: ['ELECTROMECANIQUE', 'GENIE-CIVIL', 'TIC'], // Enum for privilege
    default: "REGULAR",
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  lastLogged: {
    type: Date,
    default: null,
  },
  image: {
    type: String,
    default: null, // You can use a default placeholder URL for user images
  },
},{ timestamps: true });

// Static methods for login, logout, and updateProfile
userSchema.methods = {
  login: async function () {
    // Logic for logging in
    console.log(`${this.firstName} logged in.`);
  },
  logout: async function () {
    // Logic for logging out
    console.log(`${this.firstName} logged out.`);
  },
  updateProfile: async function (updateData) {
    // Logic for updating the user's profile
    Object.assign(this, updateData);
    await this.save();
    console.log("Profile updated.");
  },
};

module.exports = mongoose.model("User", userSchema);
