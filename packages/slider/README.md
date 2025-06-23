# @zone-ui/slider

A custom slider component with smooth interactions and value display.

## Installation

```bash
npm install @zone-ui/slider @zone-ui/theme-provider
```

## Usage

```tsx
import { Slider } from '@zone-ui/slider';

function App() {
  const [value, setValue] = useState(50);

  return (
    <Slider
      value={value}
      min={0}
      max={100}
      step={1}
      label="Volume"
      onChange={setValue}
    />
  );
}
```

## Props

- `value`: Current value
- `min`: Minimum value (default: 0)
- `max`: Maximum value (default: 100)
- `step`: Step size (default: 1)
- `label`: Optional label text
- `onChange`: Callback when value changes
- `disabled`: Disable the slider
- All other div props are supported

## Features

- Smooth interactions
- Value display
- Customizable range
- Error handling
- Disabled states
- Fully accessible
- TypeScript support
- Uses CSS variables for theming
