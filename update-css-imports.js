const fs = require('fs');
const path = require('path');

// List of files to update with their correct CSS imports
const filesToUpdate = [
  { file: 'packages/button/src/Button.tsx', css: './Button.css?inline' },
  { file: 'packages/table/src/Table.tsx', css: './Table.css?inline' },
  { file: 'packages/switch/src/Switch.tsx', css: './Switch.css?inline' },
  { file: 'packages/select/src/Select.tsx', css: './Select.css?inline' },
  { file: 'packages/card/src/Card.tsx', css: './Card.css?inline' },
  { file: 'packages/accordion/src/Accordion.tsx', css: './Accordion.css?inline' },
  { file: 'packages/badge/src/Badge.tsx', css: './Badge.css?inline' },
  { file: 'packages/alert/src/Alert.tsx', css: './Alert.css?inline' },
  { file: 'packages/breadcrumb/src/Breadcrumb.tsx', css: './Breadcrumb.css?inline' },
  { file: 'packages/checkbox/src/Checkbox.tsx', css: './Checkbox.css?inline' },
  { file: 'packages/datepicker/src/Datepicker.tsx', css: './Datepicker.css?inline' },
  { file: 'packages/drawer/src/Drawer.tsx', css: './Drawer.css?inline' },
  { file: 'packages/modal/src/Modal.tsx', css: './Modal.css?inline' },
  { file: 'packages/sidebar/src/Sidebar.tsx', css: './Sidebar.css?inline' },
  { file: 'packages/skeleton/src/Skeleton.tsx', css: './Skeleton.css?inline' },
  { file: 'packages/tabs/src/Tabs.tsx', css: './Tabs.css?inline' },
  { file: 'packages/tooltip/src/Tooltip.tsx', css: './Tooltip.css?inline' },
  { file: 'packages/progress/src/Progress.tsx', css: './Progress.css?inline' }
];

filesToUpdate.forEach(({ file, css }) => {
  const filePath = path.join(__dirname, file);
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(/import\s+styles\s+from\s+"[^"]+\.css"/, `import styles from "${css}"`);
    
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent);
      console.log(`Updated ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
});

console.log('CSS imports updated successfully!');
