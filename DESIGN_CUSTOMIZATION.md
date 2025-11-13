# Design Customization Guide

This guide will help you customize the design and branding of your Interactive Avatar application to make it your own.

## Quick Start

1. **Update App Name & Metadata**: Edit `app/layout.tsx`
2. **Update Branding**: Edit `components/NavBar.tsx`
3. **Update Colors**: Edit `tailwind.config.js`
4. **Add Your Logo**: Place your logo in `/public/logo.png`

## 1. App Name & Metadata

### Update Page Title

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: "Your App Name", // Change this
    template: `%s - Your App Name`, // Change this
  },
  description: "Your app description", // Change this
  icons: {
    icon: "/favicon.ico", // Replace with your favicon
  },
};
```

### Update Package Name

Edit `package.json`:

```json
{
  "name": "your-app-name",
  "version": "1.0.0",
  // ...
}
```

## 2. Branding (Logo & Navigation)

### Update NavBar Branding

Edit `components/NavBar.tsx`:

```typescript
const BRAND_CONFIG = {
  appName: "Your App Name", // Change this
  logo: {
    src: "/logo.png", // Path to your logo in /public folder
    alt: "Your Logo Alt Text",
    show: true, // Set to true to show logo
    height: 32, // Logo height in pixels
  },
  showNavLinks: true, // Set to true to show navigation
  navLinks: [
    { href: "/about", label: "About" },
    { href: "/docs", label: "Documentation" },
    // Add your own links
  ],
};
```

### Add Your Logo

1. Place your logo image in the `public/` folder
2. Update the `logo.src` path in `BRAND_CONFIG`
3. Set `logo.show` to `true`

Recommended logo formats:
- PNG with transparent background
- SVG (scalable)
- Recommended size: 200x64px or similar aspect ratio

## 3. Color Theme Customization

### Update Colors in Tailwind Config

Edit `tailwind.config.js` to customize your color scheme:

```javascript
colors: {
  // Main background color
  background: 'rgb(0, 0, 0)', // Change to your brand background
  
  // Main text color
  foreground: 'rgb(255, 255, 255)', // Change to your brand text color
  
  // Primary brand color (buttons, accents)
  primary: {
    DEFAULT: 'rgb(117, 89, 255)', // Your main brand color
    hover: 'rgb(99, 75, 220)', // Hover state
    light: 'rgb(138, 115, 255)', // Light variant
  },
  
  // Secondary elements (inputs, cards)
  secondary: {
    DEFAULT: 'rgb(63, 63, 70)', // Input backgrounds
    light: 'rgb(82, 82, 91)', // Hover states
    dark: 'rgb(39, 39, 42)', // Active states
  },
  
  // Border color
  border: 'rgb(63, 63, 70)', // Borders
  
  // Card backgrounds
  card: {
    DEFAULT: 'rgb(24, 24, 27)', // Card background
    border: 'rgb(63, 63, 70)', // Card border
  },
  
  // Accent color (gradients, highlights)
  accent: {
    DEFAULT: 'rgb(14, 165, 233)', // Accent color
    gradient: 'linear-gradient(...)', // Gradient (used in NavBar)
  },
}
```

### Color Scheme Examples

#### Blue Theme
```javascript
primary: {
  DEFAULT: 'rgb(59, 130, 246)', // Blue-500
  hover: 'rgb(37, 99, 235)', // Blue-600
},
accent: {
  DEFAULT: 'rgb(14, 165, 233)', // Sky-500
},
```

#### Green Theme
```javascript
primary: {
  DEFAULT: 'rgb(34, 197, 94)', // Green-500
  hover: 'rgb(22, 163, 74)', // Green-600
},
accent: {
  DEFAULT: 'rgb(16, 185, 129)', // Emerald-500
},
```

#### Purple Theme (Default)
```javascript
primary: {
  DEFAULT: 'rgb(117, 89, 255)', // Purple
  hover: 'rgb(99, 75, 220)',
},
```

#### Light Theme
```javascript
background: 'rgb(255, 255, 255)',
foreground: 'rgb(0, 0, 0)',
card: {
  DEFAULT: 'rgb(249, 250, 251)', // Gray-50
  border: 'rgb(229, 231, 235)', // Gray-200
},
secondary: {
  DEFAULT: 'rgb(243, 244, 246)', // Gray-100
  light: 'rgb(229, 231, 235)', // Gray-200
  dark: 'rgb(209, 213, 219)', // Gray-300
},
```

## 4. Fonts Customization

### Change Fonts

Edit `app/layout.tsx`:

```typescript
import { Roboto as FontSans, JetBrains_Mono as FontMono } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
```

Available Google Fonts: https://fonts.google.com/

### Use Custom Fonts

1. Add your font files to `public/fonts/`
2. Update `styles/globals.css`:

```css
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/YourFont.woff2') format('woff2');
}

