// Supabase configuration with proper syntax
const SUPABASE_URL = 'https://wdwpqdzndlaldpuzuxyo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indkd3BxZHpuZGxhbGRwdXp1eHlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyMzUyNjYsImV4cCI6MjA3MTgxMTI2Nn0.POnq8gaOkM4gDtzD9jCSC1mV4ymqurTW1wKTQz6CUCM';

// Initialize Supabase client when the library is loaded
function initializeSupabase() {
    if (typeof window !== 'undefined' && window.supabase && window.supabase.createClient) {
        const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        // Export for use in other files
        window.supabaseClient = supabaseClient;

        console.log('🗄️ Supabase client initialized successfully');
        console.log('Client object:', supabaseClient);

        return true;
    } else {
        console.warn('⚠️ Supabase library not available. Checking what is available:', {
            windowSupabase: window.supabase,
            createClient: window.supabase ? window.supabase.createClient : 'N/A'
        });
        return false;
    }
}

// Try to initialize immediately
if (!initializeSupabase()) {
    // If not available, wait for DOM and try again
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            if (!initializeSupabase()) {
                console.error('❌ Failed to initialize Supabase client');
            }
        }, 100);
    });
}