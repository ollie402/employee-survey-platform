// config.js - Put this in your root folder next to deploy.js
const path = require('path');
const fs = require('fs');

// Determine which environment we're in
const environment = process.env.NODE_ENV || 'development';

// Load the appropriate .env file from your environments folder
const envFile = path.join(__dirname, 'environments', `.env.${environment}`);

// Parse the .env file
if (fs.existsSync(envFile)) {
    const envConfig = fs.readFileSync(envFile, 'utf-8');
    envConfig.split('\n').forEach(line => {
        // Skip comments and empty lines
        if (line && !line.startsWith('#')) {
            const [key, value] = line.split('=');
            if (key && value) {
                process.env[key.trim()] = value.trim();
            }
        }
    });
    console.log(`✅ Loaded ${environment} configuration`);
} else {
    console.warn(`⚠️  No .env.${environment} file found in environments folder`);
}

// Export helper functions
module.exports = {
    get: (key, defaultValue = '') => {
        return process.env[key] || defaultValue;
    },
    
    isDevelopment: () => environment === 'development',
    isTest: () => environment === 'test',
    isProduction: () => environment === 'production',
    
    environment: environment
};