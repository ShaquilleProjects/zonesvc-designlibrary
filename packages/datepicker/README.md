# @zone-ui/datepicker

A customizable date picker component with calendar view.

## Installation

```bash
npm install @zone-ui/datepicker @zone-ui/theme-provider @zone-ui/button @zone-ui/input
```

## Usage

```tsx
import { Datepicker } from '@zone-ui/datepicker';

function App() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <Datepicker
      value={date}
      onChange={setDate}
      placeholder="Select date"
      minDate={new Date()}
      maxDate={new Date('2025-12-31')}
    />
  );
}
```

## Props

- `value`: Selected date
- `onChange`: Callback when date changes
- `placeholder`: Placeholder text
- `label`: Optional label text
- `minDate`: Minimum selectable date
- `maxDate`: Maximum selectable date
- `disabled`: Disable the datepicker
- All other div props are supported

## Features

- Clean, modern calendar interface
- Date range restrictions
- Today highlighting
- Month navigation
- Fully accessible
- TypeScript support
- Uses CSS variables for theming
