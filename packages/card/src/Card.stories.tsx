import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

export const Basic = {
  args: {
    title: 'Basic Card',
    children: <p>This is a basic card</p>,
  },
};

export const WithImage = {
  args: {
    title: 'Card with Image',
    image: 'https://picsum.photos/400/200',
    children: <p>This card has an image</p>,
  },
};

export const WithOverlay = {
  args: {
    title: 'Card with Overlay',
    image: 'https://picsum.photos/400/200',
    overlay: true,
    children: <p>This card has an overlay</p>,
  },
};

export const WithActions = {
  args: {
    title: 'Card with Actions',
    children: <p>This card has actions</p>,
    actions: (
      <>
        <button>Cancel</button>
        <button>Save</button>
      </>
    ),
  },
};

export const Elevated = {
  args: {
    title: 'Elevated Card',
    elevated: true,
    children: <p>This card has elevation</p>,
  },
};

export const Bordered = {
  args: {
    title: 'Bordered Card',
    bordered: true,
    children: <p>This card has a border</p>,
  },
};

export const Rounded = {
  args: {
    title: 'Rounded Card',
    rounded: true,
    children: <p>This card has rounded corners</p>,
  },
};

export const FullWidth = {
  args: {
    title: 'Full Width Card',
    fullWidth: true,
    children: <p>This card takes full width</p>,
  },
};

export const Compact = {
  args: {
    title: 'Compact Card',
    compact: true,
    children: <p>This card has compact padding</p>,
  },
};

export const Hoverable = {
  args: {
    title: 'Hoverable Card',
    hoverable: true,
    children: <p>This card has a hover effect</p>,
  },
};
