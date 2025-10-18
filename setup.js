/*
 * Setup script for Live2D AI Companion
 * This script helps users set up the project by installing dependencies
 * and creating necessary configuration files.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Setting up Live2D AI Companion...');

// Check if we're in the correct directory
if (!fs.existsSync(path.join(__dirname, 'package.json'))) {
    console.error('Error: package.json not found. Please run this script from the project root directory.');
    process.exit(1);
}

// Check if Node.js is installed
try {
    const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
    console.log(`Node.js version: ${nodeVersion}`);
} catch (error) {
    console.error('Error: Node.js is not installed or not in PATH.');
    console.log('Please install Node.js from https://nodejs.org/');
    process.exit(1);
}

// Check if npm is installed
try {
    const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
    console.log(`npm version: ${npmVersion}`);
} catch (error) {
    console.error('Error: npm is not installed or not in PATH.');
    process.exit(1);
}

// Install dependencies
console.log('Installing dependencies...');
try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('Dependencies installed successfully.');
} catch (error) {
    console.error('Error installing dependencies:', error.message);
    process.exit(1);
}

// Check if .env file exists, if not create it from .env.example
const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, '.env.example');

if (!fs.existsSync(envPath)) {
    if (fs.existsSync(envExamplePath)) {
        fs.copyFileSync(envExamplePath, envPath);
        console.log('.env file created from .env.example');
        console.log('Please edit .env file and add your ElevenLabs API key');
    } else {
        // Create a basic .env file
        const envContent = `# ElevenLabs API Configuration
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM

# Server Configuration
PORT=3000
`;
        fs.writeFileSync(envPath, envContent);
        console.log('.env file created');
        console.log('Please edit .env file and add your ElevenLabs API key');
    }
}

console.log('\nSetup completed successfully!');
console.log('\nNext steps:');
console.log('1. Edit the .env file and add your ElevenLabs API key');
console.log('2. Run "npm start" to start the server');
console.log('3. Open http://localhost:3000 in your browser');