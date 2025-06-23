# Button

A modern, minimalistic button component for Zone UI.

## Usage

```tsx
import { Button } from '@zone-ui/button';

<Button>Click me</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'primary' | Button variant (primary, secondary, ghost, danger) |
| size | string | 'medium' | Button size (small, medium, large) |
| loading | boolean | false | Show loading state |
| disabled | boolean | false | Disable button |
| children | ReactNode | - | Button content |

## Examples

### Primary Button

```tsx
import { Button } from '@zone-ui/button';

<Button>Primary Button</Button>
```

### Secondary Button

```tsx
import { Button } from '@zone-ui/button';

<Button variant="secondary">Secondary Button</Button>
```

### Loading State

```tsx
import { Button } from '@zone-ui/button';

<Button variant="primary" loading>
  Loading...
</Button>
```

### Disabled State

```tsx
import { Button } from '@zone-ui/button';

<Button disabled>
  Disabled
</Button>
```

### Different Sizes

```tsx
import { Button } from '@zone-ui/button';

<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```
