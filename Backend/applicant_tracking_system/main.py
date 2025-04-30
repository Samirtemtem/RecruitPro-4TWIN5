import pandas as pd
import numpy as np
from pymongo import MongoClient
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics.pairwise import cosine_similarity
import pickle
import logging
from sklearn.feature_extraction.text import TfidfVectorizer
import re
import string
from datetime import datetime
from translate import Translator
import langdetect

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Translation functions for cross-language matching
def translate_to_english(text):
    """Translate non-English text to English for processing."""
    try:
        # Skip empty or very short texts
        if not text or len(text) < 5:
            return text, 'en'
            
        # Detect language
        source_lang = langdetect.detect(text)
        
        # If already English, return as is
        if source_lang == 'en':
            return text, source_lang
            
        # Translate to English
        translator = Translator(from_lang=source_lang, to_lang='en')
        
        # For longer texts, split into chunks to avoid translator limits
        if len(text) > 500:
            chunks = [text[i:i+500] for i in range(0, len(text), 500)]
            translated_chunks = [translator.translate(chunk) for chunk in chunks]
            translated = ' '.join(translated_chunks)
        else:
            translated = translator.translate(text)
            
        logging.info(f"Translated text from {source_lang} to English")
        return translated, source_lang
    except Exception as e:
        logging.error(f"Translation error: {e}")
        return text, 'en'  # Return original as fallback

def translate_skills(skills_list, source_lang):
    """Translate skills to English for matching."""
    if source_lang == 'en' or not skills_list:
        return skills_list
        
    translator = Translator(from_lang=source_lang, to_lang='en')
    translated_skills = []
    
    for skill in skills_list:
        try:
            if not isinstance(skill, str):
                translated_skills.append(skill)
                continue
                
            translated = translator.translate(skill)
            translated_skills.append(translated)
        except Exception as e:
            logging.warning(f"Error translating skill '{skill}': {e}")
            translated_skills.append(skill)  # Use original if translation fails
            
    return translated_skills

def preprocess_document(document, document_type):
    """Preprocess job or CV document with translation."""
    if not isinstance(document, dict):
        return document
        
    document = document.copy()  # Create a copy to avoid modifying the original
    original_language = 'en'
    
    # Translate description if present
    if 'JobDescription' in document and document['JobDescription']:
        if isinstance(document['JobDescription'], str):
            translated_text, original_language = translate_to_english(document['JobDescription'])
            document['original_language'] = original_language
            document['original_description'] = document['JobDescription']
            document['JobDescription'] = translated_text
    
    # Translate skills if present and not in English
    if 'Skills' in document and document['Skills'] and original_language != 'en':
        document['original_skills'] = document['Skills'].copy()
        document['Skills'] = translate_skills(document['Skills'], original_language)
    
    return document

# MongoDB setup - Update with your database connection string
client = MongoClient('mongodb+srv://root:root@cluster0.wa1te.mongodb.net/recruitpro?retryWrites=true&w=majority')
db = client['recruitpro']  # Replace with your actual database name if different

# Load data from multiple collections
users_collection = db['users']
profiles_collection = db['profiles']
jobposts_collection = db['jobposts']
skills_collection = db['skills']
educations_collection = db['educations']
experiences_collection = db['experiences']

logging.info("Loading data from MongoDB collections...")

# Load data into DataFrames
users = pd.DataFrame(list(users_collection.find()))
profiles = pd.DataFrame(list(profiles_collection.find()))
jobposts = pd.DataFrame(list(jobposts_collection.find()))
skills = pd.DataFrame(list(skills_collection.find()))
educations = pd.DataFrame(list(educations_collection.find()))
experiences = pd.DataFrame(list(experiences_collection.find()))

logging.info(f"Loaded {len(users)} users, {len(profiles)} profiles, {len(jobposts)} job posts")

# Process profiles to create consolidated candidate data
logging.info("Processing profiles and creating consolidated candidate data...")

