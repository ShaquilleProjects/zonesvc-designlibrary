# @zone-ui/accordion

A versatile accordion component with multiple options and customization.

## Installation

```bash
npm install @zone-ui/accordion @zone-ui/theme-provider
```

## Usage

```tsx
import { Accordion, AccordionItem } from '@zone-ui/accordion';

function App() {
  return (
    <Accordion>
      <AccordionItem title="Section 1">
        <p>Content for section 1</p>
      </AccordionItem>
      
      <AccordionItem title="Section 2">
        <p>Content for section 2</p>
      </AccordionItem>
    </Accordion>
  );
}
```

## Props

### Accordion Props

- `children`: Accordion items
- `multiple`: Allow multiple sections to be open
- `className`: Additional class names
- `flush`: Remove borders between items
- `rounded`: Add rounded corners
- `bordered`: Add borders to items
- `shadow`: Add shadow to items
- `compact`: Use compact spacing

### AccordionItem Props

- `title`: Section title
- `children`: Section content
- `expanded`: Initial expanded state
- `onToggle`: Callback when section is toggled

## Features

- Multiple sections
- Expand/collapse animations
- Multiple open states
- Flush design
- Rounded corners
- Border options
- Shadow effects
- Compact mode
- Keyboard navigation
- ARIA attributes
- TypeScript support
- Uses CSS variables for theming
