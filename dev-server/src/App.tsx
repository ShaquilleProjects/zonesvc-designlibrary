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
import '../../packages/button/src/Button.css';

const COMPONENTS = [
  { key: 'button', label: 'Button' },
  { key: 'alert', label: 'Alert' },
  { key: 'badge', label: 'Badge' },
  { key: 'card', label: 'Card' },
  { key: 'checkbox', label: 'Checkbox' },
  { key: 'input', label: 'Input' },
  { key: 'modal', label: 'Modal' },
  { key: 'select', label: 'Select' },
  { key: 'switch', label: 'Switch' },
  { key: 'tooltip', label: 'Tooltip' },
  // Add more components here
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
  const [alertType, setAlertType] = useState('primary');
  const [alertTitle, setAlertTitle] = useState('Alert Title');
  const [alertDescription, setAlertDescription] = useState('This is an alert.');
  const [badgeType, setBadgeType] = useState('primary');
  const [badgeLabel, setBadgeLabel] = useState('Badge');
  const [cardTitle, setCardTitle] = useState('Card Title');
  const [cardContent, setCardContent] = useState('This is card content.');
  const [checkboxLabel, setCheckboxLabel] = useState('Check me');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [inputLabel, setInputLabel] = useState('Input Label');
  const [inputValue, setInputValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Modal Title');
  const [modalContent, setModalContent] = useState('This is modal content.');
  const [selectValue, setSelectValue] = useState('option1');
  const [switchChecked, setSwitchChecked] = useState(false);
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
                <select value={alertType} onChange={e => setAlertType(e.target.value)}>
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
                <select value={badgeType} onChange={e => setBadgeType(e.target.value)}>
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
                onChange={setSelectValue}
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