candidates = profiles.copy()
if not candidates.empty:
    # Add user information to profiles
    if '_id' in users.columns and 'user' in candidates.columns:
        # Debug: Print sample of user IDs before merging
        logging.info("Sample of user IDs before merging:")
        for idx, user_row in users.head().iterrows():
            logging.info(f"User _id: {user_row['_id']}")
            
        logging.info("\nSample of profile 'user' field values:")
        for idx, profile_row in candidates.head().iterrows():
            logging.info(f"Profile user field: {profile_row['user']}")
            
        candidates = candidates.merge(
            users[['_id', 'firstName', 'lastName', 'email', 'phoneNumber', 'role']], 
            left_on='user', 
            right_on='_id', 
            how='left',
            suffixes=('', '_user')
        )
        
        # Store the user ID as CandidateID - using the actual user ID
        candidates['CandidateID'] = candidates['_id']  # This is the user's ID from the merge
        
        # Debug: Print sample of CandidateIDs after setting
        logging.info("\nSample of CandidateIDs after setting:")
        for idx, row in candidates.head().iterrows():
            logging.info(f"Set CandidateID: {row['CandidateID']}")
            logging.info(f"Original user _id: {row['_id']}")
            if 'user' in row:
                logging.info(f"Original user field: {row['user']}\n")
    
    # Process skills
    if not skills.empty and 'skills' in candidates.columns:
        # Create a dictionary mapping skill IDs to skill names
        skill_dict = {}
        for _, row in skills.iterrows():
            if '_id' in row and 'name' in row:
                skill_dict[str(row['_id'])] = row['name']
        
        # Map skill IDs to skill names for each candidate
        def map_skills(skill_ids):
            if not isinstance(skill_ids, list):
                return []
            return [skill_dict.get(str(skill_id), '') for skill_id in skill_ids if str(skill_id) in skill_dict]
        
        candidates['skill_names'] = candidates['skills'].apply(map_skills)
    else:
        candidates['skill_names'] = candidates.apply(lambda x: [], axis=1)
    
    # Process education
    if not educations.empty and 'education' in candidates.columns:
        # Create a dictionary mapping education IDs to education details
        education_dict = {}
        for _, row in educations.iterrows():
            if '_id' in row and 'diploma' in row:
                education_dict[str(row['_id'])] = row['diploma']
        
        # Map education IDs to education details for each candidate
        def map_education(edu_ids):
            if not isinstance(edu_ids, list):
                return []
            return [education_dict.get(str(edu_id), '') for edu_id in edu_ids if str(edu_id) in education_dict]
        
        candidates['education_details'] = candidates['education'].apply(map_education)
    else:
        candidates['education_details'] = candidates.apply(lambda x: [], axis=1)
    
    # Process experience
    if not experiences.empty and 'experience' in candidates.columns:
        # Create a dictionary mapping experience IDs to experience details and years
        experience_dict = {}
        experience_years_dict = {}
        for _, row in experiences.iterrows():
            if '_id' in row and 'position' in row:
                experience_dict[str(row['_id'])] = row['position']
                # Calculate years of experience (simplified)
                if 'startDate' in row and 'endDate' in row and pd.notna(row['startDate']) and pd.notna(row['endDate']):
                    try:
                        start = pd.to_datetime(row['startDate'])
                        end = pd.to_datetime(row['endDate'])
                        years = (end - start).days / 365.25  # Approximate years
                        experience_years_dict[str(row['_id'])] = years
                    except Exception as e:
                        logging.warning(f"Error calculating experience years: {e}")
                        experience_years_dict[str(row['_id'])] = 0
                else:
                    experience_years_dict[str(row['_id'])] = 0
        
        # Map experience IDs to details for each candidate
        def map_experience(exp_ids):
            if not isinstance(exp_ids, list):
                return []
            return [experience_dict.get(str(exp_id), '') for exp_id in exp_ids if str(exp_id) in experience_dict]
        
        # Calculate total years of experience
        def calculate_total_experience(exp_ids):
            if not isinstance(exp_ids, list):
                return 0
            return sum(experience_years_dict.get(str(exp_id), 0) for exp_id in exp_ids)
        
        candidates['experience_details'] = candidates['experience'].apply(map_experience)
        candidates['total_experience_years'] = candidates['experience'].apply(calculate_total_experience)
    else:
        candidates['experience_details'] = candidates.apply(lambda x: [], axis=1)
        candidates['total_experience_years'] = candidates.apply(lambda x: 0, axis=1)

    # Detect and translate non-English content
    logging.info("Checking for and translating non-English content...")
    candidates = candidates.apply(lambda x: preprocess_document(x, 'candidate'), axis=1)

# Process job posts
logging.info("Processing job posts...")
if not jobposts.empty:
    # Extract requirements as skills
    jobposts['extracted_skills'] = jobposts['requirements'].apply(
        lambda x: x if isinstance(x, list) else []
    )
    
    # Detect and translate non-English content
    logging.info("Checking for and translating non-English content in job posts...")
    jobposts = jobposts.apply(lambda x: preprocess_document(x, 'job'), axis=1)

# Rename columns to match the expected format for the recommendation algorithm
# For candidates
candidates = candidates.rename(columns={
    'address': 'Location',
    'skill_names': 'Skills',
    'education_details': 'Education',
    'total_experience_years': 'Experience',
    'description': 'JobDescription'
})

# For jobposts
jobposts = jobposts.rename(columns={
    '_id': 'JobID',
    'title': 'JobTitle',
    'experience': 'Experience',
    'requirements': 'Requirements',
    'extracted_skills': 'Skills',
    'description': 'JobDescription'
})

# Ensure both dataframes have the needed columns
required_columns = ['Skills', 'Experience', 'Education', 'Location']
for column in required_columns:
    if column not in candidates.columns:
        candidates[column] = candidates.apply(lambda x: [], axis=1) if column == 'Skills' or column == 'Education' else ''
    if column not in jobposts.columns:
        jobposts[column] = jobposts.apply(lambda x: [], axis=1) if column == 'Skills' else ''

# Ensure skills are in list format
jobposts['Skills'] = jobposts['Skills'].apply(lambda x: x if isinstance(x, list) else ([x] if pd.notna(x) else []))
candidates['Skills'] = candidates['Skills'].apply(lambda x: x if isinstance(x, list) else ([x] if pd.notna(x) else []))

logging.info("Starting feature encoding...")

# Handle categorical features
def combine_and_fit_labelencoder(df1, df2, column):
    # Handle missing values
    df1[column] = df1[column].fillna('Unknown')
    df2[column] = df2[column].fillna('Unknown')
    
    # Convert to string to ensure LabelEncoder works properly
    df1[column] = df1[column].astype(str)
    df2[column] = df2[column].astype(str)
    
    combined_data = pd.concat([df1[column], df2[column]], axis=0).unique()
    le = LabelEncoder()
    le.fit(combined_data)
    return le

