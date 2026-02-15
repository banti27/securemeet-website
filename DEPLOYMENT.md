# Deployment Guide for SecureMeet Website

This guide covers deploying the SecureMeet website to GitHub Pages with custom domain support.

## Quick Start

```bash
# Build and deploy in one command
npm run deploy
```

That's it! Your site will be live at https://securemeet.io

## Prerequisites

- [x] Node.js 18+ installed
- [x] Git configured with GitHub access
- [x] Repository pushed to GitHub
- [x] DNS configured (see [DNS_SETUP.md](./DNS_SETUP.md))

## Deployment Methods

### Method 1: Automated Deployment (Recommended)

Use the npm script for automated deployment:

```bash
# From project root
npm run deploy
```

This command:
1. Runs `npm run build` to create production bundle
2. Deploys `dist/` folder to `gh-pages` branch
3. Pushes to GitHub
4. Site updates automatically (takes 1-2 minutes)

### Method 2: Manual Deployment

If you prefer manual control:

```bash
# Step 1: Build the project
npm run build

# Step 2: Deploy using gh-pages
npx gh-pages -d dist

# Optional: Deploy with custom commit message
npx gh-pages -d dist -m "Deploy: your custom message"
```

### Method 3: Force Deployment

If deployment seems stuck or you need to override:

```bash
# Force push to gh-pages branch
npm run deploy -- --force

# Or manually
npx gh-pages -d dist --force
```

## GitHub Pages Configuration

### Initial Setup

1. **Push code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin development
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Click Save

3. **Add Custom Domain**:
   - Enter `securemeet.io` in Custom domain field
   - Click Save
   - Wait for DNS check

4. **Enable HTTPS**:
   - Check "Enforce HTTPS"
   - Wait for SSL certificate provisioning

### Verify Deployment

Check deployment status:
- https://github.com/banti27/securemeet-website/deployments
- Look for "github-pages" environment
- Green checkmark = successful deployment

## Build Configuration

### package.json

```json
{
  "homepage": "https://securemeet.io",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### vite.config.js

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for custom domain
})
```

### CNAME File

Located at `public/CNAME`:
```
securemeet.io
```

This file is automatically copied to build output.

## Deployment Workflow

### Development Workflow

```bash
# 1. Work on development branch
git checkout development

# 2. Make changes
# ... edit files ...

# 3. Test locally
npm run dev

# 4. Build and test production build
npm run build
npm run preview

# 5. Commit changes
git add .
git commit -m "Add new feature"
git push origin development

# 6. Deploy to production
npm run deploy
```

### Production Deployment Checklist

- [ ] All changes committed
- [ ] Tests passing (if applicable)
- [ ] Build succeeds locally: `npm run build`
- [ ] Preview looks good: `npm run preview`
- [ ] Deploy: `npm run deploy`
- [ ] Verify live site: https://securemeet.io
- [ ] Check console for errors
- [ ] Test on mobile devices

## Continuous Deployment (Optional)

### GitHub Actions Setup

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Benefits:
- Automatic deployment on every push to main
- No manual `npm run deploy` needed
- Consistent build environment

## Troubleshooting

### Deployment Fails

```bash
# Clear gh-pages cache
rm -rf node_modules/.cache/gh-pages

# Try deploying again
npm run deploy
```

### Changes Not Showing

1. **Wait 1-2 minutes** for GitHub Pages to update
2. **Hard refresh browser**: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
3. **Clear browser cache**
4. **Check deployment status** on GitHub

### 404 Errors After Deployment

**Problem**: Site shows 404 error

**Solutions**:
1. Verify `CNAME` file in `public/` folder
2. Check GitHub Pages source branch is `gh-pages`
3. Rebuild and redeploy: `npm run deploy -- --force`

### Build Errors

```bash
# Clear everything and start fresh
rm -rf node_modules dist package-lock.json
npm install
npm run build
npm run deploy
```

### Permission Denied Errors

```bash
# Ensure you have write access to repository
git remote -v

# Re-authenticate with GitHub
gh auth login

# Or update remote URL with token
git remote set-url origin https://YOUR_TOKEN@github.com/banti27/securemeet-website.git
```

## Performance Optimization

### Build Optimization

The Vite build automatically:
- ✅ Minifies JavaScript and CSS
- ✅ Optimizes images
- ✅ Tree-shakes unused code
- ✅ Code splits for better caching

### Analyze Bundle Size

```bash
# Install analyzer
npm install --save-dev rollup-plugin-visualizer

# Update vite.config.js
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [react(), visualizer()],
});

# Build and view report
npm run build
open stats.html
```

## Deployment Environments

### Staging Environment (Optional)

Create a staging branch:

```bash
# Create staging branch
git checkout -b staging

# Deploy to different domain
# Update vite.config.js base path if needed

# Deploy staging
npm run deploy
```

### Production Environment

Main deployment to `securemeet.io`:

```bash
git checkout development
npm run deploy
```

## Rollback Strategy

### Rollback to Previous Version

```bash
# View previous commits on gh-pages
git checkout gh-pages
git log

# Rollback to specific commit
git reset --hard <commit-hash>
git push origin gh-pages --force
```

### Rollback Using GitHub

1. Go to repository Actions/Deployments
2. Find previous successful deployment
3. Click "Redeploy" or "Rollback"

## Monitoring

### Check Build Status

```bash
# View recent gh-pages commits
git log gh-pages --oneline -5

# View deployment history
gh api repos/banti27/securemeet-website/pages/builds
```

### Site Health Checks

- **Uptime**: Use https://uptimerobot.com/
- **SSL**: https://www.ssllabs.com/ssltest/
- **Performance**: https://pagespeed.web.dev/

## Security

### Branch Protection

Protect main branches:
1. Go to Settings → Branches
2. Add rule for `main` and `development`
3. Enable:
   - Require pull request reviews
   - Require status checks
   - Include administrators

### Secrets Management

Never commit:
- API keys
- Tokens
- Passwords
- Private keys

Use environment variables and GitHub Secrets.

## Support

### Deployment Issues

- Check: https://www.githubstatus.com/
- Docs: https://docs.github.com/pages
- Issues: https://github.com/banti27/securemeet-website/issues

### Need Help?

1. Check troubleshooting section above
2. Review GitHub Pages documentation
3. Open issue in repository
4. Contact repository maintainers

---

Happy Deploying! 🚀
