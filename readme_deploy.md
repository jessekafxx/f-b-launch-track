# FunnelBay Launch Track - Netlify Deployment Guide

## 📁 Project Structure

Create this folder structure:

```
funnelbay-launch-track/
├── package.json
├── vite.config.js
├── postcss.config.js
├── tailwind.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx
    └── index.css
```

## 🚀 Deployment Steps

### Option 1: Deploy via Netlify CLI (Recommended)

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Create project folder and add all files**
   - Copy all the files I provided into the appropriate locations

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Build the project**
   ```bash
   npm run build
   ```

5. **Deploy to Netlify**
   ```bash
   netlify deploy --prod
   ```

### Option 2: Deploy via Netlify Dashboard (Easier)

1. **Create a GitHub Repository**
   - Go to github.com and create a new repository
   - Upload all the files to the repository

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

### Option 3: Drag & Drop (Quickest)

1. **Build locally**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy dist folder**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder onto the Netlify dashboard

## 🔗 Embedding in HighLevel

Once deployed, you'll get a URL like: `https://your-site-name.netlify.app`

### Embed in HighLevel:

1. **Go to your HighLevel Funnel/Website**
2. **Add a Custom Code element**
3. **Paste this iframe code:**

```html
<iframe 
  src="https://your-site-name.netlify.app" 
  width="100%" 
  height="900px" 
  frameborder="0"
  style="border: none; min-height: 100vh;"
></iframe>

<style>
  iframe {
    width: 100%;
    min-height: 100vh;
    border: none;
  }
</style>
```

### Make it Responsive:

```html
<div style="position: relative; width: 100%; overflow: hidden; padding-top: 100vh;">
  <iframe 
    src="https://your-site-name.netlify.app" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allowfullscreen
  ></iframe>
</div>
```

## 🎨 Customization

- Edit colors in `src/App.jsx`
- Modify fonts in `src/index.css`
- Adjust content in the component

## 🔧 Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## 📝 Notes

- The app uses Tailwind CSS for styling
- Bricolage Grotesque font is loaded from Google Fonts
- All three pages (Landing, Setup, Journey) are included
- State management handles navigation between pages

## 🆘 Troubleshooting

**Build fails?**
- Make sure all files are in the correct locations
- Run `npm install` first
- Check Node.js version (v16+ recommended)

**Iframe issues in HighLevel?**
- Adjust the height value
- Use the responsive embed code above
- Check if custom code is enabled in your HighLevel plan

## 🌐 Custom Domain

Once deployed, you can add a custom domain in Netlify:
1. Go to Site settings → Domain management
2. Add your custom domain
3. Update DNS records as instructed
4. Update the iframe src in HighLevel
