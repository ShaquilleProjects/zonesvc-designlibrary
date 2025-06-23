import { useState } from 'react';
import { ThemeProvider } from '../../packages/theme-provider/src';
import { Button } from '../../packages/button/src/Button';
import { Select } from '../../packages/select/src/Select';
import { Accordion, AccordionItem } from '../../packages/accordion/src/Accordion';
import { Card } from '../../packages/card/src/Card';
import { Alert } from '../../packages/alert/src/Alert';
import { Badge } from '../../packages/badge/src/Badge';
import { Breadcrumb } from '../../packages/breadcrumb/src/Breadcrumb';
import { Checkbox } from '../../packages/checkbox/src/Checkbox';
import { Datepicker } from '../../packages/datepicker/src/Datepicker';
import { Drawer } from '../../packages/drawer/src/Drawer';
import { Input } from '../../packages/input/src/Input';
import { Modal } from '../../packages/modal/src/Modal';
import { Radio } from '../../packages/radio/src/Radio';
import { Sidebar } from '../../packages/sidebar/src/Sidebar';
import { Switch } from '../../packages/switch/src/Switch';
import { Progress } from '../../packages/progress/src/Progress';
import { Skeleton } from '../../packages/skeleton/src/Skeleton';
import { Tabs, Tab } from '../../packages/tabs/src/Tabs';
import { Tooltip } from '../../packages/tooltip/src/Tooltip';
import { Spinner } from '../../packages/spinner/src/Spinner';
import { Stepper } from '../../packages/stepper/src/Stepper';
import { Table } from '../../packages/table/src/Table';

