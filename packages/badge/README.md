# @zone-ui/badge

A versatile badge component with multiple types, variants, and customization options.

## Installation

```bash
npm install @zone-ui/badge @zone-ui/theme-provider
```

## Usage

```tsx
import { Badge } from '@zone-ui/badge';

function App() {
  return (
    <>
      <Badge type="success">Success</Badge>
      
      <Badge type="warning" variant="outline">
        Warning
      </Badge>
      
      <Badge type="danger" size="large">
        Error
      </Badge>
      
      <Badge type="info" shape="pill">
        Info
      </Badge>
      
      <Badge type="primary" icon={StarIcon}>
        Featured
      </Badge>
    </>
  );
}
```

## Props

- `type`: Badge type ('primary', 'success', 'warning', 'danger', 'info', 'secondary')
- `variant`: Badge variant ('filled', 'outline')
- `size`: Badge size ('small', 'medium', 'large')
- `shape`: Badge shape ('default', 'pill', 'dot')
- `icon`: Optional icon component
- All other span props are supported

## Features

- Multiple types (primary, success, warning, danger, info, secondary)
- Filled and outline variants
- Multiple sizes (small, medium, large)
- Different shapes (default, pill, dot)
- Icon support
- TypeScript support
- Uses CSS variables for theming
