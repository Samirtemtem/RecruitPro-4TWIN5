const express = require("express");
const router = express.Router();



const { createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getLatestUsers
     } = require("../Controller/userController");

const upload = require("../Utils/Cloudinary");  // Import Cloudinary upload

// CRUD route for creating a user with image upload
router.post("/users", upload.single("image"), createUser);
router.get("/usersList", getAllUsers);
router.get("/usersListLatest", getLatestUsers);
router.get("/users/:id", getUserById);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
