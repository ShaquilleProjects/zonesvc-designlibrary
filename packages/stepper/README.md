# @zone-ui/stepper

A versatile stepper component with multiple layouts and customization options.

## Installation

```bash
npm install @zone-ui/stepper @zone-ui/theme-provider
```

## Usage

```tsx
import { Stepper } from '@zone-ui/stepper';

function App() {
  const steps = [
    { title: 'Step 1', description: 'First step' },
    { title: 'Step 2', description: 'Second step' },
    { title: 'Step 3', description: 'Final step' },
  ];

  return (
    <Stepper
      steps={steps}
      activeStep={1}
      onChange={(step) => {
        // Handle step change
      }}
    />
  );
}
```

## Props

- `steps`: Array of step objects
- `activeStep`: Current active step index
- `orientation`: Layout orientation ('horizontal', 'vertical')
- `className`: Additional class names
- `rounded`: Use rounded corners
- `shadow`: Add shadow
- `size`: Step size ('small', 'medium', 'large')
- `onChange`: Callback when step changes

## Step Object

- `title`: Step title
- `description`: Step description
- `icon`: Step icon component
- `status`: Step status ('active', 'completed', 'error', 'warning', 'info', 'secondary')
- `disabled`: Disable step
- `onClick`: Step click handler

## Features

- Horizontal and vertical layouts
- Multiple sizes (small, medium, large)
- Multiple statuses (active, completed, error, warning, info, secondary)
- Step icons
- Step descriptions
- Keyboard navigation
- ARIA attributes
- TypeScript support
- Uses CSS variables for theming
