# @zone-ui/button

A versatile button component with multiple variants and sizes.

## Installation

```bash
npm install @zone-ui/button @zone-ui/theme-provider
```

## Usage

```tsx
import { Button } from '@zone-ui/button';

function App() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </>
  );
}
```

## Props

- `variant`: 'primary' | 'secondary' | 'ghost' | 'danger'
- `size`: 'small' | 'medium' | 'large'
- `loading`: boolean
- All other button props are supported

## Variants

- `primary`: Main call-to-action button
- `secondary`: Secondary action button
- `ghost`: Subtle button with border
- `danger`: Warning/critical action button

## Sizes

- `small`: Compact button
- `medium`: Default size
- `large`: Prominent button

## Loading State

Show a loading spinner:

```tsx
<Button variant="primary" loading>
  Loading...
</Button>
```
