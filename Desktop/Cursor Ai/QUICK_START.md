# 🚀 Quick Start - Launch Your Portfolio Website

## Final Steps to Deploy (5 Minutes)

### 1. Commit and Push to GitHub
```bash
git add .
git commit -m "Production-ready game developer portfolio website"
git push origin main
```

### 2. Fix Netlify Build Settings

**IMPORTANT**: You must clear the manual "Dark" command in Netlify UI!

1. Go to: https://app.netlify.com
2. Select your site
3. Click: **Site settings** → **Build & deploy** → **Continuous Deployment**
4. Under **Build settings**, click **Edit settings**
5. **Clear** the Build command field (delete "Dark")
6. **Clear** the Publish directory field
7. Click **Save**

Netlify will now use `netlify.toml` automatically!

### 3. Add Environment Variables

Go to: **Site settings** → **Environment variables** → **Add variable**

Add these 6 variables:

| Variable Name | Value |
|--------------|-------|
| `MONGODB_URI` | Your MongoDB connection string |
| `EMAIL_HOST` | `smtp.gmail.com` |
| `EMAIL_PORT` | `587` |
| `EMAIL_USER` | Your Gmail address |
| `EMAIL_PASS` | Your Gmail App Password |
| `CONTACT_EMAIL` | `bnsanjayxrmhs@gmail.com` |

### 4. Deploy

1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Deploy site**
3. Wait for build to complete (2-3 minutes)

### 5. Verify

✅ Check your live site: `https://your-site-name.netlify.app`
✅ Test contact form
✅ Verify projects load (if you added any)

## 🎉 You're Live!

Your professional portfolio website is now deployed and ready to showcase your game development projects!

---

**Need Help?** Check `DEPLOYMENT_CHECKLIST.md` for detailed troubleshooting.

