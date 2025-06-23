import { Skeleton } from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
};

export const Basic = {
  args: {
    type: 'text',
  },
};

export const Circle = {
  args: {
    type: 'circle',
  },
};

export const Rounded = {
  args: {
    type: 'rounded',
  },
};

export const Full = {
  args: {
    type: 'full',
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Skeleton type="small" />
      <Skeleton type="medium" />
      <Skeleton type="large" />
    </div>
  ),
};

export const Avatar = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Skeleton type="avatar" />
      <Skeleton type="avatar-large" />
      <Skeleton type="avatar-xlarge" />
    </div>
  ),
};

export const List = {
  args: {
    type: 'list',
  },
};

export const Grid = {
  args: {
    type: 'grid',
    count: 4,
  },
};

export const Custom = {
  args: {
    className: 'w-32 h-8',
  },
};

export const Delayed = {
  args: {
    type: 'text',
    delay: true,
  },
};

export const Speed = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Skeleton type="text" speed="slow" />
      <Skeleton type="text" />
      <Skeleton type="text" speed="fast" />
    </div>
  ),
};
