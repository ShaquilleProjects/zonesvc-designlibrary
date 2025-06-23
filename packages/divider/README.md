# @zone-ui/divider

A versatile divider component with multiple styles and customization options.

## Installation

```bash
npm install @zone-ui/divider @zone-ui/theme-provider
```

## Usage

```tsx
import { Divider } from '@zone-ui/divider';

function App() {
  return (
    <>
      {/* Basic Divider */}
      <Divider />

      {/* Divider with Text */}
      <Divider>Or</Divider>

      {/* Vertical Divider */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div>Section 1</div>
        <Divider vertical />
        <div>Section 2</div>
      </div>

      {/* Styled Divider */}
      <Divider type="primary" thick />
    </>
  );
}
```

## Props

- `children`: Optional text content
- `vertical`: Use vertical orientation
- `dashed`: Use dashed style
- `dotted`: Use dotted style
- `thick`: Use thick line
- `thin`: Use thin line
- `type`: Line color type ('primary', 'success', 'warning', 'danger', 'info')
- `noLine`: Hide the line
- `justify`: Content justification ('center', 'start', 'end', 'between', 'around', 'evenly')
- `className`: Additional class names

## Features

- Horizontal and vertical orientation
- Multiple line styles (solid, dashed, dotted)
- Multiple thickness options
- Multiple color types
- Content justification
- ARIA attributes
- TypeScript support
- Uses CSS variables for theming
