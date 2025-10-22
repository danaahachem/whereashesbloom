# Burnout Support Website

A calming, supportive static website for a psychology campaign about burnout. Built with vanilla HTML, CSS, and JavaScript for optimal performance and accessibility.

## 🌟 Features

- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **Calming Design**: Soft pastels and minimal design to create a supportive atmosphere
- **Interactive Elements**: Smooth animations, tab switching, and scroll effects
- **No Dependencies**: Pure vanilla code with no external frameworks or libraries

## 📁 Project Structure

```
LAS208/
├── index.html          # Home page with hero section and quick facts
├── learn.html          # Comprehensive information about burnout
├── deal.html           # Coping strategies organized by category
├── css/
│   └── style.css       # Main stylesheet with CSS variables and responsive design
├── js/
│   └── main.js         # JavaScript for interactions and animations
├── assets/
│   └── logo.svg        # Placeholder logo
└── README.md           # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: Soft peach (#E8B4A0)
- **Secondary**: Dusty blue (#B8A9C9)
- **Accent**: Sage green (#A8C8A8)
- **Background**: Warm cream (#F5E6D3)
- **Surface**: Off-white (#FAF7F2)

### Typography
- **Font**: Nunito (Google Fonts)
- **Fallback**: system-ui, sans-serif
- **Weight**: 300-700

### Components
- Rounded corners (12-16px)
- Soft shadows
- Gentle hover effects
- Smooth transitions

## 🚀 Getting Started

### Local Development

1. **Clone or download** this repository to your local machine

2. **Open in your preferred method**:
   - **Simple**: Double-click `index.html` to open in your default browser
   - **Local Server** (recommended):
     ```bash
     # Using Python (if installed)
     python -m http.server 8000
     
     # Using Node.js (if installed)
     npx serve .
     
     # Using PHP (if installed)
     php -S localhost:8000
     ```
   - Then visit `http://localhost:8000` in your browser

3. **Start editing**: All content uses clear "TODO:" placeholders for easy replacement

### Content Guidelines

The website includes placeholder content that you can easily replace:

- **Hero sections**: Replace TODO text with your supportive messaging
- **Fact cards**: Add your specific statistics and information
- **Strategy lists**: Fill in your coping strategies for each category
- **Emergency note**: Add appropriate disclaimers and resources

## 📱 Pages Overview

### Home Page (`index.html`)
- Hero section with supportive headline and subtext
- Two main call-to-action buttons
- Three quick fact cards about burnout

### Learn Page (`learn.html`)
- Comprehensive information about burnout
- Sections: Definition, Causes, Symptoms, Effects, Prevention
- "Back to top" button for easy navigation

### Deal Page (`deal.html`)
- Interactive tab system for different strategy categories
- Categories: Mental, Physical, Social, Academic
- Emergency note section with disclaimers

## 🛠 Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --color-primary: #E8B4A0;    /* Main accent color */
  --color-secondary: #B8A9C9;  /* Secondary color */
  --color-background: #F5E6D3; /* Background color */
  /* ... more variables */
}
```

### Content
Replace all "TODO:" text with your actual content. The structure is semantic and ready for your information.

### Logo
Replace `assets/logo.svg` with your own logo file. The current logo is a simple placeholder.

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Create a GitHub repository** and upload your files

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your site will be available** at `https://yourusername.github.io/repository-name`

### Other Hosting Options

- **Netlify**: Drag and drop your project folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: As described above
- **Any static hosting service**: Upload the files as-is

## ♿ Accessibility Features

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Meets WCAG AA standards
- **Focus Indicators**: Clear focus outlines for all interactive elements
- **Reduced Motion**: Respects user's motion preferences
- **Skip Links**: Quick navigation for keyboard users

## 🔧 Technical Details

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with graceful degradation)

### Performance
- No external dependencies
- Optimized CSS and JavaScript
- Lazy loading for images
- Minimal bundle size

### SEO Ready
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags ready for customization
- Fast loading times

## 📝 Content Placeholders

All content uses clear "TODO:" markers for easy identification:

- `TODO: Supportive headline about burnout recovery`
- `TODO: Brief fact about burnout prevalence or impact`
- `TODO: strategies will go here`
- And many more...

## 🤝 Contributing

This is a template project. Feel free to:
- Customize the design and colors
- Add your content and resources
- Improve accessibility features
- Add new pages or sections

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For questions about implementation or customization, please refer to the code comments or create an issue in the repository.

---

**Note**: This website provides general information only and is not a substitute for professional medical advice. Always consult with qualified healthcare providers for medical concerns.