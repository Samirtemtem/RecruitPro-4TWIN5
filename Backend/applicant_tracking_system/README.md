# Job Recommendation System

A recommendation system that matches job postings with candidate profiles based on skills, experience, and education.

## Overview

This system leverages machine learning to create personalized job recommendations for candidates. It analyzes profiles across multiple collections in MongoDB and calculates similarity scores to suggest the most relevant jobs for each candidate.

## Features

- **Job Recommendations for Candidates**: Suggests suitable job postings based on candidate profiles
- **Similar Candidates**: Identifies similar candidates for each job posting
- **Interactive Web Interface**: Simple web UI to input a candidate ID and view recommendations

## Database Structure

The system works with the following MongoDB collections:

- **users**: Basic user information and authentication details
- **profiles**: Candidate profiles with references to education, experience, and skills
- **jobposts**: Available job positions with requirements and descriptions
- **skills**: Skills with proficiency levels
- **educations**: Educational backgrounds
- **experiences**: Work experience records
- **sociallinks**: Social media profile links

## How It Works

1. **Data Collection**:
   - Loads data from MongoDB collections
   - Joins related collections to create comprehensive candidate and job profiles

2. **Feature Engineering**:
   - Extracts and processes skills from both candidates and job posts
   - Encodes categorical features (education, experience, location)
   - Represents skills as binary vectors

3. **Similarity Calculation**:
   - Combines encoded features to create feature vectors
   - Calculates cosine similarity between job and candidate vectors

4. **Recommendation Generation**:
   - Recommends jobs to candidates based on similarity scores
   - Identifies similar candidates for job positions

## Technical Details

- **Backend**: Python, Flask
- **Database**: MongoDB
- **ML Libraries**: scikit-learn, pandas, numpy
- **Similarity Algorithm**: Cosine similarity
- **Web Interface**: HTML, CSS, Jinja2 templates

## How Recommendations Are Calculated

The recommendation scores in the system are calculated using the following process:

1. **Feature Vector Creation**:
   - Each candidate and job post is represented as a numerical vector
   - Vectors contain encoded categorical data (experience, education, location)
   - Skills are represented as binary values (1 = has skill, 0 = doesn't have skill)
   - A weight multiplier (default: 3.0) is applied to skills to prioritize skill matching

2. **Cosine Similarity**:
   - The system calculates cosine similarity between job and candidate vectors
   - Cosine similarity measures the angle between vectors, not magnitude
   - Values range from 0 (completely different) to 1 (identical)
   - Final scores are presented as percentages (e.g., 0.75 = 75% match)

3. **Ranking**:
   - Job recommendations are ranked by similarity score in descending order
   - The top 5 jobs with highest similarity scores are presented
   - Similar candidates are identified using the transposed similarity matrix

4. **Factors Affecting Scores**:
   - Skill overlap significantly impacts similarity due to weighting
   - Limited skill overlap results in lower similarity scores
   - Consistent skill terminology improves matching accuracy
   - Categorical features (experience, education) provide baseline similarity

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/samirtemtem/job-recommendation-system.git
   cd job-recommendation-system
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Set up MongoDB connection:
   - Ensure MongoDB is running
   - Update the connection string in `main.py` and `app.py` if needed

## Usage

1. First, generate the recommendation model:
   ```
   python main.py
   ```

2. Start the Flask application:
   ```
   python app.py
   ```

3. Access the web interface at `http://localhost:5000`

4. Enter a candidate ID to get personalized job recommendations

## Extending the System

To add more features to the recommendation system:

1. **Real-time updates**: Implement webhooks to update recommendations when profiles or jobs change
2. **Advanced filtering**: Add filters for job type, salary range, or location preferences
3. **Feedback mechanism**: Collect user feedback to improve recommendation accuracy 

## REST API for Integration

The system provides a comprehensive REST API that allows integration with frontend frameworks like Angular, React, or Vue.js. Recommendations are stored in the MongoDB database for improved performance and tracking user interactions.

### Database Integration

- **Cached Recommendations**: Recommendations are calculated once and stored in MongoDB for faster retrieval
- **TTL-Based Expiry**: Stored recommendations automatically expire after 24 hours to ensure freshness
- **User Interaction Tracking**: System records when users view, click, or apply to recommended jobs

### API Endpoints

#### 1. Get Job Recommendations

Retrieves personalized job recommendations for a candidate.

- **URL**: `/api/recommendations/jobs`
- **Method**: GET
- **Query Parameters**:
  - `candidateId` (required): The ID of the candidate
- **Success Response**:
  ```json
  {
    "jobs": [
      {
        "jobId": "60a2b4e8b54c6a1e9c9c9f1e",
        "jobTitle": "Software Engineer",
        "similarity": 0.85,
        "skillScore": 0.42,
        "experienceScore": 0.28,
        "educationScore": 0.15,
        "exactSkillMatches": ["JavaScript", "React", "Node.js"],
        "semanticSkillMatches": [
          {"jobSkill": "MongoDB", "candidateSkill": "NoSQL"}
        ],
        "experienceMatches": ["development", "software", "architecture"],
        "educationMatches": ["computer science", "engineering"],
        "interacted": false,
        "applied": false
      }
    ],
    "source": "database",
    "lastUpdated": "2023-07-01T12:34:56.789Z"
  }
  ```

#### 2. Refresh Recommendations

Forces a refresh of recommendations for a specific candidate.

- **URL**: `/api/recommendations/refresh`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "candidateId": "60a2b4e8b54c6a1e9c9c9f1d"
  }
  ```
- **Success Response**:
  ```json
  {
    "message": "Recommendations refreshed successfully",
    "timestamp": "2023-07-01T12:34:56.789Z",
    "count": 5
  }
  ```

#### 3. Track Recommendation Interaction

Records user interactions with recommendations (view, click, apply).

- **URL**: `/api/recommendations/interaction`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "candidateId": "60a2b4e8b54c6a1e9c9c9f1d",
    "jobId": "60a2b4e8b54c6a1e9c9c9f1e",
    "type": "view" // or "click" or "apply"
  }
  ```
