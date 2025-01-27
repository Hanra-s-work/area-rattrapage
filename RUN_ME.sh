#!/bin/bash

# This script is used to check if the required tools are installed
function check_installed {
    echo "Checking: $@"
    $@ --help 1>/dev/null 2>/dev/null
    STATUS=$?
    if [ $STATUS -ne 0 ]; then
        echo "Error: $@ is not installed, please install it"
        exit $STATUS
    fi
    echo "$@ is installed"
    return $STATUS
}

echo "(c) Created by Henry Letellier"

# Check if the required tools are installed
echo "Checking for required tools"
check_installed docker
check_installed docker compose

# Create the build folder if not present
DEST_FOLDER=build
if [ ! -d $DEST_FOLDER ]; then
    echo "Creating the $DEST_FOLDER folder"
    mkdir $DEST_FOLDER
fi

# Stop any previous instances of the docker compose
echo "Stopping docker compose"
docker-compose down
STATUS=$?
if [ $STATUS -ne 0 ]; then
    echo "Error: stop failed"
    exit $STATUS
fi

# Star the instance of the docker compose
echo "Starting the docker compose instance"
docker-compose up --build
STATUS=$?
if [ $STATUS -ne 0 ]; then
    echo "Error: start failed"
    exit $STATUS
fi
