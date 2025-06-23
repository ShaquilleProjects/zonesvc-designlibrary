import { Modal } from './Modal';
import { Button } from "@zone-ui/button";

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <p>Modal content goes here</p>
        <div>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => console.log('Confirmed')}>
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  title: 'Basic Modal',
};

export const Centered = Template.bind({});
Centered.args = {
  title: 'Centered Modal',
  centered: true,
};

export const WithAnimation = Template.bind({});
WithAnimation.args = {
  title: 'Animated Modal',
  withAnimation: true,
};

export const Small = Template.bind({});
Small.args = {
  title: 'Small Modal',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  title: 'Large Modal',
  size: 'large',
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  title: 'Fullscreen Modal',
  size: 'fullscreen',
};
