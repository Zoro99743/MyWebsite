# Quick Setup Guide

## Step-by-Step Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up MongoDB Atlas

1. **Create Account**: Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. **Create Cluster**: Choose the free M0 tier
3. **Create Database User**:
   - Go to "Database Access"
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create username and password (save these!)
   - Set privileges to "Atlas admin" or "Read and write to any database"
4. **Whitelist IP Address**:
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0) for development
   - For production, add your hosting provider's IP ranges
5. **Get Connection String**:
   - Go to "Database" → "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Add `/portfolio` before the `?` in the connection string

Example connection string:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

### 3. Set Up Gmail for Contact Form

1. **Enable 2-Step Verification**:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification if not already enabled

2. **Generate App Password**:
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Other (Custom name)"
   - Enter "Portfolio Contact Form"
   - Click "Generate"
   - Copy the 16-character password (you'll use this as EMAIL_PASS)

### 4. Create Environment File

Create a file named `.env.local` in the root directory:

```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
CONTACT_EMAIL=bnsanjayxrmhs@gmail.com
NODE_ENV=development
```

**Important**: Replace all placeholder values with your actual credentials!

### 5. Add Sample Projects (Optional)

Run the seed script to add sample projects:

```bash
npm run seed
```

Or manually add projects through MongoDB Atlas:
1. Go to your cluster → "Browse Collections"
2. Create database `portfolio` if it doesn't exist
3. Create collection `projects`
4. Click "Insert Document" and add project data

Example project document:
```json
{
  "title": "My Game Project",
  "description": "A brief description",
  "category": "Unity",
  "technologies": ["Unity", "C#"],
  "imageUrl": "https://example.com/image.jpg",
  "githubUrl": "https://github.com/username/project",
  "liveUrl": "https://project.com",
  "featured": true,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

### 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Troubleshooting

### MongoDB Connection Issues
- Verify connection string format is correct
- Check that password doesn't contain special characters that need URL encoding
- Ensure IP address is whitelisted (0.0.0.0/0 for development)
- Verify database user has correct permissions

### Email Not Sending
- Double-check app password (not your regular Gmail password)
- Ensure 2-Step Verification is enabled
- Verify EMAIL_USER matches the Gmail account
- Check server console for error messages

### Projects Not Showing
- Verify projects exist in MongoDB `portfolio` database → `projects` collection
- Check browser console for API errors
- Ensure MONGODB_URI is correct

### Build Errors
- Run `npm install` again
- Delete `node_modules` and `.next` folders, then reinstall
- Check Node.js version (should be 18+)

## Next Steps

1. Customize personal information in `components/About.tsx`
2. Update social links in `components/Contact.tsx`
3. Add your actual projects to MongoDB
4. Customize colors in `tailwind.config.js`
5. Deploy to Vercel or Netlify (see README.md)

## Deployment Checklist

Before deploying:
- [ ] All environment variables are set in hosting platform
- [ ] MongoDB IP whitelist includes hosting provider IPs
- [ ] Test contact form works
- [ ] Projects are added to database
- [ ] Social links are updated
- [ ] Personal information is customized

