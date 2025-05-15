# Static Deployment Instructions

Since we couldn't push the GitHub Actions workflow file due to token permissions, here's how to deploy your portfolio website manually:

## Option 1: Deploy using GitHub Pages (Static)

1. Go to your repository on GitHub: https://github.com/Rakshith-Rai/rakshithrai-portfolio
2. Click on "Settings"
3. Scroll down to the "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "main" and "/docs" (we'll create this folder)
6. Click "Save"

Now, let's create the docs folder with the built files:

1. Create a "docs" folder in your repository
2. Copy all files from the "dist" folder to the "docs" folder
3. Push the changes to GitHub

## Option 2: Deploy using Netlify or Vercel

### Netlify

1. Go to https://app.netlify.com/
2. Sign up or log in (you can use your GitHub account)
3. Click "New site from Git"
4. Select GitHub
5. Select your repository (rakshithrai-portfolio)
6. Set the build command to: `npm run build`
7. Set the publish directory to: `dist`
8. Click "Deploy site"
9. Once deployed, go to "Domain settings" to set up your custom domain (rakshithrai.com)

### Vercel

1. Go to https://vercel.com/
2. Sign up or log in (you can use your GitHub account)
3. Click "New Project"
4. Import your repository (rakshithrai-portfolio)
5. Set the framework preset to "Vite"
6. Click "Deploy"
7. Once deployed, go to "Settings" > "Domains" to set up your custom domain (rakshithrai.com)

## Option 3: Manual Deployment

You can also deploy the website manually using the built files:

1. Extract the contents of portfolio-dist.zip
2. Upload the files to your web hosting provider
3. Configure your domain (rakshithrai.com) to point to your hosting provider
