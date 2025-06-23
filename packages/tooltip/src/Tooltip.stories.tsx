import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

const Template = (args) => (
  <Tooltip {...args}>
    <button>Hover me</button>
  </Tooltip>
);

export const Basic = Template.bind({});
Basic.args = {
  content: 'This is a tooltip',
  position: 'top',
};

export const Top = Template.bind({});
Top.args = {
  content: 'Top tooltip',
  position: 'top',
  theme: 'dark',
};

export const Bottom = Template.bind({});
Bottom.args = {
  content: 'Bottom tooltip',
  position: 'bottom',
  theme: 'light',
};

export const Left = Template.bind({});
Left.args = {
  content: 'Left tooltip',
  position: 'left',
  theme: 'primary',
};

export const Right = Template.bind({});
Right.args = {
  content: 'Right tooltip',
  position: 'right',
  theme: 'success',
};

export const WithDelay = Template.bind({});
WithDelay.args = {
  content: 'Delayed tooltip',
  position: 'top',
  delay: 500,
};

export const WithAnimation = Template.bind({});
WithAnimation.args = {
  content: 'Animated tooltip',
  position: 'top',
  animation: 'slide',
};

export const CustomTheme = Template.bind({});
CustomTheme.args = {
  content: 'Custom theme tooltip',
  position: 'top',
  theme: 'warning',
};
