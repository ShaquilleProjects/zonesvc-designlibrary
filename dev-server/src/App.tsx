import { useState } from 'react';
import { ThemeProvider } from '../../packages/theme-provider/src/ThemeProvider';
import { Button } from '../../packages/button/src/Button';
import { Select } from '../../packages/select/src/Select';
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
import { Chip } from '../../packages/chip/src/Chip';
import { Divider } from '../../packages/divider/src/Divider';
import { List } from '../../packages/list/src/List';
import { Navbar } from '../../packages/navbar/src/Navbar';
import { Pagination } from '../../packages/pagination/src/Pagination';
import { Slider } from '../../packages/slider/src/Slider';
import '../../packages/button/src/Button.css';

const COMPONENTS = [
  { key: 'button', label: 'Button' },
  { key: 'alert', label: 'Alert' },
  { key: 'badge', label: 'Badge' },
  { key: 'card', label: 'Card' },
  { key: 'checkbox', label: 'Checkbox' },
  { key: 'chip', label: 'Chip' },
  { key: 'divider', label: 'Divider' },
  { key: 'input', label: 'Input' },
  { key: 'modal', label: 'Modal' },
  { key: 'progress', label: 'Progress' },
  { key: 'radio', label: 'Radio' },
  { key: 'select', label: 'Select' },
  { key: 'skeleton', label: 'Skeleton' },
  { key: 'slider', label: 'Slider' },
  { key: 'spinner', label: 'Spinner' },
  { key: 'switch', label: 'Switch' },
  { key: 'table', label: 'Table' },
  { key: 'tooltip', label: 'Tooltip' },
];

