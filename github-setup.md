# GitHub Repository Setup Guide

Follow these steps to create a GitHub repository and deploy your portfolio website:

## 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name the repository `rakshithrai-portfolio`
4. Add a description: "Modern portfolio website for Rakshith Rai"
5. Make it public
6. Do NOT initialize it with a README, .gitignore, or license
7. Click "Create repository"

## 2. Push Your Code to GitHub

### Option 1: Using GitHub Desktop (Recommended)

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop and log in with your GitHub account
3. Click on "File" > "Add local repository"
4. Browse to the portfolio directory (C:\Users\raksh\OneDrive\Desktop\Rakshith-Rai\portfolio)
5. Click "Add repository"
6. In the "Repository settings" section, you can create a new repository on GitHub
7. Name it "rakshithrai-portfolio"
8. Make sure it's public
9. Click "Create repository"
10. Click "Publish repository"

### Option 2: Using Git with Personal Access Token

1. Create a Personal Access Token on GitHub:
   - Go to GitHub.com and log in
   - Click on your profile picture in the top right corner
   - Go to Settings
   - Scroll down to Developer settings (at the bottom of the left sidebar)
   - Click on "Personal access tokens" → "Fine-grained tokens"
   - Click on "Generate new token"
   - Give it a name like "Portfolio Deployment"
   - Set an expiration date (e.g., 30 days)
   - Under "Repository access", select "Only select repositories"
   - Click "Add repository" and select or create the "rakshithrai-portfolio" repository
   - Under "Permissions", expand "Repository permissions"
   - Set "Contents" to "Read and write" (this allows pushing code)
   - Set "Pages" to "Read and write" (this allows configuring GitHub Pages)
   - Click "Generate token"
   - Copy the token (you'll only see it once)

2. Use the token to push your code:
   ```
   git remote set-url origin https://Rakshith-Rai:<YOUR_TOKEN>@github.com/Rakshith-Rai/rakshithrai-portfolio.git
   git push -u origin main
   ```

### Option 3: Manual Upload

1. Go to the repository page on GitHub
2. Click on "uploading an existing file"
3. Drag and drop the files from the portfolio directory
4. Commit the changes

## 3. Configure GitHub Pages

1. Go to the repository settings
2. Scroll down to the "Pages" section
3. Under "Source", select "GitHub Actions"
4. The GitHub Actions workflow will automatically build and deploy the website

## 4. Configure Custom Domain

1. In the GitHub Pages section, enter your custom domain: rakshithrai.com
2. Save the changes
3. Update your domain's DNS settings to point to GitHub Pages:
   - Add A records pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a CNAME record for www subdomain pointing to `rakshith-rai.github.io`

## 5. Verify Deployment

1. Wait a few minutes for the GitHub Actions workflow to complete
2. Visit your custom domain (rakshithrai.com) to see your portfolio website

## Troubleshooting

If you encounter any issues:

1. Check the GitHub Actions tab in your repository to see if the workflow is running
2. Check the repository settings to make sure GitHub Pages is configured correctly
3. Check your domain's DNS settings to make sure they're pointing to GitHub Pages
4. If all else fails, you can deploy the website manually using the dist folder
