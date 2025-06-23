# @zone-ui/theme-provider

The theme provider component that sets up the design system's global CSS variables and provides theme context.

## Installation

```bash
npm install @zone-ui/theme-provider
```

## Usage

```tsx
import { ThemeProvider } from '@zone-ui/theme-provider';

function App() {
  return (
    <ThemeProvider>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## CSS Variables

The theme provider sets up the following CSS variables:

```css
/* Colors */
--zui-primary
--zui-secondary
--zui-success
--zui-warning
--zui-danger

/* Typography */
--zui-font-family
--zui-font-size-base
--zui-line-height

/* Spacing */
--zui-space-unit
```

## Customizing the Theme

You can override the default theme values by setting your own CSS variables:

```css
:root {
  --zui-primary: #your-color;
  --zui-font-family: 'Your Font', sans-serif;
  --zui-space-unit: 0.5rem;
}
```

## TypeScript Support

The package includes TypeScript definitions for the theme context and types.
