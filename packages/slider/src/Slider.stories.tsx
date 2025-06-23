import { Slider } from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    value: {
      control: { type: 'number' },
    },
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'number' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export const Basic = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    label: 'Volume',
  },
};

export const CustomRange = {
  args: {
    value: 25,
    min: 0,
    max: 50,
    step: 5,
    label: 'Custom Range',
  },
};

export const Disabled = {
  args: {
    value: 30,
    min: 0,
    max: 100,
    step: 1,
    label: 'Disabled',
    disabled: true,
  },
};

export const WithError = {
  args: {
    value: 75,
    min: 0,
    max: 100,
    step: 1,
    label: 'Volume',
    error: 'Value must be between 0 and 100',
  },
};
