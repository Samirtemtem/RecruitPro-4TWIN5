import express, { Request, Response } from 'express';
import { User, IUser } from '../models/User'; // Adjust the import based on your file structure
import Application from '../models/Application'; // Adjust the import based on your file structure
import { ApplicationStatus } from '../models/types'; // Adjust the import based on your file structure
import mongoose, { Types } from 'mongoose'; // Import both mongoose and Types
import JobPost from '../models/JobPost';
import { IApplication } from '../models/Application';
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const router = express.Router();

router.post('/api/applications', async (req: Request, res: Response): Promise<void> => {
  console.log('Application submission received:', req.body);
  const { jobPostId, candidateId }: { jobPostId: string; candidateId: string; } = req.body;
  console.log(`Processing application - jobPostId: ${jobPostId}, candidateId: ${candidateId}`);

  try {
    // Fetch user profile to get the CV using candidateId
    const user = await User.findById(candidateId).populate('profile') as IUser & { profile: any };

    if (!user || !user.profile || !user.profile.cv) {
      res.status(400).json({ message: 'Profile or CV not found' });
      return;
    }

    // Check if the candidate has already applied to the job post
    const existingApplication = await Application.findOne({ jobPost: jobPostId, candidate: candidateId });
    if (existingApplication) {
      res.status(400).json({ message: 'You have already applied to this job' });
      return;
    }

    // Create a new application
    const application = new Application({
      candidate: candidateId,
      jobPost: jobPostId,
      CV: user.profile.cv,
      status: ApplicationStatus.SUBMITTED,
    });

    // Save the application and update the user applications and role in parallel
    await Promise.all([
      application.save(),
      User.updateOne(
        { _id: candidateId },
        {
          $push: { applications: application._id, jobPosts: jobPostId }, // Use MongoDB update operators
          $set: { role: 'CANDIDATE' } // Update the role to CANDIDATE
        }
      )
    ]);
    
    // Trigger automatic analysis in the background (don't await)
    setTimeout(async () => {
      try {
        // Fetch the saved application with populated fields
        const savedApp = await Application.findById(application._id)
          .populate('jobPost')
          .populate('candidate');
        
        if (!savedApp) return;
        
        // Get the CV content from the application
        const cv = savedApp.CV;
        // Get the job description from the jobPost
        const jobPost = savedApp.jobPost as any;
        const jobDescription = jobPost.description;
        
        if (!cv || !jobDescription) return;
        
        // Prepare the prompt for the Mistral AI
        const prompt = `Analysez la description de poste et le CV suivants. Fournissez une analyse SWOT axée sur l'adéquation du candidat au rôle. Identifiez également les mots-clés correspondants (compétences techniques) et les préférences (compétences non techniques ou qualifications supplémentaires) entre le CV et la description de poste. 

IMPORTANT: Votre réponse doit être un objet JSON valide sans aucun formatage markdown, sans blocs de code, et sans texte supplémentaire. Assurez-vous que le JSON est correctement formaté avec toutes les virgules nécessaires.

Présentez votre analyse avec la structure suivante:
{
  "SWOT": {
    "Forces": [
      "Listez les principales forces du candidat en relation avec la description de poste, telles que l'expérience pertinente, les compétences ou les réalisations."
    ],
    "Faiblesses": [
      "Identifiez les lacunes ou faiblesses dans les qualifications du candidat par rapport aux exigences du poste."
    ],
    "Opportunités": [
      "Discutez des domaines où le candidat pourrait se développer ou progresser dans le rôle ou dans son développement de carrière potentiel."
    ],
    "Menaces": [
      "Mentionnez les défis potentiels ou les facteurs qui pourraient entraver la réussite du candidat dans le rôle."
    ]
  },
  "Correspondances": {
    "Mots-clés": [
      "Listez les compétences techniques exactes, les certifications ou les technologies mentionnées dans le CV qui correspondent à la description de poste."
    ],
    "Préférences": [
      "Listez les compétences non techniques ou les qualifications supplémentaires qui sont préférées ou mentionnées dans le CV et qui correspondent à la description de poste."
    ]
  }
}

INSTRUCTIONS IMPORTANTES POUR UNE ANALYSE RIGOUREUSE ET COHÉRENTE:
1. Basez votre analyse UNIQUEMENT sur le contenu du CV et de la description de poste fournis ci-dessous.
2. N'utilisez PAS de connaissances externes ou préalables sur le candidat, l'entreprise ou le secteur.
3. Suivez une méthode d'analyse STRICTE et DÉTERMINISTE qui produira exactement le même résultat chaque fois qu'elle est appliquée aux mêmes entrées.
4. IMPORTANT: Votre réponse doit être un objet JSON valide sans aucun formatage markdown, sans blocs de code, et sans texte supplémentaire.

Description de poste:
${jobDescription}

CV:
${cv}`;
        
        // Call the Mistral AI API via OpenRouter
        console.log(`Sending analysis request to Mistral AI for application ${application._id}`);
        console.log(`CV length: ${cv.length} chars, Job description length: ${jobDescription.length} chars`);
        
        const response = await axios.post(
          "https://openrouter.ai/api/v1/chat/completions",
          {
            model: "mistralai/mistral-small-3.1-24b-instruct:free",
            messages: [
              {
                role: "user",
                content: prompt
              }
            ]
          },
          {
            headers: {
              "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY || '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'}`,
              "Content-Type": "application/json",
              "HTTP-Referer": process.env.APP_URL || "http://localhost:3000"
            }
          }
        );
        
        console.log(`AI response received. Status: ${response.status}, Content length: ${response.data.choices[0]?.message?.content.length || 0}`);
        // Extract the AI response
        const aiResponse = response.data.choices[0]?.message?.content;
        console.log('AI Response raw content:', aiResponse);
        try {
          // Clean the AI response by removing any potential markdown code block formatting
          let cleanedResponse = aiResponse;
          
          // Remove any markdown code block markers if they still exist
          cleanedResponse = cleanedResponse.replace(/```json\s*/g, '');
          cleanedResponse = cleanedResponse.replace(/```\s*/g, '');
          
          // Find the first valid JSON object
          const jsonMatch = cleanedResponse.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            cleanedResponse = jsonMatch[0];
          }
          
          // Trim any whitespace
          cleanedResponse = cleanedResponse.trim();
          
          console.log('Cleaned response:', cleanedResponse);
          
          // Parse the JSON
          const analysisData = JSON.parse(cleanedResponse);
          console.log('Successfully parsed AI response into JSON');
          console.log('AI Response:', analysisData);
          
          // Convert the data structure to match our schema
          const formattedAnalysis = {
            swot: {
              strengths: analysisData.SWOT.Forces || [],
              weaknesses: analysisData.SWOT.Faiblesses || [],
              opportunities: analysisData.SWOT.Opportunités || [],
              threats: analysisData.SWOT.Menaces || []
            },
            matches: {
              keywords: analysisData.Correspondances["Mots-clés"] || [],
              preferences: analysisData.Correspondances.Préférences || []
            },
            analyzedAt: new Date()
          };
          
          // Calculate a simple compatibility score based on keywords matches
          const keywordsCount = formattedAnalysis.matches.keywords.length;
          const strengthsCount = formattedAnalysis.swot.strengths.length;
          const weaknessesCount = formattedAnalysis.swot.weaknesses.length;
          
          console.log(`Compatibility score components - Keywords: ${keywordsCount}, Strengths: ${strengthsCount}, Weaknesses: ${weaknessesCount}`);
          
          // Simple formula: more keywords and strengths increase score, weaknesses decrease it
          const rawScore = (keywordsCount * 10 + strengthsCount * 5 - weaknessesCount * 3) / 10;
          // Ensure score is between 0-100
          const compatibilityScore = Math.min(Math.max(rawScore, 0), 100);
          console.log(`Calculated compatibility score: Raw=${rawScore.toFixed(2)}, Final=${compatibilityScore.toFixed(2)}`);
          
          // Update the application with the analysis
          savedApp.aiAnalysis = formattedAnalysis;
          savedApp.compatibilityScore = compatibilityScore;
          await savedApp.save();
          console.log(`Auto-analysis complete for application ${application._id}`);
        } catch (parseError) {
          console.error('Error parsing AI response during auto-analysis:', parseError);
        }
      } catch (autoAnalysisError) {
        console.error('Error during automatic application analysis:', autoAnalysisError);
      }
    }, 1000); // Run after a small delay to not block the response

    res.status(201).json(application); // Send the response
  } catch (error: any) {
    console.error('Error submitting application:', error);
    const errorMessage = (error instanceof Error) ? error.message : 'Error submitting application';
    res.status(500).json({ message: errorMessage });
  }
});

