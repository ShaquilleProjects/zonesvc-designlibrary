import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    prefix: {
      control: { type: 'text' },
    },
    suffix: {
      control: { type: 'text' },
    },
  },
};

export const Basic = {
  args: {
    placeholder: 'Enter text',
  },
};

export const WithLabel = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
  },
};

export const WithPrefixSuffix = {
  args: {
    prefix: '$',
    suffix: 'USD',
    placeholder: 'Amount',
  },
};

export const WithError = {
  args: {
    error: 'This field is required',
    placeholder: 'Enter text',
  },
};

export const AllFeatures = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input label="Basic" placeholder="Enter text" />
      <Input
        label="With Prefix and Suffix"
        prefix="$"
        suffix="USD"
        placeholder="Amount"
      />
      <Input
        label="With Error"
        error="This field is required"
        placeholder="Enter text"
      />
    </div>
  ),
};
