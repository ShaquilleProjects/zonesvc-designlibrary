const fs = require('fs');
const path = require('path');

// Get all package directories
const packagesDir = path.join(__dirname, 'packages');
const packageDirs = fs.readdirSync(packagesDir);

packageDirs.forEach(packageName => {
  const packagePath = path.join(packagesDir, packageName);
  const srcPath = path.join(packagePath, 'src');
  
  // Check if src directory exists
  if (fs.existsSync(srcPath) && fs.statSync(srcPath).isDirectory()) {
    // Get all .tsx files in src directory
    const tsxFiles = fs.readdirSync(srcPath)
      .filter(file => file.endsWith('.tsx'))
      .map(file => path.join(srcPath, file));

    tsxFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const baseName = path.basename(file, '.tsx');
        const cssPath = path.join(srcPath, `${baseName}.css`);

        // Check if CSS file exists
        if (fs.existsSync(cssPath)) {
          // Create the new import statement
          const newImport = `import styles from "./${baseName}.css?inline";`;
          
          // Update the file content
          const updatedContent = content.replace(
            /import\s+styles\s+from\s+"\.\/[^\.]+\.css";/,
            newImport
          );

          if (content !== updatedContent) {
            fs.writeFileSync(file, updatedContent);
            console.log(`Updated ${file}`);
          }
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    });
  }
});

console.log('CSS imports updated successfully!');