router.get('/jobposts/:jobPostId/candidates', async (req: Request, res: Response) : Promise<void> => {
  const { jobPostId } = req.params;

  try {
    const applications = await Application.find({ jobPost: jobPostId })
      .populate('candidate') // Populate the entire candidate object
      .exec();
      res.status(200).json(applications);
    return;  // Return all application details
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
    return;
  }
});

// Get Application by ID
router.get('/applications/:id', async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  // Validate the ID format
  if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Invalid application ID format' });
      return;
  }

  try {
      // Find the application by ID and populate candidate and JobPost
      const application = await Application.findById(id)
          .populate('candidate') // Populate candidate field
          .populate('jobPost'); // Populate JobPost field

      if (!application) {
          res.status(404).json({ message: 'Application not found' });
          return;
      }

      res.status(200).json(application);
      return;
  } catch (error) {
      console.error('Error retrieving application:', error);
      res.status(500).json({ message: 'Server error' });
      return;
  }
});

router.get('/candidates/:candidateId/applications', async (req: Request, res: Response): Promise<void> => {
  const { candidateId } = req.params;

  // Validate the candidate ID format
  if (!mongoose.Types.ObjectId.isValid(candidateId)) {
      res.status(400).json({ message: 'Invalid candidate ID format' });
      return;
  }

  try {
      // Find applications for the specified candidate
      const applications: IApplication[] = await Application.find({ candidate: candidateId })
          .populate('jobPost') // Populate jobPost if needed
   
         

      if (applications.length === 0) {
          res.status(404).json({ message: 'No applications found for this candidate' });
          return;
      }

      res.status(200).json(applications);
  } catch (error) {
      console.error('Error retrieving applications:', error);
      res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/Deleteapplication/:id', async (req: Request, res: Response): Promise<void> => {
  const applicationId = req.params.id;

  try {
      // Check if the application exists
      const application = await Application.findById(applicationId);
      if (!application) {
          res.status(404).json({ message: 'Application not found' });
          return;
      }

      const candidateId = application.candidate; // Assuming candidate is an ObjectId reference

      // Delete the application
      await Application.deleteOne({ _id: applicationId });

      // Find the user by candidate ID
      const user = await User.findById(candidateId);
      if (user) {
          // Remove the JobPost ID from the user's jobPosts array
          user.jobPosts = user.jobPosts.filter(jobPostId => jobPostId.toString() !== application.jobPost.toString());

          // Remove the application ID from the user's applications array
          user.applications = user.applications.filter(appId => appId.toString() !== applicationId);

          await user.save();
      }

      res.status(200).json({ message: 'Application deleted successfully' });
      return;
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
      return;
  }
});

/**
 * Analyze an application using Mistral AI
 * @route POST /applications/:id/analyze
 * @access Private
 */
router.post('/applications/:id/analyze', async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  // Validate the ID format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Invalid application ID format' });
    return;
  }

  try {
    // Find the application and populate related data
    const application = await Application.findById(id)
      .populate('jobPost')
      .populate('candidate');

    if (!application) {
      res.status(404).json({ message: 'Application not found' });
      return;
    }

    // Get the CV content from the application
    const cv = application.CV;
    // Get the job description from the jobPost
    const jobPost = application.jobPost as any;
    const jobDescription = jobPost.description;

    // Skip analysis if CV or job description is missing
    if (!cv || !jobDescription) {
      res.status(400).json({ 
        message: 'Missing required data for analysis',
        details: {
          hasCv: !!cv,
          hasJobDescription: !!jobDescription
        }
      });
      return;
    }

    // Prepare the prompt for the Mistral AI
    const prompt = `Analysez la description de poste et le CV suivants. Fournissez une analyse SWOT axée sur l'adéquation du candidat au rôle. Identifiez également les mots-clés correspondants (compétences techniques) et les préférences (compétences non techniques ou qualifications supplémentaires) entre le CV et la description de poste. 

IMPORTANT: Votre réponse doit être un objet JSON valide sans aucun formatage markdown, sans blocs de code, et sans texte supplémentaire. Assurez-vous que le JSON est correctement formaté avec toutes les virgules nécessaires.

Présentez votre analyse avec la structure suivante:
{
  "SWOT": {
    "Forces": [
      "Listez les principales forces du candidat en relation avec la description de poste, telles que l'expérience pertinente, les compétences ou les réalisations."
    ],
    "Faiblesses": [
      "Identifiez les lacunes ou faiblesses dans les qualifications du candidat par rapport aux exigences du poste."
    ],
    "Opportunités": [
      "Discutez des domaines où le candidat pourrait se développer ou progresser dans le rôle ou dans son développement de carrière potentiel."
    ],
    "Menaces": [
      "Mentionnez les défis potentiels ou les facteurs qui pourraient entraver la réussite du candidat dans le rôle."
    ]
  },
  "Correspondances": {
    "Mots-clés": [
      "Listez les compétences techniques exactes, les certifications ou les technologies mentionnées dans le CV qui correspondent à la description de poste."
    ],
    "Préférences": [
      "Listez les compétences non techniques ou les qualifications supplémentaires qui sont préférées ou mentionnées dans le CV et qui correspondent à la description de poste."
    ]
  }
}

INSTRUCTIONS IMPORTANTES POUR UNE ANALYSE RIGOUREUSE ET COHÉRENTE:
1. Basez votre analyse UNIQUEMENT sur le contenu du CV et de la description de poste fournis ci-dessous.
2. N'utilisez PAS de connaissances externes ou préalables sur le candidat, l'entreprise ou le secteur.
3. Suivez une méthode d'analyse STRICTE et DÉTERMINISTE qui produira exactement le même résultat chaque fois qu'elle est appliquée aux mêmes entrées.
4. IMPORTANT: Votre réponse doit être un objet JSON valide sans aucun formatage markdown, sans blocs de code, et sans texte supplémentaire.

Description de poste:
${jobDescription}

CV:
${cv}`;

    // Call the Mistral AI API via OpenRouter
    console.log(`Sending analysis request to Mistral AI for application ${application._id}`);
    console.log(`CV length: ${cv.length} chars, Job description length: ${jobDescription.length} chars`);
    
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-small-3.1-24b-instruct:free",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY || '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'}`,
          "Content-Type": "application/json",
          "HTTP-Referer": process.env.APP_URL || "http://localhost:3000"
        }
      }
    );

    console.log(`AI response received. Status: ${response.status}, Content length: ${response.data.choices[0]?.message?.content.length || 0}`);
    // Extract the AI response
    const aiResponse = response.data.choices[0]?.message?.content;
    console.log('AI Response raw content:', aiResponse);
    
    // Parse the JSON response
    let analysisData;
    try {
      // Clean the AI response by removing any potential markdown code block formatting
      let cleanedResponse = aiResponse;
      
      // Remove any markdown code block markers if they still exist
      cleanedResponse = cleanedResponse.replace(/```json\s*/g, '');
      cleanedResponse = cleanedResponse.replace(/```\s*/g, '');
      
      // Find the first valid JSON object
      const jsonMatch = cleanedResponse.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        cleanedResponse = jsonMatch[0];
      }
      
      // Trim any whitespace
      cleanedResponse = cleanedResponse.trim();
      
      console.log('Cleaned response:', cleanedResponse);
      
      // Parse the JSON
      analysisData = JSON.parse(cleanedResponse);
      console.log('Successfully parsed AI response into JSON');
      console.log('AI Response:', analysisData);
      
      // Convert the data structure to match our schema
      const formattedAnalysis = {
        swot: {
          strengths: analysisData.SWOT.Forces || [],
          weaknesses: analysisData.SWOT.Faiblesses || [],
          opportunities: analysisData.SWOT.Opportunités || [],
          threats: analysisData.SWOT.Menaces || []
        },
        matches: {
          keywords: analysisData.Correspondances["Mots-clés"] || [],
          preferences: analysisData.Correspondances.Préférences || []
        },
        analyzedAt: new Date()
      };
      
      // Calculate a simple compatibility score based on keywords matches
      const keywordsCount = formattedAnalysis.matches.keywords.length;
      const strengthsCount = formattedAnalysis.swot.strengths.length;
      const weaknessesCount = formattedAnalysis.swot.weaknesses.length;
      
      console.log(`Compatibility score components - Keywords: ${keywordsCount}, Strengths: ${strengthsCount}, Weaknesses: ${weaknessesCount}`);
      
      // Simple formula: more keywords and strengths increase score, weaknesses decrease it
      const rawScore = (keywordsCount * 10 + strengthsCount * 5 - weaknessesCount * 3) / 10;
      // Ensure score is between 0-100
      const compatibilityScore = Math.min(Math.max(rawScore, 0), 100);
      console.log(`Calculated compatibility score: Raw=${rawScore.toFixed(2)}, Final=${compatibilityScore.toFixed(2)}`);
      
      // Update the application with the analysis
      application.aiAnalysis = formattedAnalysis;
      application.compatibilityScore = compatibilityScore;
      await application.save();

      res.status(200).json({
        message: 'Application analyzed successfully',
        analysis: formattedAnalysis,
        compatibilityScore
      });
    } catch (parseError) {
      console.error('Error parsing AI response:', parseError);
      res.status(500).json({ 
        message: 'Error parsing AI analysis',
        aiResponse
      });
    }
  } catch (error) {
    console.error('Error analyzing application:', error);
    res.status(500).json({ message: 'Server error analyzing application' });
  }
});

/**
 * Get the AI analysis for a specific application
 * @route GET /applications/:id/analysis
 * @access Private
 */
router.get('/applications/:id/analysis', async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  // Validate the ID format
  if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Invalid application ID format' });
      return;
  }

  try {
      // Find the application by ID
      const application = await Application.findById(id);

      if (!application) {
          res.status(404).json({ message: 'Application not found' });
          return;
      }

      // Check if analysis exists
      if (!application.aiAnalysis || !application.aiAnalysis.analyzedAt) {
          res.status(404).json({ 
            message: 'No analysis found for this application',
            suggestion: 'Use POST /applications/:id/analyze to generate an analysis'
          });
          return;
      }

      res.status(200).json({
          applicationId: application._id,
          compatibilityScore: application.compatibilityScore,
          analysis: application.aiAnalysis,
          analyzedAt: application.aiAnalysis.analyzedAt
      });
      return;
  } catch (error) {
      console.error('Error retrieving application analysis:', error);
      res.status(500).json({ message: 'Server error' });
  }
});

export default router;