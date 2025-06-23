# @zone-ui/pagination

A versatile pagination component with multiple styles and customization options.

## Installation

```bash
npm install @zone-ui/pagination @zone-ui/theme-provider
```

## Usage

```tsx
import { Pagination } from '@zone-ui/pagination';

function App() {
  return (
    <Pagination
      currentPage={1}
      totalPages={10}
      pageSize={10}
      onPageChange={(page) => {
        // Handle page change
      }}
    />
  );
}
```

## Props

- `currentPage`: Current page number
- `totalPages`: Total number of pages
- `pageSize`: Number of items per page
- `onPageChange`: Callback when page changes
- `className`: Additional class names
- `justify`: Content justification ('center', 'start', 'end')
- `rounded`: Use rounded corners
- `shadow`: Add shadow
- `compact`: Use compact size
- `large`: Use large size
- `simple`: Use simple style
- `showInfo`: Show page info
- `infoFormat`: Custom info format string

## Features

- Multiple sizes (compact, large)
- Multiple styles (rounded, shadow, simple)
- Page info display
- Customizable info format
- Keyboard navigation
- ARIA attributes
- TypeScript support
- Uses CSS variables for theming
