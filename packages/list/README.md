# @zone-ui/list

A versatile list component with multiple layout options and customization.

## Installation

```bash
npm install @zone-ui/list @zone-ui/theme-provider
```

## Usage

```tsx
import { List, ListItem } from '@zone-ui/list';

function App() {
  return (
    <List>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  );
}
```

## Props

### List Props

- `children`: List items
- `className`: Additional class names
- `vertical`: Vertical layout
- `horizontal`: Horizontal layout
- `inline`: Inline layout
- `flush`: Remove padding
- `borderless`: Remove border
- `rounded`: Use rounded corners
- `shadow`: Add shadow
- `hoverable`: Make entire list hoverable
- `striped`: Alternate row colors
- `onClick`: Click handler

### ListItem Props

- `children`: Item content
- `className`: Additional class names
- `icon`: Icon component
- `thumbnail`: Thumbnail content
- `title`: Item title
- `description`: Item description
- `actions`: Action buttons
- `active`: Active state
- `disabled`: Disabled state
- `selected`: Selected state
- `onClick`: Click handler
- `hoverable`: Make item hoverable

## Features

- Multiple layouts (vertical, horizontal, inline)
- Thumbnail support
- Icon support
- Multiple states (active, disabled, selected)
- Clickable items
- Keyboard navigation
- ARIA attributes
- TypeScript support
- Uses CSS variables for theming
