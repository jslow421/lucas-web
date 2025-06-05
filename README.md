# Lucas's Portfolio Website

Welcome to your personal portfolio website! This document explains what your website is, how it works, and how to make changes to it.

## What This Is

This is your professional portfolio website that showcases your work, experience, and skills. It's built using modern web technology to ensure it loads fast, looks great on all devices, and ranks well in search engines.

### What Visitors See

When people visit your website, they'll find:
- **Your professional headshot and introduction**
- **Case studies** of your work (currently MRS and Buck Buckley projects)
- **Your skills and experience** section
- **Client testimonials**
- **Contact information** and ways to connect with you
- **A "17 Random Things" section** that adds personality

## How It Works

Your website is built with two main parts:

### 1. The Website (`website` folder)
This contains all the content, design, and functionality that visitors see. It's built using:
- **Next.js** - A modern framework that makes websites fast and reliable
- **React** - Powers the interactive features
- **TailwindCSS** - Handles all the styling and responsive design
- **TypeScript** - Adds reliability and catches errors before they reach visitors

### 2. The Infrastructure (`infra` folder)
This contains the code that deploys your website to Amazon Web Services (AWS), ensuring it's:
- **Fast** - Uses a global content delivery network (CDN)
- **Secure** - Automatically uses HTTPS encryption
- **Reliable** - Hosted on enterprise-grade infrastructure
- **Scalable** - Can handle traffic spikes automatically

## Key Features

### Mobile-Friendly Design
Your website automatically adapts to look perfect on phones, tablets, and computers.

### Smart Navigation
The header intelligently hides when visitors scroll down (for a cleaner reading experience) and reappears when they scroll back up.

### Professional Hosting
Your website is hosted on AWS with CloudFront, the same technology used by major companies for fast, reliable websites worldwide.

### Static Generation
Your website is pre-built into optimized files, making it lightning-fast and search engine friendly.

## Making Changes

### Content Updates
To update text, images, or add new case studies, you'll need someone with web development experience to edit the component files in the `website/components` folder.

### Adding New Pages
New pages (like additional case studies) can be added in the `website/src/app` folder structure.

### Design Changes
Visual updates are handled through the TailwindCSS classes throughout the components.

## Getting Help

Since this is a technical project, you'll want to work with a web developer for:
- Adding new content or pages
- Updating your case studies
- Changing the design or layout
- Deploying updates to the live website

## Technical Details (For Developers)

### Development
```bash
cd website
npm run dev
```

### Building
```bash
npm run build
```

### Deployment
The infrastructure is managed through AWS CDK. The website exports as static files that can be deployed to the S3 bucket and distributed via CloudFront.

---

This website represents a professional, modern portfolio that showcases your work effectively while providing an excellent user experience across all devices.