label_encoders = {}
for col in ['Experience', 'Location']:
    if col in candidates.columns and col in jobposts.columns:
        try:
            label_encoders[col] = combine_and_fit_labelencoder(candidates, jobposts, col)
            candidates[col] = label_encoders[col].transform(candidates[col])
            jobposts[col] = label_encoders[col].transform(jobposts[col])
        except Exception as e:
            logging.error(f"Error encoding {col}: {e}")
            # Use a default value if encoding fails
            candidates[col] = 0
            jobposts[col] = 0

# Education needs special handling as it might be a list
if 'Education' in candidates.columns and 'Education' in jobposts.columns:
    # Flatten education lists to single string
    candidates['Education_flat'] = candidates['Education'].apply(
        lambda x: ', '.join(x) if isinstance(x, list) else str(x)
    )
    jobposts['Education_flat'] = jobposts['Education'].apply(
        lambda x: ', '.join(x) if isinstance(x, list) else str(x)
    )
    
    try:
        label_encoders['Education'] = combine_and_fit_labelencoder(
            candidates[['Education_flat']].rename(columns={'Education_flat': 'Education'}),
            jobposts[['Education_flat']].rename(columns={'Education_flat': 'Education'}),
            'Education'
        )
        candidates['Education_encoded'] = label_encoders['Education'].transform(candidates['Education_flat'])
        jobposts['Education_encoded'] = label_encoders['Education'].transform(jobposts['Education_flat'])
    except Exception as e:
        logging.error(f"Error encoding Education: {e}")
        candidates['Education_encoded'] = 0
        jobposts['Education_encoded'] = 0

# Extract all unique skills from both jobposts and candidates
all_skills = []
for skills_list in candidates['Skills'].tolist() + jobposts['Skills'].tolist():
    if isinstance(skills_list, list):
        all_skills.extend(skills_list)
skills_set = list(set(all_skills))

logging.info(f"Found {len(skills_set)} unique skills")

# Define semantic skill groups (skills that are semantically related)
def create_semantic_skill_groups():
    """
    Create groups of semantically similar skills to improve matching.
    
    Returns:
        dict: A dictionary mapping each skill to its semantic group
    """
    # Define groups of semantically similar skills
    semantic_groups = {
        'programming': [
            'Python', 'JavaScript', 'Java', 'C++', 'C#', 'PHP', 'Ruby', 'Golang', 'Programming',
            'Coding', 'Development', 'Software Development', 'Software Engineering'
        ],
        'web_development': [
            'HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue', 'Node.js', 'Frontend', 
            'Backend', 'Full Stack', 'Web Development', 'Web Design', 'UI/UX'
        ],
        'data_science': [
            'Python', 'R', 'SQL', 'Data Analysis', 'Machine Learning', 'AI', 'Artificial Intelligence',
            'Deep Learning', 'Data Science', 'Data Mining', 'Statistics', 'Data Visualization',
            'Big Data', 'Data Engineering'
        ],
        'database': [
            'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'NoSQL', 'Database', 'Data Modeling',
            'Oracle', 'SQL Server', 'Database Administration', 'Database Management'
        ],
        'cloud': [
            'AWS', 'Azure', 'Google Cloud', 'Cloud Computing', 'Cloud Architecture',
            'DevOps', 'Docker', 'Kubernetes', 'Containerization', 'Infrastructure'
        ],
        'project_management': [
            'Project Management', 'Scrum', 'Agile', 'JIRA', 'Kanban', 'Leadership',
            'Team Management', 'Product Management'
        ]
    }
    
    # Create a mapping from skill to group
    skill_to_group = {}
    for group, skills in semantic_groups.items():
        for skill in skills:
            skill_to_group[skill.lower()] = group
    
    return skill_to_group

# Create semantic skill mapping
skill_to_group = create_semantic_skill_groups()
logging.info(f"Created semantic groups for {len(skill_to_group)} skills")

def encode_features(df, feature_set, column_name):
    """
    Encode features considering both exact and semantic matches.
    
    Args:
        df: DataFrame containing the data
        feature_set: The set of features to encode against
        column_name: The column containing the features to encode
    
    Returns:
        np.array: Encoded feature vectors
    """
    encoded_features = []
    for features in df[column_name]:
        if not isinstance(features, list):
            features = []
        
        # Convert features to lowercase for matching
        features_lower = [f.lower() if isinstance(f, str) else "" for f in features]
        
        # Get semantic groups for the features
        feature_groups = set()
        for feature in features_lower:
            if feature in skill_to_group:
                feature_groups.add(skill_to_group[feature])
        
        # Create vector with both exact and semantic matches
        encoded = []
        for feature in feature_set:
            feature_lower = feature.lower() if isinstance(feature, str) else ""
            
            # Check for exact match
            exact_match = feature_lower in features_lower
            
            # Check for semantic match
            semantic_match = False
            if feature_lower in skill_to_group:
                semantic_match = skill_to_group[feature_lower] in feature_groups
            
            # Use 1 for exact match, 0.5 for semantic match only
            if exact_match:
                encoded.append(1.0)
            elif semantic_match:
                encoded.append(0.5)  # Half weight for semantic match
            else:
                encoded.append(0.0)
                
        encoded_features.append(encoded)
    
    return np.array(encoded_features)