const App: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState('button');

  // Button playground state
  const [buttonVariant, setButtonVariant] = useState<'primary' | 'secondary' | 'ghost' | 'danger'>('primary');
  const [buttonSize, setButtonSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonChildren, setButtonChildren] = useState('Click me');

  // Add state for other components as needed

  // Add state for each component playground
  const [alertType, setAlertType] = useState<'primary' | 'success' | 'warning' | 'danger' | 'info'>('primary');
  const [alertTitle, setAlertTitle] = useState('Alert Title');
  const [alertDescription, setAlertDescription] = useState('This is an alert.');
  const [badgeType, setBadgeType] = useState<'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'>('primary');
  const [badgeLabel, setBadgeLabel] = useState('Badge');
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    { title: 'Home', href: '#' },
    { title: 'Products', href: '#' },
    { title: 'Category', current: true }
  ]);
  const [cardTitle, setCardTitle] = useState('Card Title');
  const [cardContent, setCardContent] = useState('This is card content.');
  const [checkboxLabel, setCheckboxLabel] = useState('Check me');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [chipLabel, setChipLabel] = useState('Chip');
  const [chipType, setChipType] = useState<'primary' | 'secondary' | 'success' | 'warning' | 'danger'>('primary');
  const [datepickerValue, setDatepickerValue] = useState<Date | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [inputLabel, setInputLabel] = useState('Input Label');
  const [inputValue, setInputValue] = useState('');
  const [lineChartData, setLineChartData] = useState([
    { x: 0, y: 10 },
    { x: 1, y: 20 },
    { x: 2, y: 15 },
    { x: 3, y: 25 },
    { x: 4, y: 30 }
  ]);
  const [listItems, setListItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Modal Title');
  const [modalContent, setModalContent] = useState('This is modal content.');
  const [navbarTitle, setNavbarTitle] = useState('My App');
  const [paginationPage, setPaginationPage] = useState(1);
  const [paginationTotal, setPaginationTotal] = useState(100);
  const [progressValue, setProgressValue] = useState(50);
  const [radioValue, setRadioValue] = useState('option1');
  const [radioOptions, setRadioOptions] = useState(['Option 1', 'Option 2', 'Option 3']);
  const [selectValue, setSelectValue] = useState('option1');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [skeletonCount, setSkeletonCount] = useState(3);
  const [sliderValue, setSliderValue] = useState(50);
  const [spinnerSize, setSpinnerSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [stepperStep, setStepperStep] = useState(1);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [tableData, setTableData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
  ]);
  const [tabsValue, setTabsValue] = useState('tab1');
  const [tooltipContent, setTooltipContent] = useState('Tooltip text');

  function renderPlayground() {
    switch (selectedComponent) {
      case 'button':
        return (
          <div className="component-section">
            <h2>Button Playground</h2>
            <div className="controls">
              <label>
                Variant:
                <select value={buttonVariant} onChange={e => setButtonVariant(e.target.value as any)}>
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="ghost">Ghost</option>
                  <option value="danger">Danger</option>
                </select>
              </label>
              <label>
                Size:
                <select value={buttonSize} onChange={e => setButtonSize(e.target.value as any)}>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </label>
              <label>
                <input type="checkbox" checked={buttonLoading} onChange={e => setButtonLoading(e.target.checked)} />
                Loading
              </label>
              <label>
                <input type="checkbox" checked={buttonDisabled} onChange={e => setButtonDisabled(e.target.checked)} />
                Disabled
              </label>
              <label>
                Label:
                <input type="text" value={buttonChildren} onChange={e => setButtonChildren(e.target.value)} />
              </label>
            </div>
            <div className="demo">
              <Button
                variant={buttonVariant}
                size={buttonSize}
                loading={buttonLoading}
                disabled={buttonDisabled}
              >
                {buttonChildren}
              </Button>
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
                {renderButtonCode({
                  variant: buttonVariant,
                  size: buttonSize,
                  loading: buttonLoading,
                  disabled: buttonDisabled,
                  children: buttonChildren,
                })}
              </pre>
            </div>
          </div>
        );
      case 'alert':
        return (
          <div className="component-section">
            <h2>Alert Playground</h2>
            <div className="controls">
              <label>
                Type:
                <select value={alertType} onChange={e => setAlertType(e.target.value as 'primary' | 'success' | 'warning' | 'danger' | 'info')}>
                  <option value="primary">Primary</option>
                  <option value="success">Success</option>
                  <option value="warning">Warning</option>
                  <option value="danger">Danger</option>
                  <option value="info">Info</option>
                </select>
              </label>
              <label>
                Title:
                <input type="text" value={alertTitle} onChange={e => setAlertTitle(e.target.value)} />
              </label>
              <label>
                Description:
                <input type="text" value={alertDescription} onChange={e => setAlertDescription(e.target.value)} />
              </label>
            </div>
            <div className="demo">
              <Alert type={alertType} title={alertTitle} description={alertDescription} />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Alert } from '@zone-ui/alert';

<Alert
  type="${alertType}"
  title="${alertTitle}"
  description="${alertDescription}"
/>`}
              </pre>
            </div>
          </div>
        );
      case 'badge':
        return (
          <div className="component-section">
            <h2>Badge Playground</h2>
            <div className="controls">
              <label>
                Type:
                <select value={badgeType} onChange={e => setBadgeType(e.target.value as 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info')}>
                  <option value="primary">Primary</option>
                  <option value="success">Success</option>
                  <option value="warning">Warning</option>
                  <option value="danger">Danger</option>
                  <option value="info">Info</option>
                  <option value="secondary">Secondary</option>
                </select>
              </label>
              <label>
                Label:
                <input type="text" value={badgeLabel} onChange={e => setBadgeLabel(e.target.value)} />
              </label>
            </div>
            <div className="demo">
              <Badge type={badgeType}>{badgeLabel}</Badge>
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Badge } from '@zone-ui/badge';

<Badge type="${badgeType}">
  ${badgeLabel}
</Badge>`}
              </pre>
            </div>
          </div>
        );
      case 'card':
        return (
          <div className="component-section">
            <h2>Card Playground</h2>
            <div className="controls">
              <label>
                Title:
                <input type="text" value={cardTitle} onChange={e => setCardTitle(e.target.value)} />
              </label>
              <label>
                Content:
                <input type="text" value={cardContent} onChange={e => setCardContent(e.target.value)} />
              </label>
            </div>
            <div className="demo">
              <Card title={cardTitle}>{cardContent}</Card>
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Card } from '@zone-ui/card';

<Card title="${cardTitle}">
  ${cardContent}
</Card>`}
              </pre>
            </div>
          </div>
        );
      case 'checkbox':
        return (
          <div className="component-section">
            <h2>Checkbox Playground</h2>
            <div className="controls">
              <label>
                Label:
                <input type="text" value={checkboxLabel} onChange={e => setCheckboxLabel(e.target.value)} />
              </label>
              <label>
                <input type="checkbox" checked={checkboxChecked} onChange={e => setCheckboxChecked(e.target.checked)} />
                Checked
              </label>
            </div>
            <div className="demo">
              <Checkbox label={checkboxLabel} checked={checkboxChecked} onChange={e => setCheckboxChecked(e.target.checked)} />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Checkbox } from '@zone-ui/checkbox';

<Checkbox label="${checkboxLabel}" checked={${checkboxChecked}} />`}
              </pre>
            </div>
          </div>
        );
      case 'input':
        return (
          <div className="component-section">
            <h2>Input Playground</h2>
            <div className="controls">
              <label>
                Label:
                <input type="text" value={inputLabel} onChange={e => setInputLabel(e.target.value)} />
              </label>
              <label>
                Value:
                <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
              </label>
            </div>
            <div className="demo">
              <Input label={inputLabel} value={inputValue} onChange={e => setInputValue(e.target.value)} />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Input } from '@zone-ui/input';

