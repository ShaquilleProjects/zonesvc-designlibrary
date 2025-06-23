# @zone-ui/switch

A modern toggle switch component with error handling.

## Installation

```bash
npm install @zone-ui/switch @zone-ui/theme-provider
```

## Usage

```tsx
import { Switch } from '@zone-ui/switch';

function App() {
  return (
    <>
      <Switch
        id="notifications"
        name="notifications"
        label="Enable notifications"
        onChange={(e) => console.log(e.target.checked)}
      />
    </>
  );
}
```

## Props

- `label`: Optional label text
- `error`: Optional error message
- All other input props are supported

## Features

- Clean, modern design
- Multiple sizes (small, medium, large)
- Multiple types (primary, success, warning, danger, info, secondary)
- Filled and outline variants
- Rounded corners
- Error handling
- Disabled states
- Required states
- Fully accessible
- TypeScript support
- Uses CSS variables for theming

## Props

- `label`: Optional label text
- `error`: Optional error message
- `size`: Size of the switch ('small', 'medium', 'large')
- `type`: Type of the switch ('primary', 'success', 'warning', 'danger', 'info', 'secondary')
- `variant`: Style variant ('filled', 'outline')
- `rounded`: Use rounded corners
- `disabled`: Disable the switch
- `required`: Mark as required
- `ariaLabel`: ARIA label for accessibility
- `ariaDescribedBy`: ARIA described by ID for error messages
- All other input props are supported
