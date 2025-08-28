// Supabase configuration with proper syntax
const SUPABASE_URL = 'https://wdwpqdzndlaldpuzuxyo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indkd3BxZHpuZGxhbGRwdXp1eHlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyMzUyNjYsImV4cCI6MjA3MTgxMTI2Nn0.POnq8gaOkM4gDtzD9jCSC1mV4ymqurTW1wKTQz6CUCM';

// Create and export the Supabase client
const { createClient } = window.supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other files
window.supabaseClient = supabaseClient;