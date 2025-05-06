import "dotenv/config";

import { Request, Response } from "express";
import { User } from "../models/User";
import cloudinary from "cloudinary";
import { Role } from "../models/types";
import Education from "../models/Education"; // Adjust the import based on your file structure
import Experience from "../models/Experience"; // Adjust the import based on your file structure
import Skill from "../models/Skill"; // Adjust the import based on your file structure
import bcrypt from "bcryptjs";
import { uploadToCloudinary } from "../utils/cloudinary";

// Initialize Cloudinary configuration (if not already done)
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dlwmx7jxt",
  api_key: process.env.CLOUDINARY_API_KEY || "262566918812916",
  api_secret:
    process.env.CLOUDINARY_API_SECRET || "z79kUONbia147t5PocRrwHvJOwU",
});
export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Log the incoming request body
    console.log("Request body:", req.body);

    const {
      firstName,
      lastName,
      email,
      password,
      address,
      phoneNumber,
      role,
      department,
      privilege,
    } = req.body;
    let imageUrl: string = "";

    // Check if files are uploaded and log the file info
    if (req.file) {
      console.log("Uploaded file:", req.file);

      // If an image is uploaded
      const result = await cloudinary.v2.uploader.upload(req.file.path);
      imageUrl = result.secure_url; // Cloudinary URL
      console.log("Uploaded image URL:", imageUrl);
    } else {
      console.log("No file uploaded.");
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
      isVerified: false,
      image: imageUrl,
      provider: "local", // Save the image URL from Cloudinary
    });

    // Save the new user to the database
    await newUser.save();
    console.log("User created successfully:", newUser);

    // Send response
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    res.status(400).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags: [Users]
 *     summary: Get all users
 *     description: Retrieves a list of all users
 *     responses:
 *       200:
 *         description: List of users retrieved successfully
 *       500:
 *         description: Server error
 */
export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const roles = ["HR-MANAGER", "DEPARTMENT-MANAGER", "EMPLOYEE","TEAM-LEAD"];
    const users = await User.find({ role: { $in: roles } });
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/users/latest:
 *   get:
 *     tags: [Users]
 *     summary: Get latest users
 *     description: Retrieves the last 5 users added to the system
 *     responses:
 *       200:
 *         description: Latest users retrieved successfully
 *       500:
 *         description: Server error
 */
export const getLatestUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const roles = ["HR-MANAGER", "DEPARTMENT-MANAGER", "EMPLOYEE","TEAM-LEAD"];
    const users = await User.find({ role: { $in: roles } })
      .sort({ creationDate: -1 }) // Sort by creation date in descending order
      .limit(5); // Get the last 5 users added
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Get user by ID
 *     description: Retrieves a specific user by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User retrieved successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
export const getUserById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     tags: [Users]
 *     summary: Update user
 *     description: Updates a user's information
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: User's first name
 *               lastName:
 *                 type: string
 *                 description: User's last name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               phoneNumber:
 *                 type: string
 *                 description: User's phone number
 *               address:
 *                 type: string
 *                 description: User's address
 *               role:
 *                 type: string
 *                 enum: [CANDIDATE, RECRUITER, ADMIN]
 *                 description: User's role
 *               department:
 *                 type: string
 *                 description: User's department
 *               privilege:
 *                 type: string
 *                 description: User's privilege level
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
export const updateUser = async (req: Request, res: Response): Promise<any> => {
  console.log("ENTERED UPDATE");
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags: [Users]
 *     summary: Delete user
 *     description: Deletes a user from the system
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });
    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/users/candidates:
 *   get:
 *     tags: [Users]
 *     summary: Get all candidates
 *     description: Retrieves all users with the role 'CANDIDATE'
 *     responses:
 *       200:
 *         description: Candidates retrieved successfully
 *       500:
 *         description: Server error
 */
export const getCandidates = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const candidates = await User.find({ role: Role.CANDIDATE });
    res.status(200).json(candidates);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Get candidate by ID
