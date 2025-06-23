# @zone-ui/table

A powerful and customizable table component with sorting, pagination, and responsive design.

## Installation

```bash
npm install @zone-ui/table @zone-ui/theme-provider @zone-ui/button
```

## Usage

```tsx
import { Table } from '@zone-ui/table';

interface Stock {
  symbol: string;
  price: number;
  volume: number;
  change: number;
}

const columns: Column<Stock>[] = [
  { key: 'symbol', header: 'Symbol', sortable: true },
  { key: 'price', header: 'Price', sortable: true },
  { key: 'volume', header: 'Volume', sortable: true },
  { key: 'change', header: 'Change', sortable: true },
];

const data: Stock[] = [
  { symbol: 'AAPL', price: 150.50, volume: 1000000, change: 1.2 },
  { symbol: 'GOOGL', price: 2500.00, volume: 500000, change: -0.8 },
  // ... more data
];

function App() {
  return (
    <Table
      data={data}
      columns={columns}
      title="Stock Portfolio"
      pageSize={10}
      currentPage={1}
      onPageChange={(page) => console.log('Page changed to:', page)}
    />
  );
}
```

## Props

- `data`: Array of data objects
- `columns`: Array of column configurations
- `title`: Optional table title
- `actions`: Optional actions (e.g., buttons)
- `pageSize`: Number of items per page
- `currentPage`: Current page number
- `onPageChange`: Callback when page changes
- All other div props are supported

## Column Configuration

Each column in the `columns` array can have:
- `key`: Key from the data object
- `header`: Column header text
- `sortable`: Enable sorting (default: false)
- `width`: Custom column width

## Features

- Sorting by column
- Pagination
- Responsive design
- Hover effects
- Loading and error states
- Custom actions
- TypeScript support
- Uses CSS variables for theming