logging.info("Encoding skills with semantic matching...")
jobposts_skills_encoded = encode_features(jobposts, skills_set, 'Skills')
candidates_skills_encoded = encode_features(candidates, skills_set, 'Skills')

# Log information about semantic matching
total_semantic_matches = np.sum((jobposts_skills_encoded > 0) & (jobposts_skills_encoded < 1))
logging.info(f"Added {total_semantic_matches} semantic matches across all job posts")

nonzero_jobposts = np.sum(np.any(jobposts_skills_encoded > 0, axis=1))
logging.info(f"Job posts with at least one skill match (exact or semantic): {nonzero_jobposts} out of {jobposts_skills_encoded.shape[0]}")

nonzero_candidates = np.sum(np.any(candidates_skills_encoded > 0, axis=1))
logging.info(f"Candidates with at least one skill match (exact or semantic): {nonzero_candidates} out of {candidates_skills_encoded.shape[0]}")

# Create feature vectors combining categorical and skills data
feature_columns = []

# Try to include Education and Experience data
if 'Education_encoded' in candidates.columns and 'Education_encoded' in jobposts.columns:
    feature_columns.append('Education_encoded')
elif 'Education' in candidates.columns and 'Education' in jobposts.columns:
    # Try to use Education directly if encoded version not available
    try:
        # Convert to numeric if possible
        candidates['Education_numeric'] = pd.to_numeric(candidates['Education'], errors='coerce').fillna(0)
        jobposts['Education_numeric'] = pd.to_numeric(jobposts['Education'], errors='coerce').fillna(0)
        feature_columns.append('Education_numeric')
    except:
        logging.warning("Could not convert Education to numeric feature")

# Add Experience feature
if 'Experience' in candidates.columns and 'Experience' in jobposts.columns:
    # Make sure Experience is numeric
    candidates['Experience'] = pd.to_numeric(candidates['Experience'], errors='coerce').fillna(0)
    jobposts['Experience'] = pd.to_numeric(jobposts['Experience'], errors='coerce').fillna(0)
    feature_columns.append('Experience')

logging.info(f"Using feature columns: {feature_columns}")

# Add Location if available
if 'Location' in jobposts.columns and 'Location' in candidates.columns:
    if not jobposts['Location'].isnull().all() and not candidates['Location'].isnull().all():
        feature_columns.append('Location')

# Improve skill matching by giving more weight to skills
# This makes skills more important in the matching
skill_weight = 3.0  # Adjust this weight to make skills more/less important

if feature_columns:
    # Prepare categorical features
    jobposts_cat = jobposts[feature_columns].values
    candidates_cat = candidates[feature_columns].values
    
    # Apply skill weight to skill vectors
    jobposts_skills_weighted = jobposts_skills_encoded * skill_weight
    candidates_skills_weighted = candidates_skills_encoded * skill_weight
    
    # Combine categorical and weighted skill features
    jobposts_combined = np.hstack((jobposts_cat, jobposts_skills_weighted))
    candidates_combined = np.hstack((candidates_cat, candidates_skills_weighted))
else:
    # If no categorical features available, just use weighted skills
    jobposts_combined = jobposts_skills_encoded * skill_weight
    candidates_combined = candidates_skills_encoded * skill_weight

# Add debug info
logging.info(f"Feature vector composition: {len(feature_columns)} categorical features + {jobposts_skills_encoded.shape[1]} skills")
logging.info(f"Applied skill weight of {skill_weight}x to increase importance of matching skills")

logging.info("Calculating similarity matrices...")

# Debug information about feature vectors
logging.info(f"Shape of jobposts_combined: {jobposts_combined.shape}")
logging.info(f"Shape of candidates_combined: {candidates_combined.shape}")

# Check if vectors are all zeros (which would result in 0% similarity)
jobposts_zeros = np.sum(np.all(jobposts_combined == 0, axis=1))
candidates_zeros = np.sum(np.all(candidates_combined == 0, axis=1))
logging.info(f"Job posts with all-zero feature vectors: {jobposts_zeros} out of {jobposts_combined.shape[0]}")
logging.info(f"Candidates with all-zero feature vectors: {candidates_zeros} out of {candidates_combined.shape[0]}")

# Sample a few vectors to see their content
if jobposts_combined.shape[0] > 0:
    logging.info(f"Sample job post feature vector: {jobposts_combined[0]}")
    logging.info(f"Non-zero elements: {np.count_nonzero(jobposts_combined[0])}")

if candidates_combined.shape[0] > 0:
    logging.info(f"Sample candidate feature vector: {candidates_combined[0]}")
    logging.info(f"Non-zero elements: {np.count_nonzero(candidates_combined[0])}")

# Calculate similarity matrices
similarity_matrix = cosine_similarity(jobposts_combined, candidates_combined)

# Debug similarity scores
if similarity_matrix.size > 0:
    logging.info(f"Similarity matrix shape: {similarity_matrix.shape}")
    logging.info(f"Min similarity: {np.min(similarity_matrix)}, Max similarity: {np.max(similarity_matrix)}")
    logging.info(f"Average similarity: {np.mean(similarity_matrix)}")
    logging.info(f"Number of zero similarities: {np.sum(similarity_matrix == 0)}")
    
    # Print a sample of the similarity matrix
    if similarity_matrix.shape[0] > 0 and similarity_matrix.shape[1] > 0:
        sample_size = min(5, similarity_matrix.shape[0], similarity_matrix.shape[1])
        logging.info(f"Sample of similarity matrix (5x5 or smaller):\n{similarity_matrix[:sample_size, :sample_size]}")