export const getCandidateById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params; // Get the ID from the request parameters
  try {
    // Find candidate by ID and populate applications, profile, education, experience, skills, and jobPosts
    const candidate = await User.findById(id)
      .populate("applications") // Populate the applications field
      .populate({
        path: "profile", // Populate the profile
        select: "-user", // Exclude the user reference if not needed
        populate: [
          { path: "education", model: Education }, // Populate education
          { path: "experience", model: Experience }, // Populate experience
          { path: "skills", model: Skill }, // Populate skills
        ],
      })
      .populate("jobPosts"); // Populate job posts directly from User

    if (!candidate) {
      res.status(404).json({ message: "Candidate not found" });
      return;
    }

    res.status(200).json(candidate);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getLastCandidates = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const candidates = await User.find({ role: Role.CANDIDATE })
      .sort({ createdAt: -1 }) // Assuming 'createdAt' is the field that indicates when the user was created
      .limit(5);

    res.status(200).json(candidates);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getCandidateCountPerYear = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const currentYear = new Date().getFullYear();
    const lastTwoYears = await User.aggregate([
      {
        $match: {
          role: "CANDIDATE",
          createdAt: { $gte: new Date(currentYear - 2, 0, 1) },
        },
      },
      { $group: { _id: { $year: "$createdAt" }, count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]);

    const yearCounts: { [key: number]: number } = {};
    lastTwoYears.forEach((item) => {
      yearCounts[item._id] = item.count;
    });

    const lastYearCount = yearCounts[currentYear] || 0; // Most recent year
    const yearBeforeLastCount = yearCounts[currentYear - 1] || 0; // Year before last
    const yearBeforeThatCount = yearCounts[currentYear - 2] || 0; // Two years ago

    // Calculate percentage changes
    const changeFromLastToYearBeforeLast =
      yearBeforeLastCount > 0
        ? ((lastYearCount - yearBeforeLastCount) / yearBeforeLastCount) * 100
        : 0;

    const changeFromYearBeforeLastToLast =
      yearBeforeThatCount > 0
        ? ((yearBeforeLastCount - yearBeforeThatCount) / yearBeforeThatCount) *
          100
        : 0;

    res.status(200).json({
      counts: lastTwoYears,
      lastYearCount,
      yearBeforeLastCount,
      percentageChangeLastToYearBeforeLast:
        changeFromLastToYearBeforeLast.toFixed(2),
      percentageChangeYearBeforeLastToLast:
        changeFromYearBeforeLastToLast.toFixed(2),
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const countEmployeesByDepartment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;

    // Get the count of employees per department
    const departmentCounts = await User.aggregate([
      {
        $match: {
          role: { $in: ["EMPLOYEE", "HR-MANAGER", "DEPARTMENT-MANAGER"] },
          // Ensure we are only counting departments that are not null or empty
          department: { $exists: true, $ne: null }, // Exclude null and empty departments
        },
      },
      {
        $group: {
          _id: "$department", // Group by department
          count: { $sum: 1 }, // Count the number of employees
        },
      },
      {
        $project: {
          department: "$_id", // Rename _id to department
          count: 1,
          _id: 0, // Exclude the default _id field
        },
      },
    ]);

    // Get total number of employees
    const totalEmployees = await User.countDocuments({
      role: { $in: ["EMPLOYEE", "HR-MANAGER", "DEPARTMENT-MANAGER"] }, // Corrected closing brace
    });

    // Get the count of employees from the last year
    const lastYearCount = await User.countDocuments({
      role: { $in: ["EMPLOYEE", "HR-MANAGER", "DEPARTMENT-MANAGER"] },
      createDate: {
        $gte: new Date(`${lastYear}-01-01`),
        $lt: new Date(`${currentYear}-01-01`),
      },
    });

    // Calculate percentage change
    const percentageChange =
      lastYearCount > 0
        ? ((totalEmployees - lastYearCount) / lastYearCount) * 100
        : 0;

    // Create the response object
    const response = {
      totalEmployees,
      percentageChange,
      departmentCounts,
    };

    res.status(200).json(response); // Send the result as a response
  } catch (error) {
    console.error("Error counting employees by department:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getUserJobPosts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;

  try {
    // Fetch the user and populate the jobPosts
    const user = await User.findById(userId).populate("jobPosts");

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(user.jobPosts); // Return the user's job posts
  } catch (error: any) {
    console.error("Error fetching user job posts:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Error fetching job posts";
    res.status(500).json({ message: errorMessage });
  }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find({ role: Role.CANDIDATE });
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }

};

  export const getUsersROLEUSER = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await User.find({ role:"USER" });
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  
  
};






// Controller to fetch users with the role DEPARTMENT-MANAGER
export const fetchDepartmentManagers = async (req: Request, res: Response): Promise<void> => {
  try {
    const departmentManagers = await User.find({ role: Role.DEPARTMENT_MANAGER });
    res.status(200).json(departmentManagers);
  } catch (error) {
    console.error('Error fetching department managers:', error);
    res.status(500).json({ message: 'Failed to fetch department managers' });
  }
};

// Controller to fetch a single DEPARTMENT-MANAGER by ID
export const fetchDepartmentManagerById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const departmentManager = await User.findOne({ _id: id, role: Role.DEPARTMENT_MANAGER });

    if (!departmentManager) {
      res.status(404).json({ message: 'Department manager not found' });
      return;
    }

    res.status(200).json(departmentManager);
  } catch (error) {
    console.error('Error fetching department manager by ID:', error);
    res.status(500).json({ message: 'Failed to fetch department manager' });
  }
};




// Controller to create a new DEPARTMENT-MANAGER
export const createDepartmentManager = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, phoneNumber, department, password } = req.body;

    const newDepartmentManager = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      department,
      password,
      isVerified: false,
      role: Role.DEPARTMENT_MANAGER, // Ensure the role is set to DEPARTMENT_MANAGER
    });

    await newDepartmentManager.save();
    res.status(201).json({ message: "Department manager created successfully", data: newDepartmentManager });
  } catch (error) {
    console.error("Error creating department manager:", error);
    res.status(500).json({ message: "Failed to create department manager" });
  }
};

