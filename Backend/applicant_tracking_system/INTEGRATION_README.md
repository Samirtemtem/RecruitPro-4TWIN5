# Recommendation System Integration

This document provides instructions for integrating the Python-based recommendation system with the Express.js backend.

## Overview

The recommendation system is implemented as a separate microservice that:
1. Generates recommendations using machine learning algorithms
2. Stores recommendations in MongoDB
3. Provides API endpoints for the Express.js backend

## Setup Options

### Option 1: Docker Compose (Recommended)

The simplest way to run both services together is using Docker Compose:

1. Make sure Docker and Docker Compose are installed on your system
2. Run from the project root:
   ```
   docker-compose up -d
   ```

This will:
- Build and start the Express.js backend
- Build and start the Python recommendation service
- Set up a cron job to regenerate recommendations every 12 hours
- Configure all necessary environment variables

### Option 2: Manual Setup

#### Step 1: Start the Python Recommendation Service

1. Navigate to the recommendation service directory:
   ```
   cd Backend/applicant_tracking_system
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Run the initial data processing:
   ```
   python main.py
   ```

4. Start the Flask server:
   ```
   python app.py
   ```

5. Set up a scheduled task:
   ```
   # Make the script executable
   chmod +x schedule_recommendations.sh
   
   # Run the script to set up a cron job
   ./schedule_recommendations.sh
   ```

#### Step 2: Configure Express.js Backend

1. Ensure the .env file contains:
   ```
   RECOMMENDATION_SERVICE_URL=http://localhost:5000
   ```

2. Start the Express.js backend:
   ```
   cd Backend
   npm install
   npm start
   ```

## API Endpoints

The Express.js backend provides these endpoints that forward to the recommendation service:

- **GET /api/recommendations/jobs** - Get job recommendations for the authenticated user
- **POST /api/recommendations/refresh** - Force refresh recommendations
- **POST /api/recommendations/interaction** - Track user interactions with recommendations
- **GET /api/recommendations/stats** - Get recommendation system statistics

## Architecture

```
┌─────────────┐         ┌───────────────────┐         ┌─────────────┐
│             │  HTTP   │                   │  HTTP   │             │
│  Frontend   ├────────►│  Express Backend  ├────────►│  Python     │
│             │         │                   │         │  Recommender│
└─────────────┘         └───────────────────┘         └─────────────┘
                                                            │
                                                            │
                                                            ▼
                                                      ┌─────────────┐
                                                      │             │
                                                      │  MongoDB    │
                                                      │             │
                                                      └─────────────┘
```

## Troubleshooting

- **Recommendation service not responding**: Check if the Flask service is running on port 5000
- **No recommendations showing**: Ensure main.py has been executed at least once
- **Outdated recommendations**: Run `python main.py` manually or trigger the `/api/recommendations/refresh` endpoint

## Development Notes

- The recommendation system uses pickle files for caching data
- The Express backend acts as an API gateway, handling authentication and forwarding requests
- Schedule updates to recommendations using cron jobs or the docker-compose setup 