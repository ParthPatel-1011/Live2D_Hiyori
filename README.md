# Live2D AI Companion

A web application featuring a conversational AI companion with a Live2D model that responds with lip-synced speech.

## Features

- Female Live2D model (Hiyori) that responds to user messages
- Lip-synced speech using ElevenLabs Text-to-Speech API
- Interactive model with idle animations and touch responses
- Responsive design that works on various screen sizes
- Secure API key handling through backend proxy

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- An ElevenLabs API key

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and add your ElevenLabs API key:
   ```
   ELEVENLABS_API_KEY=your_actual_api_key_here
   ```

### Running the Application

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
Live2D-Companion/
├── Hiyori/                 # Live2D model files
│   ├── Hiyori.model3.json  # Model definition
│   ├── Hiyori.moc3         # Model data
│   ├── Hiyori.cdi3.json    # Display info
│   ├── Hiyori.physics3.json # Physics data
│   ├── Hiyori.2048/        # Texture files
│   └── motion/             # Animation files
├── index.html              # Main application file
├── style.css               # Styling
├── server.js               # Backend server
├── package.json            # Project dependencies
└── .env.example            # Environment variables template
```

## Security

This implementation uses a backend proxy to protect your ElevenLabs API key:
- The API key is stored server-side in the `.env` file
- Client-side code communicates with the backend proxy
- The backend forwards requests to ElevenLabs with the API key

## Customization

### Changing the Voice
1. Visit [ElevenLabs Voice Lab](https://elevenlabs.io/voice-lab)
2. Select or create a voice
3. Copy the voice ID
4. Update the `ELEVENLABS_VOICE_ID` in your `.env` file

### Using a Different Live2D Model
1. Obtain a compatible Live2D model (.model3.json file)
2. Replace the files in the `Hiyori/` directory
3. Update the model path in `index.html` if necessary

## Troubleshooting

### Model Not Loading
- Check browser console for CORS errors
- Ensure you have a stable internet connection
- Verify the model files are accessible

### Speech Not Playing
- Check that your ElevenLabs API key is valid
- Verify you haven't exceeded your API quota
- Check browser console for error messages

### Lip-Sync Not Working
- Ensure the model has the required mouth parameters (ParamMouthOpenY)
- Check browser console for errors