// Controller to update an existing DEPARTMENT-MANAGER, including their image
export const updateDepartmentManager = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phoneNumber, department } = req.body;
    let image = req.body.image; // Default to the image provided in the body

    // Check if an image file is uploaded
    if (req.file) {
      // Assuming `req.file` contains the uploaded file (use a library like multer for file uploads)
      image = req.file.path; // Path to the uploaded file
    }

    const updatedDepartmentManager = await User.findOneAndUpdate(
      { _id: id, role: Role.DEPARTMENT_MANAGER },
      { firstName, lastName, email, phoneNumber, department, image },
      { new: true } // Return the updated document
    );

    if (!updatedDepartmentManager) {
      res.status(404).json({ message: "Department manager not found" });
      return;
    }

    res.status(200).json({ message: "Department manager updated successfully", data: updatedDepartmentManager });
  } catch (error) {
    console.error("Error updating department manager:", error);
    res.status(500).json({ message: "Failed to update department manager" });
  }
};
// Controller to delete a DEPARTMENT-MANAGER
export const deleteDepartmentManager = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedDepartmentManager = await User.findOneAndDelete({
      _id: id,
      role: Role.DEPARTMENT_MANAGER,
    });

    if (!deletedDepartmentManager) {
      res.status(404).json({ message: "Department manager not found" });
      return;
    }

    res.status(200).json({ message: "Department manager deleted successfully" });
  } catch (error) {
    console.error("Error deleting department manager:", error);
    res.status(500).json({ message: "Failed to delete department manager" });
  }
};






// Team Leaders


export const fetchTeamLeads = async (req: Request, res: Response): Promise<void> => {
  try {
    const teamLeads = await User.find({ role: Role.TEAM_LEAD });
    res.status(200).json(teamLeads);
  } catch (error) {
    console.error('Error fetching team leads:', error);
    res.status(500).json({ message: 'Failed to fetch team leads' });
  }
};

// Controller to fetch a single TEAM-LEAD by ID
export const fetchTeamLeadById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const teamLead = await User.findOne({ _id: id, role: Role.TEAM_LEAD });

    if (!teamLead) {
      res.status(404).json({ message: 'Team lead not found' });
      return;
    }

    res.status(200).json(teamLead);
  } catch (error) {
    console.error('Error fetching team lead by ID:', error);
    res.status(500).json({ message: 'Failed to fetch team lead' });
  }
};

// Controller to create a new TEAM-LEAD
export const createTeamLead = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, phoneNumber, department, password, team } = req.body;

    const newTeamLead = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      department,
      password,
      isVerified: false,
      role: Role.TEAM_LEAD, // Ensure the role is set to TEAM_LEAD
      team, // Add the team attribute
    });

    await newTeamLead.save();
    res.status(201).json({ message: "Team lead created successfully", data: newTeamLead });
  } catch (error) {
    console.error("Error creating team lead:", error);
    res.status(500).json({ message: "Failed to create team lead" });
  }
};

export const updateTeamLead = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { firstName, lastName, phoneNumber } = req.body; // Only include allowed fields
    let image = req.body.image; // Default to the image provided in the body

    // Check if an image file is uploaded
    if (req.file) {
      // Assuming `req.file` contains the uploaded file (use a library like multer for file uploads)
      image = req.file.path; // Path to the uploaded file
    }

    const updatedFields: Partial<{ firstName: string; lastName: string; phoneNumber: string; image: string }> = {
      firstName,
      lastName,
      phoneNumber,
      image,
    };

    // Remove undefined fields so we only update what is provided
    Object.keys(updatedFields).forEach((key) => {
      if (updatedFields[key as keyof typeof updatedFields] === undefined) {
        delete updatedFields[key as keyof typeof updatedFields];
      }
    });

    const updatedTeamLead = await User.findOneAndUpdate(
      { _id: id, role: Role.TEAM_LEAD }, // Ensure the user is a TEAM_LEAD
      updatedFields,
      { new: true } // Return the updated document
    );

    if (!updatedTeamLead) {
      res.status(404).json({ message: "Team lead not found" });
      return;
    }

    res.status(200).json({ message: "Team lead updated successfully", data: updatedTeamLead });
  } catch (error) {
    console.error("Error updating team lead:", error);
    res.status(500).json({ message: "Failed to update team lead" });
  }
};
// Controller to delete a TEAM-LEAD
export const deleteTeamLead = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedTeamLead = await User.findOneAndDelete({
      _id: id,
      role: Role.TEAM_LEAD,
    });

    if (!deletedTeamLead) {
      res.status(404).json({ message: "Team lead not found" });
      return;
    }

    res.status(200).json({ message: "Team lead deleted successfully" });
  } catch (error) {
    console.error("Error deleting team lead:", error);
    res.status(500).json({ message: "Failed to delete team lead" });
  }
};






