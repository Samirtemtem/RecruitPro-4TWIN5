import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import JobPost from '../models/JobPost';
import User from '../models/User';
dotenv.config();

const router = express.Router();


// API endpoint to get job posts by search term
router.get("/search", async (req, res) => {
    const searchTerm = req.query.search || "";
    
    // Log the received search term
    console.log("Search term:", searchTerm);

    try {
        const jobPosts = await JobPost.find({
            $or: [
                { title: { $regex: searchTerm, $options: "i" } }, // Case-insensitive search in title
                { description: { $regex: searchTerm, $options: "i" } } // Case-insensitive search in description
            ]
        });
        res.json(jobPosts);
    } catch (error) {
        console.error("Error fetching job posts:", error); // Log the error
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ CREATE a new job post
router.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const job = new JobPost(req.body);
        await job.save();

        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});

// ✅ READ all job posts
router.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const jobs = await JobPost.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }

});

// ✅ READ latest 6 job posts
router.get('/latest', async (req: Request, res: Response): Promise<void> => {
    try {
        const jobs = await JobPost.find()
            .sort({ createdAt: -1 })  
            .limit(6);                
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// ✅ READ latest 5 job posts
router.get('/latest-Five', async (req: Request, res: Response): Promise<void> => {
    try {
        const jobs = await JobPost.find()
            .sort({ createdAt: -1 })  
            .limit(5);                
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});







// ✅ READ all job posts with status OPEN
router.get('/FrontOffice', async (req: Request, res: Response): Promise<void> => {
    try {
        const jobs = await JobPost.find({ status: 'OPEN' });
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// ✅ READ latest 6 job posts with status OPEN
router.get('/FrontOfficelatest', async (req: Request, res: Response): Promise<void> => {
    try {
        const jobs = await JobPost.find({ status: 'OPEN' })
            .sort({ createdAt: -1 })  
            .limit(6);                
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// ✅ READ latest 5 job posts with status OPEN
router.get('/FrontOfficelatest-Five', async (req: Request, res: Response): Promise<void> => {
    try {
        const jobs = await JobPost.find({ status: 'OPEN' })
            .sort({ createdAt: -1 })  
            .limit(5);                
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// ✅ READ latest 10 job posts with status OPEN
router.get('/FrontOfficelatestTen', async (req: Request, res: Response): Promise<void> => {
    try {
        const jobs = await JobPost.find({ status: 'OPEN' })
            .sort({ createdAt: -1 })  
            .limit(10);                
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

















// ✅ READ a single job post by ID
router.get('/:id', async (req: Request, res: Response): Promise<any> => {
    try {
        const job = await JobPost.findById(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json(job);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// ✅ UPDATE a job post by ID
router.put('/:id', async (req: Request, res: Response): Promise<any> => {
    try {
        const job = await JobPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json(job);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});

// ✅ DELETE a job post by ID
router.delete('/:id', async (req: Request, res: Response): Promise<any> => {
    try {
        const job = await JobPost.findByIdAndDelete(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.get('/job-posts/statistics', async (req: Request, res: Response): Promise<any> => {
    try {
      const totalJobPosts = await JobPost.countDocuments();
      const openJobPosts = await JobPost.countDocuments({ status: 'OPEN' });

      const currentDate = new Date();
      const lastMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      const lastMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

      const twoMonthsAgoStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 1);
      const twoMonthsAgoEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);

      const lastMonthJobPosts = await JobPost.countDocuments({
          publishDate: { $gte: lastMonthStart, $lte: lastMonthEnd }
      });

      const twoMonthsAgoJobPosts = await JobPost.countDocuments({
          publishDate: { $gte: twoMonthsAgoStart, $lte: twoMonthsAgoEnd }
      });

      const percentageChange = twoMonthsAgoJobPosts > 0
          ? ((lastMonthJobPosts - twoMonthsAgoJobPosts) / twoMonthsAgoJobPosts) * 100
          : 0;

      return res.json({
          totalJobPosts,
          openJobPosts,
          percentageChange
      });
      
    } catch (error) {
      console.error('Error fetching job post statistics:', error);
      return res.status(500).json({ error: 'Error fetching statistics' });
    }
});



const countOpenJobPosts = async (req: Request, res: Response) : Promise<any> => {
    try {
        const count = await JobPost.countDocuments({ status: 'OPEN' });
        return res.status(200).json({ count });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Route to count open job posts
router.get('/job-posts/count/open', countOpenJobPosts);

// ✅ Get matching jobs with match percentages for a specific user
router.get('/matching/:userId', async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = req.params;
        
        // Step 1: Get the latest 10 open job posts
        const latestJobs = await JobPost.find({ status: 'OPEN' })
            .sort({ createdAt: -1 })
            .limit(10);
        
        // Step 2: Get user profile for matching
        const user = await User.findById(userId);
        
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        
        // Step 3: Calculate match percentage for each job
        const jobsWithMatchPercentage = latestJobs.map(job => {
            // Get the job as a plain object
            const jobObj = job.toObject();
            
            // Calculate match percentage (simplified algorithm for demonstration)
            // In a real app, use more sophisticated matching based on skills, experience, etc.
            let matchPercentage = 70; // base percentage
            
            // Example: Add up to 30% based on if keywords match
            // This is highly simplified - a real matching algorithm would be more complex
            const keywords = [
                user.profile?.skills?.join(' ') || '',
                user.profile?.title || '',
                user.profile?.profession || '',
                user.profile?.specialization || ''
            ].join(' ').toLowerCase();
            
            const jobKeywords = [
                job.title || '',
                job.description || '',
                job.requirements || '',
                job.tags?.join(' ') || ''
            ].join(' ').toLowerCase();
            
            // Count matches by checking if job keywords appear in user profile
            let matchCount = 0;
            const importantTerms = ['javascript', 'react', 'node', 'python', 'java', 'developer', 
                                    'engineer', 'manager', 'designer', 'frontend', 'backend',
                                    'fullstack', 'data', 'analyst', 'science', 'machine learning'];
            
            importantTerms.forEach(term => {
                if (keywords.includes(term) && jobKeywords.includes(term)) {
                    matchCount++;
                }
            });
            
            // Calculate additional percentage based on matches (up to 30%)
            const additionalPercentage = Math.min(30, (matchCount / importantTerms.length) * 30);
            matchPercentage += additionalPercentage;
            
            // Round to whole number
            matchPercentage = Math.round(matchPercentage);
            
            // Add match percentage to job object
            return {
                ...jobObj,
                matchPercentage
            };
        });
        
        // Sort by match percentage (highest first)
        jobsWithMatchPercentage.sort((a, b) => (b.matchPercentage || 0) - (a.matchPercentage || 0));
        
        res.json(jobsWithMatchPercentage);
    } catch (error) {
        console.error('Error getting matching jobs:', error);
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;