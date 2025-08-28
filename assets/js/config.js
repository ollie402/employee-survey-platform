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

// Initialize Supabase client
// Note: In a real application, you would get these from environment variables
// For development, you can add your Supabase credentials here
const SUPABASE_CONFIG = {
    development: {
        url: 'YOUR_SUPABASE_URL',
        key: 'YOUR_SUPABASE_ANON_KEY'
    },
    test: {
        url: 'YOUR_TEST_SUPABASE_URL',
        key: 'YOUR_TEST_SUPABASE_ANON_KEY'
    },
    production: {
        url: 'YOUR_PROD_SUPABASE_URL',
        key: 'YOUR_PROD_SUPABASE_ANON_KEY'
    }
};

// Initialize Supabase client if credentials are provided
if (typeof supabase !== 'undefined') {
    const supabaseConfig = SUPABASE_CONFIG[currentEnv];
    
    // Only initialize if we have real credentials (not placeholder text)
    if (supabaseConfig.url && supabaseConfig.url !== 'YOUR_SUPABASE_URL') {
        window.supabaseClient = supabase.createClient(supabaseConfig.url, supabaseConfig.key);
        if (config.DEBUG) {
            console.log('🗄️ Supabase client initialized for', currentEnv);
        }
    } else {
        if (config.DEBUG) {
            console.warn('⚠️ Supabase credentials not configured. Database features will be disabled.');
            console.warn('💡 To enable database features, update SUPABASE_CONFIG in config.js with your Supabase project credentials.');
        }
        // Create a mock client that returns empty arrays to prevent errors
        window.supabaseClient = {
            from: () => ({
                select: () => Promise.resolve({ data: [], error: null }),
                insert: () => Promise.resolve({ data: [], error: null }),
                update: () => Promise.resolve({ data: [], error: null }),
                delete: () => Promise.resolve({ data: [], error: null }),
                order: () => ({
                    select: () => Promise.resolve({ data: [], error: null })
                })
            })
        };
    }
} else {
    if (config.DEBUG) {
        console.warn('⚠️ Supabase library not loaded. Database features will be disabled.');
        console.warn('💡 To enable database features, include the Supabase JavaScript library.');
    }
    // Create a mock client that returns empty arrays to prevent errors
    window.supabaseClient = {
        from: () => ({
            select: () => Promise.resolve({ data: [], error: null }),
            insert: () => Promise.resolve({ data: [], error: null }),
            update: () => Promise.resolve({ data: [], error: null }),
            delete: () => Promise.resolve({ data: [], error: null }),
            order: () => ({
                select: () => Promise.resolve({ data: [], error: null })
            })
        })
    };
}

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
