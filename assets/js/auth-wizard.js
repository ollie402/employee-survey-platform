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
    // IMPORTANT: Always hide the app container when showing auth pages
    const appContainer = document.getElementById('app-container');
    if (appContainer) {
        appContainer.classList.add('hidden');
    }

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
 * Show signup confirmation screen
 * Tells user to check their email to complete setup
 */
function showSignupConfirmation(email) {
    // Hide all auth pages
    document.querySelectorAll('.auth-page').forEach(page => {
        page.classList.add('hidden');
    });

    // Hide login container
    const loginContainer = document.getElementById('login-container');
    if (loginContainer) {
        loginContainer.classList.add('hidden');
    }

    // Keep auth header visible
    const authHeader = document.getElementById('auth-header');
    if (authHeader) {
        authHeader.classList.remove('hidden');
    }

    // Create and show confirmation message
    let confirmationDiv = document.getElementById('auth-signup-confirmation');
    if (!confirmationDiv) {
        confirmationDiv = document.createElement('div');
        confirmationDiv.id = 'auth-signup-confirmation';
        confirmationDiv.className = 'auth-page';
        confirmationDiv.innerHTML = `
            <div class="auth-container">
                <div class="auth-form-wrapper">
                    <div style="text-align: center; padding: 40px 20px;">
                        <div style="width: 80px; height: 80px; background: #dcfce7; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <h2 style="color: #1e293b; font-size: 24px; font-weight: 600; margin: 0 0 12px;">Account Created!</h2>
                        <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin: 0 0 8px;">
                            We've sent a welcome email to:
                        </p>
                        <p style="color: #1e293b; font-size: 18px; font-weight: 600; margin: 0 0 24px;">
                            ${email}
                        </p>
                        <p style="color: #64748b; font-size: 15px; line-height: 1.6; margin: 0 0 32px;">
                            Please check your email and click the link to complete your account setup.
                        </p>
                        <div style="padding: 20px; background: #f8fafc; border-radius: 8px; margin-bottom: 24px;">
                            <p style="color: #64748b; font-size: 14px; margin: 0;">
                                <strong>Didn't receive the email?</strong><br>
                                Check your spam folder or <a href="#" onclick="showAuthPage('auth-signup-step1'); return false;" style="color: #7c3aed;">try signing up again</a>.
                            </p>
                        </div>
                        <button onclick="showBlueLoginPage()" class="auth-btn auth-btn-secondary" style="width: 100%;">
                            Go to Login
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(confirmationDiv);
    } else {
        // Update email in existing confirmation div
        const emailP = confirmationDiv.querySelector('p[style*="font-weight: 600"]');
        if (emailP) {
            emailP.textContent = email;
        }
    }

    confirmationDiv.classList.remove('hidden');
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

            // Create user record in users table
            let userRecord = null;
            if (data.user) {
                try {
                    const { data: insertedUser, error: insertError } = await supabaseClient
                        .from('users')
                        .insert({
                            auth_id: data.user.id,
                            email: data.user.email,
                            first_name: '',
                            last_name: '',
                            role: 'viewer',
                            is_active: true,
                            setup_complete: false
                        })
                        .select()
                        .single();

                    if (insertError) {
                        console.error('Error creating user record:', insertError);
                    } else {
                        console.log('User record created in users table:', insertedUser);
                        userRecord = insertedUser;
                    }
                } catch (insertErr) {
                    console.error('Exception creating user record:', insertErr);
                }

                // Send welcome email with setup link
                try {
                    const emailResponse = await fetch('/api/send-welcome-email', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: data.user.email,
                            userId: userRecord?.id || data.user.id,
                            authId: data.user.id
                        })
                    });

                    const emailResult = await emailResponse.json();
                    if (emailResult.success) {
                        console.log('Welcome email sent successfully');

                        // Store setup token in users table
                        if (emailResult.setupToken && userRecord?.id) {
                            await supabaseClient
                                .from('users')
                                .update({ setup_token: emailResult.setupToken })
                                .eq('id', userRecord.id);
                        }
                    } else {
                        console.error('Failed to send welcome email:', emailResult);
                    }
                } catch (emailError) {
                    console.error('Error sending welcome email:', emailError);
                    // Don't block signup if email fails
                }
            }

            // Show confirmation message - user needs to check email
            showSignupConfirmation(data.user.email);
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
 * Resume session and show dashboard
 * Called when a valid session is found
 */
async function resumeSession(session) {
    console.log('Resuming session for:', session.user.email);

    try {
        // Get user details from our users table
        const { data: userData, error: userError } = await window.supabaseClient
            .from('users')
            .select('*, organizations(*)')
            .eq('auth_id', session.user.id)
            .single();

        if (userError || !userData) {
            console.warn('User not found in users table during session resume');
            // Still allow login, but with minimal data
            window.currentUser = {
                id: session.user.id,
                auth_id: session.user.id,
                name: session.user.email,
                email: session.user.email,
                role: 'viewer',
                sections: ['keep-listening-section'],
                badge: 'USER',
                badgeClass: 'client-user',
                avatar: session.user.email.charAt(0).toUpperCase()
            };
        } else {
            // Set current user with data from database
            window.currentUser = {
                id: userData.id,
                auth_id: session.user.id,
                name: `${userData.first_name || ''} ${userData.last_name || ''}`.trim() || userData.email,
                firstName: userData.first_name || '',
                lastName: userData.last_name || '',
                email: userData.email,
                organization: userData.organizations?.name || 'Unknown',
                organization_id: userData.organization_id,
                role: userData.role || 'user',
                access: userData.role || 'user',
                sections: getSectionsForRole(userData.role || 'user'),
                badge: getBadgeForRole(userData.role || 'user'),
                badgeClass: getBadgeClassForRole(userData.role || 'user'),
                avatar: userData.first_name ? userData.first_name.charAt(0).toUpperCase() : (userData.email ? userData.email.charAt(0).toUpperCase() : '?')
            };
        }

        // Make currentUser available globally
        if (typeof currentUser === 'undefined') {
            window.currentUser = window.currentUser;
        } else {
            currentUser = window.currentUser;
        }

        // Update UI and show application
        if (typeof updateUserInterface === 'function') {
            updateUserInterface();
        }
        if (typeof showApplication === 'function') {
            showApplication();
        }

        console.log('Session resumed successfully');
    } catch (error) {
        console.error('Error resuming session:', error);
        // On error, show login page
        showAuthPage('auth-signup-step1');
    }
}

/**
 * Initialize auth wizard on page load
 * Checks for existing session before showing login
 */
async function initAuthWizard() {
    // Prevent multiple initializations
    if (window.authInitDone) {
        return;
    }
    window.authInitDone = true;

    console.log('Initializing auth wizard - checking for existing session');

    // Wait for Supabase client to be available
    let attempts = 0;
    while (!window.supabaseClient && attempts < 20) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
    }

    if (!window.supabaseClient) {
        console.warn('Supabase client not available, showing login page');
        showAuthPage('auth-signup-step1');
        return;
    }

    try {
        // Check for existing session BEFORE showing login page
        const { data: { session }, error } = await window.supabaseClient.auth.getSession();

        if (error) {
            console.error('Error checking session:', error);
            showAuthPage('auth-signup-step1');
            return;
        }

        if (session) {
            console.log('Found existing session, resuming...');
            await resumeSession(session);
        } else {
            console.log('No existing session, showing login page');
            showAuthPage('auth-signup-step1');
        }

        // Set up auth state change listener for session refresh and sign out
        window.supabaseClient.auth.onAuthStateChange((event, session) => {
            console.log('Auth state changed:', event);

            if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
                if (session) {
                    console.log('Session refreshed or signed in');
                    // Only resume if we're currently on login page
                    const loginContainer = document.getElementById('login-container');
                    const authPages = document.querySelectorAll('.auth-page:not(.hidden)');
                    if ((loginContainer && !loginContainer.classList.contains('hidden')) || authPages.length > 0) {
                        resumeSession(session);
                    }
                }
            } else if (event === 'SIGNED_OUT') {
                console.log('User signed out');
                // Clear current user
                if (typeof currentUser !== 'undefined') {
                    currentUser = null;
                }
                window.currentUser = null;
                // Show login page
                showAuthPage('auth-signup-step1');
            }
        });

    } catch (error) {
        console.error('Error during auth initialization:', error);
        showAuthPage('auth-signup-step1');
    }
}

// Helper functions (fallbacks if not defined in app.js)
function getSectionsForRole(role) {
    if (typeof window.getSectionsForRole === 'function') {
        return window.getSectionsForRole(role);
    }
    const sections = {
        'master_admin': ['master-admin-section', 'start-listening-section', 'keep-listening-section'],
        'org_admin': ['start-listening-section', 'keep-listening-section'],
        'admin': ['start-listening-section', 'keep-listening-section'],
        'user': ['keep-listening-section'],
        'viewer': ['keep-listening-section']
    };
    return sections[role] || sections['viewer'];
}

function getBadgeForRole(role) {
    if (typeof window.getBadgeForRole === 'function') {
        return window.getBadgeForRole(role);
    }
    const badges = {
        'master_admin': 'MASTER',
        'org_admin': 'ADMIN',
        'admin': 'ADMIN',
        'user': 'USER',
        'viewer': 'USER'
    };
    return badges[role] || 'USER';
}

function getBadgeClassForRole(role) {
    if (typeof window.getBadgeClassForRole === 'function') {
        return window.getBadgeClassForRole(role);
    }
    const classes = {
        'master_admin': 'master-admin',
        'org_admin': 'org-admin',
        'admin': 'admin',
        'user': 'client-user',
        'viewer': 'client-user'
    };
    return classes[role] || 'client-user';
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuthWizard);
} else {
    initAuthWizard();
}
