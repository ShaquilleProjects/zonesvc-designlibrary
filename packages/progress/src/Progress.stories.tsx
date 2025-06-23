import { Progress } from './Progress';

export default {
  title: 'Components/Progress',
  component: Progress,
};

export const Basic = {
  args: {
    value: 75,
    max: 100,
    label: 'Progress',
    showPercentage: true,
    type: 'primary',
  },
};

export const Types = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Progress value={75} type="primary" label="Primary" />
      <Progress value={75} type="success" label="Success" />
      <Progress value={75} type="warning" label="Warning" />
      <Progress value={75} type="danger" label="Danger" />
      <Progress value={75} type="info" label="Info" />
    </div>
  ),
};

export const Striped = {
  args: {
    ...Basic.args,
    striped: true,
  },
};

export const Animated = {
  args: {
    ...Basic.args,
    animated: true,
  },
};

export const Vertical = {
  args: {
    ...Basic.args,
    vertical: true,
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Progress value={75} size="small" label="Small" />
      <Progress value={75} size="medium" label="Medium" />
      <Progress value={75} size="large" label="Large" />
    </div>
  ),
};

export const Simple = {
  args: {
    ...Basic.args,
    simple: true,
  },
};

export const Rounded = {
  args: {
    ...Basic.args,
    rounded: true,
  },
};

export const Shadow = {
  args: {
    ...Basic.args,
    shadow: true,
  },
};
