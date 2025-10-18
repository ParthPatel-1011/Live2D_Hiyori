# Live2D AI Companion Usage Guide

## Quick Start

1. Run the setup script:
   ```bash
   npm run setup
   ```

2. Edit the `.env` file and add your ElevenLabs API key:
   ```
   ELEVENLABS_API_KEY=your_actual_api_key_here
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open `http://localhost:3000` in your browser

## Interacting with the Companion

- Type messages in the input field at the bottom of the screen
- Click "Send" or press Enter to send your message
- The AI companion will respond with lip-synced speech
- The model will show emotions based on your messages:
  - Saying "hello", "hi", or "hey" will trigger a waving gesture
  - Expressing thanks will show a happy expression
  - Negative words may trigger angry expressions
  - Sad words will show appropriate expressions

## Features

### Emotion Detection
The companion analyzes your text to determine emotions:
- **Greeting**: Words like "hello", "hi", "hey"
- **Happy**: Words like "thank you", "thanks", "appreciate"
- **Angry**: Words like "angry", "mad", "hate", "stupid"
- **Sad**: Words like "sad", "cry", "upset"
- **Neutral**: Default for other text

### Animations
- The model continuously moves with breathing and subtle expressions
- Eyes track cursor movement and move naturally when idle
- Facial expressions change based on detected emotions
- Hand gestures (waving) for greetings
- Blinking and head movements for lifelike appearance

### Lip Sync
- Speech is generated using ElevenLabs Text-to-Speech
- The model's mouth moves in sync with the generated audio
- Audio is streamed directly from ElevenLabs for quality

## Customization

### Changing the Voice
1. Visit [ElevenLabs Voice Lab](https://elevenlabs.io/voice-lab)
2. Select or create a voice
3. Copy the voice ID
4. Update the `ELEVENLABS_VOICE_ID` in your `.env` file

### Adjusting Emotion Detection
The emotion detection is in the `detectEmotion` function in `index.html`. You can modify the keywords or add new emotions.

### Modifying Animations
The animation system is in `index.html`:
- `emotionMap` controls which motions play for each emotion
- `setFacialExpression` controls facial parameter changes
- `enhanceEyeTracking` controls eye movement behavior
- `startIdleAnimations` controls continuous movements

## Troubleshooting

### Model Not Loading
- Check browser console for CORS errors
- Ensure you have a stable internet connection
- Verify the model files in the Hiyori folder are intact

### Speech Not Playing
- Check that your ElevenLabs API key is valid
- Verify you haven't exceeded your API quota
- Check browser console for error messages

### Lip-Sync Not Working
- Ensure the model has the required mouth parameters (ParamMouthOpenY)
- Check that you're using a version of pixi-live2d-display that supports the speak() method

### API Key Errors
- Verify your ElevenLabs account has credits
- Check that your API key is correctly entered in the .env file
- Ensure the server is running with proper environment variables

## Development

### Running in Development Mode
```bash
npm run dev
```
This will start the server with nodemon for automatic restarts on file changes.

### Project Structure
```
Live2D-Companion/
├── Hiyori/                 # Live2D model files
├── index.html              # Main application file
├── style.css               # Styling
├── server.js               # Backend server
├── setup.js                # Setup script
├── start.js                # Start script
├── package.json            # Project dependencies
└── .env.example            # Environment variables template
```

## Security Best Practices

1. Never commit your `.env` file to version control
2. Use environment variables for all sensitive configuration
3. Implement rate limiting on your backend endpoints
4. Use HTTPS in production
5. Regularly rotate your API keys