import { Chip } from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
};

export const Basic = {
  args: {
    children: 'Basic',
  },
};

export const Types = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Chip type="primary">Primary</Chip>
      <Chip type="success">Success</Chip>
      <Chip type="warning">Warning</Chip>
      <Chip type="danger">Danger</Chip>
      <Chip type="info">Info</Chip>
    </div>
  ),
};

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Chip type="primary" variant="filled">Filled</Chip>
      <Chip type="primary" variant="outline">Outline</Chip>
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Chip type="primary" size="small">Small</Chip>
      <Chip type="primary" size="medium">Medium</Chip>
      <Chip type="primary" size="large">Large</Chip>
    </div>
  ),
};

export const WithIcon = {
  args: {
    children: 'With Icon',
    icon: 'StarIcon',
  },
};

export const Removable = {
  args: {
    children: 'Removable',
    onClose: () => console.log('Removed'),
  },
};

export const Clickable = {
  args: {
    children: 'Clickable',
    onClick: () => console.log('Clicked'),
  },
};

export const Selected = {
  args: {
    children: 'Selected',
    selected: true,
  },
};
