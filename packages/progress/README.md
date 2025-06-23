# @zone-ui/progress

A versatile progress bar component with multiple styles and customization options.

## Installation

```bash
npm install @zone-ui/progress @zone-ui/theme-provider
```

## Usage

```tsx
import { Progress } from '@zone-ui/progress';

function App() {
  return (
    <Progress
      value={75}
      max={100}
      label="Progress"
      showPercentage={true}
      type="primary"
    />
  );
}
```

## Props

- `value`: Current value
- `max`: Maximum value
- `label`: Progress label
- `showPercentage`: Show percentage
- `type`: Progress type ('primary', 'success', 'warning', 'danger', 'info')
- `striped`: Use striped style
- `animated`: Use animated style
- `className`: Additional class names
- `vertical`: Use vertical orientation
- `rounded`: Use rounded corners
- `shadow`: Add shadow
- `size`: Size ('small', 'medium', 'large')
- `simple`: Use simple style

## Features

- Horizontal and vertical orientation
- Multiple sizes (small, medium, large)
- Multiple types (primary, success, warning, danger, info)
- Striped and animated styles
- Percentage display
- Keyboard navigation
- ARIA attributes
- TypeScript support
- Uses CSS variables for theming
