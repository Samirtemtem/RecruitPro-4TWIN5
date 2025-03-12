import { Request, Response } from 'express';
import Skill, { ISkill } from '../models/Skill';
import JobPost from '../models/JobPost'; // Adjust the import based on your file structure



export const getTopSkillsPercentage = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    const skills: ISkill[] = await Skill.find();
    const totalSkills = skills.length;

    if (totalSkills === 0) {
      return res.status(404).json({ message: "No skills found." });
    }

    // Count occurrences of each skill
    const skillCount: Record<string, number> = {};
    skills.forEach((skill) => {
      skillCount[skill.name] = (skillCount[skill.name] || 0) + 1;
    });

    // Sort skills by count and get top 4
    const topSkills = Object.entries(skillCount)
      .sort(([, countA], [, countB]) => countB - countA)  // Sort by count descending
      .slice(0, 4)
      .map(([name, count]) => ({
        name,
        count,
        percentage: ((count / totalSkills) * 100).toFixed(2) + '%',
      }));

    return res.status(200).json(topSkills);  // Send 200 OK status
  } catch (error) {
    console.error("Error fetching top skills:", error);  // Log the error for debugging
    return res.status(500).json({ message: "Internal server error." });
  }
};




export const getJobPostCountByDepartment = async (req: Request, res: Response): Promise<Response | any> => {
    try {
      // Aggregate to get counts grouped by department
      const countsByDepartment = await JobPost.aggregate([
        {
          $group: {
            _id: "$department", // Group by department
            total: { $sum: 1 } // Count each job post
          }
        }
      ]);
  
      // Count total number of job posts
      const totalJobPosts = await JobPost.countDocuments();
  
      return res.status(200).json({
        countsByDepartment,
        totalJobPosts
      });
    } catch (error) {
      console.error("Error fetching job post counts:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  };



 export const getJobPostCountByStatus = async (req: Request, res: Response): Promise<Response | any> => {
    try {
      // Aggregate to get counts grouped by status
      const countsByStatus = await JobPost.aggregate([
        {
          $group: {
            _id: "$status", // Group by status
            total: { $sum: 1 } // Count each job post
          }
        }
      ]);
  
      // Count total number of job posts
      const totalJobPosts = await JobPost.countDocuments();
  
      // Return both counts by status and total job posts
      return res.status(200).json({
        countsByStatus,
        totalJobPosts
      });
    } catch (error) {
      console.error("Error fetching job post counts by status:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
};