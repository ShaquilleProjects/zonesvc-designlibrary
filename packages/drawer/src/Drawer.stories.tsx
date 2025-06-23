import { Drawer } from './Drawer';
import { Button } from "@zone-ui/button";

export default {
  title: 'Components/Drawer',
  component: Drawer,
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <p>Drawer content goes here</p>
        <div>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => console.log('Saved')}>
            Save
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  title: 'Basic Drawer',
  position: 'right',
};

export const Left = Template.bind({});
Left.args = {
  title: 'Left Drawer',
  position: 'left',
};

export const Top = Template.bind({});
Top.args = {
  title: 'Top Drawer',
  position: 'top',
};

export const Bottom = Template.bind({});
Bottom.args = {
  title: 'Bottom Drawer',
  position: 'bottom',
};

export const Small = Template.bind({});
Small.args = {
  title: 'Small Drawer',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  title: 'Large Drawer',
  size: 'large',
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  title: 'Fullscreen Drawer',
  size: 'fullscreen',
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  title: 'Custom Width Drawer',
  customWidth: '400px',
};
