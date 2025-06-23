# @zone-ui/radio

A customizable radio button component with error handling.

## Installation

```bash
npm install @zone-ui/radio @zone-ui/theme-provider
```

## Usage

```tsx
import { Radio } from '@zone-ui/radio';

function App() {
  return (
    <>
      <Radio
        id="option1"
        name="options"
        value="1"
        label="Option 1"
        onChange={(e) => console.log(e.target.value)}
      />
      <Radio
        id="option2"
        name="options"
        value="2"
        label="Option 2"
        onChange={(e) => console.log(e.target.value)}
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
