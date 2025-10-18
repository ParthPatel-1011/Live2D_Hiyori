# Project Directory Structure

```
Live2D-Companion/
├── Hiyori/                          # Live2D model directory
│   ├── Hiyori.model3.json           # Model definition file
│   ├── Hiyori.moc3                  # Model data file
│   ├── Hiyori.cdi3.json             # Model display information
│   ├── Hiyori.physics3.json         # Physics simulation data
│   ├── Hiyori.2048/                 # Texture directory
│   │   └── texture_00.png           # Model texture
│   └── motion/                      # Animation files
│       ├── hiyori_m01.motion3.json  # Idle animation 1
│       ├── hiyori_m02.motion3.json  # Idle animation 2
│       ├── hiyori_m03.motion3.json  # Flick animation
│       ├── hiyori_m04.motion3.json  # Flick down animation
│       ├── hiyori_m05.motion3.json  # Idle animation 3
│       ├── hiyori_m06.motion3.json  # Tap animation
│       ├── hiyori_m07.motion3.json  # Tap body animation
│       └── hiyori_m08.motion3.json  # Flick body animation
├── index.html                       # Main application file
├── style.css                        # Application styling
├── server.js                        # Backend server implementation
├── setup.js                         # Project setup script
├── start.js                         # Application start script
├── package.json                     # Node.js project configuration
├── package-lock.json                # Dependency lock file
├── .env.example                     # Environment variables template
├── .gitignore                       # Git ignore file
├── README.md                        # Project overview and setup guide
└── USAGE.md                         # Detailed usage instructions
```

## Key Directories and Files

### Hiyori/
Contains all the Live2D model files for the Hiyori character. This is the default model that will be displayed in the application.

### Core Application Files
- **index.html**: The main application file that contains all the frontend logic for displaying the Live2D model, handling user input, and managing animations.
- **style.css**: All the styling for the application interface.
- **server.js**: The backend server that proxies requests to the ElevenLabs API to protect your API key.

### Configuration Files
- **package.json**: Defines project dependencies and scripts.
- **.env.example**: Template for environment variables (copy to .env and add your API key).

### Documentation
- **README.md**: Quick start guide and project overview.
- **USAGE.md**: Detailed instructions for using and customizing the application.
- **DIRECTORY.md**: This file explaining the project structure.