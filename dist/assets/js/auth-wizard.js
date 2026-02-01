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
 * Initialize auth wizard on page load
 * Always shows the login page - no automatic session resumption
 */
function initAuthWizard() {
    // Prevent multiple initializations
    if (window.authInitDone) {
        return;
    }
    window.authInitDone = true;

    console.log('Initializing auth wizard - showing login page');

    // Always show the auth/login page on page load
    // Users must actively log in - no session resumption
    showAuthPage('auth-signup-step1');
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuthWizard);
} else {
    initAuthWizard();
}
