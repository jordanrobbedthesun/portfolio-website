# FGCU Degree Flowsheet Tool - Deployment Guide

## Overview

This guide walks through deploying the FGCU Degree Flowsheet Tool to production.

## Pre-Deployment Checklist

- [ ] All programs have been added to `samplePrograms.ts`
- [ ] Course data has been verified
- [ ] Prerequisites have been cross-checked with course catalog
- [ ] Total credits match degree requirements
- [ ] Browser testing completed on multiple devices
- [ ] Advisors reviewed for accuracy
- [ ] Acknowledgments are correct
- [ ] Brand colors have been customized (optional)
- [ ] README.md has been updated
- [ ] Documentation is complete

## Building for Production

### Step 1: Prepare the Code

Ensure all your custom programs are in `src/data/samplePrograms.ts`:

```bash
# In your project directory
npm run build
```

This creates an optimized `dist/` folder (about 200KB).

### Step 2: Before You Deploy

Test the build locally:

```bash
npm run preview
```

This lets you test the production build before deploying.

### Step 3: Deployment Options

Choose one of these deployment methods:

---

## Option A: Deploy to FGCU Web Server

### For FGCU IT Department

1. **Transfer Files**
   ```bash
   # On your development machine
   npm run build
   ```

2. **Copy to Server**
   ```bash
   # All contents of the `dist/` folder should be copied to:
   /var/www/html/engineering/flowsheet
   # Or: C:\inetpub\wwwroot\engineering\flowsheet (Windows)
   ```

3. **Test the Deployment**
   - Visit: `https://www.fgcu.edu/engineering/flowsheet`
   - Verify all programs display
   - Test prerequisite highlighting
   - Check on mobile devices

4. **Set Up Redirects** (if needed)
   - Old E-Draw link → new tool
   - Academic catalog → new tool
   - Engineering home page → new tool

---

## Option B: Deploy to GitHub Pages (Free)

### Setup (First Time Only)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FGCU Degree Flowsheet Tool"
   git remote add origin https://github.com/FGCU/degree-flowsheet.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to Repository Settings
   - Navigate to "Pages"
   - Select "Deploy from a branch"
   - Select `main` branch and `/root` folder
   - Click Save

3. **Add Deploy Script** to `package.json`:
   ```json
   {
     "scripts": {
       "build": "vite build",
       "preview": "vite preview",
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

4. **Install Deploy Tool**
   ```bash
   npm install gh-pages --save-dev
   ```

### Deploy Updates
   ```bash
   npm run deploy
   ```
   
   Site updates automatically within 1-2 minutes.

**URL**: `https://fgcu.github.io/degree-flowsheet`

---

## Option C: Deploy to Netlify (Free)

### Setup (First Time Only)

1. **Push to GitHub** (see Option B setup)

2. **Connect Netlify**
   - Visit `https://netlify.com`
   - Click "New site from Git"
   - Select GitHub, choose repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click Deploy

3. **Custom Domain** (Optional)
   - Domain settings → Add custom domain
   - Update DNS records (Netlify provides instructions)

### Deploy Updates
Automatic! Just push to GitHub with `git push`.

**URL**: `https://fgcu-flowsheet.netlify.app` (or your custom domain)

---

## Option D: Deploy to Vercel (Free)

### Setup (First Time Only)

1. **Push to GitHub** (see Option B setup)

2. **Connect Vercel**
   - Visit `https://vercel.com`
   - Click "Import Project"
   - Select your GitHub repository
   - Framework: React
   - Click Deploy

### Deploy Updates
Automatic! Just push to GitHub.

**URL**: `https://fgcu-flowsheet.vercel.app` (or your custom domain)

---

## Option E: Deploy to AWS S3 + CloudFront

### For Enterprise Deployments

1. **Create S3 Bucket**
   ```bash
   aws s3api create-bucket \
     --bucket fgcu-flowsheet \
     --region us-east-1
   ```

2. **Upload Built Files**
   ```bash
   npm run build
   aws s3 sync dist/ s3://fgcu-flowsheet --delete
   ```

3. **Configure CloudFront**
   - Create distribution
   - Origin: S3 bucket
   - Default root object: index.html
   - Wait for deployment (5-10 minutes)

4. **Environment Automation**
   ```bash
   # Create .env.local
   VITE_AWS_BUCKET=fgcu-flowsheet
   VITE_CLOUDFRONT_ID=your-id
   ```

**Cost**: ~$0.50-$2/month for typical traffic

---

## Post-Deployment Verification

After deploying (regardless of method):