# Now add experience and education description similarity (50% of the score)
logging.info("Calculating experience and education description similarity...")

def preprocess_text(text):
    """Clean and preprocess text for better similarity matching."""
    if not isinstance(text, str):
        return ""
    
    # Convert to lowercase and remove punctuation
    text = text.lower()
    text = re.sub(f'[{string.punctuation}]', ' ', text)
    # Remove extra whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text

# Function to calculate text similarity between job description and candidate text
def calculate_text_similarity(job_descriptions, candidate_texts):
    """
    Calculate text similarity between job descriptions and candidate texts.
    
    Args:
        job_descriptions: List of job description texts
        candidate_texts: List of candidate text descriptions (experiences/education)
        
    Returns:
        np.array: Matrix of similarity scores
    """
    # Handle empty descriptions
    job_descriptions = [preprocess_text(desc) if desc else "" for desc in job_descriptions]
    candidate_texts = [preprocess_text(text) if text else "" for text in candidate_texts]
    
    # If all texts are empty, return zeros
    if all(not text for text in job_descriptions) or all(not text for text in candidate_texts):
        return np.zeros((len(job_descriptions), len(candidate_texts))), [], []
    
    # Vectorize texts using TF-IDF
    vectorizer = TfidfVectorizer(stop_words='english')
    
    # Combine all texts for fitting
    all_texts = job_descriptions + candidate_texts
    
    # If texts are empty, return zeros
    if not any(all_texts):
        return np.zeros((len(job_descriptions), len(candidate_texts))), [], []
    
    try:
        tfidf_matrix = vectorizer.fit_transform(all_texts)
        
        # Get feature names (words) from the vectorizer
        feature_names = vectorizer.get_feature_names_out()
        
        # Split matrices for jobs and candidates
        job_tfidf = tfidf_matrix[:len(job_descriptions)]
        candidate_tfidf = tfidf_matrix[len(job_descriptions):]
        
        # Calculate cosine similarity
        similarity = cosine_similarity(job_tfidf, candidate_tfidf)
        
        # For each job-candidate pair, find the top matching words
        matching_words = []
        for i in range(len(job_descriptions)):
            job_words = job_tfidf[i].toarray()[0]
            job_matches = []
            
            for j in range(len(candidate_texts)):
                candidate_words = candidate_tfidf[j].toarray()[0]
                # Find words that appear in both job and candidate text
                common_word_indices = np.where((job_words > 0) & (candidate_words > 0))[0]
                # Get the words and their TF-IDF scores in the job description
                words_with_scores = [(feature_names[idx], job_words[idx]) 
                                    for idx in common_word_indices]
                # Sort by importance (TF-IDF score)
                words_with_scores.sort(key=lambda x: x[1], reverse=True)
                job_matches.append(words_with_scores)
            
            matching_words.append(job_matches)
        
        # Extract raw text similarity information for storing
        raw_text_info = [
            {
                'job_text': job_desc,
                'processed_job_text': preprocess_text(job_desc)
            }
            for job_desc in job_descriptions
        ]
        
        return similarity, matching_words, raw_text_info
    except Exception as e:
        logging.error(f"Error calculating text similarity: {e}")
        return np.zeros((len(job_descriptions), len(candidate_texts))), [], []

# Extract descriptions
job_descriptions = jobposts['JobDescription'].fillna('').tolist()

# Prepare experience descriptions for candidates
candidate_experience_texts = []
for _, candidate in candidates.iterrows():
    # Combine all experience descriptions
    exp_text = ""
    if 'experience_details' in candidate and isinstance(candidate['experience_details'], list):
        exp_text = " ".join([str(exp) for exp in candidate['experience_details']])
    candidate_experience_texts.append(exp_text)

# Prepare education descriptions for candidates
candidate_education_texts = []
for _, candidate in candidates.iterrows():
    # Combine all education descriptions
    edu_text = ""
    if 'Education' in candidate and isinstance(candidate['Education'], list):
        edu_text = " ".join([str(edu) for edu in candidate['Education']])
    candidate_education_texts.append(edu_text)

# Calculate description similarities with detailed word matching
experience_similarity, experience_matching_words, exp_raw_info = calculate_text_similarity(
    job_descriptions, candidate_experience_texts
)
education_similarity, education_matching_words, edu_raw_info = calculate_text_similarity(
    job_descriptions, candidate_education_texts
)



# Helper function: convert to lowercase and remove whitespace
def clean_text(text):
    if isinstance(text, str):
        return re.sub(r'\s+', '', text.strip().lower())
    return ""

