/*
 * Start script for Live2D AI Companion
 * This script starts the server and opens the browser automatically.
 */

const { spawn } = require('child_process');
const open = require('open');

// Start the server
const server = spawn('node', ['server.js'], { stdio: 'inherit' });

server.on('spawn', () => {
    console.log('Server started successfully!');
    console.log('Opening browser...');
    
    // Wait a moment for the server to start, then open the browser
    setTimeout(() => {
        open('http://localhost:3000')
            .then(() => {
                console.log('Browser opened successfully!');
            })
            .catch(err => {
                console.log('Could not open browser automatically. Please open http://localhost:3000 manually.');
            });
    }, 2000);
});

server.on('error', (err) => {
    console.error('Failed to start server:', err);
});

server.on('close', (code) => {
    console.log(`Server process exited with code ${code}`);
});