### 1. Test All Features
- [ ] Page loads
- [ ] All programs display
- [ ] Program selector works
- [ ] Course cards display
- [ ] Hover highlighting works
- [ ] Tooltips appear
- [ ] Credits display correctly
- [ ] Mobile layout works

### 2. Test Each Program
- [ ] All courses visible
- [ ] Prerequisites highlight correctly
- [ ] Total credits are correct
- [ ] Semesters arrange properly
- [ ] No broken links

### 3. Browser Compatibility
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### 4. Performance Check
- [ ] Pages load in < 3 seconds
- [ ] Smooth interactions
- [ ] No console errors (F12)

### 5. SEO & Discoverability
- [ ] Meta tags set correctly
- [ ] Title shows in browser tab
- [ ] Works in search results (if indexed)

---

## Maintenance & Updates

### Updating Course Data

1. **Edit** `src/data/samplePrograms.ts`
2. **Test locally**: `npm run dev`
3. **Build**: `npm run build`
4. **Deploy**: 
   - S3/FGCU: Upload `dist/` folder
   - GitHub Pages/Netlify/Vercel: Push to `main` branch

### Monitoring After Deployment

- Check for errors (browser console)
- Monitor page load times
- Track using Google Analytics (optional)
- Collect user feedback

---

## Rollback Instructions

If something goes wrong:

### FGCU Web Server
```bash
# Restore from backup
cp /backups/flowsheet-backup/* /var/www/html/engineering/flowsheet/
```

### GitHub Pages
```bash
# Revert to previous commit
git revert HEAD
git push origin main
```

### Netlify/Vercel
- Automatic rollback available in deployment history
- Click "Rollback to previous deployment"

---

## Updating to New Version

When new features are released:

1. **Backup current version**
2. **Download/pull new version**
3. **Merge your custom changes**
4. **Test thoroughly locally**
5. **Deploy to production**
6. **Verify all functions work**

---

## Troubleshooting Deployment Issues

### Issue: Page shows "404 Not Found"
**Solution**:
- Verify correct URL
- Check files uploaded to correct location
- For SPAs (Single Page Apps), ensure `index.html` is the default file

### Issue: Styling looks broken
**Solution**:
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Upload CSS files again
- Check file permissions

### Issue: JavaScript errors in console
**Solution**:
- Check browser console (F12)
- Verify all JavaScript files uploaded
- Check for CORS errors
- Try different browser

### Issue: Mobile layout broken
**Solution**:
- Check viewport meta tag in HTML
- Test with actual mobile device
- Use browser DevTools mobile emulation
- Check for hard-coded widths in CSS

### Issue: Slow loading
**Solution**:
- Enable gzip compression on server
- Use CDN (CloudFront or Netlify CDN)
- Minimize image sizes
- Cache-bust old versions

---

## Performance Optimization

### File Size
- Production build: ~200KB (gzipped: ~50KB)
- Fast load even on slow connections

### Caching Headers
Add to your server configuration:

```
# Cache busting for production
/dist/assets/*.*
  - Max-age: 31536000 (1 year)

/index.html
  - Max-age: 3600 (1 hour)
  - Cache-Control: no-cache
```

### CDN Configuration
Use CloudFront, Netlify, or Vercel to serve globally for faster performance.

---

## Monitoring & Analytics (Optional)

### Enable Google Analytics
1. Create Google Analytics property
2. Add to `src/main.tsx`:
   ```tsx
   import ReactGA from 'react-ga4';
   ReactGA.initialize('GA_MEASUREMENT_ID');
   ```
3. Monitor user behavior

### Error Tracking
Use Sentry or similar service to catch errors:
```tsx
import * as Sentry from "@sentry/react";

Sentry.init({ dsn: "your-dsn" });
```

---

## Maintenance Schedule

### Daily
- Monitor for errors
- Check site accessibility

### Weekly
- Review analytics (if enabled)
- Check for user feedback
- Verify all programs still work

### Monthly
- Back up database (if applicable)
- Review performance metrics
- Plan any updates needed

### Annually
- Update courses for new academic year
- Review and update documentation
- Check browser compatibility
- Update dependencies

---

## Contacts & Support

**For Technical Issues:**
- IT Department
- Web Dev Team

**For Content Updates:**
- Academic Department Heads
- Advising Coordinators
- Curriculum Committee

**For User Feedback:**
- Direct to Academic Advising
- Forward to Department Chair

---

## Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2024 | Initial release |

---

**Questions?** Contact your IT Department or Software Engineering Team.
