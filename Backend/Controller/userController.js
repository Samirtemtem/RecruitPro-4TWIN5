const User = require("../models/User");
const cloudinary = require('cloudinary').v2;

exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, address, phoneNumber, role, department, privilege } = req.body;
    let imageUrl = '';

    // If an image is uploaded
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;  // Cloudinary URL
    }

    // Create a new user object with the provided data
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      address,
      phoneNumber,
      role,
      department,
      privilege,
      image: imageUrl, // Save the image URL from Cloudinary
    });

    // Save the new user to the database
    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Get the last 5 users added
exports.getLatestUsers = async (req, res) => {
    try {
      const users = await User.find()
                              .sort({ createdAt: -1 }) // Sort by creation date in descending order
                              .limit(5); // Get the last 5 users added
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  



// Get a single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



