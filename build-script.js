// Simple script to copy files for deployment
const fs = require('fs');
const path = require('path');

// Function to copy a file
function copyFile(src, dest) {
    try {
        // Create directory if it doesn't exist
        const destDir = path.dirname(dest);
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }
        
        // Copy the file
        fs.copyFileSync(src, dest);
        console.log(`✅ Copied: ${src} → ${dest}`);
    } catch (error) {
        console.log(`❌ Error copying ${src}:`, error.message);
    }
}

console.log('🚀 Building project...\n');

// Copy HTML file
copyFile('index.html', 'dist/index.html');

// Copy CSS files
if (fs.existsSync('assets/css')) {
    const cssFiles = fs.readdirSync('assets/css');
    cssFiles.forEach(file => {
        copyFile(`assets/css/${file}`, `dist/assets/css/${file}`);
    });
}

// Copy JavaScript files
if (fs.existsSync('assets/js')) {
    const jsFiles = fs.readdirSync('assets/js');
    jsFiles.forEach(file => {
        copyFile(`assets/js/${file}`, `dist/assets/js/${file}`);
    });
}

// Copy image files
if (fs.existsSync('assets/images')) {
    const imageFiles = fs.readdirSync('assets/images');
    imageFiles.forEach(file => {
        copyFile(`assets/images/${file}`, `dist/assets/images/${file}`);
    });
}

console.log('\n🎉 Build complete! Files are ready in the "dist" folder.');
console.log('💡 You can now upload the "dist" folder to any web hosting service.');
