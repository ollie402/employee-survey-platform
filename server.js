// server.js - Create this in your root folder
const config = require('./config');
const express = require('express');
const path = require('path');

const app = express();
const PORT = config.get('PORT', 3000);

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Serve the appropriate folder based on environment
if (config.isDevelopment()) {
    app.use(express.static('test'));
} else if (config.isProduction()) {
    app.use(express.static('live'));
}

// Your API routes
app.use('/api', require('./api'));

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        environment: config.environment,
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`
    ========================================
    🚀 ${config.get('APP_NAME')} Server
    📍 Environment: ${config.environment}
    🔗 URL: http://localhost:${PORT}
    🔧 Debug: ${config.get('ENABLE_DEBUG')}
    ========================================
    `);
});