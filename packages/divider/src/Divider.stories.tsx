import { Divider } from './Divider';

export default {
  title: 'Components/Divider',
  component: Divider,
};

export const Basic = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Divider />
      <Divider>Or</Divider>
    </div>
  ),
};

export const Vertical = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div>Section 1</div>
      <Divider vertical />
      <div>Section 2</div>
    </div>
  ),
};

export const Styles = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Divider>Default</Divider>
      <Divider dashed>Dashed</Divider>
      <Divider dotted>Dotted</Divider>
      <Divider thick>Thick</Divider>
      <Divider thin>Thin</Divider>
    </div>
  ),
};

export const Colors = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Divider type="primary">Primary</Divider>
      <Divider type="success">Success</Divider>
      <Divider type="warning">Warning</Divider>
      <Divider type="danger">Danger</Divider>
      <Divider type="info">Info</Divider>
    </div>
  ),
};

export const Justify = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Divider justify="center">Center</Divider>
      <Divider justify="start">Start</Divider>
      <Divider justify="end">End</Divider>
      <Divider justify="between">Between</Divider>
      <Divider justify="around">Around</Divider>
      <Divider justify="evenly">Evenly</Divider>
    </div>
  ),
};

export const NoLine = {
  args: {
    children: 'No Line',
    noLine: true,
  },
};