const App: React.FC = () => {
  const [buttonVariant, setButtonVariant] = useState<'primary' | 'secondary' | 'ghost' | 'danger'>('primary');
  const [buttonSize, setButtonSize] = useState<'small' | 'large'>('large');
  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [datepickerSelectedDate, setDatepickerSelectedDate] = useState<Date | null>(null);
  const [selectSelectedOption, setSelectSelectedOption] = useState<string | number>('');
  const [radioOption, setRadioOption] = useState<string>('');
  const [modalShow, setModalShow] = useState(false);
  const [drawerShow, setDrawerShow] = useState(false);
  const [tooltipShow, setTooltipShow] = useState(false);
  const [sidebarShow, setSidebarShow] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [progressShow, setProgressShow] = useState(false);
  const [skeletonShow, setSkeletonShow] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  const [inputValue, setInputValue] = useState('');
  const tabs = [
    { id: 'tab1', title: 'Tab 1' },
    { id: 'tab2', title: 'Tab 2' },
    { id: 'tab3', title: 'Tab 3' }
  ];

  return (
    <ThemeProvider>
      <div className="app-container">
        <div className="components-wrapper">
          <div className="sidebar">
            <div className="sidebar-header">
              <h1>Zone UI Components</h1>
            </div>
            <nav className="sidebar-nav">
              <ul>
                <li>
                  <Button variant="primary" onClick={() => setButtonVariant('primary')}>
                    Button
                  </Button>
                </li>
                <li>
                  <Button variant="secondary" onClick={() => setButtonVariant('secondary')}>
                    Button
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" onClick={() => setButtonVariant('ghost')}>
                    Button
                  </Button>
                </li>
                <li>
                  <Button variant="danger" onClick={() => setButtonVariant('danger')}>
                    Button
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="main-content">
            <div className="component-section">
              <h2>Button</h2>
              <div className="controls">
                <Select
                  value={buttonVariant}
                  onChange={(value: string | number) => setButtonVariant(value as 'primary' | 'secondary' | 'ghost' | 'danger')}
                  options={[
                    { value: 'primary', label: 'Primary' },
                    { value: 'secondary', label: 'Secondary' },
                    { value: 'ghost', label: 'Ghost' },
                    { value: 'danger', label: 'Danger' }
                  ]}
                />
                <Select
                  value={buttonSize}
                  onChange={(value: string | number) => setButtonSize(value as typeof buttonSize)}
                  options={[
                    { value: 'small', label: 'Small' },
                    { value: 'large', label: 'Large' }
                  ]}
                />
                <Checkbox
                  label="Loading"
                  checked={buttonLoading}
                  onChange={(e) => setButtonLoading(e.target.checked)}
                />
                <Checkbox
                  label="Disable Button"
                  checked={buttonDisabled}
                  onChange={(e) => setButtonDisabled(e.target.checked)}
                />
              </div>
              <div className="demo">
                <Button
                  variant={buttonVariant}
                  size={buttonSize}
                  loading={buttonLoading}
                  disabled={buttonDisabled}
                  onClick={() => alert('Button clicked!')}
                >
                  Click me
                </Button>
              </div>
            </div>
            <div className="component-section">
              <h2>Accordion</h2>
              <div className="controls">
                <Checkbox
                  label="Open Accordion"
                  checked={accordionOpen}
                  onChange={(e) => setAccordionOpen(e.target.checked)}
                />
              </div>
              <div className="demo">
                <Accordion open={accordionOpen}>
                  <AccordionItem title="Accordion Item 1">
                    <p>This is the content of the first accordion item.</p>
                  </AccordionItem>
                  <AccordionItem title="Accordion Item 2">
                    <p>This is the content of the second accordion item.</p>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="component-section">
              <h2>Alert</h2>
              <div className="controls">
                <Checkbox
                  label="Show Alert"
                  checked={alertShow}
                  onChange={(e) => setAlertShow(e.target.checked)}
                />
              </div>
              <div className="demo">
                {alertShow && (
                  <Alert type="success" description="This is a success alert!" />
                )}
              </div>
            </div>
            <div className="component-section">
              <h2>Badge</h2>
              <div className="demo">
                <Badge type="primary">Primary</Badge>
                <Badge type="success">Success</Badge>
                <Badge type="warning">Warning</Badge>
                <Badge type="danger">Danger</Badge>
                <Badge type="info">Info</Badge>
                <Badge type="secondary">Secondary</Badge>
              </div>
            </div>
            <div className="component-section">
              <h2>Breadcrumb</h2>
              <div className="demo">
                <Breadcrumb
                  items={[
                    { title: "Home", href: "#" },
                    { title: "Library", href: "#" },
                    { title: "Data", href: "#" }
                  ]}
                />
              </div>
            </div>
            <div className="component-section">
              <h2>Card</h2>
              <div className="demo">
                <Card
                  title="Card Title"
                  actions={<Badge type="success">New</Badge>}
                >
                  <p>This is the card body content.</p>
                  <Button variant="primary">Action</Button>
                </Card>
              </div>
            </div>
            <div className="component-section">
              <h2>Checkbox</h2>
              <div className="controls">
                <Checkbox
                  label="Checkbox"
                  checked={checkboxChecked}
                  onChange={(e) => setCheckboxChecked(e.target.checked)}
                />
              </div>
            </div>
            <div className="component-section">
              <h2>Datepicker</h2>
              <div className="controls">
                <Datepicker
                  value={datepickerSelectedDate}
                  onChange={setDatepickerSelectedDate}
                  label="Select Date"
                />
              </div>
            </div>
            <div className="component-section">
              <h2>Select</h2>
              <div className="controls">
                <Select
                  value={selectSelectedOption}
                  onChange={(value: string | number) => setSelectSelectedOption(value as string)}
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' }
                  ]}
                />
              </div>
            </div>
            <div className="component-section">
            </div>
            <div className="component-section">
              <h2>Modal</h2>
              <div className="controls">
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Open Modal
                </Button>
                <div className="button-variants">
                  <Button variant="secondary" onClick={() => setButtonVariant('secondary')}>
                    Button
                  </Button>
                  <Button variant="ghost" onClick={() => setButtonVariant('ghost')}>
                    Button
                  </Button>
                  <Button variant="danger" onClick={() => setButtonVariant('danger')}>
                    Button
                  </Button>
                </div>
              </div>
        </div>
        <div className="main-content">
          <div className="component-section">
            <h2>Button</h2>
            <div className="controls">
              <Select
                value={buttonVariant}
                options={[
                  { value: 'secondary', label: 'Secondary' },
                  { value: 'ghost', label: 'Ghost' },
                  { value: 'danger', label: 'Danger' }
                ]}
              />
            </div>
          </div>
        </div>
        </div>
        <div className="main-content">
          <div className="component-section">
            <h2>Button</h2>
            <div className="controls">
              <Select
                value={buttonVariant}
                onChange={(value: string | number) => setSelectSelectedOption(value as string)}
                options={[
                  { label: 'Default', value: 'default' },
                  { label: 'Primary', value: 'primary' },
                  { label: 'Secondary', value: 'secondary' },
                  { label: 'Ghost', value: 'ghost' },
                  { label: 'Danger', value: 'danger' }
                ]}
              />
            </div>
          </div>
        </div>
        </div>
        <div className="main-content">
          <div className="component-section">
            <h2>Button</h2>
            <div className="controls">
              <Select
                value={buttonVariant}
                onChange={(value: string | number) => setSelectSelectedOption(value as string)}
                options={[
                  { value: 'primary', label: 'Primary' },
                  { value: 'secondary', label: 'Secondary' },
                  { value: 'ghost', label: 'Ghost' },
                  { value: 'danger', label: 'Danger' }
                ]}
              />
              <Select
                value={buttonSize}
                  onChange={(value: string | number) => setButtonSize(value as typeof buttonSize)}
                options={[
                  { value: 'small', label: 'Small' },
                  { value: 'large', label: 'Large' }
                ]}
              />
              <Checkbox
                label="Loading"
                checked={buttonLoading}
                onChange={(e) => setButtonLoading(e.target.checked)}
              />
              <Checkbox
                label="Disable Button"
                checked={buttonDisabled}
                onChange={(e) => setButtonDisabled(e.target.checked)}
              />
            </div>
            <div className="demo">
              <Button
                variant={buttonVariant}
                size={buttonSize}
                loading={buttonLoading}
                disabled={buttonDisabled}
                onClick={() => alert('Button clicked!')}
              >
                Click me
              </Button>
            </div>
          </div>
          <div className="component-section">
            <h2>Accordion</h2>
            <div className="controls">
              <Checkbox
                label="Open Accordion"
                checked={accordionOpen}
                onChange={(e) => setAccordionOpen(e.target.checked)}
              />
            </div>
            <div className="demo">
              <Accordion open={accordionOpen}>
                <AccordionItem title="Accordion Item 1">
                  <p>This is the content of the first accordion item.</p>
                </AccordionItem>
                <AccordionItem title="Accordion Item 2">
                  <p>This is the content of the second accordion item.</p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="component-section">
            <h2>Alert</h2>
            <div className="controls">
              <Checkbox
                label="Show Alert"
                checked={alertShow}
                onChange={(e) => setAlertShow(e.target.checked)}
              />
            </div>
            <div className="demo">
              {alertShow && (
                <Alert type="success" description="This is a success alert!" />
              )}
            </div>
          </div>
          <div className="component-section">
            <h2>Badge</h2>
            <div className="demo">
              <Badge type="primary">Primary</Badge>
              <Badge type="success">Success</Badge>
              <Badge type="warning">Warning</Badge>
              <Badge type="danger">Danger</Badge>
              <Badge type="info">Info</Badge>
              <Badge type="secondary">Secondary</Badge>
            </div>
          </div>
          <div className="component-section">
            <h2>Breadcrumb</h2>
            <div className="demo">
              <Breadcrumb
                items={[
                  { title: "Home", href: "#" },
                  { title: "Library", href: "#" },
                  { title: "Data", href: "#" }
                ]}
              />
            </div>
          </div>
          <div className="component-section">
            <h2>Card</h2>
            <div className="demo">
              <Card 
                title="Card Title" 
                actions={
                  <>
                    <Badge type="success">New</Badge>
                    <Button variant="primary">Action</Button>
                  </>
                }
              >
                  <p>This is the card body content.</p>
              </Card>
            </div>
          </div>
          <div className="component-section">
            <h2>Checkbox</h2>
            <div className="controls">
              <Checkbox
                label="Checkbox"
                checked={checkboxChecked}
                onChange={(e) => setCheckboxChecked(e.target.checked)}
              />
            </div>
          </div>
          <div className="component-section">
            <h2>Datepicker</h2>
            <div className="controls">
              <Datepicker
                value={datepickerSelectedDate}
                onChange={setDatepickerSelectedDate}
              />
            </div>
          </div>
          <div className="component-section">
            <h2>Select</h2>
            <div className="controls">
              <Select
                value={selectSelectedOption}
                onChange={(value) => setSelectSelectedOption(value)}
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' }
                ]}
              />
            </div>
          </div>
          <div className="component-section">
            <h2>Modal</h2>
            <div className="controls">
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Open Modal
              </Button>
            </div>
            {modalShow && (
              <Modal
                isOpen={modalShow}
                onClose={() => setModalShow(false)}
                title="Modal Title"
              >
                <p>This is the modal content.</p>
                <Button variant="primary" onClick={() => setModalShow(false)}>
                  Close
                </Button>
              </Modal>
            )}
          </div>
          <div className="component-section">
            <h2>Drawer</h2>
            <div className="controls">
              <Button variant="primary" onClick={() => setDrawerShow(true)}>
                Open Drawer
              </Button>
            </div>
            {drawerShow && (
              <Drawer
                isOpen={drawerShow}
                onClose={() => setDrawerShow(false)}
                title="Drawer Title"
              >
                <p>This is the drawer content.</p>
              </Drawer>
            )}
          </div>
          <div className="component-section">
            <h2>Tooltip</h2>
            <div className="controls">
              <Checkbox
                label="Show Tooltip"
                checked={tooltipShow}
                onChange={(e) => setTooltipShow(e.target.checked)}
              />
              <Breadcrumb
                items={[
                  { title: "Home", href: "/" },
                  { title: "Library", href: "/library" },
                  { title: "Data", current: true }
                ]}
              />
            </div>
          </div>
        </div>
        <div className="component-section">
          <h2>Card</h2>
          <div className="demo">
            <Card 
              title="Card Title" 
              actions={<Badge type="success">New</Badge>}
              children={<>
                <p>This is the card body content.</p>
                <div className="card-footer">
                  <Button variant="primary">Action</Button>
                </div>
              </>}
              bordered
            />
          </div>
        </div>
        <div className="component-section">
          <h2>Checkbox</h2>
          <div className="controls">
                <Checkbox
                  label="Checkbox"
                  checked={checkboxChecked}
                  onChange={(e) => setCheckboxChecked(e.target.checked)}
                />
          </div>
        </div>
        <div className="component-section">
          <h2>Datepicker</h2>
          <div className="controls">
            <Datepicker
              value={datepickerSelectedDate}
              onChange={setDatepickerSelectedDate}
            />
          </div>
        </div>
        <div className="component-section">
          <h2>Select</h2>
          <div className="controls">
            <Select
              value={selectSelectedOption}
              onChange={(value: string | number) => setSelectSelectedOption(value)}
              options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' }
              ]}
            />
          </div>
        </div>
        <div className="component-section">
          <h2>Modal</h2>
          <div className="controls">
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Open Modal
            </Button>
          </div>
          {modalShow && (
            <Modal
              isOpen={modalShow}
              onClose={() => setModalShow(false)}
              title="Modal Title"
            >
              <p>This is the modal content.</p>
              <Button variant="primary" onClick={() => setModalShow(false)}>
                Close
              </Button>
            </Modal>
          )}
        </div>
        <div className="component-section">
          <h2>Drawer</h2>
          <div className="controls">
            <Button variant="primary" onClick={() => setDrawerShow(true)}>
              Open Drawer
            </Button>
          </div>
          {drawerShow && (
            <Drawer
              isOpen={drawerShow}
              onClose={() => setDrawerShow(false)}
              title="Drawer Title"
            >
              <p>This is the drawer content.</p>
            </Drawer>
          )}
        </div>
        <div className="component-section">
          <h2>Tooltip</h2>
          <div className="controls">
            <Checkbox
              label="Show Tooltip"
              checked={tooltipShow}
              onChange={(e) => setTooltipShow(e.target.checked)}
            />
          </div>
          <div className="demo">
            <Tooltip content="This is a tooltip">
              <Button variant="primary">Hover me</Button>
            </Tooltip>
          </div>
        </div>
        <div className="component-section">
          <h2>Sidebar</h2>
          <div className="controls">
            <Checkbox
              label="Show Sidebar"
              checked={sidebarShow}
              onChange={(e) => setSidebarShow(e.target.checked)}
            />
          </div>
          {sidebarShow && (
            <Sidebar 
              logo="/path/to/logo.png"
              navItems={[
                { icon: () => <span>🏠</span>, label: 'Home', href: '#' },
                { icon: () => <span>🔔</span>, label: 'Notifications', href: '#' },
                { icon: () => <span>👤</span>, label: 'Profile', href: '#' }
              ]}
              footerItems={[
                { icon: () => <span>⚙️</span>, label: 'Settings', onClick: () => {} },
                { icon: () => <span>🚪</span>, label: 'Logout', onClick: () => {} }
              ]}
            />
          )}
        </div>
        <div className="component-section">
          <h2>Switch</h2>
          <div className="controls">
            <Switch
              checked={switchChecked}
              onChange={(e) => setSwitchChecked(e.target.checked)}
            />
          </div>
        </div>
        <div className="component-section">
          <h2>Progress</h2>
          <div className="controls">
            <Checkbox
              label="Show Progress"
              checked={progressShow}
              onChange={(e) => setProgressShow(e.target.checked)}
            />
          </div>
          {progressShow && (
            <div className="demo">
              <Progress value={50} />
            </div>
          )}
        </div>
        <div className="component-section">
          <h2>Skeleton</h2>
          <div className="controls">
            <Checkbox
              label="Show Skeleton"
              checked={skeletonShow}
              onChange={(e) => setSkeletonShow(e.target.checked)}
            />
          </div>
          {skeletonShow && (
            <div className="demo">
              <Skeleton />
            </div>
          )}
        </div>
        <div className="component-section">
          <h2>Tabs</h2>
          <div className="controls">
            <Tabs
              initialActiveTab={activeTab}
            >
              {tabs.map((tab) => (
                <Tab key={tab.id} title={tab.title}>
                  <p>This is the content of {tab.title}.</p>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
        <div className="component-section">
          <h2>Input</h2>
          <div className="controls">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter text..."
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