<Input label="${inputLabel}" value="${inputValue}" />`}
              </pre>
            </div>
          </div>
        );
      case 'modal':
        return (
          <div className="component-section">
            <h2>Modal Playground</h2>
            <div className="controls">
              <label>
                Title:
                <input type="text" value={modalTitle} onChange={e => setModalTitle(e.target.value)} />
              </label>
              <label>
                Content:
                <input type="text" value={modalContent} onChange={e => setModalContent(e.target.value)} />
              </label>
              <button type="button" onClick={() => setModalOpen(true)} className="button button--primary">Open Modal</button>
            </div>
            <div className="demo">
              <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalTitle}>
                {modalContent}
              </Modal>
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Modal } from '@zone-ui/modal';

<Modal isOpen={true} onClose={closeHandler} title="${modalTitle}">
  ${modalContent}
</Modal>`}
              </pre>
            </div>
          </div>
        );
      case 'select':
        return (
          <div className="component-section">
            <h2>Select Playground</h2>
            <div className="controls">
              <label>
                Value:
                <select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </label>
            </div>
            <div className="demo">
              <Select
                value={selectValue}
                onChange={(value) => setSelectValue(value.toString())}
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                ]}
              />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Select } from '@zone-ui/select';

<Select
  value="${selectValue}"
  options={${JSON.stringify([
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ], null, 2)}}
/>`}
              </pre>
            </div>
          </div>
        );
      case 'switch':
        return (
          <div className="component-section">
            <h2>Switch Playground</h2>
            <div className="controls">
              <label>
                <input type="checkbox" checked={switchChecked} onChange={e => setSwitchChecked(e.target.checked)} />
                Checked
              </label>
            </div>
            <div className="demo">
              <Switch checked={switchChecked} onChange={e => setSwitchChecked(e.target.checked)} />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Switch } from '@zone-ui/switch';

<Switch checked={${switchChecked}} />`}
              </pre>
            </div>
          </div>
        );
      case 'tooltip':
        return (
          <div className="component-section">
            <h2>Tooltip Playground</h2>
            <div className="controls">
              <label>
                Content:
                <input type="text" value={tooltipContent} onChange={e => setTooltipContent(e.target.value)} />
              </label>
            </div>
            <div className="demo">
              <Tooltip content={tooltipContent}>
                <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: '#e5e7eb', borderRadius: '0.5rem', cursor: 'pointer' }}>Hover me</span>
              </Tooltip>
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Tooltip } from '@zone-ui/tooltip';

