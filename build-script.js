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
// build-script.js - Update your existing file
const config = require('./config');
const fs = require('fs');
const path = require('path');

console.log(`🔨 Building for ${config.environment} environment...`);

// Create build info file
const buildInfo = {
    environment: config.environment,
    timestamp: new Date().toISOString(),
    version: require('./package.json').version,
    apiUrl: config.get('API_URL'),
    debug: config.get('ENABLE_DEBUG') === 'true'
};

// Write build configuration
fs.writeFileSync(
    path.join(__dirname, 'dist', 'build-config.json'),
    JSON.stringify(buildInfo, null, 2)
);

// Environment-specific build tasks
if (config.isProduction()) {
    console.log('🔒 Production build:');
    console.log('  - Minifying files...');
    console.log('  - Removing debug code...');
    console.log('  - Optimizing images...');
    // Add your production build tasks here
    
} else if (config.isTest()) {
    console.log('🧪 Test build:');
    console.log('  - Including test helpers...');
    console.log('  - Enabling debug mode...');
    // Add your test build tasks here
    
} else {
    console.log('💻 Development build:');
    console.log('  - Including source maps...');
    console.log('  - Enabling hot reload...');
    // Add your development build tasks here
}

// Copy files to appropriate folder
const targetFolder = config.isProduction() ? 'live' : 'test';
console.log(`📁 Output folder: ${targetFolder}/`);

// Create a simple index.html that uses the config
const indexHtml = `
<!DOCTYPE html>
<html>
<head>
    <title>${config.get('APP_NAME')}</title>
    <script>
        window.ENV_CONFIG = ${JSON.stringify({
            environment: config.environment,
            apiUrl: config.get('API_URL'),
            debug: config.get('ENABLE_DEBUG') === 'true'
        })};
    </script>
</head>
<body>
    <div id="app">
        <h1>${config.get('APP_NAME')}</h1>
        <p>Environment: ${config.environment}</p>
        <p>API: ${config.get('API_URL')}</p>
    </div>
    <script src="./app.js"></script>
</body>
</html>
`;

// Ensure directories exist
if (!fs.existsSync('dist')) fs.mkdirSync('dist');
if (!fs.existsSync(targetFolder)) fs.mkdirSync(targetFolder);

// Write the file
fs.writeFileSync(path.join(targetFolder, 'index.html'), indexHtml);

console.log('✅ Build complete!');