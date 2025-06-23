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

const srcDir = path.resolve(__dirname, '../packages');
const destDir = path.resolve(__dirname, 'src/components');

components.forEach(component => {
  try {
    const componentSrc = path.join(srcDir, component, 'src');
    const componentDest = path.join(destDir, component.charAt(0).toUpperCase() + component.slice(1) + '.jsx');
    
    // Copy the main component file
    const mainFile = path.join(componentSrc, component.charAt(0).toUpperCase() + component.slice(1) + '.tsx');
    if (fs.existsSync(mainFile)) {
      const content = fs.readFileSync(mainFile, 'utf-8');
      // Convert from TSX to JSX
      const jsxContent = content.replace(/tsx$/g, 'jsx');
      fs.writeFileSync(componentDest, jsxContent);
    }
  } catch (error) {
    console.error(`Error processing ${component}:`, error);
  }
});
