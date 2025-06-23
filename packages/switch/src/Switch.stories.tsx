import { Switch } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
};

export const Basic = {
  args: {
    label: 'Toggle notifications',
    size: 'medium',
    type: 'primary',
    variant: 'filled',
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch label="Small" size="small" />
      <Switch label="Medium" size="medium" />
      <Switch label="Large" size="large" />
    </div>
  ),
};

export const Types = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch label="Primary" type="primary" />
      <Switch label="Success" type="success" />
      <Switch label="Warning" type="warning" />
      <Switch label="Danger" type="danger" />
      <Switch label="Info" type="info" />
      <Switch label="Secondary" type="secondary" />
    </div>
  ),
};

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch label="Filled" variant="filled" />
      <Switch label="Outline" variant="outline" />
    </div>
  ),
};

export const Rounded = {
  args: {
    label: 'Toggle notifications',
    rounded: true,
    label: 'Enable notifications',
    name: 'notifications',
    disabled: true,
  },
};

export const WithError = {
  args: {
    label: 'Enable notifications',
    name: 'notifications',
    error: 'This field is required',
  },
};
