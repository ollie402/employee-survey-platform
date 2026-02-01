/* ================================================================
   AUTH WIZARD JAVASCRIPT - NEW AUTHENTICATION PAGES
   DO NOT MODIFY ANY EXISTING JAVASCRIPT - THIS IS A NEW FILE
   ================================================================ */

// Store signup data between steps
let authSignupData = {
    email: '',
    termsAccepted: false,
    marketingConsent: false
};

/**
 * Show a specific auth page and hide others
 * Also shows/hides the auth header appropriately
 */
function showAuthPage(pageId) {
    // Hide all auth pages
    document.querySelectorAll('.auth-page').forEach(page => {
        page.classList.add('hidden');
    });

    // Show the requested page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }

    // Show auth header for auth pages, hide for other pages
    const authHeader = document.getElementById('auth-header');
    if (authHeader) {
        if (pageId.startsWith('auth-')) {
            authHeader.classList.remove('hidden');
        } else {
            authHeader.classList.add('hidden');
        }
    }

    // Hide the existing login container when showing auth pages
    const existingLogin = document.getElementById('login-container');
    if (existingLogin && pageId.startsWith('auth-')) {
        existingLogin.classList.add('hidden');
    }
}

/**
 * Hide all auth wizard pages and show existing login
 * Use this to transition to the existing blue login page
 */
function showExistingLogin() {
    // Hide all auth pages
    document.querySelectorAll('.auth-page').forEach(page => {
        page.classList.add('hidden');
    });

    // Hide auth header
    const authHeader = document.getElementById('auth-header');
    if (authHeader) {
        authHeader.classList.add('hidden');
    }

    // Show existing login container
    const existingLogin = document.getElementById('login-container');
    if (existingLogin) {
        existingLogin.classList.remove('hidden');
    }
}

/**
 * Show the existing blue login page with the new styling
 * Hides auth wizard pages and shows the restyled login container
 * Keeps the auth header (logo) visible
 */
function showBlueLoginPage() {
    // Hide all auth wizard pages
    document.querySelectorAll('.auth-page').forEach(page => {
        page.classList.add('hidden');
    });

    // Keep the auth header visible (logo)
    const authHeader = document.getElementById('auth-header');
    if (authHeader) {
        authHeader.classList.remove('hidden');
    }

    // Show the blue login container
    const loginContainer = document.getElementById('login-container');
    if (loginContainer) {
        loginContainer.classList.remove('hidden');
    }
}

/**
 * Step 1: Validate email and proceed to step 2
 */
function authGoToStep2(event) {
    event.preventDefault();

    const email = document.getElementById('auth-signup-email').value.trim();
    const terms = document.getElementById('auth-signup-terms').checked;
    const marketing = document.getElementById('auth-signup-marketing').checked;
    const emailError = document.getElementById('auth-email-error');

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        document.getElementById('auth-signup-email').classList.add('error');
        return;
    }

    emailError.textContent = '';
    document.getElementById('auth-signup-email').classList.remove('error');

    // Store data
    authSignupData.email = email;
    authSignupData.termsAccepted = terms;
    authSignupData.marketingConsent = marketing;

    // Show email on step 2
    document.getElementById('auth-display-email').textContent = email;

    // Go to step 2
    showAuthPage('auth-signup-step2');
}

/**
 * Go back to step 1
 */
function authGoBackToStep1() {
    showAuthPage('auth-signup-step1');
}

/**
 * Step 2: Create account with password
 */
async function authCreateAccount(event) {
    event.preventDefault();

    const password = document.getElementById('auth-signup-password').value;
    const confirmPassword = document.getElementById('auth-signup-confirm-password').value;
    const passwordError = document.getElementById('auth-password-error');
    const confirmError = document.getElementById('auth-confirm-password-error');

    let hasError = false;

    // Validate password length
    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        document.getElementById('auth-signup-password').classList.add('error');
        hasError = true;
    } else {
        passwordError.textContent = '';
        document.getElementById('auth-signup-password').classList.remove('error');
    }

    // Validate passwords match
    if (password !== confirmPassword) {
        confirmError.textContent = 'Passwords do not match';
        document.getElementById('auth-signup-confirm-password').classList.add('error');
        hasError = true;
    } else {
        confirmError.textContent = '';
        document.getElementById('auth-signup-confirm-password').classList.remove('error');
    }

    if (hasError) return;

    // All validated - create account with Supabase
    try {
        if (typeof supabaseClient !== 'undefined') {
            const { data, error } = await supabaseClient.auth.signUp({
                email: authSignupData.email,
                password: password,
                options: {
                    data: {
                        marketing_consent: authSignupData.marketingConsent
                    }
                }
            });

            if (error) throw error;

            console.log('Account created:', data);

            // Check if email confirmation is required
            if (data.user && !data.session) {
                alert('Please check your email to confirm your account.');
                showBlueLoginPage();
            } else if (data.session) {
                // Auto-confirmed, redirect to dashboard
                if (typeof showDashboard === 'function') {
                    showDashboard();
                } else {
                    alert('Account created successfully!');
                }
            }
        } else {
            console.log('Account data:', { ...authSignupData, password: '***' });
            alert('Account created! (Demo - Supabase not configured)');
        }
    } catch (error) {
        console.error('Signup error:', error);
        passwordError.textContent = error.message || 'An error occurred. Please try again.';
    }
}

/**
 * Handle social signup
 */
async function authSocialSignup(provider) {
    console.log('Social signup with:', provider);

    try {
        if (typeof supabaseClient !== 'undefined') {
            const providerMap = {
                'google': 'google',
                'microsoft': 'azure',
                'apple': 'apple'
            };

            const { error } = await supabaseClient.auth.signInWithOAuth({
                provider: providerMap[provider] || provider,
                options: {
                    redirectTo: window.location.origin
                }
            });

            if (error) throw error;
        } else {
            alert('Social signup with ' + provider + ' (Supabase not configured)');
        }
    } catch (error) {
        console.error('Social signup error:', error);
        alert('Error: ' + error.message);
    }
}

/**
 * Initialize auth wizard on page load
 */
function initAuthWizard() {
    // Check if user is already logged in
    if (typeof supabaseClient !== 'undefined') {
        supabaseClient.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                // User is logged in, show dashboard
                if (typeof showDashboard === 'function') {
                    showDashboard();
                }
            } else {
                // Not logged in, show auth wizard step 1
                showAuthPage('auth-signup-step1');
            }
        });
    } else {
        // No Supabase, show step 1 by default
        showAuthPage('auth-signup-step1');
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuthWizard);
} else {
    initAuthWizard();
}