<Tooltip content="${tooltipContent}">
  <span>Hover me</span>
</Tooltip>`}
              </pre>
            </div>
          </div>
        );
      case 'breadcrumb':
        return (
          <div className="component-section">
            <h2>Breadcrumb Playground</h2>
            <div className="controls">
              <label>
                Items (comma separated):
                <input type="text" value={breadcrumbItems.map(item => item.title).join(', ')} onChange={e => setBreadcrumbItems(e.target.value.split(',').map((item, index, arr) => ({ 
                  title: item.trim(), 
                  href: '#', 
                  current: index === arr.length - 1 
                })))} />
              </label>
            </div>
            <div className="demo">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Breadcrumb } from '@zone-ui/breadcrumb';

<Breadcrumb items={${JSON.stringify(breadcrumbItems)}} />`}
              </pre>
            </div>
          </div>
        );
      case 'chip':
        return (
          <div className="component-section">
            <h2>Chip Playground</h2>
            <div className="controls">
              <label>
                Label:
                <input type="text" value={chipLabel} onChange={e => setChipLabel(e.target.value)} />
              </label>
              <label>
                Type:
                <select value={chipType} onChange={e => setChipType(e.target.value as any)}>
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="success">Success</option>
                  <option value="warning">Warning</option>
                  <option value="danger">Danger</option>
                </select>
              </label>
            </div>
            <div className="demo">
              <Chip type={chipType}>{chipLabel}</Chip>
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Chip } from '@zone-ui/chip';

<Chip type="${chipType}">${chipLabel}</Chip>`}
              </pre>
            </div>
          </div>
        );
      case 'datepicker':
        return (
          <div className="component-section">
            <h2>Datepicker Playground</h2>
            <div className="controls">
              <label>
                Selected Date: {datepickerValue ? datepickerValue.toLocaleDateString() : 'None'}
              </label>
            </div>
            <div className="demo">
              <Datepicker value={datepickerValue} onChange={setDatepickerValue} />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Datepicker } from '@zone-ui/datepicker';

<Datepicker value={datepickerValue} onChange={setDatepickerValue} />`}
              </pre>
            </div>
          </div>
        );
      case 'divider':
        return (
          <div className="component-section">
            <h2>Divider Playground</h2>
            <div className="demo">
              <div>Content above</div>
              <Divider />
              <div>Content below</div>
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Divider } from '@zone-ui/divider';

<div>Content above</div>
<Divider />
<div>Content below</div>`}
              </pre>
            </div>
          </div>
        );
      case 'drawer':
        return (
          <div className="component-section">
            <h2>Drawer Playground</h2>
            <div className="controls">
              <button type="button" onClick={() => setDrawerOpen(true)} className="button button--primary">Open Drawer</button>
            </div>
            <div className="demo">
              <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} title="Drawer Title">
                <div style={{ padding: '1rem' }}>
                  <h3>Drawer Content</h3>
                  <p>This is the drawer content.</p>
                </div>
              </Drawer>
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Drawer } from '@zone-ui/drawer';

<Drawer isOpen={true} onClose={closeHandler}>
  <div>Drawer content</div>
</Drawer>`}
              </pre>
            </div>
          </div>
        );
      case 'list':
        return (
          <div className="component-section">
            <h2>List Playground</h2>
            <div className="controls">
              <label>
                Items (comma separated):
                <input type="text" value={listItems.join(', ')} onChange={e => setListItems(e.target.value.split(',').map(item => item.trim()))} />
              </label>
            </div>
            <div className="demo">
              <List items={listItems} />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { List } from '@zone-ui/list';

<List items={${JSON.stringify(listItems)}} />`}
              </pre>
            </div>
          </div>
        );
      case 'navbar':
        return (
          <div className="component-section">
            <h2>Navbar Playground</h2>
            <div className="controls">
              <label>
                Title:
                <input type="text" value={navbarTitle} onChange={e => setNavbarTitle(e.target.value)} />
              </label>
            </div>
            <div className="demo">
              <Navbar title={navbarTitle} />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Navbar } from '@zone-ui/navbar';

<Navbar title="${navbarTitle}" />`}
              </pre>
            </div>
          </div>
        );
      case 'pagination':
        return (
          <div className="component-section">
            <h2>Pagination Playground</h2>
            <div className="controls">
              <label>
                Current Page:
                <input type="number" min="1" max={Math.ceil(paginationTotal / 10)} value={paginationPage} onChange={e => setPaginationPage(parseInt(e.target.value))} />
              </label>
              <label>
                Total Items:
                <input type="number" min="1" value={paginationTotal} onChange={e => setPaginationTotal(parseInt(e.target.value))} />
              </label>
            </div>
            <div className="demo">
              <Pagination currentPage={paginationPage} totalItems={paginationTotal} onPageChange={setPaginationPage} />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Pagination } from '@zone-ui/pagination';

