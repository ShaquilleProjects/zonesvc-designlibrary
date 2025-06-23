const fs = require('fs');
const path = require('path');

// Get all package directories
const packagesDir = path.join(__dirname, 'packages');
const packageDirs = fs.readdirSync(packagesDir);

packageDirs.forEach(packageName => {
  const packagePath = path.join(packagesDir, packageName);
  const srcPath = path.join(packagePath, 'src');
  
  if (fs.existsSync(srcPath) && fs.statSync(srcPath).isDirectory()) {
    // Get all .tsx files
    const tsxFiles = fs.readdirSync(srcPath)
      .filter(file => file.endsWith('.tsx'))
      .map(file => path.join(srcPath, file));

    tsxFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        // Find the CSS import line
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes('import styles from')) {
            // Extract the CSS file name
            const match = lines[i].match(/"\.\/([^\.]+)\.css"/);
            if (match) {
              const cssFile = match[1];
              // Create new import line with ?inline
              lines[i] = `import styles from "./${cssFile}.css?inline";`;
              const updatedContent = lines.join('\n');
              
              if (content !== updatedContent) {
                fs.writeFileSync(file, updatedContent);
                console.log(`Updated ${file}`);
              }
              break;
            }
          }
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    });
  }
});

console.log('CSS imports updated successfully!');
