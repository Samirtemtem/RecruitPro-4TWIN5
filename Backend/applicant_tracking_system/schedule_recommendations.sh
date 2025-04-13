#!/bin/bash

# This script schedules the recommendation engine to run periodically
# It uses crontab to schedule the task

# Get the absolute path of the script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Create a log directory if it doesn't exist
mkdir -p "$SCRIPT_DIR/logs"

# Define the cron job - run every 12 hours
CRON_JOB="0 */12 * * * cd $SCRIPT_DIR && python main.py >> $SCRIPT_DIR/logs/recommendation_update.log 2>&1"

# Check if the cron job already exists
EXISTING_CRON=$(crontab -l 2>/dev/null | grep -F "python main.py")

if [ -z "$EXISTING_CRON" ]; then
    # Add the new cron job
    (crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -
    echo "Cron job scheduled to run every 12 hours"
else
    echo "Cron job already exists"
fi

# Run the recommendation engine immediately
echo "Running recommendation engine now..."
cd "$SCRIPT_DIR" && python main.py

echo "Setup complete. Recommendation engine will update every 12 hours."
echo "Logs will be saved to $SCRIPT_DIR/logs/recommendation_update.log" 