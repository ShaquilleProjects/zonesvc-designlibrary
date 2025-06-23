# @zone-ui/input

A flexible input component with support for prefixes, suffixes, and validation.

## Installation

```bash
npm install @zone-ui/input @zone-ui/theme-provider
```

## Usage

```tsx
import { Input } from '@zone-ui/input';

function App() {
  return (
    <>
      {/* Basic input */}
      <Input placeholder="Enter text" />

      {/* With label */}
      <Input label="Username" />

      {/* With prefix and suffix */}
      <Input
        prefix="$"
        suffix="USD"
        placeholder="Amount"
      />

      {/* With error */}
      <Input
        error="This field is required"
        placeholder="Enter text"
      />
    </>
  );
}
```

## Props

- `label`: Optional label text
- `prefix`: Optional prefix element
- `suffix`: Optional suffix element
- `error`: Optional error message
- All other input props are supported

## Features

- Clean, minimal design
- Built-in focus states
- Error handling
- Prefix and suffix support
- Fully customizable through CSS variables
- TypeScript support
