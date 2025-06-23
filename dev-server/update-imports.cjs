const fs = require('fs');
const path = require('path');

const components = [
  'button',
  'select',
  'accordion',
  'alert',
  'badge',
  'breadcrumb',
  'card',
  'checkbox',
  'chip',
  'datepicker',
  'divider',
  'drawer',
  'input',
  'line-chart',
  'list',
  'modal',
  'navbar',
  'pagination',
  'progress',
  'radio',
  'sidebar',
  'skeleton',
  'slider',
  'spinner',
  'stepper',
  'switch',
  'table',
  'tabs',
  'tooltip'
];

components.forEach(component => {
  try {
    const componentPath = path.join(__dirname, '../packages', component, 'src');
    const files = fs.readdirSync(componentPath);
    
    files.forEach(file => {
      if (file.endsWith('.tsx')) {
        const filePath = path.join(componentPath, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // Update imports to use relative paths
        const updatedContent = content.replace(/from '@zone-ui\//g, 'from "/');
        fs.writeFileSync(filePath, updatedContent);
      }
    });
  } catch (error) {
    console.error(`Error processing ${component}:`, error);
  }
});
