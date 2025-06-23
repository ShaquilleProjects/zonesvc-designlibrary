const fs = require('fs');
const path = require('path');

// Remove "type": "module" from package.json temporarily
const pkgPath = path.join(__dirname, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
delete pkg.type;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

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
    const componentDest = path.join(destDir, component.charAt(0).toUpperCase() + component.slice(1) + '.tsx');
    
    // Copy the main component file
    const mainFile = path.join(componentSrc, component.charAt(0).toUpperCase() + component.slice(1) + '.tsx');
    if (fs.existsSync(mainFile)) {
      const content = fs.readFileSync(mainFile, 'utf-8');
      // Convert imports to use relative paths
      const relativeContent = content.replace(/from '@zone-ui\//g, 'from "/');
      fs.writeFileSync(componentDest, relativeContent);
    }
  } catch (error) {
    console.error(`Error processing ${component}:`, error);
  }
});

// Restore "type": "module" in package.json
const pkg2 = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
pkg2.type = 'module';
fs.writeFileSync(pkgPath, JSON.stringify(pkg2, null, 2));

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

async function setupComponents() {
  for (const component of components) {
    try {
      const componentSrc = path.join(srcDir, component, 'src');
      const componentDest = path.join(destDir, component.charAt(0).toUpperCase() + component.slice(1) + '.tsx');
      
      // Copy the main component file
      const mainFile = path.join(componentSrc, component.charAt(0).toUpperCase() + component.slice(1) + '.tsx');
      if (await fs.exists(mainFile)) {
        const content = await fs.readFile(mainFile, 'utf-8');
        // Convert imports to use relative paths
        const relativeContent = content.replace(/from '@zone-ui\//g, 'from "/');
        await fs.writeFile(componentDest, relativeContent);
      }
    } catch (error) {
      console.error(`Error processing ${component}:`, error);
    }
  }
}

setupComponents();
