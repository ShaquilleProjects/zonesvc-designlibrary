import { Tabs, Tab } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const Template = (args) => (
  <Tabs {...args}>
    <Tab title="Tab 1">
      <p>Content for tab 1</p>
    </Tab>
    <Tab title="Tab 2">
      <p>Content for tab 2</p>
    </Tab>
    <Tab title="Tab 3">
      <p>Content for tab 3</p>
    </Tab>
  </Tabs>
);

export const Basic = Template.bind({});

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
};

export const Centered = Template.bind({});
Centered.args = {
  centered: true,
};

export const Justified = Template.bind({});
Justified.args = {
  justified: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
};

export const Pill = Template.bind({});
Pill.args = {
  pill: true,
};

export const Icon = Template.bind({});
Icon.args = {
  icon: true,
  children: (
    <>
      <Tab title="Tab 1" icon={HomeIcon}>
        <p>Content for tab 1</p>
      </Tab>
      <Tab title="Tab 2" icon={SettingsIcon}>
        <p>Content for tab 2</p>
      </Tab>
      <Tab title="Tab 3" icon={InfoIcon}>
        <p>Content for tab 3</p>
      </Tab>
    </>
  ),
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  children: (
    <>
      <Tab title="Profile">
        <div>
          <h3>Profile Information</h3>
          <p>User profile content</p>
          <button>Edit Profile</button>
        </div>
      </Tab>
      <Tab title="Settings">
        <div>
          <h3>Account Settings</h3>
          <p>Account settings content</p>
          <button>Save Settings</button>
        </div>
      </Tab>
    </>
  ),
};
