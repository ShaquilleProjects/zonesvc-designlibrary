# @zone-ui/drawer

A versatile drawer component that slides in from any edge of the screen.

## Installation

```bash
npm install @zone-ui/drawer @zone-ui/theme-provider @zone-ui/button
```

## Usage

```tsx
import { Drawer, Button } from '@zone-ui/drawer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Settings"
        position="right"
        size="medium"
      >
        <p>Drawer content goes here</p>
        <div>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => console.log('Saved')}>
            Save
          </Button>
        </div>
      </Drawer>
    </>
  );
}
```

## Props

- `isOpen`: Controls drawer visibility
- `onClose`: Callback when drawer closes
- `title`: Drawer title
- `children`: Drawer content
- `actions`: Optional action buttons
- `position`: Drawer position ('left', 'right', 'top', 'bottom')
- `size`: Drawer size ('small', 'medium', 'large', 'fullscreen')
- `customWidth`: Custom width for drawer
- All other div props are supported

## Features

- Multiple positions (left, right, top, bottom)
- Multiple sizes (small, medium, large, fullscreen)
- Custom width support
- Smooth animations
- Keyboard navigation
- ARIA attributes for accessibility
- TypeScript support
- Uses CSS variables for theming
