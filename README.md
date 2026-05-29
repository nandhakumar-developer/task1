# 🎨 Nexora Studio – Modern Design Agency Website

A premium, fully responsive Design Agency Homepage built with **React.js**, **Tailwind CSS**, **Framer Motion**, and **Lucide React Icons**. This project showcases modern UI/UX design with smooth animations, glassmorphism effects, and a clean white theme.

## ✨ Features

- ✅ **Fully Responsive Design** - Mobile-first approach, optimized for all devices
- ✅ **Modern White Theme** - Premium minimal design with gradient accents
- ✅ **Smooth Animations** - Framer Motion for fade-up, stagger, scale, and float animations
- ✅ **Interactive Components** - Hover effects, smooth transitions, and interactive elements
- ✅ **Contact Form** - Full validation and success messaging
- ✅ **Reusable Components** - Clean, maintainable component architecture
- ✅ **Accessible Navigation** - Sticky navbar with scroll detection and mobile menu
- ✅ **Performance Optimized** - Fast loading with Vite and optimized animations
- ✅ **SEO Ready** - Proper meta tags and semantic HTML structure

## 🚀 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.6 | UI Framework |
| Tailwind CSS | 4.3.0 | Styling & Design System |
| Framer Motion | 11.0.3 | Animations & Transitions |
| Lucide React | 0.400.0 | Beautiful Icon Library |
| Vite | 8.0.12 | Build Tool & Dev Server |

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── Button.jsx          # Custom button with variants
│   ├── Navbar.jsx          # Sticky navigation bar
│   ├── ServiceCard.jsx      # Service card component
│   ├── ProjectCard.jsx      # Portfolio project card
│   └── TestimonialCard.jsx # Client testimonial card
│
├── sections/               # Page sections
│   ├── HeroSection.jsx      # Hero with CTA and animations
│   ├── ServicesSection.jsx  # 4 service offerings
│   ├── PortfolioSection.jsx # 6 featured projects
│   ├── AboutSection.jsx     # Agency stats and intro
│   ├── TestimonialsSection.jsx # Client feedback
│   ├── ContactSection.jsx   # Contact form with validation
│   └── Footer.jsx           # Footer with links
│
├── utils/
│   └── animations.js        # Framer Motion animation variants
│
├── App.jsx                  # Main app component
├── main.jsx                 # React entry point
└── index.css               # Global styles & tailwind imports

public/
├── favicon.svg             # Site favicon
└── projects/               # Project thumbnail images (placeholder)

