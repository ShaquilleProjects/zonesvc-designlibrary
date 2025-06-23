import { Sidebar } from './Sidebar';

const navItems = [
  { icon: 'Home', label: 'Dashboard', href: '/dashboard', active: true },
  { icon: 'Bell', label: 'Notifications', href: '/notifications' },
  { icon: 'User', label: 'Profile', href: '/profile' },
  { icon: 'Settings', label: 'Settings', href: '/settings' },
];

const footerItems = [
  { icon: 'User', label: 'Profile', onClick: () => console.log('Profile clicked') },
  { icon: 'Settings', label: 'Settings', onClick: () => console.log('Settings clicked') },
  { icon: 'Logout', label: 'Logout', onClick: () => console.log('Logout clicked') },
];

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
};

export const Basic = {
  args: {
    logo: '/logo.svg',
    navItems,
    footerItems,
  },
};

export const CustomLogo = {
  args: {
    logo: '/custom-logo.svg',
    navItems,
    footerItems,
  },
};

export const CustomNavigation = {
  args: {
    logo: '/logo.svg',
    navItems: [
      { icon: 'Home', label: 'Home', href: '/' },
      { icon: 'Search', label: 'Search', href: '/search' },
      { icon: 'ChartBar', label: 'Analytics', href: '/analytics' },
    ],
    footerItems,
  },
};

export const CustomFooter = {
  args: {
    logo: '/logo.svg',
    navItems,
    footerItems: [
      { icon: 'HelpCircle', label: 'Help', onClick: () => console.log('Help clicked') },
      { icon: 'Support', label: 'Support', onClick: () => console.log('Support clicked') },
    ],
  },
};
