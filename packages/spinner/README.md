# @zone-ui/spinner

A versatile spinner/loader component with multiple styles and customization options.

## Installation

```bash
npm install @zone-ui/spinner @zone-ui/theme-provider
```

## Usage

```tsx
import { Spinner } from '@zone-ui/spinner';

function App() {
  return (
    <Spinner
      text="Loading..."
      type="primary"
      size="medium"
    />
  );
}
```

## Props

- `text`: Loading text
- `type`: Spinner type ('primary', 'success', 'warning', 'danger', 'info', 'secondary')
- `size`: Spinner size ('small', 'medium', 'large')
- `className`: Additional class names
- `justify`: Content justification ('center', 'start', 'end')
- `rounded`: Use rounded corners
- `shadow`: Add shadow
- `borderless`: Remove border
- `simple`: Use simple style
- `inline`: Use inline style
- `centered`: Center in viewport
- `fullScreen`: Full screen overlay

## Features

- Multiple sizes (small, medium, large)
- Multiple types (primary, success, warning, danger, info, secondary)
- Multiple layouts (centered, inline, full screen)
- Customizable text
- Keyboard navigation
- ARIA attributes
- TypeScript support
- Uses CSS variables for theming
