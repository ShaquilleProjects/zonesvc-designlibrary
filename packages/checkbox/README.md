# @zone-ui/checkbox

A customizable checkbox component with error handling.

## Installation

```bash
npm install @zone-ui/checkbox @zone-ui/theme-provider
```

## Usage

```tsx
import { Checkbox } from '@zone-ui/checkbox';

function App() {
  return (
    <>
      <Checkbox
        id="terms"
        name="terms"
        label="I agree to the terms and conditions"
        onChange={(e) => console.log(e.target.checked)}
      />
    </>
  );
}
```

## Props

- `label`: Required label text
- `error`: Optional error message
- All other input props are supported

## Features

- Clean, modern design
- Error handling
- Disabled states
- Fully accessible
- TypeScript support
- Uses CSS variables for theming
