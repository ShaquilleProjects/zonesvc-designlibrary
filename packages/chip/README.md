# @zone-ui/chip

A versatile chip/tag component with multiple types and customization options.

## Installation

```bash
npm install @zone-ui/chip @zone-ui/theme-provider
```

## Usage

```tsx
import { Chip } from '@zone-ui/chip';

function App() {
  return (
    <>
      {/* Basic Chip */}
      <Chip>Basic</Chip>

      {/* With Icon */}
      <Chip icon={StarIcon}>Featured</Chip>

      {/* With Close Button */}
      <Chip onClose={() => console.log('Removed')}>Removable</Chip>

      {/* Clickable Chip */}
      <Chip onClick={() => console.log('Clicked')}>
        Clickable
      </Chip>

      {/* Selected Chip */}
      <Chip selected>Selected</Chip>
    </>
  );
}
```

## Props

- `children`: Chip content
- `type`: Chip type ('primary', 'success', 'warning', 'danger', 'info', 'secondary')
- `variant`: Chip variant ('filled', 'outline')
- `size`: Chip size ('small', 'medium', 'large')
- `icon`: Optional icon component
- `onClick`: Click handler
- `onClose`: Close handler
- `selected`: Selected state
- `className`: Additional class names

## Features

- Multiple types (primary, success, warning, danger, info, secondary)
- Filled and outline variants
- Multiple sizes (small, medium, large)
- Icon support
- Close button
- Clickable
- Selected state
- Keyboard navigation
- ARIA attributes
- TypeScript support
- Uses CSS variables for theming
