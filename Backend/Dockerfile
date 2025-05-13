FROM node:20-alpine

WORKDIR /app

# Install production dependencies only
COPY package*.json ./
RUN npm install --only=production --force

# Copy prebuilt dist from Jenkins
COPY dist ./dist

# Optionally copy other required files like configs
COPY .env . 
# if needed

EXPOSE 5000

CMD ["node", "dist/app.js"]
