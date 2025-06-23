const fs = require('fs');
const path = require('path');

function updateCssImports(file) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    let updatedContent = content;
    
    // Update CSS imports with different patterns
    // CSS modules with styles
    updatedContent = updatedContent.replace(/import\s+styles\s+from\s+"([^"]+\.css)"/g, 
      'import styles from "$1?inline"');
    
    // CSS modules with styles and semicolon
    updatedContent = updatedContent.replace(/import\s+styles\s+from\s+"([^"]+\.css)";/g, 
      'import styles from "$1?inline";');
    
    // CSS imports without styles
    updatedContent = updatedContent.replace(/import\s+"([^"]+\.css)"/g, 
      'import "$1?inline"');
    
    // CSS imports without styles and semicolon
    updatedContent = updatedContent.replace(/import\s+"([^"]+\.css)";/g, 
      'import "$1?inline";');
    
    // Fix Button imports
    updatedContent = updatedContent.replace(/import\s+{\s*Button\s*}\s+from\s+"\/button'/g,
      'import { Button } from "@zone-ui/button"');
    updatedContent = updatedContent.replace(/import\s+{\s*Button\s*}\s+from\s+"\/@zone-ui\/button'/g,
      'import { Button } from "@zone-ui/button"');
    
    // Print debugging info
    if (content !== updatedContent) {
      console.log(`Updated ${file}`);
      console.log('Original content:', content);
      console.log('Updated content:', updatedContent);
    }
    
    if (content !== updatedContent) {
      fs.writeFileSync(file, updatedContent);
      console.log(`Successfully updated ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
}

function processDirectory(dir) {
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stats = fs.statSync(fullPath);
      
      if (stats.isDirectory()) {
        processDirectory(fullPath);
      } else if (stats.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts'))) {
        updateCssImports(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error);
  }
}

// Process all packages
const packagesDir = path.join(__dirname, 'packages');
processDirectory(packagesDir);

console.log('CSS imports updated successfully!');
