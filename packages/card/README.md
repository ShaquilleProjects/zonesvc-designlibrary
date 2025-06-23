# @zone-ui/card

A versatile card component with multiple layout options and customization.

## Installation

```bash
npm install @zone-ui/card @zone-ui/theme-provider
```

## Usage

```tsx
import { Card } from '@zone-ui/card';

function App() {
  return (
    <>
      {/* Basic Card */}
      <Card
        title="Basic Card"
        subtitle="A simple card"
      >
        <p>Card content goes here</p>
      </Card>

      {/* Card with Image */}
      <Card
        title="Card with Image"
        image="path/to/image.jpg"
      >
        <p>Card content with image</p>
      </Card>

      {/* Card with Overlay */}
      <Card
        title="Card with Overlay"
        image="path/to/image.jpg"
        overlay
      >
        <p>Card content with overlay</p>
      </Card>

      {/* Card with Actions */}
      <Card
        title="Card with Actions"
        actions={
          <>
            <Button variant="ghost">Cancel</Button>
            <Button>Save</Button>
          </>
        }
      >
        <p>Card content with actions</p>
      </Card>
    </>
  );
}
```

## Props

- `children`: Card content
- `title`: Card title
- `subtitle`: Card subtitle
- `image`: Image source
- `overlay`: Use image overlay
- `actions`: Card actions
- `className`: Additional class names
- `elevated`: Add elevation
- `bordered`: Add border
- `rounded`: Use rounded corners
- `fullWidth`: Make card full width
- `compact`: Use compact layout
- `hoverable`: Add hover effect
- All other div props are supported

## Features

- Header with title and subtitle
- Image support with overlay option
- Footer with actions
- Multiple layout options
- Hover effects
- Responsive design
- TypeScript support
- Uses CSS variables for theming
