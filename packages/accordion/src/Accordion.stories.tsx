import { Accordion, AccordionItem } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
};

const Template = (args) => (
  <Accordion {...args}>
    <AccordionItem title="Section 1">
      <p>Content for section 1</p>
    </AccordionItem>
    <AccordionItem title="Section 2">
      <p>Content for section 2</p>
    </AccordionItem>
    <AccordionItem title="Section 3">
      <p>Content for section 3</p>
    </AccordionItem>
  </Accordion>
);

export const Basic = Template.bind({});
Basic.args = {
  multiple: false,
};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
};

export const Flush = Template.bind({});
Flush.args = {
  flush: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
};

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};

export const Compact = Template.bind({});
Compact.args = {
  compact: true,
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  children: (
    <>
      <AccordionItem title="Section 1" expanded>
        <p>Expanded content for section 1</p>
      </AccordionItem>
      <AccordionItem title="Section 2">
        <div>
          <h4>Subsection</h4>
          <p>Content for section 2</p>
          <button>Button</button>
        </div>
      </AccordionItem>
    </>
  ),
};
