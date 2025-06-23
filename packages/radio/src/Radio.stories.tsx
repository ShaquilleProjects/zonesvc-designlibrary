import { Radio } from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export const Basic = {
  args: {
    label: 'Option 1',
    name: 'options',
    value: '1',
  },
};

export const Checked = {
  args: {
    label: 'Option 1',
    name: 'options',
    value: '1',
    checked: true,
  },
};

export const Disabled = {
  args: {
    label: 'Option 1',
    name: 'options',
    value: '1',
    disabled: true,
  },
};

export const WithError = {
  args: {
    label: 'Option 1',
    name: 'options',
    value: '1',
    error: 'This field is required',
  },
};

export const Group = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio
        label="Option 1"
        name="options"
        value="1"
      />
      <Radio
        label="Option 2"
        name="options"
        value="2"
        checked
      />
      <Radio
        label="Option 3"
        name="options"
        value="3"
        disabled
      />
    </div>
  ),
};
