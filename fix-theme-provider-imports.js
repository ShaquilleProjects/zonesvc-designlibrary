const fs = require('fs');
const path = require('path');

// List of files that need to be fixed
const filesToFix = [
    '../packages/card/src/Card.tsx',
    '../packages/button/src/Button.tsx',
    '../packages/checkbox/src/Checkbox.tsx',
    '../packages/datepicker/src/Datepicker.tsx',
    '../packages/alert/src/Alert.tsx',
    '../packages/accordion/src/Accordion.tsx',
    '../packages/sidebar/src/Sidebar.tsx',
    '../packages/drawer/src/Drawer.tsx',
    '../packages/skeleton/src/Skeleton.tsx',
    '../packages/progress/src/Progress.tsx',
    '../packages/select/src/Select.tsx'
];

// Files using relative paths
const relativePathFiles = [
    '../packages/modal/src/Modal.tsx',
    '../packages/tabs/src/Tabs.tsx',
    '../packages/tooltip/src/Tooltip.tsx',
    '../packages/badge/src/Badge.tsx'
];

// Function to fix imports
const fixImports = (filePath, isRelative) => {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Fix the theme-provider import
    if (isRelative) {
        content = content.replace(/import { useTheme } from '[^']*theme-provider'/g, "import { useTheme } from '../../theme-provider'");
    } else {
        content = content.replace(/import { useTheme } from '[^']*theme-provider'/g, "import { useTheme } from '@zone-ui/theme-provider'");
    }

    fs.writeFileSync(fullPath, content);
    console.log(`Fixed imports in ${filePath}`);
};

// Fix all files
filesToFix.forEach(file => fixImports(file, false));
relativePathFiles.forEach(file => fixImports(file, true));

console.log('All theme-provider imports have been fixed!');
