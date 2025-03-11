# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application files
COPY . .

# Build the React application for production
RUN npm run build

# Install a simple HTTP server to serve the production build
RUN npm install -g serve

# Expose the port your app runs on (adjust if needed)
EXPOSE 3000

# Command to run the app using the 'serve' HTTP server
CMD ["serve", "-s", "build", "-l", "3000"]
