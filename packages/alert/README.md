# @zone-ui/alert

A versatile alert component with multiple types and customization options.

## Installation

```bash
npm install @zone-ui/alert @zone-ui/theme-provider
```

## Usage

```tsx
import { Alert } from '@zone-ui/alert';

function App() {
  return (
    <>
      <Alert
        type="success"
        title="Success!"
        description="Operation completed successfully"
      />
      
      <Alert
        type="warning"
        title="Warning"
        description="Please review the following information"
        icon={WarningIcon}
      />
      
      <Alert
        type="danger"
        title="Error"
        description="An error occurred"
        dismissable
        onClose={() => console.log('Alert closed')}
      />
    </>
  );
}
```

## Props

- `type`: Alert type ('primary', 'success', 'warning', 'danger', 'info')
- `title`: Alert title
- `description`: Alert description
- `icon`: Optional icon component
- `dismissable`: Make alert dismissable
- `onClose`: Callback when alert is closed
- `fullWidth`: Make alert full width
- `rounded`: Use rounded corners
- `outlined`: Use outlined style
- All other div props are supported

## Features

- Multiple types (primary, success, warning, danger, info)
- Icon support
- Dismissable alerts
- Full width option
- Rounded corners
- Outlined style
- TypeScript support
- Uses CSS variables for theming
