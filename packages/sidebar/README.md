# @zone-ui/sidebar

A modern, fixed sidebar component with navigation and footer sections.

## Installation

```bash
npm install @zone-ui/sidebar @zone-ui/theme-provider @zone-ui/button
```

## Usage

```tsx
import { Sidebar } from '@zone-ui/sidebar';

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard', active: true },
  { icon: Bell, label: 'Notifications', href: '/notifications' },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

const footerItems = [
  { icon: User, label: 'Profile', onClick: () => console.log('Profile clicked') },
  { icon: Settings, label: 'Settings', onClick: () => console.log('Settings clicked') },
  { icon: Logout, label: 'Logout', onClick: () => console.log('Logout clicked') },
];

function App() {
  return (
    <Sidebar
      logo="/logo.svg"
      navItems={navItems}
      footerItems={footerItems}
    />
  );
}
```

## Props

- `logo`: Logo image source
- `navItems`: Array of navigation items
- `footerItems`: Array of footer items
- All other div props are supported

## Navigation Item

Each navigation item can have:
- `icon`: Icon component
- `label`: Navigation label
- `href`: Navigation link
- `active`: Active state (optional)

## Footer Item

Each footer item can have:
- `icon`: Icon component
- `label`: Item label
- `onClick`: Click handler

## Features

- Fixed positioning
- Responsive design
- Icon support
- Active state highlighting
- Hover effects
- TypeScript support
- Uses CSS variables for theming