- **Success Response**:
  ```json
  {
    "success": true,
    "message": "Interaction of type view recorded successfully"
  }
  ```

#### 4. Get Recommendation Statistics

Retrieves statistics about a candidate's recommendations and interactions.

- **URL**: `/api/recommendations/stats`
- **Method**: GET
- **Query Parameters**:
  - `candidateId` (required): The ID of the candidate
- **Success Response**:
  ```json
  {
    "hasRecommendations": true,
    "totalCount": 5,
    "interactedCount": 3,
    "appliedCount": 1,
    "averageSimilarity": 0.68,
    "lastUpdated": "2023-07-01T12:34:56.789Z",
    "algorithm": {
      "version": "1.0",
      "weights": {
        "skills": 0.333,
        "experience": 0.333,
        "education": 0.333
      }
    }
  }
  ```

### Angular Integration Example

Here's how to integrate the recommendation system with an Angular application:

```typescript
// recommendation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  private apiUrl = 'http://your-api-url/api/recommendations';

  constructor(private http: HttpClient) { }

  getJobRecommendations(candidateId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/jobs?candidateId=${candidateId}`);
  }

  refreshRecommendations(candidateId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/refresh`, { candidateId });
  }

  trackInteraction(candidateId: string, jobId: string, type: 'view' | 'click' | 'apply'): Observable<any> {
    return this.http.post(`${this.apiUrl}/interaction`, { 
      candidateId, 
      jobId, 
      type 
    });
  }

  getStats(candidateId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats?candidateId=${candidateId}`);
  }
}
```

```typescript
// job-recommendations.component.ts
import { Component, OnInit } from '@angular/core';
import { RecommendationService } from '../services/recommendation.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-job-recommendations',
  templateUrl: './job-recommendations.component.html'
})
export class JobRecommendationsComponent implements OnInit {
  recommendations: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private recommendationService: RecommendationService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadRecommendations();
  }

  loadRecommendations(): void {
    this.loading = true;
    const currentUser = this.authService.getCurrentUser();
    
    if (currentUser?.id) {
      this.recommendationService.getJobRecommendations(currentUser.id)
        .subscribe({
          next: (response) => {
            this.recommendations = response.jobs;
            this.loading = false;
            
            // Track that user viewed these recommendations
            if (this.recommendations.length > 0) {
              this.recommendationService.trackInteraction(
                currentUser.id,
                this.recommendations[0].jobId,
                'view'
              ).subscribe();
            }
          },
          error: (err) => {
            this.error = 'Failed to load recommendations';
            this.loading = false;
            console.error(err);
          }
        });
    }
  }

  applyForJob(jobId: string): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser?.id) {
      // Track the application
      this.recommendationService.trackInteraction(
        currentUser.id,
        jobId,
        'apply'
      ).subscribe();
      
      // Handle application logic
      // ...
    }
  }
}
```

### Performance Considerations

1. **Cached Recommendations**:
   - First-time requests calculate and store recommendations in MongoDB
   - Subsequent requests within 24 hours serve cached recommendations
   - This approach significantly reduces API response times (milliseconds vs. seconds)

2. **Recommendation Freshness**:
   - Recommendations automatically expire after 24 hours
   - Users can manually refresh their recommendations
   - System refreshes recommendations when significant profile changes occur

3. **Scalability**:
   - The database-backed approach allows the system to handle high traffic
   - Recommendation calculations are performed in batches, not per request
   - Interaction tracking adds minimal overhead with indexed database queries

## Advanced Deployment

For production deployment with Angular integration:

1. **Separate Services**:
   - Deploy Flask API on a dedicated server/container
   - Deploy Angular frontend on a static hosting service or CDN
   - Configure CORS in the Flask app to allow requests from the frontend domain

2. **Containerization**:
   ```
   # Build the Docker image
   docker build -t job-recommendation-system .
   
   # Run the container
   docker run -p 5000:5000 -d job-recommendation-system
   ```

3. **Database Optimization**:
   - Add indexes to `userId` and `jobId` fields in the recommendations collection
   - Consider sharding for very large datasets
   - Implement connection pooling for high-traffic scenarios 