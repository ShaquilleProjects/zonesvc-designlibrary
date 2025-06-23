import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
};

export const Basic = {
  args: {
    children: 'Badge',
    type: 'secondary',
  },
};

export const Types = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Badge type="primary">Primary</Badge>
      <Badge type="success">Success</Badge>
      <Badge type="warning">Warning</Badge>
      <Badge type="danger">Danger</Badge>
      <Badge type="info">Info</Badge>
    </div>
  ),
};

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Badge type="primary" variant="filled">Filled</Badge>
      <Badge type="primary" variant="outline">Outline</Badge>
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Badge type="primary" size="small">Small</Badge>
      <Badge type="primary" size="medium">Medium</Badge>
      <Badge type="primary" size="large">Large</Badge>
    </div>
  ),
};

export const Shapes = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Badge type="primary" shape="default">Default</Badge>
      <Badge type="primary" shape="pill">Pill</Badge>
      <Badge type="primary" shape="dot">Dot</Badge>
    </div>
  ),
};

export const WithIcon = {
  args: {
    children: 'With Icon',
    type: 'primary',
    icon: 'StarIcon',
  },
};
