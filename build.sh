#!/bin/bash

echo "Starting installation process..."

# Check if yarn is installed globally
if ! command -v yarn &> /dev/null; then
    echo "Yarn not found. Installing yarn globally..."
    npm install --global yarn
    if [ $? -ne 0 ]; then
        echo "Failed to install yarn. Please check your npm installation."
        exit 1
    fi
    echo "Yarn installed successfully."
else
    echo "Yarn is already installed."
fi

# Install dependencies in root directory
echo ""
echo "Installing root dependencies..."
yarn install
if [ $? -ne 0 ]; then
    echo "Failed to install root dependencies."
    exit 1
fi

# Install dependencies in server directory
echo ""
echo "Installing server dependencies..."
cd server
if [ $? -ne 0 ]; then
    echo "Failed to navigate to server directory."
    exit 1
fi

yarn install
if [ $? -ne 0 ]; then
    echo "Failed to install server dependencies."
    exit 1
fi

# Build the app
echo ""
echo "Building the app..."
cd ..
yarn build
if [ $? -ne 0 ]; then
    echo "Failed to build the app."
    exit 1
fi

# Return back to root directory and finish
cd ..
echo ""
echo "Build completed successfully!"
