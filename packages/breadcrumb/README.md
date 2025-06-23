# @zone-ui/breadcrumb

A versatile breadcrumb component for navigation hierarchies.

## Installation

```bash
npm install @zone-ui/breadcrumb @zone-ui/theme-provider
```

## Usage

```tsx
import { Breadcrumb } from '@zone-ui/breadcrumb';

function App() {
  const items = [
    { title: 'Home', href: '/' },
    { title: 'Products', href: '/products' },
    { title: 'Electronics', current: true },
  ];

  return <Breadcrumb items={items} />;
}
```

## Props

- `items`: Array of breadcrumb items
- `className`: Additional class names
- `centered`: Center the breadcrumb
- `right`: Align to right
- `icon`: Use icon style
- `rounded`: Use rounded corners
- `shadow`: Add shadow
- `compact`: Use compact spacing
- `separator`: Custom separator

## Features

- Multiple alignment options
- Icon support
- Custom separators
- Responsive design
- Keyboard navigation
- ARIA attributes
- TypeScript support
- Uses CSS variables for theming
