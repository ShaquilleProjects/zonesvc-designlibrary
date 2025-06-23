import { LineChart } from './LineChart';

const data = [
  { date: '2025-01-01', price: 100, volume: 10000 },
  { date: '2025-01-02', price: 105, volume: 12000 },
  { date: '2025-01-03', price: 110, volume: 15000 },
  { date: '2025-01-04', price: 108, volume: 13000 },
];

export default {
  title: 'Components/LineChart',
  component: LineChart,
  argTypes: {
    height: {
      control: { type: 'number' },
    },
    width: {
      control: { type: 'number' },
    },
  },
};

export const Basic = {
  args: {
    data,
    title: 'Stock Performance',
    lines: [
      { dataKey: 'price', name: 'Price' },
      { dataKey: 'volume', name: 'Volume', stroke: 'var(--zui-success)' },
    ],
  },
};

export const MultipleLines = {
  args: {
    data,
    title: 'Multiple Lines',
    lines: [
      { dataKey: 'price', name: 'Price', type: 'monotone' },
      { dataKey: 'volume', name: 'Volume', stroke: 'var(--zui-success)', dot: false },
    ],
  },
};

export const Loading = {
  args: {
    title: 'Loading Chart',
    loading: true,
  },
};

export const Error = {
  args: {
    title: 'Error State',
    error: 'Failed to load data',
  },
};
