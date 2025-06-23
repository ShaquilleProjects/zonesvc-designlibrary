import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

export const Basic = {
  args: {
    type: 'info',
    title: 'Information',
    description: 'This is an informational message',
  },
};

export const Success = {
  args: {
    type: 'success',
    title: 'Success',
    description: 'Operation completed successfully',
  },
};

export const Warning = {
  args: {
    type: 'warning',
    title: 'Warning',
    description: 'Please review the following information',
  },
};

export const Error = {
  args: {
    type: 'danger',
    title: 'Error',
    description: 'An error occurred',
  },
};

export const Dismissable = {
  args: {
    type: 'info',
    title: 'Dismissable Alert',
    description: 'You can close this alert',
    dismissable: true,
  },
};

export const WithIcon = {
  args: {
    type: 'info',
    title: 'With Icon',
    description: 'This alert has an icon',
    icon: 'InfoIcon',
  },
};

export const FullWidth = {
  args: {
    type: 'info',
    title: 'Full Width',
    description: 'This alert takes full width',
    fullWidth: true,
  },
};

export const Rounded = {
  args: {
    type: 'info',
    title: 'Rounded',
    description: 'This alert has rounded corners',
    rounded: true,
  },
};

export const Outlined = {
  args: {
    type: 'info',
    title: 'Outlined',
    description: 'This alert has an outlined style',
    outlined: true,
  },
};
