import { Navbar } from './Navbar';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', active: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Watchlist', href: '/watchlist' },
];

const userMenuItems = [
  { label: 'Profile', onClick: () => console.log('Profile clicked') },
  { label: 'Settings', onClick: () => console.log('Settings clicked') },
  { label: 'Logout', onClick: () => console.log('Logout clicked') },
];

export default {
  title: 'Components/Navbar',
  component: Navbar,
};

export const Basic = {
  args: {
    brand: 'Zone',
    navItems,
    userMenuItems,
  },
};

export const WithSearch = {
  args: {
    brand: 'Zone',
    navItems,
    userMenuItems,
    onSearch: (query) => console.log('Search:', query),
  },
};

export const CustomBrand = {
  args: {
    brand: 'Zone Financial',
    navItems,
    userMenuItems,
  },
};

export const CustomNavigation = {
  args: {
    brand: 'Zone',
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    userMenuItems,
  },
};
