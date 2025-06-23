# @zone-ui/select

A custom select component with support for options, placeholder, and error states.

## Installation

```bash
npm install @zone-ui/select @zone-ui/theme-provider @zone-ui/button
```

## Usage

```tsx
import { Select } from '@zone-ui/select';

function App() {
  const options = [
    { value: 'USD', label: 'US Dollar' },
    { value: 'EUR', label: 'Euro' },
    { value: 'GBP', label: 'British Pound' }
  ];

  return (
    <Select
      options={options}
      placeholder="Select currency"
      onChange={(value) => console.log(value)}
    />
  );
}
```

## Props

- `options`: Array of { value: string | number, label: string, disabled?: boolean }
- `value`: Selected value
- `onChange`: Callback when value changes
- `placeholder`: Placeholder text
- `label`: Optional label text
- `error`: Optional error message
- `disabled`: Disable the select
- All other div props are supported

## Features

- Clean, modern design
- Customizable options
- Error handling
- Disabled states
- Fully keyboard accessible
- TypeScript support
- Uses CSS variables for theming
