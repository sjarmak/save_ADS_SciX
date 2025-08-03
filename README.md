# ADS Funding Support Landing Page

A polished landing page to raise awareness about the funding cuts facing NASA's Astrophysics Data System (ADS) and Science Explorer (SciX).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
save_ads/
├── index.html              # Main HTML file
├── src/
│   ├── styles/
│   │   └── main.scss       # Main stylesheet with ADS branding
│   ├── assets/
│   │   └── logo.svg        # ADS logo
│   └── main.js             # JavaScript functionality
├── dist/                   # Production build output
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md              # This file
```

## 🎨 Design Features

- **ADS Brand Matching**: Styled to match ui.adsabs.harvard.edu branding
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels
- **Performance**: Optimized assets with lazy loading and minimal JavaScript

## 📄 Page Sections

### Navigation
- Fixed header with ADS branding
- Smooth scroll navigation to page sections
- Mobile-responsive menu

### Hero Section
- Clear messaging about funding crisis
- Call-to-action buttons for testimonials and contacting Congress
- Visual appeal with cosmic theming

### Impact Section
- Key statistics showcasing ADS importance
- Grid layout with animated cards
- Compelling data points (97% citation rate, 47M users, etc.)

### Products Showcase
- Interactive tabbed interface
- Detailed information about ADS/SciX infrastructure
- Features: entity recognition, NLP queries, embeddings, summarization

### Support Section
- Two-column layout for individuals and institutions
- Clear action items for different user types
- Direct links to testimonial collection and contact

### FAQ Section
- Accordion-style expandable questions
- Common concerns about funding cuts
- Timeline and alternative funding information

### Footer
- ADS branding and links
- Contact information and legal links

## 🛠 Technology Stack

- **Build Tool**: Vite
- **Styling**: SCSS with CSS custom properties
- **JavaScript**: Vanilla ES6+ (no framework dependencies)
- **Fonts**: Google Fonts (Roboto)
- **Icons**: Material Icons Outlined

## 🚀 Deployment

The site is designed to be deployed to `ads.needsyour.support`. The `dist/` folder contains all static assets needed for deployment.

### Deployment Options:
- **GitHub Pages**: Upload `dist/` contents
- **AWS S3 + CloudFront**: Static website hosting
- **Netlify/Vercel**: Drag and drop deployment

## 📧 Contact Integration

The site includes several contact methods:
- Testimonial form placeholder (ready for Google Form integration)
- Direct email links with pre-filled subjects
- Congressional contact guidance

## 🔧 Customization

### Colors
Brand colors are defined in CSS custom properties in `src/styles/main.scss`:
- `--color-navy`: #0C2B46 (primary brand color)
- `--color-orange`: #FF9800 (accent color)
- `--color-blue`: #0072B9 (link color)

### Content Updates
Main content can be updated in `index.html`. Key areas:
- Hero messaging
- Impact statistics
- Product descriptions
- FAQ content

### Form Integration
Replace the testimonial placeholder in the HTML with an actual Google Form embed or other form solution.

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with polyfills if needed)
- Mobile browsers on iOS and Android

## 🎯 Performance

The built site is optimized for performance:
- ~18KB HTML (gzipped: ~5KB)
- ~11KB CSS (gzipped: ~3KB)
- ~3KB JavaScript (gzipped: ~1.5KB)
- Total initial load: <10KB gzipped

## 📈 Analytics Ready

The JavaScript includes placeholder functions for analytics tracking:
- Button click tracking
- Tab interaction tracking
- Email link tracking

## 🔍 SEO Optimized

- Semantic HTML structure
- Meta descriptions and titles
- Open Graph tags ready for social sharing
- Proper heading hierarchy
