# Quick Start: Make It Your Own

This is a quick reference guide to customize the app. For detailed instructions, see [DESIGN_CUSTOMIZATION.md](./DESIGN_CUSTOMIZATION.md).

## 🎨 5-Minute Customization

### 1. Change App Name (2 minutes)

**File**: `app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: {
    default: "Your App Name", // ← Change this
  },
};
```

**File**: `components/NavBar.tsx`
```typescript
const BRAND_CONFIG = {
  appName: "Your App Name", // ← Change this
  // ...
};
```

### 2. Change Colors (2 minutes)

**File**: `tailwind.config.js`
```javascript
colors: {
  primary: {
    DEFAULT: '#7559FF', // ← Change to your brand color
  },
  // Change other colors as needed
}
```

### 3. Add Your Logo (1 minute)

1. Place your logo in `public/logo.png`
2. **File**: `components/NavBar.tsx`
```typescript
const BRAND_CONFIG = {
  logo: {
    src: "/logo.png",
    show: true, // ← Set to true
  },
};
```

## 🚀 That's It!

Run `npm run dev` and see your changes!

## 📚 Need More Customization?

- **Colors & Theme**: See [DESIGN_CUSTOMIZATION.md](./DESIGN_CUSTOMIZATION.md#3-color-theme-customization)
- **Fonts**: See [DESIGN_CUSTOMIZATION.md](./DESIGN_CUSTOMIZATION.md#4-fonts-customization)
- **Layout**: See [DESIGN_CUSTOMIZATION.md](./DESIGN_CUSTOMIZATION.md#7-layout-customization)

## 🎯 Common Customizations

### Change Primary Color
Edit `tailwind.config.js`:
```javascript
primary: {
  DEFAULT: '#YOUR_COLOR', // e.g., '#3b82f6' for blue
}
```

### Change Background
Edit `tailwind.config.js`:
```javascript
background: '#YOUR_BG_COLOR',
```

### Remove Navigation Links
Edit `components/NavBar.tsx`:
```typescript
showNavLinks: false, // ← Set to false
```

### Change Button Style
Edit `components/Button.tsx` or use variants:
```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
```

## 🎨 Color Examples

### Blue Theme
```javascript
primary: { DEFAULT: '#3b82f6' }, // Blue
accent: { DEFAULT: '#0ea5e9' },  // Sky
```

### Green Theme
```javascript
primary: { DEFAULT: '#22c55e' }, // Green
accent: { DEFAULT: '#10b981' },  // Emerald
```

### Purple Theme (Default)
```javascript
primary: { DEFAULT: '#7559FF' }, // Purple
accent: { DEFAULT: '#0ea5e9' },  // Sky
```

### Light Theme
```javascript
background: '#ffffff',
foreground: '#000000',
card: { DEFAULT: '#f9fafb' },
secondary: { DEFAULT: '#f3f4f6' },
```

## ✅ Checklist

- [ ] Changed app name in `app/layout.tsx`
- [ ] Changed app name in `components/NavBar.tsx`
- [ ] Updated colors in `tailwind.config.js`
- [ ] Added logo to `public/logo.png`
- [ ] Updated logo path in `components/NavBar.tsx`
- [ ] Set `logo.show = true` in NavBar
- [ ] Tested the app with `npm run dev`

## 🆘 Need Help?

See the full [DESIGN_CUSTOMIZATION.md](./DESIGN_CUSTOMIZATION.md) guide for detailed instructions.




