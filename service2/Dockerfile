# Use official Node.js image
FROM node:18-slim

# Set work directory
WORKDIR /app

# Copy app code
COPY index.js .

# Create the log directory if not mounted
RUN mkdir -p /logs

# Run the app
CMD ["node", "index.js"]

