# Live2D Hiyori - GitHub Version

A web-based AI companion featuring a female Live2D character named Hiyori. This version is optimized for GitHub Pages deployment and calls the ElevenLabs API directly from the browser.

## Features

- Female Live2D model (Hiyori) that responds to user messages
- Lip-synced speech using ElevenLabs Text-to-Speech API
- Interactive model with idle animations and touch responses
- Responsive design that works on various screen sizes
- No backend server required (works directly on GitHub Pages)

## Setup Instructions

### Prerequisites
- An ElevenLabs API key (free tier available)

### Running the Application

1. Fork this repository or download the code
2. Deploy to GitHub Pages:
   - Go to your repository settings
   - Scroll down to "Pages"
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"
3. After deployment, visit your GitHub Pages URL

### Using the Application

1. When you first visit the application, you'll be prompted to enter your ElevenLabs API key
2. The Live2D model (Hiyori) will load
3. Type messages in the input box and click "Send" to hear the AI companion respond with lip-synced speech

## Getting an ElevenLabs API Key

1. Visit [ElevenLabs.io](https://elevenlabs.io/)
2. Sign up for a free account
3. Navigate to your profile settings
4. Copy your API key
5. Enter it in the application when prompted

## Security Note

This version calls the ElevenLabs API directly from the browser. This means:
- Your API key will be stored in browser localStorage
- Anyone with your API key could potentially use your ElevenLabs quota
- For production use, consider implementing a backend proxy to protect your API key

## Customization

### Changing the Voice
1. Visit [ElevenLabs Voice Lab](https://elevenlabs.io/voice-lab)
2. Select or create a voice
3. Copy the voice ID
4. Modify the `DEFAULT_VOICE_ID` variable in `index.html`

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