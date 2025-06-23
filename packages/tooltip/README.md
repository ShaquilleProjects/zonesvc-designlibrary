# @zone-ui/tooltip

A versatile tooltip component with multiple positions, themes, and animations.

## Installation

```bash
npm install @zone-ui/tooltip @zone-ui/theme-provider
```

## Usage

```tsx
import { Tooltip } from '@zone-ui/tooltip';

function App() {
  return (
    <Tooltip 
      content="This is a tooltip"
      position="top"
      theme="dark"
      delay={200}
      animation="fade"
    >
      <button>Hover me</button>
    </Tooltip>
  );
}
```

## Props

- `children`: Element to attach tooltip to
- `content`: Tooltip text
- `position`: Tooltip position ('top', 'bottom', 'left', 'right')
- `theme`: Tooltip theme ('dark', 'light', 'primary', 'success', 'warning', 'danger')
- `delay`: Show delay in milliseconds
- `animation`: Animation type ('fade', 'slide')
- All other div props are supported

## Features

- Multiple positions (top, bottom, left, right)
- Multiple themes
- Custom delay
- Smooth animations
- Responsive positioning
- Viewport boundary detection
- TypeScript support
- Uses CSS variables for theming