# Create a detailed matching info dictionary for every job-candidate pair
detailed_matching_info = {}
for job_idx, job in enumerate(jobposts.iterrows()):
    job_id = str(job[1]['JobID'])
    job_language = job[1].get('original_language', 'en')
    detailed_matching_info[job_id] = {}

    for candidate_idx, candidate in enumerate(candidates.iterrows()):
        candidate_id = str(candidate[1]['CandidateID'])
        candidate_language = candidate[1].get('original_language', 'en')

        # Clean and normalize skills
        job_skills = [clean_text(s) for s in job[1]['Skills']] if isinstance(job[1]['Skills'], list) else []
        candidate_skills = [clean_text(s) for s in candidate[1]['Skills']] if isinstance(candidate[1]['Skills'], list) else []

        # Exact skill matches
        exact_skill_matches = [s for s in job_skills if s in candidate_skills]

        # Semantic skill matches (partial substring matches)
        semantic_skill_matches = []
        for job_skill in job_skills:
            if job_skill in exact_skill_matches:
                continue
            for candidate_skill in candidate_skills:
                if len(job_skill) > 3 and len(candidate_skill) > 3:
                    if job_skill in candidate_skill or candidate_skill in job_skill:
                        if (job_skill, candidate_skill) not in semantic_skill_matches:
                            semantic_skill_matches.append((job_skill, candidate_skill))

        # Matching words from experience and education text similarity
        exp_matches = experience_matching_words[job_idx][candidate_idx] if job_idx < len(experience_matching_words) and candidate_idx < len(experience_matching_words[job_idx]) else []
        edu_matches = education_matching_words[job_idx][candidate_idx] if job_idx < len(education_matching_words) and candidate_idx < len(education_matching_words[job_idx]) else []

        # Clean and normalize education fields
        job_education = [clean_text(e) for e in job[1].get('Education', []) if isinstance(e, str)]
        candidate_education = [clean_text(e) for e in candidate[1].get('Education', []) if isinstance(e, str)]

        # Semantic education matching
        semantic_education_matches = []
        for job_edu in job_education:
            for candidate_edu in candidate_education:
                if len(job_edu) > 3 and len(candidate_edu) > 3:
                    if (job_edu in candidate_edu or candidate_edu in job_edu or 
                        any(term in job_edu and term in candidate_edu for term in ["degree", "bachelor", "master", "phd", "diploma", "certificate"])):
                        if (job_edu, candidate_edu) not in semantic_education_matches:
                            semantic_education_matches.append((job_edu, candidate_edu))

        # Extract and normalize experience terms
        job_experience = [clean_text(e) for e in job[1].get('experience_details', []) if isinstance(e, str)]
        candidate_experience = [clean_text(e) for e in candidate[1].get('experience_details', []) if isinstance(e, str)]

        if not job_experience and isinstance(job[1].get('JobDescription'), str):
            job_experience = [clean_text(t) for t in job[1]['JobDescription'].split()
                              if any(x in t.lower() for x in ["develop", "manag", "lead", "architect", "engineer", "analys"])]

        # Semantic experience matching
        semantic_experience_matches = []
        experience_terms = ["develop", "manag", "lead", "direct", "head", "senior", "architect", "engineer", "design", "analyst"]
        for job_exp in job_experience:
            for candidate_exp in candidate_experience:
                if len(job_exp) > 3 and len(candidate_exp) > 3:
                    if (job_exp in candidate_exp or candidate_exp in job_exp or
                        any(term in job_exp and term in candidate_exp for term in experience_terms)):
                        if (job_exp, candidate_exp) not in semantic_experience_matches:
                            semantic_experience_matches.append((job_exp, candidate_exp))

        # Collect job and candidate raw texts
        job_text = job[1]['JobDescription'] if 'JobDescription' in job[1] and pd.notna(job[1]['JobDescription']) else ""
        experience_text = candidate_experience_texts[candidate_idx] if candidate_idx < len(candidate_experience_texts) else ""
        education_text = candidate_education_texts[candidate_idx] if candidate_idx < len(candidate_education_texts) else ""

        # Compute similarity scores
        skill_similarity = 0.0
        if job_idx < len(jobposts_combined) and candidate_idx < len(candidates_combined):
            if jobposts_skills_encoded.shape[1] > 0:
                job_skills_vector = jobposts_skills_encoded[job_idx]
                candidate_skills_vector = candidates_skills_encoded[candidate_idx]
                if np.any(job_skills_vector) and np.any(candidate_skills_vector):
                    skill_similarity_raw = cosine_similarity([job_skills_vector], [candidate_skills_vector])[0][0]
                    skill_similarity = skill_similarity_raw * (1/3)  # Weighted: 33.3%

        exp_similarity = experience_similarity[job_idx, candidate_idx] * (1/3) if job_idx < experience_similarity.shape[0] and candidate_idx < experience_similarity.shape[1] else 0.0
        edu_similarity = education_similarity[job_idx, candidate_idx] * (1/3) if job_idx < education_similarity.shape[0] and candidate_idx < education_similarity.shape[1] else 0.0
        
        # Save all detailed match info
        detailed_matching_info[job_id][candidate_id] = {
            'skill_similarity': skill_similarity,
            'experience_similarity': exp_similarity,
            'education_similarity': edu_similarity,
            'total_similarity': skill_similarity + exp_similarity + edu_similarity,
            'exact_skill_matches': exact_skill_matches,
            'semantic_skill_matches': semantic_skill_matches,
            'experience_matching_words': exp_matches,
            'education_matching_words': edu_matches,
            'semantic_education_matches': semantic_education_matches,
            'semantic_experience_matches': semantic_experience_matches,
            'job_text': job_text,
            'experience_text': experience_text,
            'education_text': education_text,
            'job_language': job_language,
            'candidate_language': candidate_language,
            'original_job_text': job[1].get('original_description', job_text),
            'original_experience_text': candidate[1].get('original_description', experience_text),
            'original_job_skills': job[1].get('original_skills', job_skills),
            'original_candidate_skills': candidate[1].get('original_skills', candidate_skills)
        }


