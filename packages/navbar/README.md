# @zone-ui/navbar

A modern, responsive navigation bar component with search and user menu functionality.

## Installation

```bash
npm install @zone-ui/navbar @zone-ui/theme-provider @zone-ui/button
```

## Usage

```tsx
import { Navbar } from '@zone-ui/navbar';

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

function App() {
  return (
    <Navbar
      brand="Zone"
      navItems={navItems}
      userMenuItems={userMenuItems}
      onSearch={(query) => console.log('Search:', query)}
    />
  );
}
```

## Props

- `brand`: Brand name or logo
- `navItems`: Array of navigation items
- `userMenuItems`: Array of user menu items
- `onSearch`: Callback when search is performed
- All other div props are supported

## Navigation Item

Each navigation item can have:
- `label`: Navigation label
- `href`: Navigation link
- `active`: Active state (optional)

## User Menu Item

Each user menu item can have:
- `label`: Menu item label
- `onClick`: Click handler

## Features

- Sticky positioning
- Responsive design
- Search functionality
- User menu with dropdown
- Active state highlighting
- Hover effects
- TypeScript support
- Uses CSS variables for theming
