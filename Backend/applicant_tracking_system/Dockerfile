FROM python:3.9-slim

WORKDIR /app

# Copy requirements first for better caching
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application
COPY . .

# Expose the port that Flask will run on
EXPOSE 5000

# Set environment variables
ENV FLASK_APP=app.py
ENV FLASK_ENV=production
ENV MONGODB_URI=mongodb+srv://root:root@cluster0.wa1te.mongodb.net/recruitpro

# Command to run the application
CMD ["python", "app.py"] 