# Combine all similarities with equal weights
# 33.3% skills, 33.3% experience, 33.3% education
logging.info("Combining similarities with equal weights: 33.3% skills, 33.3% experience, 33.3% education")

# Normalize the original skill-based similarity to be 1/3 (33.3%)
skill_similarity = similarity_matrix * (1/3)

# Add experience and education similarities
final_similarity = skill_similarity.copy()
for i in range(len(jobposts)):
    for j in range(len(candidates)):
        # Add experience similarity (33.3%)
        if i < experience_similarity.shape[0] and j < experience_similarity.shape[1]:
            final_similarity[i, j] += experience_similarity[i, j] * (1/3)
        
        # Add education similarity (33.3%)
        if i < education_similarity.shape[0] and j < education_similarity.shape[1]:
            final_similarity[i, j] += education_similarity[i, j] * (1/3)

# Print debug information for the final similarity matrix
logging.info(f"Final similarity matrix shape: {final_similarity.shape}")
logging.info(f"Final min similarity: {np.min(final_similarity)}, max: {np.max(final_similarity)}")
logging.info(f"Final average similarity: {np.mean(final_similarity)}")

# Ensure no values exceed 1.0
final_similarity = np.clip(final_similarity, 0, 1)

# Use final_similarity instead of the original similarity_matrix for saving
logging.info("Saving data to pickle files...")
# Save similarity matrix and label encoders to pickle files
with open('similarity_matrix.pkl', 'wb') as f:
    pickle.dump(final_similarity, f)
    
with open('candidate_similarity_matrix.pkl', 'wb') as f:
    pickle.dump(final_similarity.T, f)

with open('label_encoders.pkl', 'wb') as f:
    pickle.dump(label_encoders, f)

# Save jobposts and candidates data to pickle files for use in app.py
with open('jobposts.pkl', 'wb') as f:
    pickle.dump(jobposts, f)

with open('candidates.pkl', 'wb') as f:
    pickle.dump(candidates, f)

# Save the detailed matching information for use in the template
with open('detailed_matching_info.pkl', 'wb') as f:
    pickle.dump(detailed_matching_info, f)

logging.info("Data processing and model creation completed successfully")
print("Data processing and model creation completed successfully")

# Store recommendation data in MongoDB for faster access and analytics
logging.info("Storing recommendation data in MongoDB...")

# Create a collection for storing pre-calculated recommendations if it doesn't exist
if 'jobRecommendations' not in db.list_collection_names():
    db.create_collection('jobRecommendations')
recommendations_collection = db['jobRecommendations']

# Create or access a separate collection for tracking interactions
if 'recommendationInteractions' not in db.list_collection_names():
    db.create_collection('recommendationInteractions')
interaction_collection = db['recommendationInteractions']

# Store pre-calculated recommendations for each candidate
stored_count = 0
for candidate_idx, candidate in enumerate(candidates.iterrows()):
    candidate_id = str(candidate[1]['CandidateID'])
    candidate_language = candidate[1].get('original_language', 'en')
    
    # Get top 5 job recommendations for this candidate
    job_indices = np.argsort(-final_similarity[:, candidate_idx])[:5]
    recommendations = []
    
    for job_idx in job_indices:
        job = jobposts.iloc[job_idx]
        job_id = str(job['JobID'])
        job_language = job.get('original_language', 'en')
        similarity_score = float(final_similarity[job_idx, candidate_idx])
        
        # Skip very low similarity scores
        if similarity_score < 0.01:
            continue
            
        # Get detailed matching information if available
        match_detail = {}
        if job_id in detailed_matching_info and candidate_id in detailed_matching_info[job_id]:
            match_detail = detailed_matching_info[job_id][candidate_id]
        
        # Format recommendation data for MongoDB storage with language information
        recommendation = {
            'jobId': job_id,
            'jobTitle': job['JobTitle'] if 'JobTitle' in job else '',
            'similarity': similarity_score,
            'skillScore': float(match_detail.get('skill_similarity', 0)),
            'experienceScore': float(match_detail.get('experience_similarity', 0)),
            'educationScore': float(match_detail.get('education_similarity', 0)),
            'exactSkillMatches': match_detail.get('exact_skill_matches', []),
            'semanticSkillMatches': [
                {'jobSkill': js, 'candidateSkill': cs} 
                for js, cs in match_detail.get('semantic_skill_matches', [])
            ],
            'semanticEducationMatches': [
                {'jobEducation': je, 'candidateEducation': ce} 
                for je, ce in match_detail.get('semantic_education_matches', [])
            ],
            'semanticExperienceMatches': [
                {'jobExperience': je, 'candidateExperience': ce} 
                for je, ce in match_detail.get('semantic_experience_matches', [])
            ],
            'experienceMatches': [
                word[0] for word in match_detail.get('experience_matching_words', [])[:20]
            ],
            'educationMatches': [
                word[0] for word in match_detail.get('education_matching_words', [])[:20]
            ],
            'interacted': False,
            'applied': False,
            'lastViewed': None,
            # Language information for multilingual support
            'jobLanguage': match_detail.get('job_language', 'en'),
            'candidateLanguage': match_detail.get('candidate_language', 'en'),
            'originalJobText': match_detail.get('original_job_text', ''),
            'originalExperienceText': match_detail.get('original_experience_text', ''),
            'originalJobSkills': match_detail.get('original_job_skills', []),
            'originalCandidateSkills': match_detail.get('original_candidate_skills', [])
        }
        
        recommendations.append(recommendation)
    
    # Only store if we have recommendations
    if recommendations:
        # Store in database with 24-hour expiration
        recommendations_collection.update_one(
            {'userId': candidate_id},
            {
                '$set': {
                    'timestamp': datetime.now(),
                    'recommendations': recommendations,
                    'algorithm': {
                        'version': '1.0',
                        'weights': {'skills': 1/3, 'experience': 1/3, 'education': 1/3}
                    }
                }
            },
            upsert=True
        )
        stored_count += 1

