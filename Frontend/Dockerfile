# Production stage only
FROM node:20-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy built app from Jenkins workspace
COPY build ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
