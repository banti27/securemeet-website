# SecureMeet Website 🔒

> Official static website for SecureMeet - Secure, encrypted video conferencing platform

![React](https://img.shields.io/badge/React-19.2.0-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38bdf8.svg)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646cff.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🌐 Live Website

**Production**: [https://securemeet.io](https://securemeet.io)

## 🚀 Tech Stack

- **Framework**: React 19.2 + Vite 7.3
- **Styling**: Tailwind CSS 4.1 + Typography Plugin
- **Code Highlighting**: React Syntax Highlighter
- **Deployment**: GitHub Pages
- **Domain**: securemeet.io (Custom domain with SSL)

## 📁 Project Structure

```
securemeet-website/
├── docs/                        # Documentation files
│   ├── CONTRIBUTING.md         # Contribution guidelines
│   ├── DNS_SETUP.md            # DNS configuration guide
│   ├── DEPLOYMENT_COMPLETE.md  # Deployment completion guide
│   ├── QUICK_START.md          # Quick start guide
│   └── LIVE_SITE.md            # Live site access guide
├── public/
│   └── vite.svg                # Public assets
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer with links
│   │   └── CodeBlock.jsx       # Syntax highlighted code blocks
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Tailwind CSS imports
│   └── main.jsx                # React entry point
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite build configuration
└── README.md                   # This file
```

## 📚 Documentation

Comprehensive guides are available in the `docs/` folder:

- **[Quick Start Guide](docs/QUICK_START.md)** - Get up and running quickly
- **[Live Site Access](docs/LIVE_SITE.md)** - Access your live website
- **[DNS Setup Guide](docs/DNS_SETUP.md)** - Configure custom domain DNS
- **[Deployment Guide](docs/DEPLOYMENT_COMPLETE.md)** - Complete deployment instructions
- **[Contributing Guidelines](docs/CONTRIBUTING.md)** - How to contribute to the project

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/banti27/securemeet-website.git
cd securemeet-website

# Checkout development branch
git checkout development

# Install dependencies
npm install
```

### Development Server

```bash
# Start development server (http://localhost:5173)
npm run dev
```

The site will automatically reload when you make changes.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🚢 Deployment

### Deploy to GitHub Pages

```bash
# Build and deploy in one command
npm run deploy
```

This will:
1. Build the production bundle (`npm run build`)
2. Deploy to `gh-pages` branch
3. Update the live site at securemeet.io

### Manual Deployment Steps

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy the dist folder
npx gh-pages -d dist
```

## 🌍 Custom Domain Setup

### DNS Configuration

Configure these DNS records at your domain registrar for **securemeet.io**:

#### A Records (Apex Domain)
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

#### CNAME Record (www subdomain)
```
Type: CNAME
Name: www
Value: banti27.github.io
```

### GitHub Pages Configuration

1. Go to repository **Settings** → **Pages**
2. Set source to `gh-pages` branch
3. Add custom domain: `securemeet.io`
4. Enable **Enforce HTTPS** (automatic SSL via Let's Encrypt)

### Verify DNS Propagation

```bash
# Check DNS records
nslookup securemeet.io

# Check with dig
dig securemeet.io +noall +answer
```

DNS propagation typically takes 15-30 minutes, but can take up to 24 hours.

## 🎨 Customization

### Tailwind Configuration

Edit `tailwind.config.js` to customize colors, fonts, and spacing:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Adding Code Examples

Use the `CodeBlock` component for syntax-highlighted code:

```jsx
import CodeBlock from './components/CodeBlock';

<CodeBlock 
  code={yourCode} 
  language="javascript" 
  showLineNumbers={true} 
/>
```

Supported languages: JavaScript, TypeScript, Python, Java, Go, Rust, and more.

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and deploy to GitHub Pages |

## 🔧 Configuration Files

### `package.json`
- Dependencies and npm scripts
- Homepage URL for GitHub Pages

### `vite.config.js`
- Build configuration
- Base path for deployment

### `tailwind.config.js`
- Tailwind CSS customization
- Content paths for purging

### `public/CNAME`
- Custom domain configuration
- Required for GitHub Pages custom domain

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Issues

```bash
# Check gh-pages branch
git branch -a

# Force redeploy
npm run deploy -- --force
```

### DNS Not Resolving

- Wait 24 hours for full propagation
- Verify DNS records at registrar
- Clear browser cache and DNS cache

### HTTPS Not Working

- Ensure DNS is fully propagated
- Wait for GitHub to provision SSL (can take an hour)
- Verify CNAME file exists in `public/` folder

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

- **Website**: [securemeet.io](https://securemeet.io)
- **Issues**: [GitHub Issues](https://github.com/banti27/securemeet-website/issues)
- **Documentation**: [Docs](https://securemeet.io/docs)

## 🌟 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Syntax highlighting for code examples
- ✅ Tailwind CSS for rapid styling
- ✅ SEO optimized
- ✅ Fast build times with Vite
- ✅ Custom domain with SSL
- ✅ One-command deployment

---

Made with ❤️ by the SecureMeet Team
