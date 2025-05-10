FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json for npm install
COPY package*.json ./
RUN npm install --force

# Copy all files into the container
COPY . .

# Build the project
RUN npm run build

# Expose port 5000
EXPOSE 5000

# Command to start the app (ensure this points to dist/app.js)
CMD ["node", "dist/app.js"]
