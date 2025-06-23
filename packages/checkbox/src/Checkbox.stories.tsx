import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    label: 'I agree to the terms and conditions',
    name: 'terms',
  },
};

export const Checked = {
  args: {
    label: 'I agree to the terms and conditions',
    name: 'terms',
    checked: true,
  },
};

export const Disabled = {
  args: {
    label: 'I agree to the terms and conditions',
    name: 'terms',
    disabled: true,
  },
};

export const WithError = {
  args: {
    label: 'I agree to the terms and conditions',
    name: 'terms',
    error: 'This field is required',
  },
};

export const Group = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox
        label="Option 1"
        name="option1"
        value="1"
      />
      <Checkbox
        label="Option 2"
        name="option2"
        value="2"
      />
      <Checkbox
        label="Option 3"
        name="option3"
        value="3"
        disabled
      />
    </div>
  ),
};
