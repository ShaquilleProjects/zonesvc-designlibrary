import { Select } from './Select';

const options = [
  { value: 'USD', label: 'US Dollar' },
  { value: 'EUR', label: 'Euro' },
  { value: 'GBP', label: 'British Pound' },
];

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    options: {
      control: { type: 'object' },
    },
    value: {
      control: { type: 'text' },
    },
  },
};

export const Basic = {
  args: {
    options,
    placeholder: 'Select currency',
  },
};

export const WithLabel = {
  args: {
    options,
    label: 'Currency',
    placeholder: 'Select currency',
  },
};

export const WithError = {
  args: {
    options,
    error: 'This field is required',
    placeholder: 'Select currency',
  },
};

export const Disabled = {
  args: {
    options,
    disabled: true,
    placeholder: 'Select currency',
  },
};

export const AllFeatures = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Select
        options={options}
        label="Basic"
        placeholder="Select currency"
      />
      <Select
        options={options}
        label="With Error"
        error="This field is required"
        placeholder="Select currency"
      />
      <Select
        options={options}
        label="Disabled"
        disabled
        placeholder="Select currency"
      />
    </div>
  ),
};