<Pagination currentPage={${paginationPage}} totalItems={${paginationTotal}} onPageChange={setPage} />`}
              </pre>
            </div>
          </div>
        );
      case 'progress':
        return (
          <div className="component-section">
            <h2>Progress Playground</h2>
            <div className="controls">
              <label>
                Value (0-100):
                <input type="range" min="0" max="100" value={progressValue} onChange={e => setProgressValue(parseInt(e.target.value))} />
                {progressValue}%
              </label>
            </div>
            <div className="demo">
              <Progress value={progressValue} />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Progress } from '@zone-ui/progress';

<Progress value={${progressValue}} />`}
              </pre>
            </div>
          </div>
        );
      case 'radio':
        return (
          <div className="component-section">
            <h2>Radio Playground</h2>
            <div className="controls">
              <label>
                Options (comma separated):
                <input type="text" value={radioOptions.join(', ')} onChange={e => setRadioOptions(e.target.value.split(',').map(item => item.trim()))} />
              </label>
            </div>
            <div className="demo">
              <Radio value={radioValue} onChange={setRadioValue} options={radioOptions} />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Radio } from '@zone-ui/radio';

<Radio value="${radioValue}" onChange={setValue} options={${JSON.stringify(radioOptions)}} />`}
              </pre>
            </div>
          </div>
        );
      case 'sidebar':
        return (
          <div className="component-section">
            <h2>Sidebar Playground</h2>
            <div className="controls">
              <button type="button" onClick={() => setSidebarOpen(true)} className="button button--primary">Open Sidebar</button>
            </div>
            <div className="demo">
              <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}>
                <div style={{ padding: '1rem' }}>
                  <h3>Sidebar Content</h3>
                  <p>This is the sidebar content.</p>
                </div>
              </Sidebar>
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Sidebar } from '@zone-ui/sidebar';

<Sidebar isOpen={true} onClose={closeHandler}>
  <div>Sidebar content</div>
</Sidebar>`}
              </pre>
            </div>
          </div>
        );
      case 'skeleton':
        return (
          <div className="component-section">
            <h2>Skeleton Playground</h2>
            <div className="controls">
              <label>
                Count:
                <input type="number" min="1" max="10" value={skeletonCount} onChange={e => setSkeletonCount(parseInt(e.target.value))} />
              </label>
            </div>
            <div className="demo">
              <Skeleton count={skeletonCount} />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Skeleton } from '@zone-ui/skeleton';

<Skeleton count={${skeletonCount}} />`}
              </pre>
            </div>
          </div>
        );
      case 'slider':
        return (
          <div className="component-section">
            <h2>Slider Playground</h2>
            <div className="controls">
              <label>
                Value: {sliderValue}
              </label>
            </div>
            <div className="demo">
              <Slider value={sliderValue} onChange={setSliderValue} min={0} max={100} />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Slider } from '@zone-ui/slider';

<Slider value={${sliderValue}} onChange={setValue} min={0} max={100} />`}
              </pre>
            </div>
          </div>
        );
      case 'spinner':
        return (
          <div className="component-section">
            <h2>Spinner Playground</h2>
            <div className="controls">
              <label>
                Size:
                <select value={spinnerSize} onChange={e => setSpinnerSize(e.target.value as any)}>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </label>
            </div>
            <div className="demo">
              <Spinner size={spinnerSize} />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Spinner } from '@zone-ui/spinner';

