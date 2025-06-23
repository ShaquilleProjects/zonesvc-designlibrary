import { Table } from './Table';

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
  { symbol: 'MSFT', price: 300.00, volume: 800000, change: 0.5 },
  { symbol: 'AMZN', price: 3500.00, volume: 700000, change: -1.5 },
];

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    pageSize: {
      control: { type: 'number' },
    },
    currentPage: {
      control: { type: 'number' },
    },
  },
};

export const Basic = {
  args: {
    data,
    columns,
    title: 'Stock Portfolio',
  },
};

export const WithActions = {
  args: {
    data,
    columns,
    title: 'Stock Portfolio',
    actions: (
      <>
        <button>Add</button>
        <button>Edit</button>
        <button>Delete</button>
      </>
    ),
  },
};

export const WithPagination = {
  args: {
    data,
    columns,
    title: 'Stock Portfolio',
    pageSize: 2,
    currentPage: 1,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

export const Loading = {
  args: {
    title: 'Stock Portfolio',
    loading: true,
  },
};

export const Error = {
  args: {
    title: 'Stock Portfolio',
    error: 'Failed to load data',
  },
};
