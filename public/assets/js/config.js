// This file automatically detects what environment you're running in
// and sets up the right settings for each one

const ENV_CONFIG = {
    development: {
        API_BASE_URL: 'http://localhost:3000/api',
        APP_NAME: 'Survey Platform (Development)',
        DEBUG: true,
        ENVIRONMENT: 'development'
    },
    test: {
        API_BASE_URL: 'https://test-api.survey-platform.com/api',
        APP_NAME: 'Survey Platform (Test)',
        DEBUG: true,
        ENVIRONMENT: 'test'
    },
    production: {
        API_BASE_URL: 'https://api.survey-platform.com/api',
        APP_NAME: 'Survey Platform',
        DEBUG: false,
        ENVIRONMENT: 'production'
    }
};

// Figure out which environment we're in based on the website address
function getCurrentEnvironment() {
    const hostname = window.location.hostname;
    
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return 'development';  // Running on your computer
    } else if (hostname.includes('test') || hostname.includes('staging')) {
        return 'test';  // Running on test website
    } else {
        return 'production';  // Running on live website
    }
}

// Get the current settings
const currentEnv = getCurrentEnvironment();
const config = ENV_CONFIG[currentEnv];

// Show what environment we're in (only when testing)
if (config.DEBUG) {
    console.log('🌍 Current Environment:', config.ENVIRONMENT);
    console.log('🔧 Settings:', config);
}

// Make these settings available to the rest of the app
window.APP_CONFIG = config;

// Add colored indicators to show what environment you're in
if (currentEnv === 'development') {
    // Add a red "DEV" badge to the corner
    const devBadge = document.createElement('div');
    devBadge.textContent = 'DEV';
    devBadge.style.cssText = `
        position: fixed; top: 0; right: 0; z-index: 10000;
        background: #ff6b35; color: white; padding: 4px 8px;
        font-size: 12px; font-weight: bold;
        border-bottom-left-radius: 4px;
    `;
    document.body.appendChild(devBadge);
} else if (currentEnv === 'test') {
    // Add a yellow "TEST" badge to the corner
    const testBadge = document.createElement('div');
    testBadge.textContent = 'TEST';
    testBadge.style.cssText = `
        position: fixed; top: 0; right: 0; z-index: 10000;
        background: #f59e0b; color: white; padding: 4px 8px;
        font-size: 12px; font-weight: bold;
        border-bottom-left-radius: 4px;
    `;
    document.body.appendChild(testBadge);
}

// Update the page title to show which environment
document.title = config.APP_NAME;