<Spinner size="${spinnerSize}" />`}
              </pre>
            </div>
          </div>
        );
      case 'stepper':
        return (
          <div className="component-section">
            <h2>Stepper Playground</h2>
            <div className="controls">
              <label>
                Current Step:
                <input type="number" min="1" max="3" value={stepperStep} onChange={e => setStepperStep(parseInt(e.target.value))} />
              </label>
            </div>
            <div className="demo">
              <Stepper currentStep={stepperStep} steps={['Step 1', 'Step 2', 'Step 3']} />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Stepper } from '@zone-ui/stepper';

<Stepper currentStep={${stepperStep}} steps={['Step 1', 'Step 2', 'Step 3']} />`}
              </pre>
            </div>
          </div>
        );
      case 'table':
        return (
          <div className="component-section">
            <h2>Table Playground</h2>
            <div className="demo">
              <Table
                data={tableData}
                columns={[
                  { key: 'id', header: 'ID' },
                  { key: 'name', header: 'Name' },
                  { key: 'email', header: 'Email' }
                ]}
              />
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Table } from '@zone-ui/table';

<Table
  data={${JSON.stringify(tableData, null, 2)}}
  columns={[
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' }
  ]}
/>`}
              </pre>
            </div>
          </div>
        );
      case 'tabs':
        return (
          <div className="component-section">
            <h2>Tabs Playground</h2>
            <div className="demo">
              <Tabs value={tabsValue} onChange={setTabsValue}>
                <Tab value="tab1" label="Tab 1">
                  <div>Content for tab 1</div>
                </Tab>
                <Tab value="tab2" label="Tab 2">
                  <div>Content for tab 2</div>
                </Tab>
                <Tab value="tab3" label="Tab 3">
                  <div>Content for tab 3</div>
                </Tab>
              </Tabs>
            </div>
            <div className="code-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>Code</h3>
              <pre style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.95rem', overflowX: 'auto' }}>
{`import { Tabs, Tab } from '@zone-ui/tabs';

<Tabs value="${tabsValue}" onChange={setValue}>
  <Tab value="tab1" label="Tab 1">
    <div>Content for tab 1</div>
  </Tab>
  <Tab value="tab2" label="Tab 2">
    <div>Content for tab 2</div>
  </Tab>
  <Tab value="tab3" label="Tab 3">
    <div>Content for tab 3</div>
  </Tab>
</Tabs>`}
              </pre>
            </div>
          </div>
        );
      default:
        return <div>Select a component from the sidebar.</div>;
    }
  }

  return (
    <ThemeProvider>
      <div className="app-container">
        <div className="sidebar">
          <div className="sidebar-header">
            <h1>Zone UI</h1>
          </div>
          <nav className="sidebar-nav">
            <ul>
              {COMPONENTS.map((comp) => (
                <li
                  key={comp.key}
                  className={selectedComponent === comp.key ? 'active' : ''}
                  onClick={() => setSelectedComponent(comp.key)}
                >
                  {comp.label}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="main-content">
          {renderPlayground()}
        </div>
      </div>
    </ThemeProvider>
  );
};

function renderButtonCode({ variant, size, loading, disabled, children }: { variant: string, size: string, loading: boolean, disabled: boolean, children: string }) {
  let props = [];
  if (variant !== 'primary') props.push(`variant=\"${variant}\"`);
  if (size !== 'medium') props.push(`size=\"${size}\"`);
  if (loading) props.push('loading');
  if (disabled) props.push('disabled');
  const propsString = props.length ? '\n  ' + props.join('\n  ') : '';
  return `import { Button } from '@zone-ui/button';\n\n<Button${propsString}>\n  ${children || 'Button'}\n</Button>`;
}

export default App;
