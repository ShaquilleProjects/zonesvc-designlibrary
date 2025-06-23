# @zone-ui/tabs

A versatile tabs component with multiple layout options and customization.

## Installation

```bash
npm install @zone-ui/tabs @zone-ui/theme-provider
```

## Usage

```tsx
import { Tabs, Tab } from '@zone-ui/tabs';

function App() {
  return (
    <Tabs>
      <Tab title="Tab 1">
        <p>Content for tab 1</p>
      </Tab>
      
      <Tab title="Tab 2">
        <p>Content for tab 2</p>
      </Tab>
    </Tabs>
  );
}
```

## Props

### Tabs Props

- `children`: Tab items
- `className`: Additional class names
- `vertical`: Use vertical layout
- `centered`: Center tabs
- `justified`: Justify tabs
- `rounded`: Use rounded corners
- `pill`: Use pill style
- `icon`: Use icon layout
- `initialActiveTab`: Initial active tab index

### Tab Props

- `title`: Tab title
- `icon`: Optional icon component
- `children`: Tab content

## Features

- Horizontal and vertical layouts
- Multiple styling options
- Icon support
- Keyboard navigation
- ARIA attributes
- TypeScript support
- Uses CSS variables for theming
