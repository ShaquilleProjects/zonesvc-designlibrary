# @zone-ui/skeleton

A versatile skeleton loading component with multiple types and customization options.

## Installation

```bash
npm install @zone-ui/skeleton @zone-ui/theme-provider
```

## Usage

```tsx
import { Skeleton } from '@zone-ui/skeleton';

function App() {
  return (
    <>
      {/* Basic Text Skeleton */}
      <Skeleton type="text" />

      {/* Circle Skeleton */}
      <Skeleton type="circle" />

      {/* List Skeleton */}
      <Skeleton type="list" />

      {/* Grid Skeleton */}
      <Skeleton type="grid" count={4} />

      {/* Custom Size */}
      <Skeleton className="w-32 h-8" />
    </>
  );
}
```

## Props

- `type`: Skeleton type ('text', 'circle', 'rounded', 'full', 'small', 'medium', 'large', 'avatar', 'avatar-large', 'avatar-xlarge', 'list', 'grid')
- `count`: Number of items for list/grid type
- `className`: Additional class names
- `delay`: Add delay to animation
- `speed`: Animation speed ('slow' or 'fast')
- All other div props are supported

## Features

- Multiple skeleton types
- List and grid layouts
- Custom sizes
- Delayed animation
- Speed control
- TypeScript support
- Uses CSS variables for theming
