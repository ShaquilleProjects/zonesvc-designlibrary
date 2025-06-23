# @zone-ui/modal

A versatile modal component with various sizes, animations, and layouts.

## Installation

```bash
npm install @zone-ui/modal @zone-ui/theme-provider @zone-ui/button
```

## Usage

```tsx
import { Modal, Button } from '@zone-ui/modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirmation"
        size="medium"
        centered={true}
        withAnimation={true}
      >
        <p>Are you sure you want to proceed?</p>
        <div>
          <Button onClick={() => setIsOpen(false)} variant="ghost">
            Cancel
          </Button>
          <Button onClick={() => console.log('Confirmed')}>
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  );
}
```

## Props

- `isOpen`: Controls modal visibility
- `onClose`: Callback when modal closes
- `title`: Modal title
- `children`: Modal content
- `actions`: Optional action buttons
- `size`: Modal size ('small', 'medium', 'large', 'fullscreen')
- `centered`: Center modal vertically and horizontally
- `withOverlay`: Show overlay behind modal
- `withAnimation`: Enable entrance animation
- All other div props are supported

## Features

- Multiple sizes (small, medium, large, fullscreen)
- Centered positioning
- Overlay support
- Smooth animations
- Keyboard navigation
- ARIA attributes for accessibility
- TypeScript support
- Uses CSS variables for theming
