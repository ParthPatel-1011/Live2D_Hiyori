# Deployment to GitHub Pages

This document explains how to deploy the Live2D Hiyori companion to GitHub Pages.

## Prerequisites

1. A GitHub account
2. This repository forked or cloned
3. An ElevenLabs API key

## Deployment Steps

### 1. Fork or Clone the Repository

If you haven't already, fork this repository to your GitHub account or clone it locally.

### 2. Configure GitHub Pages

1. Go to your repository settings on GitHub
2. Scroll down to the "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click "Save"

### 3. Wait for Deployment

GitHub will automatically deploy your site. This usually takes a few minutes.

### 4. Access Your Site

Once deployed, your site will be available at:
`https://[your-username].github.io/Live2D_Hiyori/`

## Alternative: Manual Deployment Using GitHub CLI

If you prefer to deploy manually:

1. Install GitHub CLI if you haven't already
2. Authenticate with GitHub CLI:
   ```
   gh auth login
   ```

3. Create a new repository:
   ```
   gh repo create Live2D_Hiyori --public
   ```

4. Push the code:
   ```
   git add .
   git commit -m "Initial commit for GitHub Pages deployment"
   git branch -M main
   git remote add origin https://github.com/[your-username]/Live2D_Hiyori.git
   git push -u origin main
   ```

5. Enable GitHub Pages in repository settings as described above

## Updating Your Deployment

To update your deployed site:

1. Make changes to your local files
2. Commit and push to GitHub:
   ```
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

3. GitHub will automatically redeploy your site

## Troubleshooting

### Site Not Updating
- Ensure you've pushed to the `main` branch
- Check that GitHub Pages is configured to deploy from the correct branch
- Wait a few minutes for deployment to complete

### Live2D Model Not Loading
- Check browser console for CORS errors
- Verify all model files are included in the repository
- Ensure file paths in `index.html` are correct

### Speech Not Working
- Verify your ElevenLabs API key is correct
- Check that you haven't exceeded your API quota
- Look for error messages in the browser console