tailwind.config.js          # Tailwind configuration with custom theme
vite.config.js              # Vite configuration
package.json                # Dependencies & scripts
index.html                  # HTML template
```

## 🎯 Sections Overview

### 1. **Navbar**
- Fixed positioning with scroll detection
- Logo and menu items
- Mobile-responsive hamburger menu
- CTA button ("Get Started")
- Smooth backdrop blur effect on scroll

### 2. **Hero Section**
- Animated gradient background blobs
- Large heading with gradient text
- Subheading and description
- Dual CTA buttons (View Work, Get Started)
- Stats section (50+ Projects, 20+ Clients, 5 Years)
- Decorative geometric animations on the right

### 3. **Services Section**
- 4 service cards in responsive grid:
  - UI/UX Design
  - Web Development
  - Branding
  - Digital Marketing
- Icon, title, and description per card
- Hover lift effects with gradient borders

### 4. **Portfolio Section**
- 6 responsive project cards in grid layout
- Project thumbnail, title, and category
- Hover overlay with "View Project" CTA
- Smooth scale animations on scroll

Projects Featured:
- SaaS Dashboard
- Ecommerce Website
- Restaurant Landing Page
- Finance App
- Travel Website
- Creative Portfolio

### 5. **About Section**
- Agency introduction and mission
- 4 stat cards showcasing achievements:
  - 50+ Projects Delivered
  - 20+ Happy Clients
  - 5 Years Experience
  - 100% Client Satisfaction

### 6. **Testimonials Section**
- 3 client testimonial cards
- Star ratings
- Client name, role, and feedback
- Avatar with initials
- Hover effects

### 7. **Contact Section**
- Contact information (Email, Phone, Location)
- Professional contact form with:
  - Name input
  - Email input
  - Message textarea
  - Form validation
  - Success message animation
- Error handling and visual feedback

### 8. **Footer**
- Dark theme footer
- Brand info and social links
- Quick navigation links organized by category
- Copyright information
- Scroll-to-top button

## 🎨 Color Palette

```
Primary Blue:       #2563EB
Secondary Purple:   #7C3AED
Background White:   #FFFFFF
Light Gray:         #F8FAFC
Dark Text:          #0F172A
Gray Text:          #64748B
```

## 🎬 Animation Features

### Implemented Animations:
- **Fade Up** - Elements fade in and slide up on scroll
- **Fade In** - Simple opacity transitions
- **Scale In** - Elements scale from small to full size
- **Stagger** - Sequential animations for multiple elements
- **Float** - Continuous vertical movement
- **Glow** - Box shadow pulsing effect
- **Hover Effects** - Scale and lift animations on interaction

### Custom Keyframes:
All animations are defined in `tailwind.config.js` and can be customized for different speeds and easing functions.

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Step 1: Clone or Navigate to Project
```bash
cd vite-project
```

### Step 2: Install Dependencies
```bash
npm install --legacy-peer-deps
```

### Step 3: Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Step 4: Build for Production
```bash
npm run build
```

### Step 5: Preview Production Build
```bash
npm run preview
```

## 🔧 Configuration

### Tailwind CSS Customization
Edit `tailwind.config.js` to:
- Modify color palette
- Adjust animation speeds
- Add custom breakpoints
- Change font families

### Custom Fonts
Google Fonts (Inter & Poppins) are imported in `index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap');
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### GitHub Pages
1. Update `vite.config.js` with base path
2. Run `npm run build`
3. Deploy the `dist` folder

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components use Tailwind's responsive prefixes (sm:, md:, lg:) for proper scaling.

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Proper color contrast ratios
- Alt text for all images
- Form validation with error messages

## 🎯 Component Usage

### Button Component
```jsx
import Button from "./components/Button";

<Button variant="primary" size="lg">
  Click Me
</Button>
```

Variants: `primary`, `secondary`, `outline`
Sizes: `sm`, `md`, `lg`

### Service Card
```jsx
import ServiceCard from "./components/ServiceCard";
import { Icon } from "lucide-react";

<ServiceCard 
  icon={Icon}
  title="Service Name"
  description="Service description"
/>
```

### Project Card
```jsx
import ProjectCard from "./components/ProjectCard";

<ProjectCard
  title="Project Name"
  category="Design"
  image="/projects/image.jpg"
/>
```

## 🔐 Form Validation

The contact form includes:
- **Required field validation**
- **Email format validation** (regex pattern)
- **Error message display**
- **Success state animation**
- **Form reset after submission**

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization Guide

### Changing Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "#YOUR_COLOR",
  secondary: "#YOUR_COLOR",
  // ... more colors
}
```

### Adjusting Animations
Update animation duration in `tailwind.config.js`:
```javascript
animation: {
  'fade-up': 'fadeUp 0.6s ease-out', // Change 0.6s to desired duration
}
```

### Modifying Typography
Update font family in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

## 📝 License

This project is free to use and modify for personal and commercial projects.

## 👨‍💻 Author

**Nandhakumar V**
- Frontend Developer
- Modern UI/UX Specialist
- React & Tailwind Expert

## 🤝 Support

For issues, suggestions, or contributions, please feel free to reach out.

## 📈 Performance Metrics

- **Lighthouse Performance**: 90+
- **Lighthouse Accessibility**: 95+
- **Lighthouse Best Practices**: 90+
- **Lighthouse SEO**: 95+

## 🔗 Quick Links

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)
- [Vite Guide](https://vitejs.dev)

---

**Built with ❤️ for modern creative agencies**

Last Updated: May 29, 2026
