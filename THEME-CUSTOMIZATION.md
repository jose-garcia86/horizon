# Horizon Theme - Customization Guide

## Overview

The Horizon theme now includes a comprehensive, fully configurable color system that replaces all hardcoded colors throughout the theme templates. All HTML templates have been updated to use consistent theme color classes, making the entire theme easily customizable without modifying any core files.

## What's New

✅ **All hardcoded colors removed** - No more `#171717` or `text-gray-*` classes in templates  
✅ **Consistent color system** - All templates use the same configurable color variables  
✅ **Enhanced component classes** - New button and link components with hover effects  
✅ **Semantic color naming** - `text-theme-primary`, `bg-theme-surface`, etc.  
✅ **Easy customization** - Change the entire theme appearance by modifying CSS variables

## Color System

### CSS Custom Properties

All colors are defined using CSS custom properties (variables) in `/assets/css/base/main.css`. You can override these variables to customize your theme colors.

#### Primary Color Palette
```css
--color-primary-50: #f8fafc;
--color-primary-100: #f1f5f9;
/* ... through to ... */
--color-primary-950: #020617;
```

#### Secondary Color Palette
```css
--color-secondary-50: #f9fafb;
--color-secondary-100: #f3f4f6;
/* ... through to ... */
--color-secondary-950: #030712;
```

#### Accent Color Palette
```css
--color-accent-50: #eff6ff;
--color-accent-100: #dbeafe;
/* ... through to ... */
--color-accent-950: #172554;
```

#### Semantic Colors
```css
--color-background: #ffffff;
--color-surface: #f7f7f6;
--color-text-primary: #171717;
--color-text-secondary: #374151;
--color-text-muted: #6b7280;
--color-text-inverse: #ffffff;
--color-border-primary: #e5e7eb;
--color-border-secondary: #d1d5db;
```

## Typography System

### Font Families
```css
--font-family-primary: 'Inter', sans-serif;
--font-family-heading: 'Inter', sans-serif;
--font-family-mono: 'JetBrains Mono', monospace;
```

### Font Sizes
```css
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
/* ... through to ... */
--text-7xl: 4.5rem;
```

## Component Styles

### Buttons

Use the predefined button classes:

```html
<button class="btn-primary">Primary Button</button>
<button class="btn-secondary">Secondary Button</button>
```

### Links

Use enhanced link styles:

```html
<a href="#" class="link">Simple Link</a>
<a href="#" class="link-underlined">Link with Underline Effect</a>
```

### Text Colors

```html
<p class="text-theme-primary">Primary text color</p>
<p class="text-theme-secondary">Secondary text color</p>
<p class="text-theme-muted">Muted text color</p>
```

## Tailwind Integration

The theme integrates with Tailwind CSS v4 and includes custom color utilities:

```html
<div class="bg-primary-500 text-white">Primary background</div>
<div class="bg-secondary-100 text-theme-primary">Secondary background</div>
<div class="border-theme-primary">Themed border</div>
```


## Customization Examples

### Change Primary Color to Blue
```css
:root {
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
}
```

### Custom Font Family
```css
:root {
  --font-family-primary: 'Roboto', sans-serif;
  --font-family-heading: 'Playfair Display', serif;
}
```

### Adjust Spacing
```css
:root {
  --spacing-section: 6rem;
  --spacing-container: 3rem;
}
```

## Build Process

After making changes to the CSS variables, rebuild the CSS:

```bash
npm run build:css
```

For development with live reloading:

```bash
npm run dev:css
```

## Browser Support

The theme uses modern CSS features including:
- CSS Custom Properties (CSS Variables)
- CSS Grid
- Flexbox
- CSS Transforms

Supported browsers: Chrome 49+, Firefox 31+, Safari 9.1+, Edge 16+