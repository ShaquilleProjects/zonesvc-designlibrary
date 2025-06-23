import { Stepper } from './Stepper';

const steps = [
  { title: 'Step 1', description: 'First step' },
  { title: 'Step 2', description: 'Second step' },
  { title: 'Step 3', description: 'Final step' },
];

export default {
  title: 'Components/Stepper',
  component: Stepper,
};

export const Basic = {
  args: {
    steps,
    activeStep: 1,
  },
};

export const Horizontal = {
  args: {
    steps,
    activeStep: 1,
    orientation: 'horizontal',
  },
};

export const Vertical = {
  args: {
    steps,
    activeStep: 1,
    orientation: 'vertical',
  },
};

export const Statuses = {
  args: {
    steps: [
      { title: 'Step 1', status: 'completed' },
      { title: 'Step 2', status: 'active' },
      { title: 'Step 3', status: 'warning' },
      { title: 'Step 4', status: 'error' },
      { title: 'Step 5', status: 'info' },
      { title: 'Step 6', status: 'secondary' },
    ],
    activeStep: 1,
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Stepper
        steps={steps}
        activeStep={1}
        size="small"
      />
      <Stepper
        steps={steps}
        activeStep={1}
        size="medium"
      />
      <Stepper
        steps={steps}
        activeStep={1}
        size="large"
      />
    </div>
  ),
};

export const Rounded = {
  args: {
    steps,
    activeStep: 1,
    rounded: true,
  },
};

export const Shadow = {
  args: {
    steps,
    activeStep: 1,
    shadow: true,
  },
};
