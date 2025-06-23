import { Spinner } from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

export const Basic = {
  args: {
    text: 'Loading...',
    type: 'primary',
    size: 'medium',
  },
};

export const Types = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Spinner text="Primary" type="primary" />
      <Spinner text="Success" type="success" />
      <Spinner text="Warning" type="warning" />
      <Spinner text="Danger" type="danger" />
      <Spinner text="Info" type="info" />
      <Spinner text="Secondary" type="secondary" />
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Spinner text="Small" size="small" />
      <Spinner text="Medium" size="medium" />
      <Spinner text="Large" size="large" />
    </div>
  ),
};

export const Centered = {
  args: {
    text: 'Loading...',
    centered: true,
  },
};

export const FullScreen = {
  args: {
    text: 'Loading...',
    fullScreen: true,
  },
};

export const Simple = {
  args: {
    text: 'Loading...',
    simple: true,
  },
};

export const Inline = {
  args: {
    text: 'Loading...',
    inline: true,
  },
};

export const Rounded = {
  args: {
    text: 'Loading...',
    rounded: true,
  },
};

export const Shadow = {
  args: {
    text: 'Loading...',
    shadow: true,
  },
};
