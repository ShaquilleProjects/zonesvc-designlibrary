import { Datepicker } from './Datepicker';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  argTypes: {
    value: {
      control: { type: 'date' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export const Basic = {
  args: {
    label: 'Select date',
    placeholder: 'Choose a date',
  },
};

export const WithDate = {
  args: {
    label: 'Select date',
    value: new Date(),
  },
};

export const WithRange = {
  args: {
    label: 'Select date',
    minDate: new Date(),
    maxDate: new Date('2025-12-31'),
  },
};

export const Disabled = {
  args: {
    label: 'Select date',
    disabled: true,
  },
};

export const WithError = {
  args: {
    label: 'Select date',
    error: 'This field is required',
  },
};
