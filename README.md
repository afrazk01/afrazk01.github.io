# Portfolio Website

A modern, professional portfolio website showcasing AI/ML engineering projects and expertise, optimized for Upwork clients and job applications.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Lightweight and optimized for quick loading
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Easy to Host**: Static site that can be deployed anywhere

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive features
├── afraz_khan.pdf      # Resume
├── 1734807886656.jpeg  # Profile picture
├── Images/             # Project images
│   ├── semantic_search.png
│   ├── Project-Flow.png
│   ├── Gemini_Generated_Image_339f4t339f4t339f.png
│   ├── Gemini_Generated_Image_utbjcoutbjcoutbj.png
│   └── ChatGPT Image Nov 22, 2025, 09_05_31 PM.png
└── README.md           # This file
```

## Local Development

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
3. That's it! No build process or dependencies needed.

## Hosting Options

### Option 1: GitHub Pages (Free & Easy)

1. **Create a GitHub repository** (if you haven't already)
2. **Push your files** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at: `https://yourusername.github.io/your-repo-name/`

### Option 2: Netlify (Free & Recommended)

1. **Sign up** at [netlify.com](https://www.netlify.com) (free account)
2. **Drag and drop** your entire portfolio folder onto Netlify's dashboard
3. **Your site is live!** Netlify will give you a URL like `your-site.netlify.app`
4. **Optional**: Connect to GitHub for automatic deployments

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy
netlify deploy --prod
```

### Option 3: Vercel (Free)

1. **Sign up** at [vercel.com](https://www.vercel.com)
2. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
3. **Deploy**:
   ```bash
   vercel
   ```
4. Follow the prompts and your site will be live!

### Option 4: Cloudflare Pages (Free)

1. **Sign up** at [cloudflare.com](https://www.cloudflare.com)
2. Go to **Pages** in the dashboard
3. **Create a project** and connect your GitHub repository
4. **Deploy** - Cloudflare will automatically build and deploy your site

### Option 5: Traditional Web Hosting

Upload all files via FTP/SFTP to your web hosting provider:
- Upload all files to the `public_html` or `www` directory
- Ensure `index.html` is in the root directory
- Your site will be accessible at your domain

## Customization

### Update Your Information

1. **Profile Picture**: Replace `1734807886656.jpeg` with your own image
2. **Resume**: Replace `afraz_khan.pdf` with your updated resume
3. **Links**: Update social media links in `index.html`:
   - Upwork profile
   - LinkedIn profile
   - GitHub profile

### Change Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;    /* Change this */
    --secondary-color: #8b5cf6;  /* Change this */
    /* ... other colors */
}
```

### Add/Remove Projects

Edit the projects section in `index.html` - each project is in a `.project-card` div.

### Update Skills

Edit the skills section in `index.html` - skills are organized by category.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Compress images before uploading to reduce load times
2. **Use CDN**: Consider using a CDN for faster global delivery
3. **Enable Compression**: Most hosting providers enable gzip compression automatically

## SEO Optimization

The site includes:
- Proper meta tags
- Semantic HTML
- Descriptive alt text for images
- Clean URL structure

## Analytics (Optional)

To track visitors, you can add Google Analytics:

1. Get your Google Analytics tracking ID
2. Add this before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Support

For issues or questions, please check:
- Your hosting provider's documentation
- Browser console for errors
- File paths are correct (case-sensitive on some servers)

## License

This portfolio template is free to use and modify for personal and commercial projects.

---

**Good luck with your portfolio! 🚀**

