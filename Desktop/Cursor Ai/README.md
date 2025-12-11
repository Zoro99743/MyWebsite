# Game Developer Portfolio Website

A modern, animated personal portfolio website showcasing game development projects. Built with Next.js, TypeScript, MongoDB Atlas, and Framer Motion for smooth animations.

## 🚀 Features

- **Modern Design**: Elegant UI with smooth animations and transitions
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Project Showcase**: Animated project cards with filtering and categorization
- **Contact Form**: Functional contact form with email integration
- **Personal Details**: Prominent about section with skills and services
- **Performance Optimized**: Smooth 60fps animations with optimized rendering
- **MongoDB Integration**: Cloud-based database for projects and contact messages

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Backend**: Next.js API Routes
- **Database**: MongoDB Atlas
- **Email**: Nodemailer

## 📋 Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (free tier available)
- Gmail account (for email functionality)

## 🔧 Setup Instructions

### 1. Clone and Install Dependencies

```bash
npm install
```

### 2. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new cluster (free tier M0 is sufficient)
4. Click "Connect" → "Connect your application"
5. Copy the connection string (it will look like: `mongodb+srv://username:password@cluster.mongodb.net/`)
6. Replace `<username>` and `<password>` with your database user credentials
7. Add `/portfolio` at the end: `mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority`

### 3. Email Configuration (Gmail)

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Generate an app password for "Mail"
5. Copy the generated password (you'll use this as `EMAIL_PASS`)

### 4. Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your environment variables in `.env.local`:
   ```env
   MONGODB_URI=your-mongodb-connection-string
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   CONTACT_EMAIL=bnsanjayxrmhs@gmail.com
   NODE_ENV=development
   ```

### 5. Database Collections Setup

The application will automatically create the following collections when you first use them:
- `projects` - Stores your game development projects
- `contacts` - Stores contact form submissions

### 6. Add Sample Projects (Optional)

You can add projects directly to MongoDB Atlas or use the MongoDB Compass tool. Here's an example project document:

```json
{
  "title": "Epic Adventure Game",
  "description": "A thrilling action-adventure game with stunning graphics",
  "longDescription": "Detailed description of the game...",
  "category": "Unity",
  "technologies": ["Unity", "C#", "Blender"],
  "imageUrl": "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
  "videoUrl": "",
  "githubUrl": "https://github.com/yourusername/project",
  "liveUrl": "https://yourproject.com",
  "featured": true,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

Or use MongoDB Compass/Atlas UI to insert documents into the `projects` collection.

### 7. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   ├── contact/        # Contact form API endpoint
│   │   └── projects/       # Projects API endpoint
│   ├── globals.css         # Global styles and animations
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page
├── components/
│   ├── Navigation.tsx      # Navigation bar with smooth scrolling
│   ├── Hero.tsx            # Hero section with animated intro
│   ├── About.tsx           # Personal details and skills section
│   ├── Projects.tsx        # Projects showcase with filtering
│   └── Contact.tsx         # Contact form component
├── lib/
│   ├── mongodb.ts          # MongoDB connection utility
│   ├── models.ts           # Database models and functions
│   └── email.ts            # Email sending utility
└── package.json
```

## 🎨 Customization

### Update Personal Information

Edit `components/About.tsx` to update:
- Your name and bio
- Skills and technologies
- Services you offer

### Update Contact Email

The contact email is set to `bnsanjayxrmhs@gmail.com` by default. You can change it in:
- `.env.local` file (`CONTACT_EMAIL`)
- `lib/email.ts` (fallback value)

### Customize Colors and Styling

Edit `tailwind.config.js` to customize:
- Color scheme
- Animation timings
- Custom animations

### Add Social Links

Update social links in `components/Contact.tsx`:
```typescript
const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/yourusername',
    color: 'from-gray-700 to-gray-900',
  },
  // Add more links...
];
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `EMAIL_HOST`
   - `EMAIL_PORT`
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `CONTACT_EMAIL`
5. Deploy!

### Deploy to Netlify

1. Push your code to GitHub (the `netlify.toml` file is already configured)
2. Go to [Netlify](https://netlify.com)
3. Import your repository
4. Netlify will automatically detect the `netlify.toml` configuration
5. Add environment variables in Netlify dashboard (Site settings → Environment variables):
   - `MONGODB_URI`
   - `EMAIL_HOST`
   - `EMAIL_PORT`
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `CONTACT_EMAIL`
6. Deploy!

### Important Notes for Deployment

- Make sure to add all environment variables in your hosting platform
- MongoDB Atlas allows connections from anywhere by default (0.0.0.0/0)
- For production, consider restricting MongoDB IP access to your hosting provider's IP ranges
- Gmail app passwords work in production environments

## 🐛 Troubleshooting

### MongoDB Connection Issues

- Verify your connection string is correct
- Check that your IP is whitelisted in MongoDB Atlas (or use 0.0.0.0/0 for development)
- Ensure your database user has read/write permissions

### Email Not Sending

- Verify your Gmail app password is correct
- Check that 2-Step Verification is enabled
- Ensure `EMAIL_USER` and `EMAIL_PASS` are set correctly
- Check server logs for detailed error messages

### Projects Not Showing

- Verify projects are added to MongoDB Atlas `projects` collection
- Check that the database name is `portfolio`
- Ensure the API route `/api/projects` is accessible

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For issues or questions, please contact: bnsanjayxrmhs@gmail.com

---

Built with ❤️ using Next.js and Framer Motion

