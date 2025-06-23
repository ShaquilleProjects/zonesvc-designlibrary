# Zone UI Design System

A modern, minimalistic, and playful design system for stock exchange interfaces.

## Features

- 🎨 Consistent theming through CSS variables
- 📦 Modular component architecture
- 📊 Optimized for financial data visualization
- 🔍 Tree-shaking enabled
- 🚀 Built with Rollup
- 📚 Documented with Storybook

## Installation

Install individual components:

```bash
npm install @zone-ui/[component-name]
```

Or install the entire design system:

```bash
npm install @zone-ui/theme-provider @zone-ui/button @zone-ui/table ...
```

## Usage Example

```tsx
import { ThemeProvider } from '@zone-ui/theme-provider';
import { Button } from '@zone-ui/button';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Trade Now</Button>
    </ThemeProvider>
  );
}
```

## Theming

Zone UI uses CSS variables for theming. Customize your theme by setting these variables:

```css
:root {
  /* Colors */
  --zui-primary: #0070f3;
  --zui-secondary: #667085;
  --zui-success: #10b981;
  --zui-warning: #f59e0b;
  --zui-danger: #ef4444;

  /* Typography */
  --zui-font-family: 'Inter', sans-serif;
  --zui-font-size-base: 1rem;
  --zui-line-height: 1.5;

  /* Spacing */
  --zui-space-unit: 0.25rem;
}
```

## Available Components

### Core
- `@zone-ui/theme-provider`
- `@zone-ui/layout`
- `@zone-ui/typography`

### Inputs & Forms
- `@zone-ui/input`
- `@zone-ui/select`
- `@zone-ui/checkbox`
- `@zone-ui/radio`
- `@zone-ui/switch`
- `@zone-ui/slider`
- `@zone-ui/datepicker`

### Buttons
- `@zone-ui/button`
- `@zone-ui/icon-button`
- `@zone-ui/button-group`

### Charts
- `@zone-ui/line-chart`
- `@zone-ui/candlestick-chart`
- `@zone-ui/bar-chart`

### Data Display
- `@zone-ui/table`
- `@zone-ui/stat-card`
- `@zone-ui/badge`
- `@zone-ui/tag`
- `@zone-ui/skeleton`

### Navigation
- `@zone-ui/navbar`
- `@zone-ui/sidebar`
- `@zone-ui/tabs`
- `@zone-ui/pagination`

### Overlays
- `@zone-ui/modal`
- `@zone-ui/drawer`
- `@zone-ui/tooltip`
- `@zone-ui/popover`
- `@zone-ui/dialog`

### Feedback
- `@zone-ui/toast`
- `@zone-ui/alert`
- `@zone-ui/progress`

## Development

1. Install dependencies:
```bash
pnpm install
```

2. Start Storybook:
```bash
pnpm storybook
```

3. Build all packages:
```bash
pnpm build
```

## Contributing

1. Create a new feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

MIT
