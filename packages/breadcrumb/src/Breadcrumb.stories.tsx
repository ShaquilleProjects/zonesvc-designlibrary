import { Breadcrumb } from './Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

const items = [
  { title: 'Home', href: '/' },
  { title: 'Products', href: '/products' },
  { title: 'Electronics', current: true },
];

export const Basic = {
  args: {
    items,
  },
};

export const Centered = {
  args: {
    items,
    centered: true,
  },
};

export const Right = {
  args: {
    items,
    right: true,
  },
};

export const Icon = {
  args: {
    items: [
      { title: 'Home', href: '/', icon: HomeIcon },
      { title: 'Products', href: '/products', icon: ProductsIcon },
      { title: 'Electronics', current: true, icon: ElectronicsIcon },
    ],
    icon: true,
  },
};

export const Rounded = {
  args: {
    items,
    rounded: true,
  },
};

export const Shadow = {
  args: {
    items,
    shadow: true,
  },
};

export const Compact = {
  args: {
    items,
    compact: true,
  },
};

export const CustomSeparator = {
  args: {
    items,
    separator: '→',
  },
};