logging.info(f"Stored recommendations for {stored_count} candidates in MongoDB")
logging.info("MongoDB storage completed successfully")

# Also create indexes for faster querying
recommendations_collection.create_index("userId")
recommendations_collection.create_index([("timestamp", 1)], expireAfterSeconds=86400)  # 24 hour TTL

# ====== NEW CODE: INTEGRATE WITH JOB ALERTS ======
logging.info("Creating job alerts for all top recommendations...")

# Get the Express backend URL from environment variables or use default

# Get alerts collection or create it if it doesn't exist
if 'jobAlerts' not in db.list_collection_names():
    db.create_collection('jobAlerts')
job_alerts_collection = db['jobAlerts']

# Count of alerts created/updated
alert_count = 0

# Create alerts for all candidates with their top 5 recommended jobs
for candidate_idx, candidate in enumerate(candidates.iterrows()):
    candidate_id = str(candidate[1]['CandidateID'])
    
    # Get top 5 job recommendations for this candidate
    job_indices = np.argsort(-final_similarity[:, candidate_idx])[:5]  # Get only top 5 recommendations
    
    for job_idx in job_indices:
        job = jobposts.iloc[job_idx]
        job_id = str(job['JobID'])
        similarity_score = float(final_similarity[job_idx, candidate_idx])
        
        try:
            # First check if alert already exists in MongoDB
            existing_alert = job_alerts_collection.find_one({
                'userId': candidate_id,
                'jobId': job_id
            })
            
            if existing_alert:
                # Update the existing alert with new relevance score
                
                logging.info(f"Not gonna update job alert for user")
            else:
                # Create a new alert through the Express backend API
               # try:
                    # Prepare job alert data
                    alert_data = {
                        'userId': candidate_id,
                        'jobId': job_id,
                        'criteria': f'Recommended: {job["JobTitle"]}',
                        'notifyVia': ['web'],
                        'relevanceScore': similarity_score
                    }
                    
                    # Call the Express backend API to create the alert
                 #   response = requests.post(
                  #      f"{EXPRESS_BACKEND_URL}/api/job-alerts",
                   #     json=alert_data,
                   #     timeout=5
                   # )
                    
                    #if response.status_code == 201:
                     #   logging.info(f"Created new job alert for user {candidate_id} and job {job_id} with score {similarity_score:.2f}")
                      #  alert_count += 1
                   # else:
                    #    logging.warning(f"Failed to create job alert: {response.text}")
                #except Exception as e:
                    # If API call fails, create directly in MongoDB
                    job_alerts_collection.insert_one({
                        'userId': candidate_id, 
                        'jobId': job_id,
                        'criteria': f'Recommended: {job["JobTitle"]}',
                        'notifyVia': ['web'],
                        'relevanceScore': similarity_score,
                        'isRead': False,
                        'isActive': True,
                        'createdAt': datetime.now(),
                        'updatedAt': datetime.now()
                    })
                    logging.info(f"Created job alert in MongoDB for user {candidate_id} and job {job_id} with score {similarity_score:.2f}")
                    alert_count += 1
        except Exception as e:
            logging.error(f"Error creating job alert: {e}")

logging.info(f"Created/updated {alert_count} job alerts for top recommendations")

# Create notification for each newly created alert
try:
    # Get notifications collection
    if 'notifications' not in db.list_collection_names():
        db.create_collection('notifications')
    notifications_collection = db['notifications']
    
    # Create notifications for new alerts
    new_alert_count = 0
    new_alerts = job_alerts_collection.find({'isRead': False})
    
    for alert in new_alerts:
        # Get job title
        try:
            job = jobposts_collection.find_one({'_id': alert['jobId']})
            if job:
                job_title = job.get('title', 'Unknown Job')
                relevance_score = alert.get('relevanceScore', 0)
                
                # Create notification
                notifications_collection.insert_one({
                    'text': f'New job recommendation: {job_title} ({int(relevance_score * 100)}% match)',
                    'type': 'RECOMMENDATION',
                    'link': f'/job-single-v3/{alert["jobId"]}',
                    'createdAt': datetime.now(),
                    'updatedAt': datetime.now()
                })
                new_alert_count += 1
        except Exception as e:
            logging.error(f"Error creating notification for alert: {e}")
    
    logging.info(f"Created {new_alert_count} notifications for new job alerts")
except Exception as e:
    logging.error(f"Error processing notifications: {e}")

logging.info("Job alert integration completed")

# ====== END NEW CODE: INTEGRATE WITH JOB ALERTS ======
logging.info("All data processing and storage completed successfully")
print("All data processing and storage completed successfully")