:root {
  --font-sans: 'YourFont', sans-serif;
}
```

## 5. Button Styles

### Button Variants

The Button component supports three variants:

- `primary`: Main action buttons (default)
- `secondary`: Secondary actions
- `outline`: Outlined buttons

Usage:

```tsx
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
```

### Customize Button Styles

Edit `components/Button.tsx` to modify button appearance:

```typescript
const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover rounded-lg",
  secondary: "bg-secondary text-white hover:bg-secondary-light rounded-lg",
  outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg",
};
```

## 6. Component Styling

### Card Components

Cards use the `card` and `card-border` colors. These appear in:
- Avatar video container
- Configuration panels

### Input Fields

Inputs use `secondary` background and `border` colors with `primary` focus states.

### Select Dropdowns

Select components use the same styling as inputs with hover effects.

## 7. Layout Customization

### Change Container Width

Edit `components/NavBar.tsx`:

```typescript
<div className="flex flex-row justify-between items-center w-[1200px] m-auto p-6">
  {/* Change w-[1000px] to your desired width */}
</div>
```

Edit `app/page.tsx`:

```typescript
<div className="w-[1200px] flex flex-col items-start justify-start gap-5 mx-auto pt-4 pb-20">
  {/* Change w-[900px] to match your container width */}
</div>
```

### Change Background

Edit `app/layout.tsx`:

```typescript
<body className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-foreground">
  {/* Add gradients, patterns, or images */}
</body>
```

Or add a background image:

```typescript
<body 
  className="min-h-screen bg-cover bg-center text-foreground"
  style={{ backgroundImage: "url('/background.jpg')" }}
>
```

## 8. Removing HeyGen Branding

### Already Removed:
- ✅ HeyGen logo from NavBar
- ✅ HeyGen links from navigation
- ✅ HeyGen references in metadata
- ✅ HeyGen-specific styling

### Optional: Remove HeyGen Logo File

You can delete `public/heygen-logo.png` if you don't need it.

## 9. Advanced Customization

### Custom CSS

Add custom styles in `styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Your custom styles */
.custom-class {
  /* Your styles */
}

/* Custom animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Theme Switching (Dark/Light Mode)

The app is configured for dark mode by default. To add light mode:

1. Update `tailwind.config.js` to support both themes
2. Add a theme toggle component
3. Use CSS variables for dynamic theming

### Responsive Design

The current design is optimized for desktop. To make it responsive:

1. Add responsive breakpoints in Tailwind classes
2. Adjust container widths for mobile
3. Update navigation for mobile menu

## 10. Testing Your Changes

1. **Start the dev server**:
   ```bash
   npm run dev
   ```

2. **Check all pages** to ensure colors and styling work correctly

3. **Test different screen sizes** if making responsive changes

4. **Verify branding** appears correctly across all components

## 11. Color Palette Tools

Use these tools to create your color palette:

- **Coolors**: https://coolors.co/ - Generate color palettes
- **Adobe Color**: https://color.adobe.com/ - Color wheel and themes
- **Tailwind Colors**: https://tailwindcss.com/docs/customizing-colors - Reference colors

## 12. Best Practices

1. **Consistency**: Use the same colors throughout the app
2. **Contrast**: Ensure text is readable on backgrounds (WCAG AA compliance)
3. **Accessibility**: Test with screen readers and keyboard navigation
4. **Performance**: Optimize images and fonts for fast loading
5. **Brand Guidelines**: Follow your brand's design guidelines if available

## Troubleshooting

### Colors not updating
- Clear your browser cache
- Restart the dev server
- Check that Tailwind classes are being used correctly

### Logo not showing
- Verify the file exists in `public/` folder
- Check the file path in `BRAND_CONFIG`
- Ensure `logo.show` is set to `true`

### Styles not applying
- Check that Tailwind is processing your files
- Verify class names are correct
- Check for CSS specificity issues

## Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Styling Guide](https://nextjs.org/docs/app/building-your-application/styling)
- [Google Fonts](https://fonts.google.com/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Need Help?

If you need assistance with customization:
1. Check the component files for inline comments
2. Review the Tailwind CSS documentation
3. Check browser console for errors
4. Verify all environment variables are set correctly


