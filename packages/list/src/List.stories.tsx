import { List, ListItem } from './List';

export default {
  title: 'Components/List',
  component: List,
};

export const Basic = {
  render: () => (
    <List>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  ),
};

export const Horizontal = {
  render: () => (
    <List horizontal>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  ),
};

export const Inline = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <List inline>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    </div>
  ),
};

export const WithIcon = {
  render: () => (
    <List>
      <ListItem icon={HomeIcon}>Home</ListItem>
      <ListItem icon={SettingsIcon}>Settings</ListItem>
      <ListItem icon={InfoIcon}>Info</ListItem>
    </List>
  ),
};

export const WithThumbnail = {
  render: () => (
    <List>
      <ListItem
        thumbnail={<div style={{ backgroundColor: 'var(--zui-primary)' }}>1</div>}
        title="Item 1"
        description="Description for item 1"
      >
        <div className="list__actions">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </ListItem>
      <ListItem
        thumbnail={<div style={{ backgroundColor: 'var(--zui-success)' }}>2</div>}
        title="Item 2"
        description="Description for item 2"
      >
        <div className="list__actions">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </ListItem>
    </List>
  ),
};

export const States = {
  render: () => (
    <List>
      <ListItem active>Active Item</ListItem>
      <ListItem disabled>Disabled Item</ListItem>
      <ListItem selected>Selected Item</ListItem>
    </List>
  ),
};

export const Clickable = {
  render: () => (
    <List>
      <ListItem onClick={() => console.log('Clicked')}>
        Clickable Item
      </ListItem>
    </List>
  ),
};

export const Striped = {
  render: () => (
    <List striped>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
      <ListItem>Item 4</ListItem>
    </List>
  ),
};
