# @zone-ui/line-chart

A customizable line chart component built with Recharts for financial data visualization.

## Installation

```bash
npm install @zone-ui/line-chart @zone-ui/theme-provider recharts
```

## Usage

```tsx
import { LineChart } from '@zone-ui/line-chart';

const data = [
  { date: '2025-01-01', price: 100, volume: 10000 },
  { date: '2025-01-02', price: 105, volume: 12000 },
  { date: '2025-01-03', price: 110, volume: 15000 },
];

function App() {
  return (
    <LineChart
      data={data}
      title="Stock Performance"
      lines={[
        { dataKey: 'price', name: 'Price' },
        { dataKey: 'volume', name: 'Volume', stroke: 'var(--zui-success)' }
      ]}
    />
  );
}
```

## Props

- `data`: Array of data points
- `title`: Optional chart title
- `height`: Chart height (default: 400)
- `width`: Chart width (default: 800)
- `colors`: Array of colors for lines
- `lines`: Array of line configurations
- `xAxisKey`: Key for X-axis data (default: 'date')
- All other div props are supported

## Line Configuration

Each line in the `lines` array can have:
- `dataKey`: Data key from the data array
- `name`: Line name for legend
- `stroke`: Custom color (defaults to theme colors)
- `dot`: Show dots on line (default: true)
- `type`: Line type ('monotone', 'linear', 'step')

## Features

- Responsive design
- Multiple lines support
- Custom colors using theme variables
- Loading and error states
- Interactive tooltips
- Grid lines
- Legend with color dots
- TypeScript support
- Uses CSS variables for theming
