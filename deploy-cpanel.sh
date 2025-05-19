#!/bin/bash

# Build the Next.js application
echo "Building Next.js application..."
npm run build

# Create the deployment directory if it doesn't exist
mkdir -p deploy

# Copy necessary files to the deployment directory
echo "Copying files to deployment directory..."
cp -r .next deploy/
cp -r public deploy/
cp package.json deploy/
cp server.js deploy/
cp .htaccess deploy/
cp package-lock.json deploy/

# Create a zip file for uploading to cPanel
echo "Creating deployment zip file..."
cd deploy && zip -r ../aliatish-deployment.zip .

# Remove the temporary deployment directory
echo "Cleaning up..."
cd .. && rm -rf deploy

echo "Deployment package created: aliatish-deployment.zip"
echo "Upload this file to your cPanel and extract it to your public_html directory."
echo "Then, SSH into your server and run: cd public_html && npm install --production && npm start"
echo "Or set up a Node.js application in cPanel pointing to server.js" 