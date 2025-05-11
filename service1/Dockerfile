# Use official Python image
FROM python:3.10-slim

# Set work directory
WORKDIR /app

# Copy app code
COPY main.py .

# Install dependencies
RUN pip install requests

# Create the log directory if not mounted
RUN mkdir -p /logs

# Run the script
CMD ["python", "main.py"]