export const countUsersByRole = async (req: Request, res: Response) => {
  try {
    // Count users with role CANDIDATE
    const candidatesCount = await User.countDocuments({ role: "CANDIDATE" });

    // Count users with role USER
    const userOnlyCount = await User.countDocuments({ role: "USER" });

    // Calculate total user count (USER + CANDIDATE)
    const userCount = userOnlyCount + candidatesCount;

    // Prepare response
    const response = {
      userCount, // Total users (USER + CANDIDATE)
      candidatesCount // Number of users with role CANDIDATE
    };

    // Send response
    res.status(200).json({
      success: true,
      data: response,
      message: "User role counts retrieved successfully"
    });
  } catch (error) {
    console.error("Error counting users by role:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};






interface UpdateProfileBody {
  userId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  image?: string;
}

// Interface for password update request body
interface UpdatePasswordBody {
  userId?: string;
  password: string;
}



// Type definition for Cloudinary upload result
export const updateProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    // Get user ID from request body or JWT token
    const { userId, firstName, lastName, email, phoneNumber }: UpdateProfileBody = req.body;
    const tokenUserId = (req as any).user?.id;

    if (!userId && !tokenUserId) {
      res.status(401).json({ message: "Unauthorized: No user ID found" });
      return;
    }

    const effectiveUserId = userId || tokenUserId;

    // Validate required fields
    if (!firstName || !lastName || !email || !phoneNumber) {
      res.status(400).json({ message: "First name, last name, email, and phone number are required" });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ message: "Invalid email format" });
      return;
    }

    // Find the user
    const user = await User.findById(effectiveUserId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Check if email is already used by another user
    if (email !== user.email) {
      const existingUser = await User.findOne({ email });
      if (existingUser && existingUser.id.toString() !== effectiveUserId) {
        res.status(400).json({ message: "Email already in use" });
        return;
      }
    }

    // Handle image upload to Cloudinary if provided
    let imageUrl: string = user.image || "";
    if (req.file) {
      console.log("Uploaded file:", req.file);
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "user_profiles",
        resource_type: "image",
      });
      imageUrl = result.secure_url;
      console.log("Uploaded image URL:", imageUrl);
    } else {
      console.log("No file uploaded.");
    }

    // Update user fields
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.image = imageUrl;

    // Save updated user
    const updatedUser = await user.save();

    // Return updated user data (excluding sensitive fields like password)
    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: updatedUser._id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        phoneNumber: updatedUser.phoneNumber,
        image: updatedUser.image,
        department: updatedUser.department,
        team: updatedUser.team,
        role: updatedUser.role,
        is2FAEnabled: updatedUser.is2FAEnabled,
        isVerified: updatedUser.isVerified,
        createDate: updatedUser.createDate,
      },
    });
  } catch (error: any) {
    console.error("Update profile error:", error);
    res.status(500).json({ message: error.message || "Server error" });
  }
};










// Update user password controller
export const updatePassword = async (req: Request, res: Response) : Promise<void> => {
  try {
    // Get user ID from request body or JWT token
    const { userId, password }: UpdatePasswordBody = req.body;
    const tokenUserId = (req as any).user?.id;

    if (!userId && !tokenUserId ) {
       res.status(401).json({ message: "Unauthorized: No user ID found" });
       return;
    }

    const effectiveUserId = userId || tokenUserId;

    // Validate password
    if (!password) {
       res.status(400).json({ message: "Password is required" });
       return;
    }
    if (password.length < 8) {
       res.status(400).json({ message: "Password must be at least 8 characters long" });
      return;
    }

    // Find the user
    const user = await User.findById(effectiveUserId);
    if (!user) {
       res.status(404).json({ message: "User not found" });
       return;
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Update user's password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error: any) {
    console.error("Update password error:", error);
    res.status(500).json({ message: error.message || "Server error" });
  }
};