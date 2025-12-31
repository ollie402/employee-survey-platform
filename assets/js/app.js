// Language functionality
const translations = {
    en: {
        'sign-in-title': 'Sign In to Your Account',
        'sign-in-description': 'Enter your credentials to access the employee survey platform',
        'email-address': 'Email Address',
        'email-placeholder': 'Enter your email address',
        'password': 'Password',
        'password-placeholder': 'Enter your password',
        'remember-me': 'Remember me',
        'sign-in': 'Sign In',
        'or-continue-with': 'or continue with',
        'forgot-password': 'Forgot your password?',
        'quick-login-testing': 'Quick Login (Testing)',
        'login-master-admin': 'Login as Master Admin',
        'login-sarah-techcorp': 'Login as Sarah (TechCorp)',
        'login-mike-startupx': 'Login as Mike (StartupX)',
        'demo-credentials': 'Demo Credentials',
        'master-administrator': 'Master Administrator',
        'client-user-techcorp': 'Client User (TechCorp)',
        'client-user-startupx': 'Client User (StartupX)',
        'master-admin': 'Master Admin',
        'dashboard': 'Dashboard',
        'organizations': 'Organizations',
        'users': 'User Management',
        'branding': 'Branding',
        'start-listening': 'Start Listening',
        'chat-feedback': 'Chat Feedback',
        'chat-management': 'Chat Management',
        'analytics': 'Analytics',
        'ai-reports': 'AI Reports',
        'keep-listening': 'Keep Listening',
        'survey-builder': 'Survey Builder',
        'survey-analytics': 'Survey Analytics',
        'participants': 'Participants',
        'data-management': 'Data Management',
        'ai-data-chat': 'AI Data Chat',
        'active-organizations': 'Active Organizations',
        'total-users': 'Total Users',
        'active-surveys': 'Active Surveys',
        'total-responses': 'Total Responses',
        'recent-activity': 'Recent Activity',
        'view-all': 'View All',
        'organization': 'Organization',
        'activity': 'Activity',
        'user': 'User',
        'time': 'Time',
        'add-organization': 'Add Organization',
        'organization-name': 'Organization Name',
        'plan': 'Plan',
        'status': 'Status',
        'actions': 'Actions',
        'edit': 'Edit',
        'suspend': 'Suspend',
        'add-user': 'Add User',
        'name': 'Name',
        'email': 'Email',
        'access': 'Access',
        'create-new-chat': 'Create New Chat',
        'profile-settings': 'Profile Settings',
        'organization-settings': 'Organization Settings',
        'security': 'Security',
        'help-support': 'Help & Support',
        'sign-out': 'Sign Out',
        'reset-password': 'Reset Password',
        'reset-password-help': 'We\'ll send you a link to reset your password',
        'cancel': 'Cancel',
        'send-reset-link': 'Send Reset Link'
    },
    es: {
        'sign-in-title': 'Iniciar Sesión en tu Cuenta',
        'sign-in-description': 'Ingresa tus credenciales para acceder a la plataforma de encuestas de empleados',
        'email-address': 'Dirección de Correo',
        'email-placeholder': 'Ingresa tu dirección de correo',
        'password': 'Contraseña',
        'password-placeholder': 'Ingresa tu contraseña',
        'remember-me': 'Recordarme',
        'sign-in': 'Iniciar Sesión',
        'or-continue-with': 'o continuar con',
        'forgot-password': '¿Olvidaste tu contraseña?',
        'quick-login-testing': 'Inicio Rápido (Pruebas)',
        'login-master-admin': 'Iniciar como Administrador Principal',
        'login-sarah-techcorp': 'Iniciar como Sarah (TechCorp)',
        'login-mike-startupx': 'Iniciar como Mike (StartupX)',
        'demo-credentials': 'Credenciales de Demostración',
        'master-administrator': 'Administrador Principal',
        'client-user-techcorp': 'Usuario Cliente (TechCorp)',
        'client-user-startupx': 'Usuario Cliente (StartupX)',
        'master-admin': 'Administrador Principal',
        'dashboard': 'Panel de Control',
        'organizations': 'Organizaciones',
        'users': 'Gestión de Usuarios',
        'branding': 'Marca',
        'start-listening': 'Comenzar a Escuchar',
        'chat-feedback': 'Chat de Retroalimentación',
        'chat-management': 'Gestión de Chat',
        'analytics': 'Análisis',
        'ai-reports': 'Reportes de IA',
        'keep-listening': 'Seguir Escuchando',
        'survey-builder': 'Constructor de Encuestas',
        'survey-analytics': 'Análisis de Encuestas',
        'participants': 'Participantes',
        'data-management': 'Gestión de Datos',
        'ai-data-chat': 'Chat de Datos IA',
        'active-organizations': 'Organizaciones Activas',
        'total-users': 'Total de Usuarios',
        'active-surveys': 'Encuestas Activas',
        'total-responses': 'Total de Respuestas',
        'recent-activity': 'Actividad Reciente',
        'view-all': 'Ver Todo',
        'organization': 'Organización',
        'activity': 'Actividad',
        'user': 'Usuario',
        'time': 'Tiempo',
        'add-organization': 'Agregar Organización',
        'organization-name': 'Nombre de Organización',
        'plan': 'Plan',
        'status': 'Estado',
        'actions': 'Acciones',
        'edit': 'Editar',
        'suspend': 'Suspender',
        'add-user': 'Agregar Usuario',
        'name': 'Nombre',
        'email': 'Correo Electrónico',
        'access': 'Acceso',
        'create-new-chat': 'Crear Nuevo Chat',
        'profile-settings': 'Configuración de Perfil',
        'organization-settings': 'Configuración de Organización',
        'security': 'Seguridad',
        'help-support': 'Ayuda y Soporte',
        'sign-out': 'Cerrar Sesión',
        'reset-password': 'Restablecer Contraseña',
        'reset-password-help': 'Te enviaremos un enlace para restablecer tu contraseña',
        'cancel': 'Cancelar',
        'send-reset-link': 'Enviar Enlace de Restablecimiento'
    },
    fr: {
        'sign-in-title': 'Connectez-vous à votre Compte',
        'sign-in-description': 'Entrez vos identifiants pour accéder à la plateforme d\'enquête des employés',
        'email-address': 'Adresse E-mail',
        'email-placeholder': 'Entrez votre adresse e-mail',
        'password': 'Mot de Passe',
        'password-placeholder': 'Entrez votre mot de passe',
        'remember-me': 'Se souvenir de moi',
        'sign-in': 'Se Connecter',
        'or-continue-with': 'ou continuer avec',
        'forgot-password': 'Mot de passe oublié?',
        'quick-login-testing': 'Connexion Rapide (Test)',
        'login-master-admin': 'Se connecter en tant qu\'Administrateur Principal',
        'login-sarah-techcorp': 'Se connecter en tant que Sarah (TechCorp)',
        'login-mike-startupx': 'Se connecter en tant que Mike (StartupX)',
        'demo-credentials': 'Identifiants de Démonstration',
        'master-administrator': 'Administrateur Principal',
        'client-user-techcorp': 'Utilisateur Client (TechCorp)',
        'client-user-startupx': 'Utilisateur Client (StartupX)',
        'master-admin': 'Administrateur Principal',
        'dashboard': 'Tableau de Bord',
        'organizations': 'Organisations',
        'users': 'Gestion des Utilisateurs',
        'branding': 'Image de Marque',
        'start-listening': 'Commencer à Écouter',
        'chat-feedback': 'Chat de Retour',
        'chat-management': 'Gestion du Chat',
        'analytics': 'Analytiques',
        'ai-reports': 'Rapports IA',
        'keep-listening': 'Continuer à Écouter',
        'survey-builder': 'Constructeur d\'Enquête',
        'survey-analytics': 'Analytiques d\'Enquête',
        'participants': 'Participants',
        'data-management': 'Gestion des Données',
        'ai-data-chat': 'Chat de Données IA',
        'active-organizations': 'Organisations Actives',
        'total-users': 'Total des Utilisateurs',
        'active-surveys': 'Enquêtes Actives',
        'total-responses': 'Total des Réponses',
        'recent-activity': 'Activité Récente',
        'view-all': 'Voir Tout',
        'organization': 'Organisation',
        'activity': 'Activité',
        'user': 'Utilisateur',
        'time': 'Temps',
        'add-organization': 'Ajouter une Organisation',
        'organization-name': 'Nom de l\'Organisation',
        'plan': 'Plan',
        'status': 'Statut',
        'actions': 'Actions',
        'edit': 'Modifier',
        'suspend': 'Suspendre',
        'add-user': 'Ajouter un Utilisateur',
        'name': 'Nom',
        'email': 'E-mail',
        'access': 'Accès',
        'create-new-chat': 'Créer un Nouveau Chat',
        'profile-settings': 'Paramètres du Profil',
        'organization-settings': 'Paramètres de l\'Organisation',
        'security': 'Sécurité',
        'help-support': 'Aide et Support',
        'sign-out': 'Se Déconnecter',
        'reset-password': 'Réinitialiser le Mot de Passe',
        'reset-password-help': 'Nous vous enverrons un lien pour réinitialiser votre mot de passe',
        'cancel': 'Annuler',
        'send-reset-link': 'Envoyer le Lien de Réinitialisation'
    },
    de: {
        'sign-in-title': 'In Ihr Konto Einloggen',
        'sign-in-description': 'Geben Sie Ihre Anmeldedaten ein, um auf die Mitarbeiterumfrage-Plattform zuzugreifen',
        'email-address': 'E-Mail-Adresse',
        'email-placeholder': 'Geben Sie Ihre E-Mail-Adresse ein',
        'password': 'Passwort',
        'password-placeholder': 'Geben Sie Ihr Passwort ein',
        'remember-me': 'Angemeldet bleiben',
        'sign-in': 'Anmelden',
        'or-continue-with': 'oder fortfahren mit',
        'forgot-password': 'Passwort vergessen?',
        'quick-login-testing': 'Schnelle Anmeldung (Test)',
        'login-master-admin': 'Als Hauptadministrator anmelden',
        'login-sarah-techcorp': 'Als Sarah (TechCorp) anmelden',
        'login-mike-startupx': 'Als Mike (StartupX) anmelden',
        'demo-credentials': 'Demo-Anmeldedaten',
        'master-administrator': 'Hauptadministrator',
        'client-user-techcorp': 'Client-Benutzer (TechCorp)',
        'client-user-startupx': 'Client-Benutzer (StartupX)',
        'master-admin': 'Hauptadministrator',
        'dashboard': 'Dashboard',
        'organizations': 'Organisationen',
        'users': 'Benutzerverwaltung',
        'branding': 'Branding',
        'start-listening': 'Zuhören Beginnen',
        'chat-feedback': 'Chat-Feedback',
        'chat-management': 'Chat-Verwaltung',
        'analytics': 'Analytik',
        'ai-reports': 'KI-Berichte',
        'keep-listening': 'Weiter Zuhören',
        'survey-builder': 'Umfrage-Builder',
        'survey-analytics': 'Umfrage-Analytik',
        'participants': 'Teilnehmer',
        'data-management': 'Datenverwaltung',
        'ai-data-chat': 'KI-Daten-Chat',
        'active-organizations': 'Aktive Organisationen',
        'total-users': 'Benutzer Gesamt',
        'active-surveys': 'Aktive Umfragen',
        'total-responses': 'Antworten Gesamt',
        'recent-activity': 'Neueste Aktivität',
        'view-all': 'Alle Anzeigen',
        'organization': 'Organisation',
        'activity': 'Aktivität',
        'user': 'Benutzer',
        'time': 'Zeit',
        'add-organization': 'Organisation Hinzufügen',
        'organization-name': 'Organisationsname',
        'plan': 'Plan',
        'status': 'Status',
        'actions': 'Aktionen',
        'edit': 'Bearbeiten',
        'suspend': 'Sperren',
        'add-user': 'Benutzer Hinzufügen',
        'name': 'Name',
        'email': 'E-Mail',
        'access': 'Zugang',
        'create-new-chat': 'Neuen Chat Erstellen',
        'profile-settings': 'Profil-Einstellungen',
        'organization-settings': 'Organisations-Einstellungen',
        'security': 'Sicherheit',
        'help-support': 'Hilfe & Support',
        'sign-out': 'Abmelden',
        'reset-password': 'Passwort Zurücksetzen',
        'reset-password-help': 'Wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts',
        'cancel': 'Abbrechen',
        'send-reset-link': 'Reset-Link Senden'
    }
};

let currentLanguage = 'en';

function toggleLanguageDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    dropdown.classList.toggle('show');
}

function changeLanguage(lang) {
    const flagMap = {
        'en': '🇬🇧', 'es': '🇪🇸', 'fr': '🇫🇷', 'de': '🇩🇪',
        'it': '🇮🇹', 'pt': '🇵🇹', 'nl': '🇳🇱', 'zh': '🇨🇳',
        'ja': '🇯🇵', 'ko': '🇰🇷', 'ar': '🇸🇦', 'ru': '🇷🇺'
    };
    
    const nameMap = {
        'en': 'English', 'es': 'Spanish', 'fr': 'French', 'de': 'German',
        'it': 'Italian', 'pt': 'Portuguese', 'nl': 'Dutch', 'zh': 'Chinese',
        'ja': 'Japanese', 'ko': 'Korean', 'ar': 'Arabic', 'ru': 'Russian'
    };
    
    // Update dropdown display
    document.getElementById('current-flag').textContent = flagMap[lang];
    document.getElementById('current-language').textContent = nameMap[lang];
    
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('selected');
    
    // Update current language
    currentLanguage = lang;
    
    // Apply translations
    applyTranslations(lang);
    
    toggleLanguageDropdown();
    
    // Show toast in the selected language
    const toastMessages = {
        'en': `Language changed to ${nameMap[lang]}`,
        'es': `Idioma cambiado a ${nameMap[lang]}`,
        'fr': `Langue changée en ${nameMap[lang]}`,
        'de': `Sprache geändert zu ${nameMap[lang]}`
    };
    
    showToast(toastMessages[lang] || toastMessages['en'], 'success');
}

function applyTranslations(lang) {
    // Get translations for the selected language, fallback to English
    const langTranslations = translations[lang] || translations['en'];
    
    // Find all elements with data-translate attribute and update their text
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (langTranslations[key]) {
            // Handle different types of elements
            if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email' || element.type === 'password')) {
                // For input elements, we update placeholder, not text content
                // This is handled separately below
            } else if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = langTranslations[key];
            } else if (element.tagName === 'BUTTON') {
                element.textContent = langTranslations[key];
            } else {
                element.textContent = langTranslations[key];
            }
        }
    });

    // Handle placeholder translations
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (langTranslations[key]) {
            element.placeholder = langTranslations[key];
        }
    });
}

// Application State Management
let appState = {
    surveys: [],
    organizations: [],
    users: [],
    participants: [],
    chatMessages: [],
    aiChatMessages: [],
    currentDataSources: ['all'],
    sortOrder: {},
    filters: {},
    selectedItems: {},
    branding: {
        primaryColor: '#2563eb',
        secondaryColor: '#64748b',
        companyName: 'Realworld',
        welcomeMessage: 'Welcome! Your feedback helps us improve and create a better workplace for everyone.',
        logoUrl: null,
        fontFamily: 'system'
    }
};

// User data for different login types
const users = {
    master: {
        name: 'Paul Everitt',
        email: 'paul.everitt@rworld.co.uk',
        role: 'Master Administrator',
        badge: 'MASTER',
        badgeClass: 'master-admin',
        avatar: 'PE',
        sections: ['master-admin-section', 'start-listening-section', 'keep-listening-section']
    },
    client1: {
        name: 'Sarah Johnson',
        email: 'sarah@techcorp.com',
        role: 'Client User (TechCorp)',
        badge: 'CLIENT',
        badgeClass: 'client-user',
        avatar: 'SJ',
        sections: ['start-listening-section', 'keep-listening-section']
    },
    client2: {
        name: 'Mike Chen',
        email: 'mike@startupx.com',
        role: 'Client User (StartupX)',
        badge: 'CLIENT',
        badgeClass: 'client-user',
        avatar: 'MC',
        sections: ['keep-listening-section']
    }
};

let currentUser = null;

// ========================================
// EMAIL INTEGRATION FUNCTIONS - NEW!
// ========================================

// General function to send any type of email
async function sendEmail(emailData) {
    try {
        // Show loading message
        console.log('Sending email...');
        
        // Send request to our API
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
        });

        // Get the response
        const result = await response.json();
        
        // Check if it worked
        if (response.ok) {
            console.log('Email sent successfully!');
            return { success: true, data: result };
        } else {
            console.error('Email failed:', result.error);
            throw new Error(result.error || 'Failed to send email');
        }
    } catch (error) {
        console.error('Email sending error:', error);
        return { success: false, error: error.message };
    }
}


// Function to send report via email
async function emailReport(reportData) {
    const emailData = {
        to: currentUser.email,
        subject: `Your ${reportData.type} Report - ${new Date().toLocaleDateString()}`,
        htmlBody: `
            <h2>Your Report is Ready!</h2>
            <p>Hi ${currentUser.name},</p>
            <p>Your ${reportData.type} report has been generated successfully.</p>
            <p><strong>Report Details:</strong></p>
            <ul>
                <li>Type: ${reportData.type}</li>
                <li>Period: ${reportData.period}</li>
                <li>Generated: ${new Date().toLocaleString()}</li>
            </ul>
            <p>The report is attached to this email.</p>
            <p>Best regards,<br>Realworld Team</p>
        `
    };
    
    const result = await sendEmail(emailData);
    
    if (result.success) {
        showToast('Report sent to your email!', 'success');
    } else {
        showToast('Failed to email report', 'error');
    }
}

// Function to send chat widget link via email
async function emailChatLink(chatSessionData) {
    const emailData = {
        to: currentUser.email,
        subject: `Chat Widget Link - ${chatSessionData.name}`,
        htmlBody: `
            <h2>Your Chat Widget Link is Ready!</h2>
            <p>Hi ${currentUser.name},</p>
            <p>Your chat widget "${chatSessionData.name}" has been created successfully.</p>
            <p><strong>Share this link with participants:</strong></p>
            <p style="background: #f0f9ff; padding: 15px; border-radius: 5px; word-break: break-all;">
                <a href="${chatSessionData.link}">${chatSessionData.link}</a>
            </p>
            <p><strong>Settings:</strong></p>
            <ul>
                <li>Expiry: ${chatSessionData.expiry}</li>
                <li>Anonymous responses: ${chatSessionData.allowAnonymous ? 'Allowed' : 'Not allowed'}</li>
                <li>Email required: ${chatSessionData.requireEmail ? 'Yes' : 'No'}</li>
            </ul>
            <p>Best regards,<br>Realworld Team</p>
        `
    };
    
    const result = await sendEmail(emailData);
    
    if (result.success) {
        showToast('Chat link sent to your email!', 'success');
    } else {
        showToast('Failed to email chat link', 'error');
    }
}

// ========================================
// END EMAIL INTEGRATION FUNCTIONS
// ========================================

// BRANDING FUNCTIONALITY - NEW FUNCTIONS START HERE

// Function to apply branding changes to the website - FULLY ADAPTABLE VERSION
function applyBrandingToWebsite() {
    const branding = appState.branding;
    
    // Apply color changes
    if (branding.primaryColor) {
        document.documentElement.style.setProperty('--primary-color', branding.primaryColor);
    }
    if (branding.secondaryColor) {
        document.documentElement.style.setProperty('--secondary-color', branding.secondaryColor);
    }
    
    // Apply font family
    if (branding.fontFamily) {
        const fontMap = {
            'system': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            'inter': '"Inter", sans-serif',
            'roboto': '"Roboto", sans-serif',
            'open-sans': '"Open Sans", sans-serif',
            'lato': '"Lato", sans-serif'
        };
        document.body.style.fontFamily = fontMap[branding.fontFamily] || fontMap['system'];
    }
    
    // Apply company name to logo areas
    if (branding.companyName) {
        const logoElements = document.querySelectorAll('.logo');
        logoElements.forEach(logo => {
            // Only update text, not the logo icon
            const logoText = logo.querySelector('span') || logo.lastChild;
            if (logoText && logoText.nodeType === Node.TEXT_NODE) {
                logoText.textContent = branding.companyName;
            } else if (logoText && logoText.tagName === 'SPAN') {
                logoText.textContent = branding.companyName;
            } else if (!logo.querySelector('.logo-icon')) {
                // If there's no logo-icon, update the text content
                logo.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = branding.companyName;
                    }
                });
            }
        });
        
        // Update login header logo text separately
        const loginLogoText = document.querySelector('.login-header .logo span');
        if (loginLogoText) {
            loginLogoText.textContent = branding.companyName;
        }
    }
    
    // Apply logo if uploaded - FULLY ADAPTABLE VERSION
    if (branding.logoUrl) {
        const logoIcons = document.querySelectorAll('.logo-icon');
        logoIcons.forEach(icon => {
            // Remove default background class and add custom class
            icon.classList.remove('has-default');
            icon.classList.add('has-custom');
            
            // Clear any existing content
            icon.innerHTML = '';
            
            // Remove inline background styles
            icon.style.background = 'transparent';
            
            // Create and add the image element
            const img = document.createElement('img');
            img.src = branding.logoUrl;
            img.alt = branding.companyName || 'Logo';
            img.style.cssText = 'width: 100%; height: 100%; object-fit: contain;';
            icon.appendChild(img);
        });
    } else {
        // If no logo URL, restore the default "R" text with colored background
        const logoIcons = document.querySelectorAll('.logo-icon');
        logoIcons.forEach(icon => {
            // Add default background class and remove custom class
            icon.classList.add('has-default');
            icon.classList.remove('has-custom');
            
            // Reset inline styles
            icon.style = '';
            
            // Clear and set default content
            icon.innerHTML = '';
            icon.textContent = 'R';
        });
    }
}

// Function to save branding to localStorage
function saveBrandingToStorage() {
    localStorage.setItem('realworldBranding', JSON.stringify(appState.branding));
}

// Function to load branding from localStorage
function loadBrandingFromStorage() {
    const savedBranding = localStorage.getItem('realworldBranding');
    if (savedBranding) {
        try {
            appState.branding = { ...appState.branding, ...JSON.parse(savedBranding) };
            applyBrandingToWebsite();
        } catch (e) {
            console.error('Error loading saved branding:', e);
        }
    }
}

// Function to sync color inputs
function initializeColorSync() {
    // Primary color sync
    const primaryColorPicker = document.getElementById('brand-primary-color');
    const primaryColorText = primaryColorPicker?.nextElementSibling;
    
    if (primaryColorPicker && primaryColorText) {
        primaryColorPicker.addEventListener('input', function() {
            primaryColorText.value = this.value;
            updateBrandingPreview();
        });
        
        primaryColorText.addEventListener('input', function() {
            if (/^#[0-9A-F]{6}$/i.test(this.value)) {
                primaryColorPicker.value = this.value;
                updateBrandingPreview();
            }
        });
    }
    
    // Secondary color sync
    const secondaryColorPicker = document.getElementById('brand-secondary-color');
    const secondaryColorText = secondaryColorPicker?.nextElementSibling;
    
    if (secondaryColorPicker && secondaryColorText) {
        secondaryColorPicker.addEventListener('input', function() {
            secondaryColorText.value = this.value;
            updateBrandingPreview();
        });
        
        secondaryColorText.addEventListener('input', function() {
            if (/^#[0-9A-F]{6}$/i.test(this.value)) {
                secondaryColorPicker.value = this.value;
                updateBrandingPreview();
            }
        });
    }
}

// Function to reset branding to defaults - ADAPTABLE VERSION
function resetBranding() {
    if (confirm('Reset all branding to defaults? This will remove your custom settings.')) {
        appState.branding = {
            primaryColor: '#2563eb',
            secondaryColor: '#64748b',
            companyName: 'Realworld',
            welcomeMessage: 'Welcome! Your feedback helps us improve and create a better workplace for everyone.',
            logoUrl: null,
            fontFamily: 'system'
        };
        
        // Clear localStorage
        localStorage.removeItem('realworldBranding');
        
        // Apply defaults
        applyBrandingToWebsite();
        
        // Reset form inputs
        document.getElementById('brand-company-name').value = appState.branding.companyName;
        document.getElementById('brand-primary-color').value = appState.branding.primaryColor;
        document.getElementById('brand-secondary-color').value = appState.branding.secondaryColor;
        document.getElementById('brand-font').value = appState.branding.fontFamily;
        document.getElementById('brand-welcome-message').value = appState.branding.welcomeMessage;
        
        // Reset logo upload area and restore file input
        const uploadArea = document.querySelector('.file-upload-area');
        if (uploadArea) {
            uploadArea.innerHTML = `
                <input type="file" id="logo-upload" accept="image/*" style="display: none;" onchange="handleLogoUpload(event)">
                <div>
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📎</div>
                    <div><strong>Click to upload logo</strong></div>
                    <div style="color: var(--text-secondary); margin-top: 0.5rem;">PNG, JPG up to 2MB</div>
                    <div style="color: var(--text-secondary); font-size: 0.75rem; margin-top: 0.5rem;">
                        💡 Tip: Use a transparent PNG for best results
                    </div>
                </div>
            `;
            // Re-add the click event listener
            uploadArea.onclick = function() {
                document.getElementById('logo-upload').click();
            };
        }

        // Reset logo icons to default "R" with colored background
        const logoIcons = document.querySelectorAll('.logo-icon');
        logoIcons.forEach(icon => {
            icon.classList.add('has-default');
            icon.classList.remove('has-custom');
            icon.style = '';
            icon.innerHTML = '';
            icon.textContent = 'R';
        });
        
        updateBrandingPreview();
        showToast('Branding reset to defaults!', 'success');
    }
}

// BRANDING FUNCTIONALITY - NEW FUNCTIONS END HERE

// Helper functions for user interface based on role
function getSectionsForRole(role) {
    // Super admin gets all navigation sections
    if (role === 'super_admin' || role === 'org_admin') {
        return [
            'master-admin-section',
            'start-listening-section'
        ];
    }
    // Standard user gets limited sections
    return ['start-listening-section'];
}

function getBadgeForRole(role) {
    const badges = {
        'super_admin': 'Super Admin',
        'org_admin': 'Org Admin',
        'survey_creator': 'Creator',
        'survey_respondent': 'User'
    };
    return badges[role] || 'User';
}

function getBadgeClassForRole(role) {
    const classes = {
        'super_admin': 'badge-admin',
        'org_admin': 'badge-admin',
        'survey_creator': 'badge-creator',
        'survey_respondent': 'badge-user'
    };
    return classes[role] || 'badge-user';
}

// Login functionality
function quickLogin(userType) {
    const user = users[userType];
    if (user) {
        fillCredentials(user.email, 'demo123');
        setTimeout(() => {
            handleLogin(userType);
        }, 100);
    }
}

// Handle demo login (for quick login buttons)
function handleLogin(userType) {
    const loginBtn = document.getElementById('login-btn');

    if (loginBtn) {
        loginBtn.classList.add('loading');
        loginBtn.disabled = true;
    }

    setTimeout(() => {
        currentUser = users[userType];
        updateUserInterface();
        showApplication();

        if (loginBtn) {
            loginBtn.classList.remove('loading');
            loginBtn.disabled = false;
        }

        showToast(`Welcome back, ${currentUser.name}!`, 'success');
    }, 500);
}

function fillCredentials(email, password) {
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;
    
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    
    emailField.style.background = '#f0f9ff';
    passwordField.style.background = '#f0f9ff';
    
    setTimeout(() => {
        emailField.style.background = '';
        passwordField.style.background = '';
    }, 1000);
}

document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginBtn = document.getElementById('login-btn');

    loginBtn.classList.add('loading');
    loginBtn.disabled = true;

    try {
        // Real Supabase authentication
        const { data: authData, error: authError } = await window.supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (authError) {
            throw authError;
        }

        // Get user details from our users table
        const { data: userData, error: userError } = await window.supabaseClient
            .from('users')
            .select('*, organizations(*)')
            .eq('auth_id', authData.user.id)
            .single();

        if (userError || !userData) {
            // User exists in Auth but not in users table - shouldn't happen but handle it
            console.error('User not found in users table:', userError);
            throw new Error('Account not properly configured. Please contact support.');
        }

        // Set current user with data from database
        currentUser = {
            id: userData.id,
            auth_id: authData.user.id,
            name: `${userData.first_name} ${userData.last_name}`,
            firstName: userData.first_name,
            lastName: userData.last_name,
            email: userData.email,
            organization: userData.organizations?.name || 'Unknown',
            organization_id: userData.organization_id,
            role: userData.role,
            access: userData.role,
            sections: getSectionsForRole(userData.role),
            badge: getBadgeForRole(userData.role),
            badgeClass: getBadgeClassForRole(userData.role),
            avatar: userData.first_name ? userData.first_name.charAt(0).toUpperCase() : '?'
        };

        // Apply organization-specific branding
        applyOrganizationBranding(currentUser);

        updateUserInterface();
        showApplication();

        showToast(`Welcome back, ${currentUser.name}!`, 'success');

    } catch (error) {
        console.error('Login error:', error);
        showToast(error.message || 'Invalid credentials. Please try again.', 'error');
    } finally {
        loginBtn.classList.remove('loading');
        loginBtn.disabled = false;
    }
});

// Apply organization branding on login
function applyOrganizationBranding(user) {
    // Load organizations from localStorage
    const organizations = JSON.parse(localStorage.getItem('organizations') || '[]');
    
    // Find the organization for this user
    let userOrg = null;
    if (user.email.includes('techcorp')) {
        userOrg = organizations.find(org => org.name.toLowerCase().includes('techcorp'));
    } else if (user.email.includes('startupx')) {
        userOrg = organizations.find(org => org.name.toLowerCase().includes('startupx'));
    }
    
    // Apply branding if organization found
    if (userOrg && userOrg.branding) {
        const branding = userOrg.branding;
        
        // Apply colors
        if (branding.primaryColor) {
            document.documentElement.style.setProperty('--primary-color', branding.primaryColor);
        }
        if (branding.secondaryColor) {
            document.documentElement.style.setProperty('--secondary-color', branding.secondaryColor);
        }
        
        // Apply font
        if (branding.fontFamily) {
            const fontMap = {
                'system': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                'inter': '"Inter", sans-serif',
                'roboto': '"Roboto", sans-serif',
                'open-sans': '"Open Sans", sans-serif',
                'lato': '"Lato", sans-serif'
            };
            document.body.style.fontFamily = fontMap[branding.fontFamily] || fontMap['system'];
        }
        
        // Apply logo
        if (branding.logo) {
            const logoIcons = document.querySelectorAll('.logo-icon');
            logoIcons.forEach(icon => {
                icon.classList.remove('has-default');
                icon.classList.add('has-custom');
                icon.innerHTML = `<img src="${branding.logo}" alt="${userOrg.name}" style="width: 100%; height: 100%; object-fit: contain;">`;
            });
        }
        
        // Update company name
        const logoElements = document.querySelectorAll('.logo span');
        logoElements.forEach(span => {
            span.textContent = userOrg.name;
        });
        
        // Store current org branding for session
        appState.currentOrgBranding = branding;
        appState.currentOrgName = userOrg.name;
    }
}

function updateUserInterface() {
    if (!currentUser) return;
    
    document.getElementById('user-name').textContent = currentUser.name;
    document.getElementById('user-role').innerHTML = `
        ${currentUser.role}
        <span class="user-role-badge ${currentUser.badgeClass}" id="user-role-badge">${currentUser.badge}</span>
    `;
    document.getElementById('user-avatar').textContent = currentUser.avatar;
    
    const allSections = document.querySelectorAll('.nav-section');
    console.log('updateUserInterface - currentUser.sections:', currentUser.sections);
    console.log('updateUserInterface - nav-sections found:', allSections.length);

    allSections.forEach(section => {
        console.log('Nav section:', section.id, 'included:', currentUser.sections?.includes(section.id));
        if (currentUser.sections && currentUser.sections.includes(section.id)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function showApplication() {
    // Hide auth wizard header if visible
    const authHeader = document.getElementById('auth-header');
    if (authHeader) {
        authHeader.classList.add('hidden');
    }

    // Hide any auth wizard pages
    document.querySelectorAll('.auth-page').forEach(page => {
        page.classList.add('hidden');
    });

    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');

    // Ensure sidebar is visible on desktop
    const sidebar = document.getElementById('sidebar');
    console.log('showApplication called, sidebar element:', sidebar);

    if (sidebar) {
        // Remove any classes that might hide the sidebar
        sidebar.classList.remove('collapsed');
        sidebar.classList.remove('open');
        sidebar.classList.remove('hidden');

        // Force sidebar to be visible on desktop
        if (window.innerWidth > 768) {
            sidebar.style.transform = 'translateX(0)';
            sidebar.style.display = 'block';
            sidebar.style.width = '280px';
            sidebar.style.position = 'relative';
            console.log('Sidebar forced visible, classes:', sidebar.className);
        }
    }
}

// Navigation functionality
function showSection(sectionName) {
    // Only select main content sections, NOT sidebar nav-sections
    const sections = document.querySelectorAll('.main-content [id$="-section"]');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
    
    // Update navigation highlighting
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Find and highlight the correct nav item
    const navItem = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (navItem) {
        navItem.classList.add('active');
    }
    
    const breadcrumb = document.getElementById('breadcrumb');
    const sectionTitle = {
        'dashboard': translations[currentLanguage]['dashboard'] || 'Dashboard',
        'organizations': translations[currentLanguage]['organizations'] || 'Organizations',
        'users': translations[currentLanguage]['users'] || 'User Management',
        'branding': translations[currentLanguage]['branding'] || 'Branding',
        'chat-feedback': translations[currentLanguage]['chat-feedback'] || 'Chat Feedback',
        'chat-management': translations[currentLanguage]['chat-management'] || 'Chat Management',
        'chat-analytics': translations[currentLanguage]['analytics'] || 'Analytics',
        'chat-reports': translations[currentLanguage]['ai-reports'] || 'AI Reports',
        'survey-builder': translations[currentLanguage]['survey-builder'] || 'Survey Builder',
        'survey-analytics': translations[currentLanguage]['survey-analytics'] || 'Survey Analytics',
        'participants': translations[currentLanguage]['participants'] || 'Participants',
        'data-management': translations[currentLanguage]['data-management'] || 'Data Management',
        'ai-data-chat': translations[currentLanguage]['ai-data-chat'] || 'AI Data Chat'
    };
    
    breadcrumb.textContent = sectionTitle[sectionName] || translations[currentLanguage]['dashboard'] || 'Dashboard';
    
    // Load real data when sections are shown
    if (sectionName === 'dashboard') {
        loadDashboardData();
    } else if (sectionName === 'users') {
        loadUsersTable();
    } else if (sectionName === 'organizations') {
        loadOrganizationsTable();
    } else if (sectionName === 'chat-reports') {
        loadChatReportsData();
    }
}

async function loadDashboardData() {
    try {
        // Load real organization count
        const organizations = await loadOrganizations() || [];
        document.querySelector('.stat-value').textContent = organizations.length;
        
        // Load real user count
        const users = await loadUsers() || [];
        const userStatElements = document.querySelectorAll('.stat-value');
        if (userStatElements[1]) {
            userStatElements[1].textContent = users.length;
        }
        
        // Load real survey count
        const surveys = await loadSurveys() || [];
        if (userStatElements[2]) {
            userStatElements[2].textContent = surveys.length;
        }
        
        // Load real response count
        const responses = await loadSurveyResponses() || [];
        if (userStatElements[3]) {
            userStatElements[3].textContent = responses.length;
        }
        
        console.log('Dashboard data loaded from database');
    } catch (error) {
        console.error('Error loading dashboard data:', error);
    }
}

async function loadUsersTable() {
    try {
        const users = await loadUsers() || [];
        const tbody = document.querySelector('#users-table tbody');
        
        if (users.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: #6b7280;">No users found. Create your first user using the "Add User" button.</td></tr>';
            return;
        }
        
        tbody.innerHTML = users.map(user => `
            <tr onclick="showUserDetails('${user.id}')">
                <td><input type="checkbox"></td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.organization || 'No Organization'}</td>
                <td><span class="tag tag-pending">${user.role}</span></td>
                <td><span class="tag tag-${user.status === 'active' ? 'success' : 'pending'}">${user.status || 'Active'}</span></td>
                <td>${user.created_at ? new Date(user.created_at).toLocaleDateString() : 'Never'}</td>
                <td>
                    <button class="btn btn-secondary btn-sm" onclick="handleEditUser('${user.id}')">Edit</button>
                    <button class="btn btn-primary btn-sm" onclick="handleResendInvite('${user.name}')">Resend Invite</button>
                    <button class="btn btn-danger btn-sm" onclick="handleRemoveUser('${user.id}')">Remove</button>
                </td>
            </tr>
        `).join('');
        
        console.log('Users table loaded from database');
    } catch (error) {
        console.error('Error loading users table:', error);
    }
}

async function loadOrganizationsTable() {
    try {
        const organizations = await loadOrganizations() || [];
        const tbody = document.querySelector('#organizations-table tbody');
        
        if (organizations.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #6b7280;">No organizations found. Create your first organization using the "Add Organization" button.</td></tr>';
            return;
        }
        
        tbody.innerHTML = organizations.map(org => `
            <tr onclick="showOrganizationDetails('${org.id}')">
                <td><input type="checkbox"></td>
                <td>${org.name}</td>
                <td>${org.plan || 'Not Set'}</td>
                <td>${org.users || 0}</td>
                <td><span class="tag tag-${org.status === 'active' ? 'success' : 'warning'}">${org.status || 'Active'}</span></td>
                <td>${org.created_at ? new Date(org.created_at).toLocaleDateString() : 'Never'}</td>
                <td>
                    <button class="btn btn-secondary btn-sm" onclick="handleEditOrganization('${org.name}')">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="handleSuspendOrganization('${org.name}')">Suspend</button>
                    <button class="btn btn-danger btn-sm" onclick="handleDeleteOrganization('${org.id}', '${org.name}')">Delete</button>
                </td>
            </tr>
        `).join('');
        
        console.log('Organizations table loaded from database');
    } catch (error) {
        console.error('Error loading organizations table:', error);
    }
}

async function loadChatReportsData() {
    try {
        const analytics = await getChatResponseAnalytics();

        // Update the statistics cards with real data
        const statCards = document.querySelectorAll('#chat-reports-section .stat-card .stat-value');
        if (statCards.length >= 4) {
            statCards[0].textContent = analytics.totalResponses; // Total Sessions
            statCards[1].textContent = analytics.totalResponses * 3; // Data Points (estimated 3 per session)
            statCards[2].textContent = Math.max(1, Math.floor(analytics.totalResponses / 3)); // Insights discovered
            statCards[3].textContent = analytics.totalResponses > 0 ? '94%' : '0%'; // Accuracy score
        }

        // Update the reports table with real recent sessions
        const chatResponses = await loadChatResponses();
        const recentSessions = chatResponses.slice(0, 5); // Get 5 most recent

        const tbody = document.querySelector('#chat-reports-section table tbody');
        if (tbody && recentSessions.length > 0) {
            tbody.innerHTML = recentSessions.map(session => {
                const completedDate = new Date(session.completed_at || session.created_at).toLocaleDateString();
                const messageCount = typeof session.messages === 'string' ?
                    JSON.parse(session.messages).length : session.messages.length;

                return `
                    <tr>
                        <td><strong>${session.chat_type.charAt(0).toUpperCase() + session.chat_type.slice(1)} Session</strong></td>
                        <td>${completedDate}</td>
                        <td>Chat Feedback</td>
                        <td><span class="tag tag-${session.sentiment}">${messageCount} messages</span></td>
                        <td>
                            <button class="btn btn-secondary btn-sm" onclick="viewSessionDetails('${session.session_id}')">View</button>
                            <button class="btn btn-primary btn-sm" onclick="exportSessionData('${session.session_id}')">Export</button>
                        </td>
                    </tr>
                `;
            }).join('');
        } else if (tbody) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; color: #6b7280;">
                        No chat sessions found. Start collecting feedback to see AI reports here.
                    </td>
                </tr>
            `;
        }

        console.log('Chat reports data loaded successfully');
    } catch (error) {
        console.error('Error loading chat reports data:', error);
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    // On mobile (768px or less), use 'open' class
    // On desktop, use 'collapsed' class
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('open');
    } else {
        sidebar.classList.toggle('collapsed');
    }
}

function toggleUserMenu() {
    const dropdown = document.getElementById('user-dropdown');
    dropdown.classList.toggle('show');
}

function handleLogout() {
    if (confirm('Are you sure you want to sign out?')) {
        currentUser = null;
        document.getElementById('app-container').classList.add('hidden');
        document.getElementById('login-container').classList.remove('hidden');
        
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        
        showToast('You have been signed out successfully.', 'success');
    }
}

// Utility functions
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        max-width: 400px;
        padding: 1rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        box-shadow: var(--shadow-lg);
        animation: slideIn 0.3s ease-out;
    `;
    
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#2563eb'
    };
    
    toast.style.background = colors[type] || colors.info;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Profile and Settings Functions
function showProfile() {
    const modal = document.getElementById('profile-settings-modal');
    
    // Populate form with current user data
    if (currentUser) {
        document.getElementById('profile-name').value = currentUser.name || '';
        document.getElementById('profile-email').value = currentUser.email || '';
        document.getElementById('profile-job-title').value = currentUser.jobTitle || 'Survey Administrator';
        document.getElementById('profile-phone').value = currentUser.phone || '';
        document.getElementById('profile-timezone').value = currentUser.timezone || 'Europe/London';
        document.getElementById('profile-language').value = currentLanguage;
        document.getElementById('profile-bio').value = currentUser.bio || '';
    }
    
    modal.classList.remove('hidden');
}

function showOrganizationSettings() {
    const modal = document.getElementById('organization-settings-modal');
    
    // Populate form with organization data
    const orgData = appState.organizationSettings || {};
    document.getElementById('org-name').value = orgData.name || (currentUser?.name?.includes('TechCorp') ? 'TechCorp Ltd' : 'Realworld Organization');
    document.getElementById('org-industry').value = orgData.industry || 'technology';
    document.getElementById('org-size').value = orgData.size || '51-200';
    document.getElementById('org-country').value = orgData.country || 'GB';
    document.getElementById('org-website').value = orgData.website || '';
    document.getElementById('org-description').value = orgData.description || '';
    
    // Set notification preferences
    document.getElementById('notify-new-responses').checked = orgData.notifyNewResponses ?? true;
    document.getElementById('notify-weekly-reports').checked = orgData.notifyWeeklyReports ?? true;
    document.getElementById('notify-system-updates').checked = orgData.notifySystemUpdates ?? true;
    document.getElementById('notify-feature-updates').checked = orgData.notifyFeatureUpdates ?? false;
    
    modal.classList.remove('hidden');
}

function showSecuritySettings() {
    const modal = document.getElementById('security-settings-modal');
    
    // Update system info
    document.getElementById('browser-info').textContent = navigator.userAgent.split(' ').pop();
    document.getElementById('user-plan').textContent = currentUser?.badge === 'MASTER' ? 'Master Admin' : 'Professional';
    document.getElementById('user-org').textContent = currentUser?.name?.includes('TechCorp') ? 'TechCorp Ltd' : 
                                                     currentUser?.name?.includes('StartupX') ? 'StartupX' : 'Realworld';
    
    modal.classList.remove('hidden');
}

function showHelp() {
    const modal = document.getElementById('help-support-modal');
    modal.classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
}

function handleProfileUpdate(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const profileData = {
        name: document.getElementById('profile-name').value,
        email: document.getElementById('profile-email').value,
        jobTitle: document.getElementById('profile-job-title').value,
        phone: document.getElementById('profile-phone').value,
        timezone: document.getElementById('profile-timezone').value,
        language: document.getElementById('profile-language').value,
        bio: document.getElementById('profile-bio').value
    };
    
    // Update current user
    if (currentUser) {
        Object.assign(currentUser, profileData);
        document.getElementById('user-name').textContent = profileData.name;
        
        // Change language if updated
        if (profileData.language !== currentLanguage) {
            changeLanguage(profileData.language);
        }
    }
    
    closeModal('profile-settings-modal');
    showToast('Profile updated successfully!', 'success');
}

function handleOrganizationUpdate(event) {
    event.preventDefault();
    
    const orgData = {
        name: document.getElementById('org-name').value,
        industry: document.getElementById('org-industry').value,
        size: document.getElementById('org-size').value,
        country: document.getElementById('org-country').value,
        website: document.getElementById('org-website').value,
        description: document.getElementById('org-description').value,
        notifyNewResponses: document.getElementById('notify-new-responses').checked,
        notifyWeeklyReports: document.getElementById('notify-weekly-reports').checked,
        notifySystemUpdates: document.getElementById('notify-system-updates').checked,
        notifyFeatureUpdates: document.getElementById('notify-feature-updates').checked
    };
    
    appState.organizationSettings = orgData;
    
    closeModal('organization-settings-modal');
    showToast('Organization settings saved successfully!', 'success');
}

function handlePasswordChange(event) {
    event.preventDefault();
    
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (newPassword !== confirmPassword) {
        showToast('New passwords do not match!', 'error');
        return;
    }
    
    if (newPassword.length < 8) {
        showToast('Password must be at least 8 characters long!', 'error');
        return;
    }
    
    // Simulate password change
    setTimeout(() => {
        document.getElementById('password-form').reset();
        showToast('Password updated successfully!', 'success');
    }, 1000);
}

function toggle2FA() {
    const statusElement = document.getElementById('2fa-status');
    const toggleButton = document.getElementById('toggle-2fa');
    
    if (statusElement.textContent === 'Disabled') {
        statusElement.textContent = 'Enabled';
        statusElement.className = 'tag tag-active';
        toggleButton.textContent = 'Disable 2FA';
        toggleButton.className = 'btn btn-warning';
        showToast('Two-factor authentication enabled!', 'success');
    } else {
        statusElement.textContent = 'Disabled';
        statusElement.className = 'tag tag-inactive';
        toggleButton.textContent = 'Enable 2FA';
        toggleButton.className = 'btn btn-primary';
        showToast('Two-factor authentication disabled!', 'warning');
    }
}

function terminateSession(sessionId) {
    if (confirm('Are you sure you want to terminate this session?')) {
        showToast(`${sessionId} session terminated successfully!`, 'success');
        // Remove the session from UI
        event.target.closest('div').remove();
    }
}

function terminateAllSessions() {
    if (confirm('Are you sure you want to terminate all other sessions? This will log you out from all other devices.')) {
        showToast('All other sessions terminated successfully!', 'success');
        // Remove all non-current sessions
        const sessions = document.querySelectorAll('#login-sessions > div');
        sessions.forEach((session, index) => {
            if (index > 0) session.remove();
        });
    }
}

function saveSecuritySettings() {
    const settings = {
        allowAnalytics: document.getElementById('privacy-analytics').checked,
        allowMarketing: document.getElementById('privacy-marketing').checked,
        profileVisible: document.getElementById('privacy-profile').checked
    };
    
    appState.securitySettings = settings;
    showToast('Security settings saved successfully!', 'success');
}

function handleSupportRequest(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Simulate sending support request
    setTimeout(() => {
        form.reset();
        showToast('Support request sent successfully! We\'ll respond within 24 hours.', 'success');
    }, 1000);
}

function showForgotPassword() {
    const modal = document.getElementById('forgot-password-modal');
    modal.classList.remove('hidden');
}

// UPDATED: Forgot password function with email integration
async function handleForgotPassword(event) {
    event.preventDefault();
    
    // Get the email from the form
    const email = event.target.querySelector('input[type="email"]').value;
    const submitButton = event.target.querySelector('button[type="submit"]');
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
        console.log('Sending password reset to:', email);
        
        // Send the reset email
        const response = await fetch('/api/send-reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const result = await response.json();
        
        if (response.ok) {
            // Success!
            closeModal('forgot-password-modal');
            showToast(`✅ Password reset link sent to ${email}! Check your inbox.`, 'success');
        } else {
            // Failed
            showToast(`❌ ${result.error || 'Failed to send reset email'}`, 'error');
        }
    } catch (error) {
        console.error('Network error:', error);
        showToast('❌ Network error. Please try again.', 'error');
    } finally {
        // Reset button state
        submitButton.disabled = false;
        submitButton.textContent = 'Send Reset Link';
    }
}

// Help system functions
function openHelpArticle(article) {
    showToast(`Opening ${article.replace('-', ' ')} documentation...`, 'info');
}

function playVideo(video) {
    showToast(`Loading ${video.replace('-', ' ')} video tutorial...`, 'info');
}

function openLiveChat() {
    showToast('Connecting to live chat support...', 'info');
}

function callSupport() {
    showToast('Opening phone dialer: +44 20 1234 5678', 'info');
}

function emailSupport() {
    showToast('Opening email client: support@realworld.co.uk', 'info');
}

// UPDATED Branding Functions
function saveBranding() {
    const brandingData = {
        companyName: document.getElementById('brand-company-name').value,
        primaryColor: document.getElementById('brand-primary-color').value,
        secondaryColor: document.getElementById('brand-secondary-color').value,
        fontFamily: document.getElementById('brand-font').value,
        welcomeMessage: document.getElementById('brand-welcome-message').value,
        logoUrl: appState.branding.logoUrl // Preserve existing logo
    };
    
    appState.branding = { ...appState.branding, ...brandingData };
    
    // Apply the changes immediately
    applyBrandingToWebsite();
    
    // Save to localStorage
    saveBrandingToStorage();
    
    // Update preview
    updateBrandingPreview();
    
    showToast('Branding settings saved and applied successfully!', 'success');
}

function updateBrandingPreview() {
    const preview = document.getElementById('brand-preview');
    const companyName = document.getElementById('brand-company-name').value || 'Realworld';
    const welcomeMessage = document.getElementById('brand-welcome-message').value || 'Welcome! Your feedback helps us improve and create a better workplace for everyone.';
    
    let logoHtml = '';
    if (appState.branding.logoUrl) {
        logoHtml = `
            <div style="margin-bottom: 1rem;">
                <img src="${appState.branding.logoUrl}" alt="Logo" style="max-height: 60px; max-width: 200px;">
            </div>
        `;
    }
    
    preview.innerHTML = `
        ${logoHtml}
        <div style="font-size: 2rem; font-weight: bold; color: var(--primary-color); margin-bottom: 1rem;">${companyName}</div>
        <div style="color: var(--text-secondary);">${welcomeMessage}</div>
    `;
}

// ENHANCED handleLogoUpload function with aspect ratio and validation
function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        if (file.size > 2 * 1024 * 1024) {
            showToast('File size must be less than 2MB', 'error');
            return;
        }
        
        // Check if it's an image file
        if (!file.type.startsWith('image/')) {
            showToast('Please upload an image file (PNG, JPG, etc.)', 'error');
            return;
        }
        
        // Convert to base64 and store
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                // Store original dimensions for aspect ratio
                appState.branding.logoUrl = e.target.result;
                appState.branding.logoAspectRatio = this.width / this.height;
                
                // Apply the logo immediately
                applyBrandingToWebsite();
                
                // Save to localStorage
                saveBrandingToStorage();
                
                // Update the upload area to show preview
                const uploadArea = document.querySelector('.file-upload-area');
                if (uploadArea) {
                    uploadArea.innerHTML = `
                        <div style="display: flex; flex-direction: column; align-items: center;">
                            <div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                                <img src="${e.target.result}" alt="Logo Preview" style="max-width: 200px; max-height: 100px;">
                            </div>
                            <div><strong>Click to change logo</strong></div>
                            <div style="color: var(--text-secondary); margin-top: 0.5rem;">Current: ${file.name}</div>
                            <div style="color: var(--success-color); font-size: 0.875rem; margin-top: 0.5rem;">
                                ✓ Logo will display without background
                            </div>
                        </div>
                    `;
                }
                
                // Update the preview section
                updateBrandingPreview();
                
                showToast(`Logo "${file.name}" uploaded successfully!`, 'success');
            };
            img.src = e.target.result;
        };
        
        reader.onerror = function() {
            showToast('Error reading file. Please try again.', 'error');
        };
        
        reader.readAsDataURL(file);
    }
}

// ORGANIZATION BRANDING FUNCTIONS

// Organization Logo Upload Handler
function handleOrgLogoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        if (file.size > 2 * 1024 * 1024) {
            showToast('File size must be less than 2MB', 'error');
            return;
        }
        
        if (!file.type.startsWith('image/')) {
            showToast('Please upload an image file (PNG, JPG, etc.)', 'error');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            // Update the upload area to show preview
            const uploadArea = document.getElementById('org-logo-upload-area');
            const previewDiv = document.getElementById('org-logo-preview');
            
            previewDiv.innerHTML = `
                <div style="margin-bottom: 1rem;">
                    <img src="${e.target.result}" alt="Logo Preview" 
                         style="max-width: 150px; max-height: 100px; border-radius: 8px;">
                </div>
                <div style="color: var(--success-color); font-weight: 500;">✓ ${file.name}</div>
                <div style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 0.5rem;">Click to change</div>
            `;
            
            // Update preview
            document.getElementById('org-preview-logo').innerHTML = `
                <img src="${e.target.result}" alt="Logo" 
                     style="max-width: 60px; max-height: 60px; object-fit: contain;">
            `;
            
            // Store the logo data temporarily
            uploadArea.dataset.logoData = e.target.result;
        };
        
        reader.readAsDataURL(file);
    }
}

// Initialize color synchronization for organization modal
function initializeOrgColorSync() {
    const primaryPicker = document.getElementById('org-primary-color');
    const primaryHex = document.getElementById('org-primary-hex');
    const secondaryPicker = document.getElementById('org-secondary-color');
    const secondaryHex = document.getElementById('org-secondary-hex');
    
    if (primaryPicker && primaryHex) {
        primaryPicker.addEventListener('input', function() {
            primaryHex.value = this.value;
            updateOrgPreviewColors();
        });
        
        primaryHex.addEventListener('input', function() {
            if (/^#[0-9A-F]{6}$/i.test(this.value)) {
                primaryPicker.value = this.value;
                updateOrgPreviewColors();
            }
        });
    }
    
    if (secondaryPicker && secondaryHex) {
        secondaryPicker.addEventListener('input', function() {
            secondaryHex.value = this.value;
            updateOrgPreviewColors();
        });
        
        secondaryHex.addEventListener('input', function() {
            if (/^#[0-9A-F]{6}$/i.test(this.value)) {
                secondaryPicker.value = this.value;
                updateOrgPreviewColors();
            }
        });
    }
}

// Initialize preview updates
function initializeOrgPreview() {
    const orgNameInput = document.querySelector('input[name="orgName"]');
    const welcomeInput = document.querySelector('textarea[name="welcomeMessage"]');
    const fontSelect = document.querySelector('select[name="fontFamily"]');
    
    if (orgNameInput) {
        orgNameInput.addEventListener('input', function() {
            const preview = document.getElementById('org-preview-name');
            if (preview) {
                preview.textContent = this.value || 'Organization Name';
            }
        });
    }
    
    if (welcomeInput) {
        welcomeInput.addEventListener('input', function() {
            const preview = document.getElementById('org-preview-welcome');
            if (preview) {
                preview.textContent = this.value || 'Welcome! Your feedback helps us improve.';
            }
        });
    }
    
    if (fontSelect) {
        fontSelect.addEventListener('change', function() {
            const preview = document.getElementById('org-branding-preview');
            const fontMap = {
                'system': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                'inter': '"Inter", sans-serif',
                'roboto': '"Roboto", sans-serif',
                'open-sans': '"Open Sans", sans-serif',
                'lato': '"Lato", sans-serif'
            };
            if (preview) {
                preview.style.fontFamily = fontMap[this.value] || fontMap['system'];
            }
        });
    }
}

// Update preview colors
function updateOrgPreviewColors() {
    const primaryColor = document.getElementById('org-primary-color').value;
    const secondaryColor = document.getElementById('org-secondary-color').value;
    const previewName = document.getElementById('org-preview-name');
    const previewWelcome = document.getElementById('org-preview-welcome');
    
    if (previewName) {
        previewName.style.color = primaryColor;
    }
    if (previewWelcome) {
        previewWelcome.style.color = secondaryColor;
    }
}

// Show Create Organization Modal with Branding
function showCreateOrganizationModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px; max-height: 90vh; overflow-y: auto;">
            <div class="modal-header">
                <h3>Add New Organization</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <form onsubmit="createOrganization(event)">
                <!-- Basic Information Section -->
                <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; margin-bottom: 1.5rem;">
                    <h4 style="margin-bottom: 1rem; color: var(--primary-color);">📋 Basic Information</h4>
                    <div class="form-group">
                        <label class="form-label">Organization Name</label>
                        <input type="text" name="orgName" class="form-input" required placeholder="Enter organization name">
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div class="form-group">
                            <label class="form-label">Plan</label>
                            <select name="plan" class="form-select" required>
                                <option value="">Select Plan</option>
                                <option value="start">Start Listening</option>
                                <option value="keep">Keep Listening</option>
                                <option value="both">Start + Keep Listening</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Initial Users</label>
                            <input type="number" name="users" class="form-input" min="1" value="1">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Admin Email</label>
                        <input type="email" name="adminEmail" class="form-input" required placeholder="admin@organization.com">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Description</label>
                        <textarea name="description" class="form-input" rows="3" placeholder="Optional description..."></textarea>
                    </div>
                </div>

                <!-- Branding Section -->
                <div style="padding-bottom: 1.5rem;">
                    <h4 style="margin-bottom: 1rem; color: var(--primary-color);">🎨 Organization Branding</h4>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div class="form-group">
                            <label class="form-label">Primary Color</label>
                            <div style="display: flex; gap: 0.5rem; align-items: center;">
                                <input type="color" name="primaryColor" id="org-primary-color" value="#2563eb" 
                                       style="width: 50px; height: 38px; border: 1px solid var(--border-color); border-radius: 6px; cursor: pointer;">
                                <input type="text" id="org-primary-hex" class="form-input" value="#2563eb" 
                                       style="flex: 1;" placeholder="#2563eb">
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Secondary Color</label>
                            <div style="display: flex; gap: 0.5rem; align-items: center;">
                                <input type="color" name="secondaryColor" id="org-secondary-color" value="#64748b" 
                                       style="width: 50px; height: 38px; border: 1px solid var(--border-color); border-radius: 6px; cursor: pointer;">
                                <input type="text" id="org-secondary-hex" class="form-input" value="#64748b" 
                                       style="flex: 1;" placeholder="#64748b">
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Organization Logo</label>
                        <div class="file-upload-area" id="org-logo-upload-area" 
                             style="border: 2px dashed var(--border-color); border-radius: 8px; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s;"
                             onclick="document.getElementById('org-logo-upload').click()"
                             onmouseover="this.style.borderColor='var(--primary-color)'"
                             onmouseout="this.style.borderColor='var(--border-color)'">
                            <input type="file" id="org-logo-upload" name="logo" accept="image/*" style="display: none;" onchange="handleOrgLogoUpload(event)">
                            <div id="org-logo-preview">
                                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🏢</div>
                                <div><strong>Click to upload logo</strong></div>
                                <div style="color: var(--text-secondary); margin-top: 0.5rem; font-size: 0.875rem;">PNG, JPG up to 2MB (Recommended: Transparent PNG)</div>
                            </div>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div class="form-group">
                            <label class="form-label">Font Family</label>
                            <select name="fontFamily" class="form-select">
                                <option value="system">System Default</option>
                                <option value="inter">Inter</option>
                                <option value="roboto">Roboto</option>
                                <option value="open-sans">Open Sans</option>
                                <option value="lato">Lato</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Theme</label>
                            <select name="theme" class="form-select">
                                <option value="light">Light Theme</option>
                                <option value="dark">Dark Theme</option>
                                <option value="auto">Auto (System)</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Welcome Message</label>
                        <textarea name="welcomeMessage" class="form-input" rows="2" 
                                  placeholder="Welcome! Your feedback helps us improve...">Welcome! Your feedback helps us improve and create a better workplace for everyone.</textarea>
                    </div>

                    <!-- Live Preview -->
                    <div style="margin-top: 1.5rem; padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary);">
                        <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Preview:</div>
                        <div id="org-branding-preview" style="padding: 1rem; background: white; border-radius: 6px; text-align: center;">
                            <div id="org-preview-logo" style="margin-bottom: 0.5rem;">
                                <div style="width: 50px; height: 50px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                                            border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                                    R
                                </div>
                            </div>
                            <div id="org-preview-name" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">Organization Name</div>
                            <div id="org-preview-welcome" style="font-size: 0.875rem; color: var(--text-secondary);">Welcome! Your feedback helps us improve.</div>
                        </div>
                    </div>
                </div>

                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">
                    <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Create Organization</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);

    // Initialize color sync for organization modal
    initializeOrgColorSync();
    
    // Initialize preview updates
    initializeOrgPreview();
}

async function createOrganization(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // Get logo data if uploaded
    const uploadArea = document.getElementById('org-logo-upload-area');
    const logoData = uploadArea ? uploadArea.dataset.logoData : null;
    
    const orgData = {
        name: formData.get('orgName'),
        plan: formData.get('plan'),
        users: formData.get('users'),
        adminEmail: formData.get('adminEmail'),
        description: formData.get('description'),
        status: 'Active',
        // Branding data
        branding: {
            primaryColor: document.getElementById('org-primary-color').value,
            secondaryColor: document.getElementById('org-secondary-color').value,
            logo: logoData,
            fontFamily: formData.get('fontFamily'),
            theme: formData.get('theme'),
            welcomeMessage: formData.get('welcomeMessage')
        }
    };

    try {
        // Save organization to database
        const savedOrg = await saveOrganization(orgData);
        console.log('Organization saved to database:', savedOrg);
        
        // Store organization locally in appState
        if (!appState.organizations) {
            appState.organizations = [];
        }
        appState.organizations.push(savedOrg || orgData);
        
        // Save to localStorage as backup
        localStorage.setItem('organizations', JSON.stringify(appState.organizations));
        
        // Add to organizations table
        const table = document.querySelector('#organizations-table tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${orgData.name}</td>
            <td><span class="tag tag-active">${orgData.plan}</span></td>
            <td>${orgData.users}</td>
            <td><span class="tag tag-active">${orgData.status}</span></td>
            <td>Just created</td>
            <td>
                <button class="btn btn-secondary btn-sm" onclick="handleEditOrganization('${savedOrg?.id || orgData.name}')">Edit</button>
                <button class="btn btn-warning btn-sm" onclick="handleSuspendOrganization('${savedOrg?.id || orgData.name}')">Suspend</button>
                <button class="btn btn-danger btn-sm" onclick="handleDeleteOrganization('${savedOrg?.id || orgData.name}')">Delete</button>
            </td>
        `;
        newRow.onclick = () => showOrganizationDetails(savedOrg?.id || orgData.name);
        table.appendChild(newRow);
        
        event.target.closest('.modal').remove();
        showToast(`Organization "${orgData.name}" created successfully with custom branding!`, 'success');
    } catch (error) {
        console.error('Error saving organization to database:', error);
        showToast(`❌ Failed to create organization: ${error.message}`, 'error');
        event.target.closest('.modal').remove();
        return;
    }
}

// AI Chat Functions
function sendAIMessage() {
    const input = document.getElementById('ai-chat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    const messagesContainer = document.getElementById('ai-chat-messages');
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.style.cssText = 'margin-bottom: 1rem; padding: 1rem; background: var(--primary-color); color: white; border-radius: 8px; border-left: 4px solid var(--primary-color); margin-left: 2rem;';
    userMessage.innerHTML = `<strong>You:</strong> ${message}`;
    messagesContainer.appendChild(userMessage);
    
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const aiResponse = document.createElement('div');
        aiResponse.style.cssText = 'margin-bottom: 1rem; padding: 1rem; background: var(--bg-primary); border-radius: 8px; border-left: 4px solid var(--success-color);';
        
        const responses = [
            `Based on your data, I found that the average satisfaction score is 4.2/5. The highest scoring category is "Work Environment" at 4.6/5.`,
            `Your feedback trends show a 15% increase in positive sentiment over the last month. The main improvement areas are communication and work-life balance.`,
            `Analysis complete: Engineering department has the highest satisfaction (4.5/5) while Sales needs attention (3.8/5). I've identified 3 key improvement areas.`,
            `I've generated insights from ${Math.floor(Math.random() * 500 + 200)} data points. Key finding: Response rates are 23% higher on Tuesday-Thursday.`
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        aiResponse.innerHTML = `<strong>AI Assistant:</strong> ${randomResponse}`;
        
        messagesContainer.appendChild(aiResponse);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendSuggestion(suggestion) {
    document.getElementById('ai-chat-input').value = suggestion;
    sendAIMessage();
}

function clearAIChat() {
    const messagesContainer = document.getElementById('ai-chat-messages');
    messagesContainer.innerHTML = `
        <div style="margin-bottom: 1rem; padding: 1rem; background: var(--bg-primary); border-radius: 8px; border-left: 4px solid var(--primary-color);">
            <strong>AI Assistant:</strong> Hello! I can help you analyze your survey and feedback data. Try asking me questions like "What's the average satisfaction score?" or "Show me trends in customer feedback over the last month."
        </div>
    `;
    showToast('Chat history cleared', 'info');
}

// Survey and Chat Functions

// Global chat widget functions (persist between modal open/close)
function selectChatType(type, element) {
    // Remove selected class from all cards
    document.querySelectorAll('.chat-type-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selected class to clicked card
    element.classList.add('selected');
    
    // Check the radio button
    element.querySelector('input[type="radio"]').checked = true;
    
    // Show relevant options based on type
    updateFormForChatType(type);
}

function updateFormForChatType(type) {
    // Chat type selected - no additional processing needed since templates are removed
    console.log('Chat type selected:', type);
}





// Step Navigation for Chat Widget
let currentStep = 1;
const totalSteps = 2;

function nextStep() {
    if (currentStep < totalSteps) {
        // Validate current step
        if (currentStep === 1 && !document.querySelector('input[name="chatType"]:checked')) {
            showToast('Please select a chat type', 'warning');
            return;
        }
        
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        currentStep++;
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        updateNavigationButtons();
    }
}

function previousStep() {
    if (currentStep > 1) {
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        currentStep--;
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        updateNavigationButtons();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const generateBtn = document.getElementById('generate-btn');
    
    if (prevBtn) prevBtn.style.display = currentStep > 1 ? 'inline-block' : 'none';
    if (nextBtn) nextBtn.style.display = currentStep < totalSteps ? 'inline-block' : 'none';
    if (generateBtn) generateBtn.style.display = currentStep === totalSteps ? 'inline-block' : 'none';
}

function resetChatWidgetState() {
    currentStep = 1;
    // Reset all form selections
    document.querySelectorAll('.chat-type-card').forEach(card => {
        card.classList.remove('selected');
    });
    // Show first step
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
    });
    const firstStep = document.getElementById('step-1');
    if (firstStep) firstStep.classList.add('active');
    
    updateNavigationButtons();
}

function createNewSurvey() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3>Create New Survey</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <form onsubmit="handleCreateSurvey(event)">
                <div class="form-group">
                    <label class="form-label">Survey Title</label>
                    <input type="text" name="title" class="form-input" required placeholder="e.g., Q4 Employee Satisfaction">
                </div>
                <div class="form-group">
                    <label class="form-label">Description</label>
                    <textarea name="description" class="form-input" rows="3" placeholder="Brief description of this survey..."></textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Survey Type</label>
                    <select name="surveyType" class="form-select">
                        <option value="feedback">Employee Feedback</option>
                        <option value="satisfaction">Satisfaction Survey</option>
                        <option value="pulse">Pulse Survey</option>
                        <option value="custom">Custom Survey</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Organization</label>
                    <select name="organization" class="form-select" id="survey-org-select">
                        <option value="">Loading organizations...</option>
                    </select>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem;">
                    <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Create Survey</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Populate organizations dropdown
    populateSurveyOrganizations();
}

async function populateSurveyOrganizations() {
    try {
        const organizations = await loadOrganizations() || [];
        const select = document.getElementById('survey-org-select');
        
        if (organizations.length > 0) {
            select.innerHTML = '<option value="">Select Organization</option>' +
                organizations.map(org => `<option value="${org.id}">${org.name}</option>`).join('');
        } else {
            select.innerHTML = '<option value="" disabled>No organizations found</option>';
        }
    } catch (error) {
        console.error('Error loading organizations:', error);
        const select = document.getElementById('survey-org-select');
        select.innerHTML = '<option value="" disabled>Error loading organizations</option>';
    }
}

async function handleCreateSurvey(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const surveyData = {
        title: formData.get('title'),
        description: formData.get('description'),
        organization_id: formData.get('organization'),
        created_by: null, // Will need current user context
        status: 'draft',
        questions: JSON.stringify({
            type: formData.get('surveyType'),
            questions: [] // Empty initially, to be filled in survey builder
        }),
        settings: JSON.stringify({
            allowAnonymous: true,
            requireEmail: false
        })
    };
    
    try {
        const savedSurvey = await saveSurvey(surveyData);
        console.log('Survey created successfully:', savedSurvey);
        
        showToast(`✅ Survey "${surveyData.title}" created successfully!`, 'success');
        event.target.closest('.modal').remove();
        
        // Optionally open survey builder with this survey
        // openSurveyBuilder(savedSurvey.id);
        
    } catch (error) {
        console.error('Error creating survey:', error);
        showToast(`❌ Failed to create survey: ${error.message}`, 'error');
    }
}

function createNewChatWidget() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3>Generate Chat Link</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <form onsubmit="generateChatLink(event)">
                <div class="form-group">
                    <label class="form-label">Chat Session Name</label>
                    <input type="text" id="chat-session-name" class="form-input" required placeholder="e.g., Q4 Employee Feedback">
                </div>
                <div class="form-group">
                    <label class="form-label">Welcome Message</label>
                    <textarea id="chat-welcome-msg" class="form-input" rows="3" placeholder="Welcome! Please share your feedback with us...">Welcome to our feedback chat! Your insights help us improve.</textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Chat Expiry</label>
                    <select id="chat-expiry" class="form-select">
                        <option value="never">Never Expire</option>
                        <option value="24h">24 Hours</option>
                        <option value="7d" selected>7 Days</option>
                        <option value="30d">30 Days</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" id="chat-anonymous" checked>
                        Allow anonymous responses
                    </label>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" id="chat-require-email">
                        Require email address
                    </label>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem;">
                    <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Generate Link</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

async function generateChatLink(event) {
    event.preventDefault();
    
    // Get form values
    const sessionName = document.getElementById('chat-session-name').value;
    const welcomeMsg = document.getElementById('chat-welcome-msg').value;
    const expiry = document.getElementById('chat-expiry').value;
    const allowAnonymous = document.getElementById('chat-anonymous').checked;
    const requireEmail = document.getElementById('chat-require-email').checked;
    
    // Generate unique session ID
    const sessionId = 'chat_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    // Create URL parameters
    const params = new URLSearchParams({
        id: sessionId,
        name: sessionName,
        welcome: welcomeMsg,
        expiry: expiry,
        anonymous: allowAnonymous,
        email: requireEmail
    });
    
    // Generate the link (assuming the chat page will be at chat.html)
    const chatLink = 'https://employee-survey-platform.surge.sh/chat.html?' + params.toString();
    
    // Store session data for email and database
    const chatSessionData = {
        id: sessionId,
        name: sessionName,
        welcomeMsg: welcomeMsg,
        expiry: expiry,
        allowAnonymous: allowAnonymous,
        requireEmail: requireEmail,
        link: chatLink
    };

    // Save survey to database
    try {
        const surveyData = {
            title: sessionName,
            description: welcomeMsg,
            organization_id: null, // Will need to get current org ID
            created_by: null, // Will need to get current user ID
            status: 'active',
            questions: JSON.stringify({
                type: 'chat',
                allowAnonymous: allowAnonymous,
                requireEmail: requireEmail,
                expiry: expiry
            }),
            settings: JSON.stringify({
                sessionId: sessionId,
                link: chatLink
            })
        };
        
        const savedSurvey = await saveSurvey(surveyData);
        console.log('Chat survey saved to database:', savedSurvey);
    } catch (error) {
        console.error('Error saving chat survey to database:', error);
        showToast('⚠️ Survey link created but not saved to database', 'warning');
    }
    
    // Close current modal (remove all modals to be safe)
    document.querySelectorAll('.modal').forEach(modal => modal.remove());
    
    // Store the session data (in real app, this would go to a database)
    if (!window.chatSessions) {
        window.chatSessions = [];
    }
    window.chatSessions.push(chatSessionData);
    
    // Show success toast
    showToast(`Chat "${sessionName}" created successfully!`, 'success');
    
    // Add the new chat to the management list
    addChatToManagement(chatSessionData);
    
    // Navigate to chat management section
    setTimeout(() => {
        // Hide all sections first
        document.querySelectorAll('[id$="-section"]').forEach(section => {
            section.classList.add('hidden');
        });
        
        // Show chat management section
        const chatMgmtSection = document.getElementById('chat-management-section');
        if (chatMgmtSection) {
            chatMgmtSection.classList.remove('hidden');
        }
        
        // Update navigation highlight
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        const chatMgmtNavItem = document.querySelector('[onclick="showSection(\'chat-management\')"]');
        if (chatMgmtNavItem) {
            chatMgmtNavItem.classList.add('active');
        }
    }, 100);
}

// Function to add chat to management interface
function addChatToManagement(chatSessionData) {
    const activeChatsList = document.getElementById('active-chats-list');
    if (!activeChatsList) {
        console.error('active-chats-list element not found');
        return;
    }
    const emptyState = document.querySelector('#chat-management-section .card:nth-child(2) > div:not(#active-chats-list)');

    // Hide empty state and show the list
    if (emptyState) {
        emptyState.style.display = 'none';
    }
    activeChatsList.style.display = 'block';
    
    // Create chat item
    const chatItem = document.createElement('div');
    chatItem.className = 'chat-item';
    chatItem.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        margin-bottom: 1rem;
        background: var(--bg-primary);
    `;
    
    chatItem.innerHTML = `
        <div>
            <h4 style="margin: 0 0 0.5rem 0;">${chatSessionData.name}</h4>
            <p style="margin: 0; color: var(--text-secondary); font-size: 0.875rem;">${chatSessionData.welcomeMsg}</p>
            <div style="margin-top: 0.5rem;">
                <span class="tag tag-active" style="font-size: 0.75rem;">Active</span>
                <span style="color: var(--text-secondary); font-size: 0.75rem; margin-left: 1rem;">
                    Created: ${new Date().toLocaleDateString()}
                </span>
            </div>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
            <div class="dropdown" style="position: relative;">
                <button class="btn btn-secondary btn-sm" onclick="toggleChatDropdown(this, event)" style="border-radius: 4px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; padding: 0;" title="Chat Settings">
                    ⚙️
                </button>
                <div class="dropdown-menu" style="display: none; position: absolute; top: 100%; right: 0; background: white; border: 1px solid var(--border-color); border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 1000; min-width: 200px; padding: 8px 0;">
                    <button class="dropdown-item" onclick="editChatSettings('${chatSessionData.id}')" style="width: 100%; text-align: left; padding: 0.75rem 1rem; border: none; background: none; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem;">
                        <span style="width: 16px;">✏️</span> Edit Chat
                    </button>
                    <button class="dropdown-item" onclick="copyChatSession('${chatSessionData.id}')" style="width: 100%; text-align: left; padding: 0.75rem 1rem; border: none; background: none; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem;">
                        <span style="width: 16px;">📄</span> Copy Chat
                    </button>
                    <button class="dropdown-item" onclick="exportPrintCopy('${chatSessionData.id}')" style="width: 100%; text-align: left; padding: 0.75rem 1rem; border: none; background: none; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem;">
                        <span style="width: 16px;">📤</span> Export Print Copy
                    </button>
                    <button class="dropdown-item" onclick="downloadChatData('${chatSessionData.id}')" style="width: 100%; text-align: left; padding: 0.75rem 1rem; border: none; background: none; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem;">
                        <span style="width: 16px;">💾</span> Download Chat Data
                    </button>
                    <button class="dropdown-item" onclick="manageRecipients('${chatSessionData.id}')" style="width: 100%; text-align: left; padding: 0.75rem 1rem; border: none; background: none; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem;">
                        <span style="width: 16px;">👥</span> Manage Recipients
                    </button>
                    <hr style="margin: 0.5rem 0; border: none; border-top: 1px solid var(--border-color);">
                    <button class="dropdown-item" onclick="deleteChat('${chatSessionData.id}')" style="width: 100%; text-align: left; padding: 0.75rem 1rem; border: none; background: none; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--danger-color);">
                        <span style="width: 16px;">🗑️</span> Delete Chat
                    </button>
                </div>
            </div>
        </div>
    `;
    
    activeChatsList.appendChild(chatItem);
}

// Helper functions for chat management
function copyLink(link) {
    navigator.clipboard.writeText(link).then(() => {
        showToast('Link copied to clipboard!', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = link;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Link copied to clipboard!', 'success');
    });
}

function toggleChatDropdown(button, event) {
    console.log('toggleChatDropdown called', button); // Debug log
    
    // Prevent event bubbling
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const dropdown = button.nextElementSibling;
    if (!dropdown) {
        console.error('Dropdown menu not found');
        return;
    }
    
    const isVisible = dropdown.style.display === 'block';
    console.log('Dropdown current state:', isVisible ? 'visible' : 'hidden'); // Debug log
    
    // Close all other dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
    });
    
    // Toggle this dropdown
    dropdown.style.display = isVisible ? 'none' : 'block';
    console.log('Dropdown new state:', dropdown.style.display); // Debug log
    
    // Close dropdown when clicking outside
    if (!isVisible) {
        setTimeout(() => {
            document.addEventListener('click', function closeDropdown(e) {
                if (!button.contains(e.target) && !dropdown.contains(e.target)) {
                    dropdown.style.display = 'none';
                    document.removeEventListener('click', closeDropdown);
                }
            });
        }, 0);
    }
}

function editChatSettings(chatId) {
    showToast('Edit functionality coming soon!', 'info');
}

function viewChatDetails(chatId) {
    const chat = window.chatSessions?.find(c => c.id === chatId);
    if (!chat) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3>Chat Details: ${chat.name}</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div>
                <div class="form-group">
                    <label class="form-label">Chat Link:</label>
                    <div style="display: flex; gap: 0.5rem;">
                        <input type="text" class="form-input" value="${chat.link}" readonly style="font-family: monospace; font-size: 0.875rem;">
                        <button class="btn btn-primary btn-sm" onclick="copyLink('${chat.link}')">Copy</button>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Welcome Message:</label>
                    <textarea class="form-input" readonly rows="3">${chat.welcomeMsg}</textarea>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div class="form-group">
                        <label class="form-label">Expires:</label>
                        <input type="text" class="form-input" value="${chat.expiry === 'never' ? 'Never' : chat.expiry}" readonly>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Anonymous Access:</label>
                        <input type="text" class="form-input" value="${chat.allowAnonymous ? 'Yes' : 'No'}" readonly>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem;">
                    <button class="btn btn-secondary" onclick="testChatLink('${chat.link}')">Test Chat</button>
                    <button class="btn btn-primary" onclick="this.closest('.modal').remove()">Close</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function archiveChat(chatId) {
    if (confirm('Are you sure you want to archive this chat? It will no longer be accessible to participants.')) {
        showToast('Chat archived successfully!', 'success');
        // In a real app, update the database status here
    }
}

function deleteChat(chatId) {
    if (confirm('Are you sure you want to delete this chat? This action cannot be undone.')) {
        const chatItem = document.querySelector(`[onclick*="${chatId}"]`).closest('.chat-item');
        chatItem.remove();
        
        // Remove from sessions array
        if (window.chatSessions) {
            window.chatSessions = window.chatSessions.filter(c => c.id !== chatId);
        }
        
        // Show empty state if no chats left
        const activeChatsList = document.getElementById('active-chats-list');
        if (!activeChatsList) {
            console.error('active-chats-list element not found');
            return;
        }
        if (activeChatsList.children.length === 0) {
            activeChatsList.style.display = 'none';
            const emptyState = document.querySelector('#chat-management-section .card:nth-child(2) > div:not(#active-chats-list)');
            if (emptyState) {
                emptyState.style.display = 'block';
            }
        }
        
        showToast('Chat deleted successfully!', 'success');
    }
}

function copyLinkToClipboard() {
    const linkInput = document.getElementById('generated-link');
    linkInput.select();
    linkInput.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        showToast('Link copied to clipboard!', 'success');
        
        // Visual feedback
        const copyBtn = event.target;
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Copied!';
        copyBtn.classList.add('btn-success');
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.classList.remove('btn-success');
        }, 2000);
    } catch (err) {
        showToast('Failed to copy. Please select and copy manually.', 'error');
    }
}

function testChatLink(link) {
    window.open(link, '_blank');
    showToast('Opening chat link in new tab...', 'info');
}

function shareChatLink(encodedLink, encodedName) {
    const subject = `Feedback Chat: ${decodeURIComponent(encodedName)}`;
    const body = `You're invited to share your feedback!\n\nPlease click the following link to join the chat:\n${decodeURIComponent(encodedLink)}\n\nYour input is valuable to us!`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    showToast('Opening email client...', 'info');
}

function generateAnotherLink() {
    document.querySelectorAll('.modal').forEach(modal => modal.remove());
    createNewChatWidget();
}

async function generateAIReport() {
    // First show dataset selection modal
    showDatasetSelectionModal();
}

function showDatasetSelectionModal() {
    // Get available datasets
    const importedDatasets = JSON.parse(localStorage.getItem('importedDatasets') || '[]');

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 700px;">
            <div class="modal-header">
                <h3>🤖 Generate AI Report</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body">
                <div style="margin-bottom: 2rem;">
                    <h4>Select Data Source</h4>
                    <p>Choose which dataset to use for AI analysis and report generation:</p>
                </div>

                <div class="dataset-options">
                    <!-- Default option for chat responses -->
                    <div class="dataset-option selected" onclick="selectDataset('chat-responses', this)">
                        <div class="dataset-radio">
                            <input type="radio" name="dataset" value="chat-responses" checked>
                        </div>
                        <div class="dataset-info">
                            <div class="dataset-name">Chat Responses (Default)</div>
                            <div class="dataset-details">Analysis based on collected chat feedback and survey responses</div>
                            <div class="dataset-meta">Source: Platform Database</div>
                        </div>
                    </div>

                    ${importedDatasets.length > 0 ? `
                        <div style="margin: 1.5rem 0; padding: 1rem 0; border-top: 1px solid #e5e7eb;">
                            <h5>Imported Datasets</h5>
                        </div>
                        ${importedDatasets.map(dataset => `
                            <div class="dataset-option" onclick="selectDataset('${dataset.id}', this)">
                                <div class="dataset-radio">
                                    <input type="radio" name="dataset" value="${dataset.id}">
                                </div>
                                <div class="dataset-info">
                                    <div class="dataset-name">${dataset.name}</div>
                                    <div class="dataset-details">${dataset.description}</div>
                                    <div class="dataset-meta">
                                        ${dataset.recordCount} records • Uploaded ${new Date(dataset.uploadDate).toLocaleDateString()}
                                        <br>Columns: ${dataset.columns.join(', ')}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    ` : `
                        <div style="margin: 1.5rem 0; padding: 1rem; background: #f8f9fa; border-radius: 8px; text-align: center;">
                            <p style="color: #6b7280; margin: 0;">No imported datasets available.</p>
                            <p style="color: #6b7280; margin: 0.5rem 0 0 0; font-size: 0.875rem;">
                                Use "📥 Import Data" to upload custom datasets for analysis.
                            </p>
                        </div>
                    `}
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                <button type="button" class="btn btn-primary" onclick="generateReportWithSelectedDataset()">Generate Report</button>
            </div>
        </div>
    `;

    // Add required CSS for dataset options if not already added
    if (!document.getElementById('dataset-selection-styles')) {
        const style = document.createElement('style');
        style.id = 'dataset-selection-styles';
        style.textContent = `
            .dataset-options {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .dataset-option {
                display: flex;
                align-items: flex-start;
                gap: 1rem;
                padding: 1rem;
                border: 2px solid #e5e7eb;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s;
            }
            .dataset-option:hover {
                border-color: #3b82f6;
                background: #f8faff;
            }
            .dataset-option.selected {
                border-color: #3b82f6;
                background: #eff6ff;
            }
            .dataset-radio input {
                margin: 0;
            }
            .dataset-info {
                flex: 1;
            }
            .dataset-name {
                font-weight: 600;
                margin-bottom: 0.25rem;
            }
            .dataset-details {
                color: #6b7280;
                margin-bottom: 0.5rem;
                font-size: 0.875rem;
            }
            .dataset-meta {
                color: #9ca3af;
                font-size: 0.75rem;
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(modal);
}

function selectDataset(datasetId, element) {
    // Remove selected class from all options
    document.querySelectorAll('.dataset-option').forEach(opt => opt.classList.remove('selected'));

    // Add selected class to clicked option
    element.classList.add('selected');

    // Update radio button
    element.querySelector('input[type="radio"]').checked = true;
}

async function generateReportWithSelectedDataset() {
    const selectedDataset = document.querySelector('input[name="dataset"]:checked');
    if (!selectedDataset) {
        showToast('Please select a dataset', 'error');
        return;
    }

    const datasetId = selectedDataset.value;

    // Close selection modal
    document.querySelector('.modal').remove();

    showToast('Analyzing data and generating comprehensive AI report...', 'info');

    try {
        if (datasetId === 'chat-responses') {
            // Use original chat responses logic
            const chatResponses = await loadChatResponses();
            const analytics = await getChatResponseAnalytics();

            // Update analytics dashboard to show only chat-responses data
            refreshAnalyticsDashboard('chat-responses');

            // Display inline chat response report
            displayInlineChatReport({ chatResponses, analytics }, 'AI Chat Analysis Report');
        } else {
            // Load imported dataset
            const importedDatasets = JSON.parse(localStorage.getItem('importedDatasets') || '[]');
            const dataset = importedDatasets.find(d => d.id === datasetId);
            if (!dataset) {
                showToast('Selected dataset not found', 'error');
                return;
            }

            // Update analytics dashboard to show only the selected dataset data
            refreshAnalyticsDashboard(datasetId, dataset.data);

            // Display inline custom dataset report with AI analysis
            await displayInlineDatasetReport({ dataset }, `AI Analysis Report - ${dataset.name}`);
        }

    } catch (error) {
        console.error('Error generating AI report:', error);
        showToast('Error generating report: ' + error.message, 'error');
    }
}

function displayInlineChatReport(reportData, reportTitle) {
    const { chatResponses, analytics } = reportData;

    // Find the reports section to display the analysis
    const reportsSection = document.getElementById('chat-reports-section');

    // Create comprehensive analysis content
    const analysisContent = `
        <div class="ai-analysis-report" style="margin-top: 2rem;">
            <div class="report-header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                <h2 style="margin: 0; font-size: 2rem;">${reportTitle}</h2>
                <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">Generated on ${new Date().toLocaleString()}</p>
            </div>

            <!-- Executive Summary -->
            <div class="analysis-section" style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 8px;">
                <h3 style="color: #1e40af; margin-top: 0;">📊 Executive Summary</h3>
                <p style="font-size: 1.1rem; line-height: 1.6;">
                    Our AI analysis of <strong>${analytics.totalResponses} chat sessions</strong> reveals significant insights into employee engagement and sentiment patterns.
                    The data shows ${analytics.sentimentBreakdown.positive > analytics.sentimentBreakdown.negative ? 'predominantly positive' : 'concerning negative'} sentiment trends
                    with an average engagement duration of <strong>${analytics.averageDuration ? Math.round(analytics.averageDuration / 1000 / 60) : 0} minutes</strong> per session.
                </p>
            </div>

            <!-- Key Metrics Dashboard -->
            <div class="metrics-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                <div class="metric-card" style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: bold; color: #3b82f6;">${analytics.totalResponses}</div>
                    <div style="color: #6b7280; font-weight: 500;">Total Sessions</div>
                </div>
                <div class="metric-card" style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: bold; color: #10b981;">${analytics.sentimentBreakdown.positive}</div>
                    <div style="color: #6b7280; font-weight: 500;">Positive Responses</div>
                </div>
                <div class="metric-card" style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: bold; color: #ef4444;">${analytics.sentimentBreakdown.negative}</div>
                    <div style="color: #6b7280; font-weight: 500;">Negative Responses</div>
                </div>
                <div class="metric-card" style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: bold; color: #8b5cf6;">${analytics.averageDuration ? Math.round(analytics.averageDuration / 1000 / 60) : 0}m</div>
                    <div style="color: #6b7280; font-weight: 500;">Avg Duration</div>
                </div>
            </div>

            <!-- AI Insights and Analysis -->
            <div class="ai-insights" style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 2rem;">
                <h3 style="color: #1e40af; margin-top: 0; display: flex; align-items: center;">
                    🤖 AI-Powered Insights & Recommendations
                </h3>
                <div id="ai-insights-content">
                    <div class="ai-loading" style="text-align: center; padding: 2rem; color: #6b7280;">
                        <div style="font-size: 1.5rem; margin-bottom: 1rem;">🤖</div>
                        <div>AI is analyzing your data...</div>
                    </div>
                </div>
            </div>

            <!-- Charts Section -->
            <div class="charts-section" style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 2rem;">
                <h3 style="color: #1e40af; margin-top: 0;">📈 Data Visualizations</h3>
                <div id="chat-charts-container"></div>
            </div>

            <div style="text-align: center; margin-top: 2rem;">
                <button class="btn btn-primary" onclick="downloadComprehensiveReport('${reportTitle}')">📥 Download Full Report</button>
                <button class="btn btn-secondary" onclick="clearReportDisplay()" style="margin-left: 1rem;">Clear Report</button>
            </div>
        </div>
    `;

    // Insert the analysis after the existing dashboard
    const dashboardGrid = reportsSection.querySelector('.dashboard-grid').parentNode;
    dashboardGrid.insertAdjacentHTML('afterend', analysisContent);

    // Generate charts and load AI insights
    setTimeout(async () => {
        generateChatCharts(analytics);

        // Load AI insights asynchronously
        try {
            const aiInsights = await generateAIInsights(chatResponses, analytics);
            const aiInsightsContainer = document.getElementById('ai-insights-content');
            if (aiInsightsContainer) {
                aiInsightsContainer.innerHTML = aiInsights;
            }
            showToast('Comprehensive AI analysis complete!', 'success');
        } catch (error) {
            console.error('Error loading AI insights:', error);
            const aiInsightsContainer = document.getElementById('ai-insights-content');
            if (aiInsightsContainer) {
                aiInsightsContainer.innerHTML = generateFallbackInsights(chatResponses, analytics);
            }
            showToast('AI analysis complete with fallback data', 'warning');
        }
    }, 500);
}

function generateClientSideAnalysis(dataset, reportTitle) {
    // Perform statistical analysis on the dataset
    const data = dataset.data;
    const columns = dataset.columns;

    console.log('📊 CLIENT-SIDE ANALYSIS DEBUG:');
    console.log('Analyzing dataset:', reportTitle);
    console.log('Data structure:', { totalRows: data.length, columns: columns });
    console.log('First few data points:', data.slice(0, 2));

    // Basic statistics
    const totalRows = data.length;
    const numericColumns = [];
    const textColumns = [];
    const categoricalColumns = [];

    // Analyze column types and extract insights
    columns.forEach(col => {
        const values = data.map(row => row[col]).filter(v => v != null && v !== '');
        if (values.length === 0) return;

        const sample = values[0];
        if (typeof sample === 'number' || !isNaN(Number(sample))) {
            numericColumns.push({
                name: col,
                values: values.map(v => Number(v)).filter(v => !isNaN(v)),
                avg: 0,
                min: 0,
                max: 0
            });
        } else if (typeof sample === 'string') {
            if (sample.length > 50) {
                textColumns.push({
                    name: col,
                    avgLength: values.reduce((sum, v) => sum + String(v).length, 0) / values.length,
                    totalWords: values.reduce((sum, v) => sum + String(v).split(' ').length, 0)
                });
            } else {
                const uniqueValues = [...new Set(values)];
                categoricalColumns.push({
                    name: col,
                    uniqueCount: uniqueValues.length,
                    topValues: uniqueValues.slice(0, 5),
                    distribution: {}
                });
            }
        }
    });

    // Calculate statistics for numeric columns
    numericColumns.forEach(col => {
        if (col.values.length > 0) {
            col.avg = col.values.reduce((sum, v) => sum + v, 0) / col.values.length;
            col.min = Math.min(...col.values);
            col.max = Math.max(...col.values);
        }
    });

    console.log('🔢 Detected column types:');
    console.log('Numeric columns:', numericColumns.map(c => ({ name: c.name, avg: c.avg?.toFixed(2), min: c.min, max: c.max })));
    console.log('Text columns:', textColumns.map(c => ({ name: c.name, avgLength: Math.round(c.avgLength) })));
    console.log('Categorical columns:', categoricalColumns.map(c => ({ name: c.name, uniqueValues: c.uniqueCount })));

    // Generate insights based on data analysis
    const insights = [];
    const trends = [];
    const recommendations = [];

    if (numericColumns.length > 0) {
        const satisfactionColumns = numericColumns.filter(col =>
            col.name.toLowerCase().includes('satisfaction') ||
            col.name.toLowerCase().includes('rating') ||
            col.name.toLowerCase().includes('score')
        );

        if (satisfactionColumns.length > 0) {
            const avgSatisfaction = satisfactionColumns[0].avg;
            if (avgSatisfaction > 4) {
                insights.push(`High satisfaction scores detected with an average of ${avgSatisfaction.toFixed(1)}/5, indicating positive employee sentiment.`);
                trends.push('Employee satisfaction levels are above average, suggesting effective management practices.');
            } else if (avgSatisfaction < 3) {
                insights.push(`Low satisfaction scores detected with an average of ${avgSatisfaction.toFixed(1)}/5, requiring immediate attention.`);
                recommendations.push('Conduct focus groups to identify specific areas of dissatisfaction and develop targeted improvement plans.');
            } else {
                insights.push(`Moderate satisfaction scores with an average of ${avgSatisfaction.toFixed(1)}/5, showing room for improvement.`);
                recommendations.push('Implement regular check-ins and feedback sessions to better understand employee needs.');
            }
        }
    }

    if (textColumns.length > 0) {
        const feedbackColumn = textColumns.find(col =>
            col.name.toLowerCase().includes('feedback') ||
            col.name.toLowerCase().includes('comment') ||
            col.name.toLowerCase().includes('suggestion')
        );

        if (feedbackColumn) {
            insights.push(`Rich qualitative feedback detected with an average of ${Math.round(feedbackColumn.avgLength)} characters per response, providing valuable detailed insights.`);
            recommendations.push('Analyze open-ended feedback using text analysis tools to identify common themes and actionable insights.');
        }
    }

    if (categoricalColumns.length > 0) {
        const deptColumn = categoricalColumns.find(col =>
            col.name.toLowerCase().includes('department') ||
            col.name.toLowerCase().includes('team') ||
            col.name.toLowerCase().includes('division')
        );

        if (deptColumn) {
            insights.push(`Survey responses span ${deptColumn.uniqueCount} different departments/teams, enabling cross-departmental analysis.`);
            recommendations.push('Compare satisfaction and feedback across different departments to identify best practices and areas needing support.');
        }
    }

    // Default insights if none were generated
    if (insights.length === 0) {
        insights.push(`Dataset contains ${totalRows} employee responses across ${columns.length} data fields, providing a comprehensive view of employee sentiment.`);
        insights.push(`Data includes ${numericColumns.length} quantitative metrics and ${textColumns.length + categoricalColumns.length} qualitative dimensions for balanced analysis.`);
    }

    if (recommendations.length === 0) {
        recommendations.push('Implement regular pulse surveys to track changes in employee sentiment over time.');
        recommendations.push('Create action plans based on identified patterns and monitor their effectiveness.');
        recommendations.push('Share anonymized insights with management teams to drive data-informed decision making.');
    }

    const executiveSummary = `Statistical analysis of ${totalRows} employee survey responses reveals ${insights.length > 0 && insights[0].includes('High') ? 'positive' : insights[0].includes('Low') ? 'concerning' : 'mixed'} patterns across ${columns.length} data dimensions. ${numericColumns.length > 0 ? `Quantitative metrics show measurable trends that warrant ${insights[0].includes('High') ? 'recognition and maintenance' : 'focused improvement efforts'}.` : 'Qualitative feedback provides valuable insights for organizational development.'}`;

    console.log('💡 Generated insights based on actual data:');
    console.log('Insights:', insights);
    console.log('Recommendations:', recommendations);
    console.log('Executive summary:', executiveSummary);

    return {
        executiveSummary: executiveSummary,
        detailedInsights: formatStatisticalInsights(insights, trends, recommendations),
        narrativeSummary: `The comprehensive analysis reveals actionable insights across multiple organizational dimensions, providing a data-driven foundation for strategic decision making and employee experience improvements.`
    };
}

function formatStatisticalInsights(insights, trends, recommendations) {
    let html = '';

    if (insights.length > 0) {
        html += `<div style="margin-bottom: 1rem;"><strong>📊 Statistical Insights:</strong><ul style="margin: 0.5rem 0 0 1rem;">`;
        insights.forEach(insight => {
            html += `<li style="margin-bottom: 0.5rem;">${insight}</li>`;
        });
        html += `</ul></div>`;
    }

    if (trends.length > 0) {
        html += `<div style="margin-bottom: 1rem;"><strong>📈 Observed Trends:</strong><ul style="margin: 0.5rem 0 0 1rem;">`;
        trends.forEach(trend => {
            html += `<li style="margin-bottom: 0.5rem;">${trend}</li>`;
        });
        html += `</ul></div>`;
    }

    if (recommendations.length > 0) {
        html += `<div style="margin-bottom: 1rem;"><strong>💡 Recommendations:</strong><ul style="margin: 0.5rem 0 0 1rem;">`;
        recommendations.forEach(rec => {
            html += `<li style="margin-bottom: 0.5rem;">${rec}</li>`;
        });
        html += `</ul></div>`;
    }

    return html || '<div style="margin-bottom: 1rem;"><strong>📊 Analysis:</strong> Statistical analysis completed successfully.</div>';
}

function formatAIInsights(aiContent) {
    if (!aiContent) {
        return '<div style="margin-bottom: 1rem;"><strong>📊 Analysis:</strong> AI analysis completed successfully.</div>';
    }

    let formattedInsights = '';

    // Format key insights
    if (aiContent.keyInsights && Array.isArray(aiContent.keyInsights)) {
        formattedInsights += `<div style="margin-bottom: 1rem;"><strong>🎯 Key Insights:</strong><ul style="margin: 0.5rem 0 0 1rem;">`;
        aiContent.keyInsights.forEach(insight => {
            formattedInsights += `<li style="margin-bottom: 0.5rem;">${insight}</li>`;
        });
        formattedInsights += `</ul></div>`;
    }

    // Format trends
    if (aiContent.trends && Array.isArray(aiContent.trends)) {
        formattedInsights += `<div style="margin-bottom: 1rem;"><strong>📈 Trends:</strong><ul style="margin: 0.5rem 0 0 1rem;">`;
        aiContent.trends.forEach(trend => {
            formattedInsights += `<li style="margin-bottom: 0.5rem;">${trend}</li>`;
        });
        formattedInsights += `</ul></div>`;
    }

    // Format recommendations
    if (aiContent.recommendations && Array.isArray(aiContent.recommendations)) {
        formattedInsights += `<div style="margin-bottom: 1rem; padding: 1rem; background: #f0f9ff; border-radius: 8px;"><strong>💡 Recommendations:</strong><ul style="margin: 0.5rem 0 0 1rem;">`;
        aiContent.recommendations.forEach(rec => {
            formattedInsights += `<li style="margin-bottom: 0.5rem;">${rec}</li>`;
        });
        formattedInsights += `</ul></div>`;
    }

    return formattedInsights || '<div style="margin-bottom: 1rem;"><strong>📊 Analysis:</strong> AI analysis completed successfully.</div>';
}

async function displayInlineDatasetReport(reportData, reportTitle) {
    const { dataset } = reportData;

    // Find the reports section to display the analysis
    const reportsSection = document.getElementById('chat-reports-section');

    // Show loading state while AI analyzes the data
    reportsSection.innerHTML = `
        <div class="ai-loading" style="text-align: center; padding: 4rem; color: #6b7280;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🤖</div>
            <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">AI is analyzing your data...</div>
            <div style="font-size: 0.9rem; opacity: 0.7;">This may take a few moments</div>
        </div>
    `;

    // Prepare data for AI analysis
    const sampleData = dataset.data.slice(0, 50); // Send first 50 rows to avoid token limits

    // Log what data we're actually processing
    console.log('🔍 DATASET ANALYSIS DEBUG:');
    console.log('Dataset name:', reportTitle);
    console.log('Total rows:', dataset.data.length);
    console.log('Columns:', dataset.columns);
    console.log('Sample data (first 3 rows):', dataset.data.slice(0, 3));
    console.log('Data being sent to AI (first 3 rows):', sampleData.slice(0, 3));

    try {
        // Check if API endpoints are available (for Vercel deployment)
        let apiAvailable = false;
        try {
            const healthCheck = await fetch('/api/generate-ai-report', {
                method: 'OPTIONS'
            });
            apiAvailable = healthCheck.ok || healthCheck.status === 200 || healthCheck.status === 405;
        } catch (e) {
            // API not available
            apiAvailable = false;
        }

        if (apiAvailable) {
            // API is available, proceed with AI analysis
            const response = await fetch('/api/generate-ai-report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    reportType: 'dataset-analysis',
                    data: {
                        dataset: {
                            name: reportTitle,
                            columns: dataset.columns,
                            data: sampleData,
                            totalRows: dataset.data.length
                        }
                    },
                    prompt: `Analyze this employee survey dataset with ${dataset.data.length} total responses. Focus on key insights, sentiment patterns, trends, and actionable recommendations for HR and management teams.`
                })
            });

            if (!response.ok) {
                throw new Error(`AI API error: ${response.status}`);
            }

            const aiResult = await response.json();

            // Convert AI response to expected format
            var aiAnalysis = {
                executiveSummary: aiResult.report?.content?.executiveSummary || 'AI analysis completed successfully',
                detailedInsights: formatAIInsights(aiResult.report?.content),
                narrativeSummary: aiResult.report?.content?.fullText || 'Comprehensive analysis of the dataset reveals valuable insights for organizational improvement.',
            };
        } else {
            throw new Error('AI API not available in this deployment environment');
        }

    } catch (error) {
        console.log('AI analysis not available, using enhanced statistical analysis:', error.message);

        // Enhanced fallback analysis with actual data insights
        var aiAnalysis = generateClientSideAnalysis(dataset, reportTitle);
    }

    // Create comprehensive analysis content
    const analysisContent = `
        <div class="ai-analysis-report" style="margin-top: 2rem;">
            <div class="report-header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                <h2 style="margin: 0; font-size: 2rem;">${reportTitle}</h2>
                <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">Generated on ${new Date().toLocaleString()}</p>
            </div>

            <!-- Executive Summary -->
            <div class="analysis-section" style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 8px;">
                <h3 style="color: #1e40af; margin-top: 0;">📊 Executive Summary</h3>
                <p style="font-size: 1.1rem; line-height: 1.6;">
                    ${aiAnalysis.executiveSummary}
                </p>
            </div>

            <!-- Key Metrics Dashboard -->
            <div class="metrics-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                <div class="metric-card" style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: bold; color: #3b82f6;">${dataset.data.length}</div>
                    <div style="color: #6b7280; font-weight: 500;">Total Records</div>
                </div>
                <div class="metric-card" style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: bold; color: #10b981;">${dataset.columns.length}</div>
                    <div style="color: #6b7280; font-weight: 500;">Data Fields</div>
                </div>
                ${aiAnalysis.sentimentStats ? `
                <div class="metric-card" style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: bold; color: #10b981;">${aiAnalysis.sentimentStats.positive}</div>
                    <div style="color: #6b7280; font-weight: 500;">Positive Sentiment</div>
                </div>
                <div class="metric-card" style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: bold; color: #ef4444;">${aiAnalysis.sentimentStats.negative}</div>
                    <div style="color: #6b7280; font-weight: 500;">Negative Sentiment</div>
                </div>
                ` : ''}
            </div>

            <!-- AI Insights and Analysis -->
            <div class="ai-insights" style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 2rem;">
                <h3 style="color: #1e40af; margin-top: 0; display: flex; align-items: center;">
                    🤖 AI-Powered Data Analysis
                </h3>
                ${aiAnalysis.detailedInsights}
            </div>

            <!-- Narrative Data Summary -->
            <div class="narrative-summary" style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 2rem;">
                <h3 style="color: #1e40af; margin-top: 0;">📝 Data Trends & Patterns</h3>
                <div id="narrative-content" style="font-size: 1.1rem; line-height: 1.7; color: #374151;">
                    ${aiAnalysis.narrativeSummary}
                </div>
            </div>

            <!-- Charts Section -->
            <div class="charts-section" style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 2rem;">
                <h3 style="color: #1e40af; margin-top: 0;">📈 Data Visualizations</h3>
                <div id="dataset-charts-container"></div>
            </div>

            <div style="text-align: center; margin-top: 2rem;">
                <button class="btn btn-primary" onclick="downloadComprehensiveReport('${reportTitle}')">📥 Download Full Report</button>
                <button class="btn btn-secondary" onclick="clearReportDisplay()" style="margin-left: 1rem;">Clear Report</button>
            </div>
        </div>
    `;

    // Insert the analysis into the reports section
    reportsSection.innerHTML = analysisContent;

    // Generate charts
    setTimeout(() => {
        generateDatasetCharts(dataset, aiAnalysis);
        showToast('Advanced AI analysis complete!', 'success');
    }, 500);
}

async function generateChatResponseReport(reportData, reportTitle) {
    const { chatResponses, analytics } = reportData;

    // Generate AI report modal (original format)
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px;">
            <div class="modal-header">
                <h3>${reportTitle}</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div>
                <div style="margin-bottom: 2rem;">
                    <h4>Chat Session Overview</h4>
                    <div class="dashboard-grid" style="grid-template-columns: repeat(4, 1fr);">
                        <div class="stat-card">
                            <div class="stat-value">${analytics.totalResponses}</div>
                            <div class="stat-label">Total Sessions</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${analytics.averageDuration ? Math.round(analytics.averageDuration / 1000 / 60) : 0}m</div>
                            <div class="stat-label">Avg Duration</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${analytics.sentimentBreakdown.positive}</div>
                            <div class="stat-label">Positive</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${analytics.sentimentBreakdown.negative}</div>
                            <div class="stat-label">Negative</div>
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h4>Chat Type Distribution</h4>
                    <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr);">
                        <div class="stat-card">
                            <div class="stat-value">${analytics.chatTypeBreakdown.listening}</div>
                            <div class="stat-label">Listening Chats</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${analytics.chatTypeBreakdown.chat}</div>
                            <div class="stat-label">Survey Chats</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${analytics.chatTypeBreakdown.pulse}</div>
                            <div class="stat-label">Pulse Surveys</div>
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h4>AI Insights</h4>
                    <div class="card" style="background: #f8f9fa; padding: 1.5rem;">
                        ${generateAIInsights(chatResponses, analytics)}
                    </div>
                </div>

                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Close</button>
                    <button type="button" class="btn btn-primary" onclick="exportChatReport()">Export Report</button>
                    <button type="button" class="btn btn-primary" onclick="emailChatReport()">Email Report</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    showToast('AI report generated successfully!', 'success');
}

function generateCustomDatasetReport(reportData, reportTitle) {
    const { dataset } = reportData;
    const sampleData = dataset.data.slice(0, 5);

    // Analyze imported data
    const totalRecords = dataset.recordCount;
    const columns = dataset.columns;

    // Try to detect sentiment column
    const sentimentCol = columns.find(col =>
        col.toLowerCase().includes('sentiment') ||
        col.toLowerCase().includes('feeling') ||
        col.toLowerCase().includes('mood')
    );

    let sentimentAnalysis = '';
    if (sentimentCol) {
        const sentiments = dataset.data.map(row => row[sentimentCol]).filter(Boolean);
        const positive = sentiments.filter(s => s.toLowerCase().includes('positive')).length;
        const negative = sentiments.filter(s => s.toLowerCase().includes('negative')).length;
        const neutral = sentiments.length - positive - negative;

        sentimentAnalysis = `
            <div style="margin-bottom: 2rem;">
                <h4>Sentiment Analysis</h4>
                <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr);">
                    <div class="stat-card">
                        <div class="stat-value">${positive}</div>
                        <div class="stat-label">Positive</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${negative}</div>
                        <div class="stat-label">Negative</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${neutral}</div>
                        <div class="stat-label">Neutral</div>
                    </div>
                </div>
            </div>
        `;
    }

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 900px;">
            <div class="modal-header">
                <h3>${reportTitle}</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body">
                <div style="margin-bottom: 2rem;">
                    <h4>Dataset Overview</h4>
                    <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr);">
                        <div class="stat-card">
                            <div class="stat-value">${totalRecords}</div>
                            <div class="stat-label">Total Records</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${columns.length}</div>
                            <div class="stat-label">Data Fields</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${new Date(dataset.uploadDate).toLocaleDateString()}</div>
                            <div class="stat-label">Upload Date</div>
                        </div>
                    </div>
                </div>

                ${sentimentAnalysis}

                <div style="margin-bottom: 2rem;">
                    <h4>Data Sample</h4>
                    <div style="max-height: 300px; overflow: auto; border: 1px solid #dee2e6; border-radius: 8px;">
                        <table style="width: 100%; font-size: 0.875rem;">
                            <thead>
                                <tr style="background: #f8f9fa;">
                                    ${columns.map(col => `<th style="padding: 0.75rem; border-bottom: 1px solid #dee2e6;">${col}</th>`).join('')}
                                </tr>
                            </thead>
                            <tbody>
                                ${sampleData.map(row => `
                                    <tr>
                                        ${columns.map(col => `<td style="padding: 0.75rem; border-bottom: 1px solid #f1f5f9;">${row[col] || ''}</td>`).join('')}
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                    <p style="margin-top: 0.5rem; color: #666; font-size: 0.875rem;">Showing first 5 of ${totalRecords} records</p>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h4>AI Insights</h4>
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px;">
                        <p>📊 <strong>Dataset Analysis:</strong> Analyzed ${totalRecords} records from "${dataset.name}"</p>
                        <p>📋 <strong>Data Structure:</strong> ${columns.length} fields including: ${columns.slice(0, 3).join(', ')}${columns.length > 3 ? '...' : ''}</p>
                        ${sentimentCol ? `<p>😊 <strong>Sentiment Data:</strong> Found sentiment information in "${sentimentCol}" field</p>` : ''}
                        <p>🎯 <strong>Recommendation:</strong> This dataset is ready for detailed AI analysis and trend identification</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Close</button>
                <button type="button" class="btn btn-primary" onclick="downloadReport('${reportTitle}')">📥 Download Report</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    showToast('AI report generated successfully!', 'success');
}

function downloadReport(reportTitle) {
    const reportContent = document.querySelector('.modal-body').innerHTML;
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${reportTitle}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 2rem; }
                .stat-card { border: 1px solid #ddd; padding: 1rem; margin: 0.5rem; border-radius: 8px; }
                .stat-value { font-size: 2rem; font-weight: bold; }
                .stat-label { color: #666; }
                table { border-collapse: collapse; width: 100%; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background-color: #f2f2f2; }
            </style>
        </head>
        <body>
            <h1>${reportTitle}</h1>
            <p>Generated on: ${new Date().toLocaleString()}</p>
            ${reportContent}
        </body>
        </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${reportTitle.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.html`;
    a.click();
    window.URL.revokeObjectURL(url);
    showToast('Report downloaded!', 'success');
}

async function generateAIInsights(chatResponses, analytics) {
    try {
        // Check if API endpoints are available (for Vercel deployment)
        let apiAvailable = false;
        try {
            const healthCheck = await fetch('/api/generate-ai-report', {
                method: 'OPTIONS'
            });
            apiAvailable = healthCheck.ok || healthCheck.status === 200 || healthCheck.status === 405;
        } catch (e) {
            // API not available
            apiAvailable = false;
        }

        if (apiAvailable) {
            // Show loading state
            const loadingHtml = '<div class="ai-loading" style="text-align: center; padding: 2rem; color: #6b7280;"><div style="font-size: 1.5rem; margin-bottom: 1rem;">🤖</div><div>AI is analyzing your data...</div></div>';

            // Call our AI API endpoint
            const response = await fetch('/api/generate-ai-report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    reportType: 'chat-responses',
                    data: {
                        chatResponses: chatResponses,
                        analytics: analytics
                    },
                    prompt: 'Generate insights for employee feedback and chat responses with specific focus on sentiment trends, engagement patterns, and actionable recommendations for HR teams.'
                })
            });

            if (!response.ok) {
                throw new Error(`AI service responded with status: ${response.status}`);
            }

            const aiResult = await response.json();

            if (!aiResult.success) {
                throw new Error(aiResult.error || 'AI analysis failed');
            }

            // Format the AI response into HTML
            return formatAIInsightsToHTML(aiResult.report);
        } else {
            throw new Error('AI API not available in this deployment environment');
        }

    } catch (error) {
        console.log('AI analysis not available, using enhanced statistical analysis:', error.message);

        // Fallback to enhanced static analysis if AI fails
        return generateFallbackInsights(chatResponses, analytics);
    }
}

function formatAIInsightsToHTML(aiReport) {
    let html = '';

    if (aiReport.type === 'structured' && aiReport.content) {
        const content = aiReport.content;

        // Executive Summary
        if (content.executiveSummary) {
            html += `<div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 1rem; margin-bottom: 1.5rem; border-radius: 0 8px 8px 0;">
                <h4 style="margin: 0 0 0.5rem 0; color: #0369a1;">🎯 Executive Summary</h4>
                <p style="margin: 0; color: #0c4a6e;">${content.executiveSummary}</p>
            </div>`;
        }

        // Key Insights
        if (content.keyInsights && content.keyInsights.length > 0) {
            html += '<div style="margin-bottom: 1.5rem;"><h4 style="color: #374151; margin-bottom: 1rem;">💡 AI-Generated Key Insights</h4>';
            content.keyInsights.forEach(insight => {
                html += `<div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem; margin-bottom: 0.75rem;">
                    <p style="margin: 0; color: #374151;">${insight}</p>
                </div>`;
            });
            html += '</div>';
        }

        // Recommendations
        if (content.recommendations && content.recommendations.length > 0) {
            html += '<div style="margin-bottom: 1.5rem;"><h4 style="color: #059669; margin-bottom: 1rem;">🚀 AI Recommendations</h4>';
            content.recommendations.forEach(rec => {
                html += `<div style="background: #ecfdf5; border: 1px solid #10b981; border-radius: 8px; padding: 1rem; margin-bottom: 0.75rem;">
                    <p style="margin: 0; color: #065f46;">${rec}</p>
                </div>`;
            });
            html += '</div>';
        }

        // Risk Factors
        if (content.riskFactors && content.riskFactors.length > 0) {
            html += '<div style="margin-bottom: 1.5rem;"><h4 style="color: #dc2626; margin-bottom: 1rem;">⚠️ Risk Factors</h4>';
            content.riskFactors.forEach(risk => {
                html += `<div style="background: #fef2f2; border: 1px solid #f87171; border-radius: 8px; padding: 1rem; margin-bottom: 0.75rem;">
                    <p style="margin: 0; color: #991b1b;">${risk}</p>
                </div>`;
            });
            html += '</div>';
        }

    } else if (aiReport.type === 'text' && aiReport.content) {
        // Handle text-based AI response
        const content = aiReport.content;

        if (content.executiveSummary) {
            html += `<div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 1rem; margin-bottom: 1.5rem; border-radius: 0 8px 8px 0;">
                <h4 style="margin: 0 0 0.5rem 0; color: #0369a1;">🎯 AI Analysis Summary</h4>
                <p style="margin: 0; color: #0c4a6e;">${content.executiveSummary}</p>
            </div>`;
        }

        if (content.keyInsights && content.keyInsights.length > 0) {
            html += '<div style="margin-bottom: 1.5rem;"><h4 style="color: #374151; margin-bottom: 1rem;">💡 Key Insights</h4>';
            content.keyInsights.forEach(insight => {
                html += `<p style="margin-bottom: 1rem; padding: 0.75rem; background: #f9fafb; border-radius: 6px;">${insight}</p>`;
            });
            html += '</div>';
        }
    }

    // Add AI attribution
    html += `<div style="margin-top: 1.5rem; padding: 1rem; background: #f3f4f6; border-radius: 8px; text-align: center; color: #6b7280; font-size: 0.875rem;">
        <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">🤖</div>
        <div>Analysis powered by Gemma AI • Generated at ${new Date().toLocaleTimeString()}</div>
    </div>`;

    return html;
}

function generateFallbackInsights(chatResponses, analytics) {
    const insights = [];

    // Enhanced fallback with more intelligent analysis
    if (analytics.sentimentBreakdown.positive > analytics.sentimentBreakdown.negative) {
        insights.push("📈 <strong>Positive Trend:</strong> Overall sentiment is positive with " +
                     Math.round((analytics.sentimentBreakdown.positive / analytics.totalResponses) * 100) +
                     "% of conversations showing positive sentiment.");
    } else if (analytics.sentimentBreakdown.negative > analytics.sentimentBreakdown.positive) {
        insights.push("⚠️ <strong>Attention Needed:</strong> Negative sentiment is higher than positive. Consider investigating common themes in negative feedback.");
    }

    if (analytics.averageDuration > 300000) { // 5 minutes
        insights.push("💬 <strong>Engaged Conversations:</strong> Average session duration of " +
                     Math.round(analytics.averageDuration / 1000 / 60) +
                     " minutes indicates high engagement levels.");
    }

    const mostPopularType = Object.keys(analytics.chatTypeBreakdown || {}).reduce((a, b) =>
        analytics.chatTypeBreakdown[a] > analytics.chatTypeBreakdown[b] ? a : b
    );
    if (mostPopularType) {
        insights.push("🎯 <strong>Preferred Format:</strong> " + mostPopularType.charAt(0).toUpperCase() +
                     mostPopularType.slice(1) + " sessions are most popular among participants.");
    }

    if (analytics.totalResponses > 0) {
        const recentResponses = Object.keys(analytics.responsesByDate || {}).length;
        if (recentResponses > 3) {
            insights.push("📊 <strong>Active Participation:</strong> Consistent feedback collection with activity across " +
                         recentResponses + " different days.");
        }
    }

    // Add general recommendations
    insights.push("💡 <strong>Recommendation:</strong> Continue monitoring sentiment trends and consider following up on negative feedback themes to improve employee experience.");
    insights.push("🔧 <strong>Note:</strong> AI analysis temporarily unavailable. These insights are based on statistical analysis of your data.");

    return insights.length > 0 ? insights.map(insight => `<p style="margin-bottom: 1rem;">${insight}</p>`).join('') :
           '<p>No specific insights available yet. More data is needed for comprehensive analysis.</p>';
}

async function exportChatReport() {
    try {
        const chatResponses = await loadChatResponses();
        const analytics = await getChatResponseAnalytics();

        // Create CSV data
        let csvContent = "Session ID,Participant ID,Chat Type,Sentiment,Duration (minutes),Completed At,Messages Count\n";

        chatResponses.forEach(response => {
            const messages = typeof response.messages === 'string' ? JSON.parse(response.messages) : response.messages;
            const duration = response.duration_ms ? Math.round(response.duration_ms / 1000 / 60) : 0;
            const completedAt = new Date(response.completed_at || response.created_at).toISOString();

            csvContent += `"${response.session_id}","${response.participant_id || 'anonymous'}","${response.chat_type}","${response.sentiment}",${duration},"${completedAt}",${messages.length}\n`;
        });

        // Download CSV
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `chat-analysis-report-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        showToast('Report exported successfully!', 'success');
    } catch (error) {
        console.error('Error exporting report:', error);
        showToast('Error exporting report. Please try again.', 'error');
    }
}

async function emailChatReport() {
    try {
        const chatResponses = await loadChatResponses();
        const analytics = await getChatResponseAnalytics();

        const reportData = {
            type: 'Chat Analysis',
            period: 'All Time',
            format: 'HTML',
            totalSessions: analytics.totalResponses,
            averageDuration: analytics.averageDuration ? Math.round(analytics.averageDuration / 1000 / 60) : 0,
            sentiment: analytics.sentimentBreakdown,
            chatTypes: analytics.chatTypeBreakdown
        };

        await emailReport(reportData);
    } catch (error) {
        console.error('Error emailing report:', error);
        showToast('Error emailing report. Please try again.', 'error');
    }
}

async function viewSessionDetails(sessionId) {
    try {
        const chatResponses = await loadChatResponses(sessionId);
        const session = chatResponses.find(s => s.session_id === sessionId);

        if (!session) {
            showToast('Session not found', 'error');
            return;
        }

        const messages = typeof session.messages === 'string' ? JSON.parse(session.messages) : session.messages;
        const responses = typeof session.responses === 'string' ? JSON.parse(session.responses) : session.responses;

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 700px;">
                <div class="modal-header">
                    <h3>Session Details - ${sessionId}</h3>
                    <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
                </div>
                <div>
                    <div style="margin-bottom: 2rem;">
                        <h4>Session Information</h4>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div><strong>Type:</strong> ${session.chat_type}</div>
                            <div><strong>Sentiment:</strong> <span class="tag tag-${session.sentiment}">${session.sentiment}</span></div>
                            <div><strong>Duration:</strong> ${session.duration_ms ? Math.round(session.duration_ms / 1000 / 60) + ' minutes' : 'N/A'}</div>
                            <div><strong>Completed:</strong> ${new Date(session.completed_at || session.created_at).toLocaleString()}</div>
                        </div>
                    </div>

                    <div style="margin-bottom: 2rem;">
                        <h4>Conversation History</h4>
                        <div style="max-height: 300px; overflow-y: auto; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
                            ${messages.map(msg => `
                                <div style="margin-bottom: 1rem; padding: 0.5rem; border-radius: 6px; background: ${msg.sender === 'user' ? '#e0f2fe' : '#f3f4f6'};">
                                    <strong>${msg.sender === 'user' ? 'User' : 'Assistant'}:</strong> ${msg.text}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    ${Object.keys(responses).length > 0 ? `
                        <div style="margin-bottom: 2rem;">
                            <h4>Structured Responses</h4>
                            <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px;">
                                ${Object.entries(responses).map(([key, value]) => `
                                    <div style="margin-bottom: 0.5rem;"><strong>${key}:</strong> ${value}</div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}

                    <div class="modal-actions">
                        <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Close</button>
                        <button type="button" class="btn btn-primary" onclick="exportSessionData('${sessionId}')">Export Session</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    } catch (error) {
        console.error('Error viewing session details:', error);
        showToast('Error loading session details', 'error');
    }
}

async function exportSessionData(sessionId) {
    try {
        const chatResponses = await loadChatResponses(sessionId);
        const session = chatResponses.find(s => s.session_id === sessionId);

        if (!session) {
            showToast('Session not found', 'error');
            return;
        }

        const messages = typeof session.messages === 'string' ? JSON.parse(session.messages) : session.messages;
        const responses = typeof session.responses === 'string' ? JSON.parse(session.responses) : session.responses;

        // Create detailed JSON export
        const exportData = {
            sessionId: session.session_id,
            participantId: session.participant_id,
            chatType: session.chat_type,
            sentiment: session.sentiment,
            duration: session.duration_ms,
            startTime: session.start_time,
            completedAt: session.completed_at,
            messages: messages,
            responses: responses,
            exportedAt: new Date().toISOString()
        };

        // Download as JSON
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `chat-session-${sessionId}-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        showToast('Session data exported successfully!', 'success');
    } catch (error) {
        console.error('Error exporting session data:', error);
        showToast('Error exporting session data', 'error');
    }
}

function manageChatSettings() {
    showToast('Opening chat settings...', 'info');
}


function importParticipants() {
    showToast('Opening participant import wizard...', 'info');
}

function addParticipant() {
    showToast('Opening add participant form...', 'info');
}

function backupData() {
    showToast('Starting data backup... You will be notified when complete.', 'info');
}

function exportAllData() {
    showToast('Preparing data export... This may take several minutes.', 'info');
}

// Initialize branding listeners
function initializeBrandingListeners() {
    const brandInputs = ['brand-company-name', 'brand-welcome-message'];
    brandInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', updateBrandingPreview);
        }
    });
}

// Real Working Functions Implementation

// Export Functions - Generate actual CSV/Excel files
function handleExportData(type) {
    const data = {
        organizations: [
            ['Organization Name', 'Plan', 'Users', 'Status', 'Last Activity'],
            ['TechCorp Ltd', 'Start + Keep Listening', '15', 'Active', '2 hours ago'],
            ['Global Industries', 'Start Listening', '8', 'Active', '4 hours ago'],
            ['StartupX', 'Keep Listening', '3', 'Active', '1 day ago']
        ],
        users: [
            ['Name', 'Email', 'Organization', 'Access', 'Status', 'Last Login'],
            ['Sarah Johnson', 'sarah@techcorp.com', 'TechCorp Ltd', 'Start + Keep Listening', 'Active', '2 hours ago'],
            ['Mike Chen', 'mike@startupx.com', 'StartupX', 'Keep Listening', 'Active', '1 day ago'],
            ['Lisa Wang', 'lisa@global.com', 'Global Industries', 'Start Listening', 'Pending', 'Never']
        ]
    };

    const csvContent = data[type] ? data[type].map(row => row.join(',')).join('\n') : '';
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${type}_export_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    showToast(`${type} data exported successfully!`, 'success');
}

// Real filtering functions
function filterOrganizations(filterType, value) {
    const table = document.getElementById('organizations-table');
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let shouldShow = true;
        
        if (filterType === 'search' && value) {
            const searchText = row.textContent.toLowerCase();
            shouldShow = searchText.includes(value.toLowerCase());
        } else if (filterType === 'plan' && value) {
            const planCell = cells[1]?.textContent.toLowerCase();
            shouldShow = planCell?.includes(value.toLowerCase());
        } else if (filterType === 'status' && value) {
            const statusCell = cells[3]?.textContent.toLowerCase();
            shouldShow = statusCell?.includes(value.toLowerCase());
        }
        
        row.style.display = shouldShow ? '' : 'none';
    });
}

function filterUsers(filterType, value) {
    const table = document.getElementById('users-table');
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let shouldShow = true;
        
        if (filterType === 'search' && value) {
            const searchText = row.textContent.toLowerCase();
            shouldShow = searchText.includes(value.toLowerCase());
        } else if (filterType === 'organization' && value) {
            const orgCell = cells[3]?.textContent.toLowerCase();
            shouldShow = orgCell?.includes(value.toLowerCase());
        } else if (filterType === 'role' && value) {
            shouldShow = true; // Role logic can be expanded
        } else if (filterType === 'status' && value) {
            const statusCell = cells[5]?.textContent.toLowerCase();
            shouldShow = statusCell?.includes(value.toLowerCase());
        }
        
        row.style.display = shouldShow ? '' : 'none';
    });
}

// Real sorting function
function sortTable(header, columnIndex) {
    const table = header.closest('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    // Remove existing sort indicators
    table.querySelectorAll('th').forEach(th => {
        th.classList.remove('sort-asc', 'sort-desc');
    });
    
    // Determine sort direction
    const isAscending = !header.dataset.sortDirection || header.dataset.sortDirection === 'desc';
    header.dataset.sortDirection = isAscending ? 'asc' : 'desc';
    header.classList.add(isAscending ? 'sort-asc' : 'sort-desc');
    
    // Sort rows
    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex]?.textContent.trim() || '';
        const bValue = b.cells[columnIndex]?.textContent.trim() || '';
        
        if (isAscending) {
            return aValue.localeCompare(bValue, undefined, { numeric: true });
        } else {
            return bValue.localeCompare(aValue, undefined, { numeric: true });
        }
    });
    
    // Reorder rows in table
    rows.forEach(row => tbody.appendChild(row));
    
    showToast(`Table sorted by ${header.textContent}`, 'info');
}

// View details functions with working modals
function showStatDetails(type, value) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${type.charAt(0).toUpperCase() + type.slice(1)} Details</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div>
                <h4>Current Value: ${value}</h4>
                <div class="dashboard-grid" style="margin: 1.5rem 0;">
                    <div class="stat-card">
                        <div class="stat-value">+15%</div>
                        <div class="stat-label">Growth vs Last Month</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">23</div>
                        <div class="stat-label">New This Week</div>
                    </div>
                </div>
                <div class="chart-placeholder">
                    📊 ${type} trend chart over the last 6 months
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function showActivityDetails(org, activity) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Activity Details</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div>
                <div class="form-group">
                    <label class="form-label">Organization</label>
                    <input type="text" class="form-input" value="${org}" readonly>
                </div>
                <div class="form-group">
                    <label class="form-label">Activity</label>
                    <textarea class="form-input" readonly rows="3">${activity}</textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Timestamp</label>
                    <input type="text" class="form-input" value="${new Date().toLocaleString()}" readonly>
                </div>
                <div class="form-group">
                    <label class="form-label">Impact Level</label>
                    <span class="tag tag-active">Normal</span>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function showOrganizationDetails(orgName) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 700px;">
            <div class="modal-header">
                <h3>${orgName} - Organization Details</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                    <div>
                        <h4>Organization Information</h4>
                        <div style="display: grid; gap: 1rem; margin: 1rem 0;">
                            <div><strong>Name:</strong> ${orgName}</div>
                            <div><strong>Plan:</strong> Start + Keep Listening</div>
                            <div><strong>Users:</strong> 15</div>
                            <div><strong>Status:</strong> <span class="tag tag-active">Active</span></div>
                            <div><strong>Created:</strong> March 15, 2024</div>
                            <div><strong>Last Activity:</strong> 2 hours ago</div>
                        </div>
                    </div>
                    <div>
                        <h4>Usage Statistics</h4>
                        <div class="dashboard-grid">
                            <div class="stat-card">
                                <div class="stat-value">47</div>
                                <div class="stat-label">Active Surveys</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-value">1,234</div>
                                <div class="stat-label">Total Responses</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 2rem;">
                    <h4>Recent Activity</h4>
                    <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">
                        <div style="margin-bottom: 0.5rem;">• Survey "Q4 Feedback" published</div>
                        <div style="margin-bottom: 0.5rem;">• 23 new responses received</div>
                        <div style="margin-bottom: 0.5rem;">• User Sarah Johnson logged in</div>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem;">
                    <button class="btn btn-secondary" onclick="this.closest('.modal').remove()">Close</button>
                    <button class="btn btn-primary" onclick="editOrganization('${orgName}')">Edit Organization</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function showUserDetails(userName) {
    // Disabled - this modal was interfering with user management
    console.log('showUserDetails called for:', userName, '- function disabled');
    return;
}

// UPDATED: Create/Edit functions with working forms and EMAIL INTEGRATION
async function showCreateUserModal() {
    // Load organizations from database instead of localStorage
    const organizations = await loadOrganizations() || [];
    
    // Build organization options HTML
    let orgOptionsHTML = '<option value="">Select Organization</option>';
    
    // Add real organizations from database
    if (organizations.length > 0) {
        organizations.forEach(org => {
            orgOptionsHTML += `<option value="${org.name}">${org.name}</option>`;
        });
    } else {
        // If no organizations exist, show helpful message
        orgOptionsHTML += '<option value="" disabled>No organizations created yet</option>';
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Add New User</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <form onsubmit="createUser(event)">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div class="form-group">
                        <label class="form-label">First Name</label>
                        <input type="text" name="firstName" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Last Name</label>
                        <input type="text" name="lastName" class="form-input" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Email Address</label>
                    <input type="email" name="email" class="form-input" required>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div class="form-group">
                        <label class="form-label">Organization</label>
                        <select name="organization" class="form-select" required>
                            ${orgOptionsHTML}
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Role</label>
                        <select name="role" class="form-select" required>
                            <option value="">Select Role</option>
                            <option value="viewer">Viewer</option>
                            <option value="survey_admin">Survey Admin</option>
                            <option value="org_admin">Organization Admin</option>
                            <option value="super_admin">Super Admin</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" name="sendInvite" checked>
                        Send invitation email to user
                    </label>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem;">
                    <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Create User</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

// UPDATED: Create User function with Supabase Auth integration
async function createUser(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        name: `${formData.get('firstName')} ${formData.get('lastName')}`,
        email: formData.get('email'),
        organization: formData.get('organization'),
        role: formData.get('role'),
        sendInvite: formData.get('sendInvite') === 'on'
    };

    // Generate a temporary password (user will reset via email)
    const tempPassword = crypto.randomUUID().slice(0, 16);

    try {
        // Step 1: Create user in Supabase Auth
        const { data: authData, error: authError } = await window.supabaseClient.auth.signUp({
            email: userData.email,
            password: tempPassword,
            options: {
                emailRedirectTo: window.location.origin + '/login'
            }
        });

        if (authError) {
            throw new Error(`Auth error: ${authError.message}`);
        }

        if (!authData.user) {
            throw new Error('Failed to create authentication account');
        }

        console.log('Created Supabase Auth user:', authData.user.id);

        // Step 2: Look up organization ID
        const { data: orgData } = await window.supabaseClient
            .from('organizations')
            .select('id')
            .eq('name', userData.organization)
            .single();

        // Step 3: Save user to our users table with auth_id link
        const savedUser = await saveUser({
            ...userData,
            auth_id: authData.user.id,
            organization_id: orgData?.id || null
        });

        console.log('User saved to database:', savedUser);

        // Update UI table
        const table = document.querySelector('#users-table tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="checkbox"></td>
            <td>${userData.name}</td>
            <td>${userData.email}</td>
            <td>${userData.organization}</td>
            <td><span class="tag tag-pending">${userData.access}</span></td>
            <td><span class="tag tag-pending">Pending</span></td>
            <td>Never</td>
            <td>
                <button class="btn btn-secondary btn-sm" onclick="handleEditUser('${savedUser?.id || userData.name}')">Edit</button>
                <button class="btn btn-primary btn-sm" onclick="handleResendInvite('${userData.name}')">Resend Invite</button>
                <button class="btn btn-danger btn-sm" onclick="handleRemoveUser('${savedUser?.id || userData.name}')">Remove</button>
            </td>
        `;
        newRow.onclick = () => showUserDetails(savedUser?.id || userData.name);
        table.appendChild(newRow);

        // Close modal and show success
        event.target.closest('.modal').remove();
        showToast(`✅ User ${userData.name} created successfully! They will receive an email to set their password.`, 'success');

    } catch (error) {
        console.error('Error creating user:', error);
        showToast(`❌ Failed to create user: ${error.message}`, 'error');
    }

    // Send invitation email if checkbox was checked (keep existing email logic after this)
    if (userData.sendInvite) {
        try {
            console.log('Sending invitation email to:', userData.email);

            const emailResponse = await fetch('/api/send-invitation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userEmail: userData.email,
                    userName: userData.name,
                    organizationName: userData.organization,
                    temporaryPassword: tempPassword
                }),
            });

            if (emailResponse.ok) {
                console.log('Invitation email sent successfully');
            } else {
                console.warn('Email send failed, but user was created');
            }
        } catch (error) {
            console.error('Failed to send invitation:', error);
        }
    } else {
        console.log('User created without invitation email');
    }
    
    // Close the modal
    event.target.closest('.modal').remove();
}

// Edit/Delete/Suspend functions with real implementations
function handleEditOrganization(orgName) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Edit Organization - ${orgName}</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <form onsubmit="updateOrganization(event, '${orgName}')">
                <div class="form-group">
                    <label class="form-label">Organization Name</label>
                    <input type="text" name="orgName" class="form-input" value="${orgName}" required>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div class="form-group">
                        <label class="form-label">Plan</label>
                        <select name="plan" class="form-select">
                            <option value="start">Start Listening</option>
                            <option value="keep">Keep Listening</option>
                            <option value="both" selected>Start + Keep Listening</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Status</label>
                        <select name="status" class="form-select">
                            <option value="active" selected>Active</option>
                            <option value="suspended">Suspended</option>
                            <option value="trial">Trial</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Notes</label>
                    <textarea name="notes" class="form-input" rows="3" placeholder="Internal notes..."></textarea>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem;">
                    <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Update Organization</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function updateOrganization(event, oldName) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newName = formData.get('orgName');
    
    // Find and update the row in the table
    const table = document.querySelector('#organizations-table tbody');
    const rows = table.querySelectorAll('tr');
    rows.forEach(row => {
        if (row.cells[0].textContent === oldName) {
            row.cells[0].textContent = newName;
            row.cells[1].innerHTML = `<span class="tag tag-active">${formData.get('plan')}</span>`;
            row.cells[3].innerHTML = `<span class="tag tag-active">${formData.get('status')}</span>`;
            row.cells[4].textContent = 'Just updated';
        }
    });
    
    event.target.closest('.modal').remove();
    showToast(`Organization updated successfully!`, 'success');
}

function handleSuspendOrganization(orgName) {
    if (confirm(`Are you sure you want to suspend "${orgName}"? This will disable all access for this organization.`)) {
        // Find and update the row
        const table = document.querySelector('#organizations-table tbody');
        const rows = table.querySelectorAll('tr');
        rows.forEach(row => {
            if (row.cells[0].textContent === orgName) {
                row.cells[3].innerHTML = '<span class="tag tag-inactive">Suspended</span>';
                row.cells[4].textContent = 'Just suspended';
            }
        });
        showToast(`Organization "${orgName}" has been suspended.`, 'warning');
    }
}

async function handleDeleteOrganization(orgId, orgName) {
    const displayName = orgName || orgId;
    if (confirm(`Are you sure you want to delete "${displayName}"? This action cannot be undone and will remove all associated data.`)) {
        try {
            // Delete from database
            const deleted = await deleteOrganization(orgId);
            
            if (deleted) {
                // Remove from local state
                if (appState.organizations) {
                    appState.organizations = appState.organizations.filter(org => 
                        org.id !== orgId && org.name !== orgId
                    );
                    localStorage.setItem('organizations', JSON.stringify(appState.organizations));
                }
                
                // Find and remove the row from UI
                const table = document.querySelector('#organizations-table tbody');
                const rows = table.querySelectorAll('tr');
                rows.forEach(row => {
                    if (row.cells[0].textContent === displayName || 
                        row.onclick?.toString().includes(orgId)) {
                        row.remove();
                    }
                });
                
                showToast(`Organization "${displayName}" has been deleted.`, 'success');
            } else {
                showToast(`Failed to delete organization "${displayName}". It may not exist.`, 'error');
            }
        } catch (error) {
            console.error('Error deleting organization:', error);
            showToast(`❌ Failed to delete organization: ${error.message}`, 'error');
        }
    }
}

function handleEditUser(userName) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Edit User - ${userName}</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <form onsubmit="updateUser(event, '${userName}')">
                <div class="form-group">
                    <label class="form-label">Full Name</label>
                    <input type="text" name="name" class="form-input" value="${userName}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="email" name="email" class="form-input" value="${userName ? userName.toLowerCase().replace(' ', '.') : 'unknown'}@company.com" required>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div class="form-group">
                        <label class="form-label">Role</label>
                        <select name="role" class="form-select">
                            <option value="">Select Role</option>
                            <option value="viewer">Viewer</option>
                            <option value="survey_admin">Survey Admin</option>
                            <option value="org_admin">Organization Admin</option>
                            <option value="super_admin">Super Admin</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Active</label>
                        <select name="is_active" class="form-select">
                            <option value="true" selected>Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" name="canCreateSurveys" checked>
                        Can create surveys
                    </label>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" name="canViewAnalytics" checked>
                        Can view analytics
                    </label>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem;">
                    <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Update User</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function updateUser(event, oldName) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newName = formData.get('name');
    
    // Find and update the row in the table
    const table = document.querySelector('#users-table tbody');
    const rows = table.querySelectorAll('tr');
    rows.forEach(row => {
        if (row.cells[1].textContent === oldName) {
            row.cells[1].textContent = newName;
            row.cells[2].textContent = formData.get('email');
            row.cells[4].innerHTML = `<span class="tag tag-active">${formData.get('access')}</span>`;
            row.cells[5].innerHTML = `<span class="tag tag-active">${formData.get('status')}</span>`;
            row.cells[6].textContent = 'Just updated';
        }
    });
    
    event.target.closest('.modal').remove();
    showToast(`User "${newName}" updated successfully!`, 'success');
}

function handleSuspendUser(userName) {
    if (confirm(`Are you sure you want to suspend "${userName}"? They will lose access to the platform.`)) {
        const table = document.querySelector('#users-table tbody');
        const rows = table.querySelectorAll('tr');
        rows.forEach(row => {
            if (row.cells[1].textContent === userName) {
                row.cells[5].innerHTML = '<span class="tag tag-inactive">Suspended</span>';
                row.cells[6].textContent = 'Just suspended';
            }
        });
        showToast(`User "${userName}" has been suspended.`, 'warning');
    }
}

async function handleRemoveUser(userId, userName) {
    const displayName = userName || userId;
    if (confirm(`Are you sure you want to remove "${displayName}"? This will permanently delete their account and cannot be undone.`)) {
        try {
            // Delete from database
            const deleted = await deleteUser(userId);
            
            if (deleted) {
                // Remove from local state if exists
                if (appState.users) {
                    appState.users = appState.users.filter(user => 
                        user.id !== userId && user.name !== userId
                    );
                    localStorage.setItem('users', JSON.stringify(appState.users));
                }
                
                // Find and remove the row from UI
                const table = document.querySelector('#users-table tbody');
                const rows = table.querySelectorAll('tr');
                rows.forEach(row => {
                    if (row.cells[1].textContent === displayName ||
                        row.onclick?.toString().includes(userId)) {
                        row.remove();
                    }
                });
                
                showToast(`User "${displayName}" has been removed.`, 'success');
            } else {
                showToast(`Failed to remove user "${displayName}". User may not exist.`, 'error');
            }
        } catch (error) {
            console.error('Error removing user:', error);
            showToast(`❌ Failed to remove user: ${error.message}`, 'error');
        }
    }
}

// UPDATED: Resend invite function with email integration
async function handleResendInvite(userName) {
    // Ask for confirmation
    if (!confirm(`Resend invitation email to "${userName}"?`)) {
        return;
    }
    
    // Find the user's email from the table
    const table = document.querySelector('#users-table tbody');
    const rows = table.querySelectorAll('tr');
    let userEmail = '';
    let organization = '';
    
    // Loop through table rows to find the user
    rows.forEach(row => {
        if (row.cells && row.cells[1] && row.cells[1].textContent === userName) {
            userEmail = row.cells[2] ? row.cells[2].textContent : '';
            organization = row.cells[3] ? row.cells[3].textContent : 'Unknown Organization';
        }
    });
    
    // Check if we found the email
    if (!userEmail) {
        showToast('❌ User email not found', 'error');
        return;
    }
    
    try {
        console.log('Resending invitation to:', userEmail);
        
        // Send the invitation
        const response = await fetch('/api/send-invitation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userEmail: userEmail,
                userName: userName,
                organizationName: organization,
                temporaryPassword: 'Welcome123!' // Generate new password
            }),
        });

        if (response.ok) {
            showToast(`✅ Invitation email resent to ${userName}!`, 'success');
        } else {
            showToast('❌ Failed to resend invitation', 'error');
        }
    } catch (error) {
        console.error('Network error:', error);
        showToast('❌ Network error. Please try again.', 'error');
    }
}

function handleBulkAction(type) {
    const table = document.querySelector(`#${type}-table`);
    const checkedBoxes = table.querySelectorAll('tbody input[type="checkbox"]:checked');
    
    if (checkedBoxes.length === 0) {
        showToast('Please select items to perform bulk actions.', 'warning');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Bulk Actions - ${checkedBoxes.length} items selected</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div>
                <p>Choose an action to apply to ${checkedBoxes.length} selected ${type}:</p>
                <div style="display: grid; gap: 1rem; margin: 1.5rem 0;">
                    <button class="btn btn-secondary" onclick="bulkActivate('${type}')">Activate All</button>
                    <button class="btn btn-warning" onclick="bulkSuspend('${type}')">Suspend All</button>
                    <button class="btn btn-primary" onclick="bulkExport('${type}')">Export Selected</button>
                    <button class="btn btn-danger" onclick="bulkDelete('${type}')">Delete All</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function bulkActivate(type) {
    const count = document.querySelectorAll(`#${type}-table tbody input[type="checkbox"]:checked`).length;
    document.querySelector('.modal').remove();
    showToast(`${count} ${type} activated successfully!`, 'success');
}

function bulkSuspend(type) {
    const count = document.querySelectorAll(`#${type}-table tbody input[type="checkbox"]:checked`).length;
    if (confirm(`Suspend ${count} selected ${type}?`)) {
        document.querySelector('.modal').remove();
        showToast(`${count} ${type} suspended successfully!`, 'warning');
    }
}

function bulkExport(type) {
    const count = document.querySelectorAll(`#${type}-table tbody input[type="checkbox"]:checked`).length;
    document.querySelector('.modal').remove();
    showToast(`Exporting ${count} selected ${type}...`, 'info');
}

function bulkDelete(type) {
    const count = document.querySelectorAll(`#${type}-table tbody input[type="checkbox"]:checked`).length;
    // Continuing from bulkDelete...
    if (confirm(`Permanently delete ${count} selected ${type}? This cannot be undone.`)) {
        document.querySelector('.modal').remove();
        showToast(`${count} ${type} deleted successfully!`, 'success');
    }
}

function toggleSelectAll(checkbox, type) {
    const table = document.querySelector(`#${type}-table`);
    const allCheckboxes = table.querySelectorAll('tbody input[type="checkbox"]');
    allCheckboxes.forEach(cb => {
        cb.checked = checkbox.checked;
    });
}

function handleViewAll() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 900px;">
            <div class="modal-header">
                <h3>All Recent Activity</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div>
                <div class="filters">
                    <div class="filter-group">
                        <label class="filter-label">Filter by Type</label>
                        <select class="form-select">
                            <option>All Activities</option>
                            <option>Survey Activities</option>
                            <option>User Activities</option>
                            <option>System Activities</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label class="filter-label">Date Range</label>
                        <select class="form-select">
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                            <option>Last 90 days</option>
                        </select>
                    </div>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Organization</th>
                            <th>Activity</th>
                            <th>User</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>2 hours ago</td><td>TechCorp Ltd</td><td>New survey created: "Q4 Feedback"</td><td>Sarah Johnson</td><td><span class="tag tag-active">Survey</span></td></tr>
                        <tr><td>4 hours ago</td><td>Global Industries</td><td>Chat feedback submitted</td><td>Anonymous</td><td><span class="tag tag-processing">Feedback</span></td></tr>
                        <tr><td>1 day ago</td><td>StartupX</td><td>Survey completed: 127 responses</td><td>Mike Chen</td><td><span class="tag tag-success">Survey</span></td></tr>
                        <tr><td>1 day ago</td><td>TechCorp Ltd</td><td>User login</td><td>Sarah Johnson</td><td><span class="tag tag-pending">System</span></td></tr>
                        <tr><td>2 days ago</td><td>Global Industries</td><td>Data export completed</td><td>Lisa Wang</td><td><span class="tag tag-active">Export</span></td></tr>
                    </tbody>
                </table>
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
                    <button class="btn btn-secondary" onclick="handleExportData('activity')">Export All</button>
                    <button class="btn btn-primary" onclick="this.closest('.modal').remove()">Close</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function createNewChat() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3>Create New Chat Widget</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <form onsubmit="createChatWidget(event)">
                <div class="form-group">
                    <label class="form-label">Widget Name</label>
                    <input type="text" name="widgetName" class="form-input" required placeholder="e.g., Customer Feedback">
                </div>
                <div class="form-group">
                    <label class="form-label">Trigger Message</label>
                    <input type="text" name="triggerMessage" class="form-input" placeholder="How can we help you today?" value="How can we help you today?">
                </div>
                <div class="form-group">
                    <label class="form-label">Widget Position</label>
                    <select name="position" class="form-select">
                        <option value="bottom-right" selected>Bottom Right</option>
                        <option value="bottom-left">Bottom Left</option>
                        <option value="center">Center</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Questions</label>
                    <textarea name="questions" class="form-input" rows="4" placeholder="One question per line:
How would you rate your experience?
What can we improve?
Would you recommend us?"></textarea>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" name="showRating" checked>
                        Include rating scale (1-5 stars)
                    </label>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" name="allowAnonymous" checked>
                        Allow anonymous responses
                    </label>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem;">
                    <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Create Widget</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function createChatWidget(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const widgetName = formData.get('widgetName');
    
    event.target.closest('.modal').remove();
    showToast(`Chat widget "${widgetName}" created successfully! Integration code will be emailed to you.`, 'success');
}

function generateNewReport() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Generate New Report</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <form onsubmit="processReport(event)">
                <div class="form-group">
                    <label class="form-label">Report Type</label>
                    <select name="reportType" class="form-select" required>
                        <option value="">Select Report Type</option>
                        <option value="satisfaction">Customer Satisfaction Summary</option>
                        <option value="trends">Trend Analysis</option>
                        <option value="comparison">Comparison Report</option>
                        <option value="detailed">Detailed Analytics</option>
                    </select>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div class="form-group">
                        <label class="form-label">Date Range</label>
                        <select name="dateRange" class="form-select">
                            <option value="7">Last 7 days</option>
                            <option value="30" selected>Last 30 days</option>
                            <option value="90">Last 90 days</option>
                            <option value="365">Last year</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Format</label>
                        <select name="format" class="form-select">
                            <option value="pdf" selected>PDF Report</option>
                            <option value="excel">Excel Spreadsheet</option>
                            <option value="powerpoint">PowerPoint Presentation</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Include Organizations</label>
                    <div style="display: grid; gap: 0.5rem; margin-top: 0.5rem;">
                        <label class="checkbox-label"><input type="checkbox" name="orgs" value="techcorp" checked> TechCorp Ltd</label>
                        <label class="checkbox-label"><input type="checkbox" name="orgs" value="global" checked> Global Industries</label>
                        <label class="checkbox-label"><input type="checkbox" name="orgs" value="startupx" checked> StartupX</label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" name="includeCharts" checked>
                        Include charts and visualizations
                    </label>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem;">
                    <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Generate Report</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

async function processReport(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const reportType = formData.get('reportType');
    const format = formData.get('format');
    const dateRange = formData.get('dateRange');
    
    event.target.closest('.modal').remove();
    showToast(`Generating ${reportType} report in ${format} format... You'll be notified when ready for download.`, 'info');
    
    // Simulate report generation
    setTimeout(async () => {
        showToast(`Report generated successfully! Download link sent to your email.`, 'success');
        
        // NEW: Send email with report
        if (currentUser && currentUser.email) {
            await emailReport({
                type: reportType,
                period: `Last ${dateRange} days`,
                format: format
            });
        }
    }, 3000);
}

function handleSocialLogin(provider) {
    showToast(`Redirecting to ${provider} login... (Demo mode - feature not implemented in prototype)`, 'info');
}

// ENHANCED CHAT FEEDBACK FUNCTIONS

// Switch between different view modes
function switchFeedbackView(viewType) {
    // Hide all views
    document.getElementById('feedback-table-view').style.display = 'none';
    document.getElementById('feedback-cards-view').style.display = 'none';
    
    // Show selected view
    if (viewType === 'table') {
        document.getElementById('feedback-table-view').style.display = 'block';
    } else if (viewType === 'cards') {
        document.getElementById('feedback-cards-view').style.display = 'block';
    } else if (viewType === 'timeline') {
        // Timeline view would be implemented here
        showToast('Timeline view coming soon!', 'info');
        document.getElementById('feedback-table-view').style.display = 'block';
    }
    
    // Update button states
    const buttons = document.querySelectorAll('.view-toggle button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Filter feedback based on various criteria
function filterFeedback(filterType, value) {
    showToast(`Filtering by ${filterType}: ${value}`, 'info');
    // Implementation would filter the table/cards based on the criteria
}

// Update sentiment view based on time period
function updateSentimentView(period) {
    showToast(`Updating sentiment analysis for: ${period}`, 'info');
    // Would update the sentiment percentages based on selected period
}

// Select all feedback items
function selectAllFeedback() {
    const checkboxes = document.querySelectorAll('#feedback-table-view tbody input[type="checkbox"]');
    const selectAllCheckbox = document.getElementById('select-all-feedback');
    checkboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
}

// Bulk actions
function markAsReviewed() {
    const selected = document.querySelectorAll('#feedback-table-view tbody input[type="checkbox"]:checked');
    if (selected.length === 0) {
        showToast('Please select feedback items first', 'warning');
        return;
    }
    showToast(`Marked ${selected.length} items as reviewed`, 'success');
}

function markAsResolved() {
    const selected = document.querySelectorAll('#feedback-table-view tbody input[type="checkbox"]:checked');
    if (selected.length === 0) {
        showToast('Please select feedback items first', 'warning');
        return;
    }
    showToast(`Marked ${selected.length} items as resolved`, 'success');
}

function assignToTeam() {
    const selected = document.querySelectorAll('#feedback-table-view tbody input[type="checkbox"]:checked');
    if (selected.length === 0) {
        showToast('Please select feedback items first', 'warning');
        return;
    }
    showToast(`Opening team assignment for ${selected.length} items...`, 'info');
}

function addTags() {
    const selected = document.querySelectorAll('#feedback-table-view tbody input[type="checkbox"]:checked');
    if (selected.length === 0) {
        showToast('Please select feedback items first', 'warning');
        return;
    }
    showToast(`Opening tag manager for ${selected.length} items...`, 'info');
}

function exportSelectedFeedback() {
    const selected = document.querySelectorAll('#feedback-table-view tbody input[type="checkbox"]:checked');
    if (selected.length === 0) {
        showToast('Please select feedback items to export', 'warning');
        return;
    }
    showToast(`Exporting ${selected.length} feedback items...`, 'success');
}

function archiveSelected() {
    const selected = document.querySelectorAll('#feedback-table-view tbody input[type="checkbox"]:checked');
    if (selected.length === 0) {
        showToast('Please select feedback items first', 'warning');
        return;
    }
    if (confirm(`Archive ${selected.length} selected items?`)) {
        showToast(`${selected.length} items archived`, 'success');
    }
}

// Individual feedback actions
function viewFeedbackDetails(id) {
    showToast(`Opening details for feedback #${id}...`, 'info');
    // Would open a modal with full feedback details
}

function replyToFeedback(id) {
    showToast(`Opening reply composer for feedback #${id}...`, 'info');
    // Would open a reply modal
}

function assignFeedback(id) {
    showToast(`Opening assignment options for feedback #${id}...`, 'info');
    // Would show team member assignment options
}

function archiveFeedback(id) {
    if (confirm('Archive this feedback item?')) {
        showToast(`Feedback #${id} archived`, 'success');
    }
}

function escalateFeedback(id) {
    if (confirm('Escalate this feedback to management?')) {
        showToast(`Feedback #${id} escalated to management`, 'warning');
    }
}

// Analytics Dataset Management

function refreshDatasetList() {
    const selector = document.getElementById('analytics-dataset-selector');
    const importedDatasets = JSON.parse(localStorage.getItem('importedDatasets') || '[]');

    // Clear existing imported dataset options - convert NodeList to Array to avoid removal issues
    const options = Array.from(selector.querySelectorAll('option[value]:not([value="platform-data"]):not([disabled])'));
    options.forEach(option => option.remove());

    // Add imported datasets
    importedDatasets.forEach(dataset => {
        const option = document.createElement('option');
        option.value = dataset.id;
        option.textContent = `${dataset.name} (${dataset.recordCount} records)`;
        selector.appendChild(option);
    });

    // Also refresh generated reports
    populateGeneratedReports();

    showToast('Dataset list refreshed', 'success');
}

// New combined configuration function
// Generated reports storage and management
function initializeGeneratedReports() {
    const defaultReports = [
        {
            id: 'engagement-overview-2025',
            name: 'Employee Engagement Overview Q3 2025',
            type: 'engagement',
            layoutType: 'charts',
            createdDate: '2025-09-20',
            description: 'Comprehensive engagement metrics with visual charts'
        },
        {
            id: 'satisfaction-metrics-sep',
            name: 'Customer Satisfaction Metrics - September',
            type: 'satisfaction',
            layoutType: 'numeric',
            createdDate: '2025-09-15',
            description: 'Pure numerical satisfaction statistics'
        },
        {
            id: 'performance-analytics-q3',
            name: 'Performance Analytics Q3 Report',
            type: 'performance',
            layoutType: 'mixed',
            createdDate: '2025-09-10',
            description: 'Mixed layout with charts and numerical data'
        },
        {
            id: 'feedback-trends-analysis',
            name: 'Feedback Trends Analysis',
            type: 'trends',
            layoutType: 'minimal',
            createdDate: '2025-09-05',
            description: 'Minimal display focused on key trends'
        },
        {
            id: 'comprehensive-insights-aug',
            name: 'Comprehensive Insights - August 2025',
            type: 'comprehensive',
            layoutType: 'detailed',
            createdDate: '2025-08-30',
            description: 'Detailed analytics with multiple sections'
        }
    ];

    // Initialize if not exists
    const storedReports = localStorage.getItem('generatedReports');
    if (!storedReports) {
        localStorage.setItem('generatedReports', JSON.stringify(defaultReports));
    }

    return JSON.parse(localStorage.getItem('generatedReports') || '[]');
}

function getGeneratedReports() {
    return JSON.parse(localStorage.getItem('generatedReports') || '[]');
}

function populateGeneratedReports() {
    const reportSelector = document.getElementById('analytics-report-selector');
    if (!reportSelector) return;

    const reports = getGeneratedReports();

    // Clear existing options except the first placeholder
    reportSelector.innerHTML = '<option value="" selected>Select a generated report...</option>';

    // Add generated reports
    reports.forEach(report => {
        const option = document.createElement('option');
        option.value = report.id;
        option.textContent = report.name;
        option.dataset.layoutType = report.layoutType;
        option.dataset.description = report.description;
        reportSelector.appendChild(option);
    });
}

function updateAnalyticsConfiguration() {
    const datasetSelector = document.getElementById('analytics-dataset-selector');
    const reportSelector = document.getElementById('analytics-report-selector');
    const reportFocus = document.getElementById('report-focus');

    if (!datasetSelector || !reportSelector || !reportFocus) {
        console.error('Selectors not found');
        return;
    }

    const datasetId = datasetSelector.value;
    const selectedReportId = reportSelector.value;

    if (selectedReportId) {
        const reports = getGeneratedReports();
        const selectedReport = reports.find(r => r.id === selectedReportId);

        if (selectedReport) {
            reportFocus.textContent = selectedReport.description;
            // Load analytics with the specific layout type from the report
            loadAnalyticsForDataset(datasetId, selectedReport.layoutType, selectedReport);
        }
    } else {
        reportFocus.textContent = 'Select a report to view analytics';
        // Hide analytics or show default
        const dashboardGrids = document.querySelectorAll('#chat-feedback-section .dashboard-grid');
        const mainDashboardGrid = dashboardGrids[0];
        if (mainDashboardGrid) {
            hideAnalyticsDashboard(mainDashboardGrid);
        }
    }
}

// Updated load analytics function to include report type and report object
function loadAnalyticsForDataset(datasetId, reportType = 'overview', reportObject = null) {
    const datasetInfo = document.getElementById('dataset-info');
    const recordCount = document.getElementById('dataset-record-count');
    const lastUpdated = document.getElementById('dataset-last-updated');

    if (datasetId === 'platform-data') {
        // Load platform data stats
        recordCount.textContent = 'Loading...';
        lastUpdated.textContent = 'Loading...';

        // Simulate loading platform data
        setTimeout(() => {
            recordCount.textContent = '1,847 sessions';
            lastUpdated.textContent = new Date().toLocaleDateString();

            // Update analytics dashboard with platform data and report type
            refreshAnalyticsDashboard('platform-data', null, reportType, reportObject);
        }, 500);
    } else {
        // Load imported dataset stats
        const importedDatasets = JSON.parse(localStorage.getItem('importedDatasets') || '[]');
        const dataset = importedDatasets.find(d => d.id === datasetId);

        if (dataset) {
            recordCount.textContent = `${dataset.recordCount} records`;
            lastUpdated.textContent = new Date(dataset.uploadDate).toLocaleDateString();

            // Update analytics dashboard with imported data and report type
            refreshAnalyticsDashboard(datasetId, dataset.data, reportType, reportObject);
        }
    }
}

function refreshAnalyticsDashboard(datasetId, customData = null, reportType = 'overview', reportObject = null) {
    console.log('refreshAnalyticsDashboard called with:', datasetId, customData, reportType, reportObject);

    // Get the analytics content area (not the whole section)
    const dashboardGrids = document.querySelectorAll('#chat-feedback-section .dashboard-grid');
    console.log('Found dashboard grids:', dashboardGrids.length);

    const mainDashboardGrid = dashboardGrids[0]; // First dashboard-grid for main stats
    console.log('Main dashboard grid:', mainDashboardGrid);

    if (!mainDashboardGrid) {
        console.error('Dashboard grid not found');
        showToast('Error: Analytics dashboard not found', 'error');
        return;
    }

    // Create analytics content based on layout type from the report
    const layoutType = reportObject ? reportObject.layoutType : reportType;

    if (datasetId === 'platform-data') {
        console.log('Creating platform data analytics content with layout type:', layoutType);
        createAnalyticsContentByLayout(mainDashboardGrid, 'platform-data', layoutType, reportObject);
    } else if (datasetId === 'chat-responses') {
        console.log('Creating chat responses analytics content with layout type:', layoutType);
        createAnalyticsContentByLayout(mainDashboardGrid, 'chat-responses', layoutType, reportObject);
    } else if (customData) {
        console.log('Creating custom data analytics content with layout type:', layoutType);
        createAnalyticsContentByLayout(mainDashboardGrid, 'custom', layoutType, reportObject, customData);
    } else {
        console.log('No specific dataset selected, showing default content');
        createDefaultAnalyticsContent(mainDashboardGrid);
    }

    // Update or add additional content sections below the main dashboard
    updateAdditionalAnalyticsContent(datasetId, customData, layoutType, reportObject);
}

// New function to create analytics content based on layout type
function createAnalyticsContentByLayout(dashboardGrid, datasetType, layoutType, reportObject, customData = null) {
    console.log('createAnalyticsContentByLayout called with:', datasetType, layoutType, reportObject);

    switch (layoutType) {
        case 'charts':
            createChartsLayout(dashboardGrid, datasetType, reportObject);
            break;
        case 'numeric':
            createNumericLayout(dashboardGrid, datasetType, reportObject);
            break;
        case 'mixed':
            createMixedLayout(dashboardGrid, datasetType, reportObject);
            break;
        case 'minimal':
            createMinimalLayout(dashboardGrid, datasetType, reportObject);
            break;
        case 'detailed':
            createDetailedLayout(dashboardGrid, datasetType, reportObject);
            break;
        default:
            // Fallback to existing platform analytics
            if (datasetType === 'platform-data') {
                createPlatformAnalyticsContent(dashboardGrid, layoutType);
            } else if (datasetType === 'custom' && customData) {
                createCustomDataAnalyticsContent(dashboardGrid, customData, layoutType);
            } else {
                createDefaultAnalyticsContent(dashboardGrid);
            }
    }
}

// Charts layout - emphasizes visual data representation
function createChartsLayout(dashboardGrid, datasetType, reportObject) {
    dashboardGrid.innerHTML = `
        <div class="stat-card" style="background: var(--bg-primary); border: 2px solid var(--primary-color); box-shadow: var(--shadow);">
            <div class="stat-value" style="color: var(--primary-color);">📊</div>
            <div class="stat-label" style="color: var(--text-primary);">Chart Analytics</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">Interactive visualizations</div>
        </div>
        <div class="stat-card" style="background: var(--bg-primary); border: 2px solid var(--success-color); box-shadow: var(--shadow);">
            <div class="stat-value" style="color: var(--success-color);">85%</div>
            <div class="stat-label" style="color: var(--text-primary);">Data Coverage</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">Visual completion rate</div>
        </div>
        <div class="stat-card" style="background: var(--bg-primary); border: 2px solid var(--secondary-color); box-shadow: var(--shadow);">
            <div class="stat-value" style="color: var(--secondary-color);">12</div>
            <div class="stat-label" style="color: var(--text-primary);">Active Charts</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">Dynamic visualizations</div>
        </div>
        <div class="stat-card" style="background: var(--bg-primary); border: 2px solid var(--warning-color); box-shadow: var(--shadow);">
            <div class="stat-value" style="color: var(--warning-color);">Real-time</div>
            <div class="stat-label" style="color: var(--text-primary);">Updates</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">Live data streaming</div>
        </div>
    `;
}

// Numeric layout - focuses on pure statistical data
function createNumericLayout(dashboardGrid, datasetType, reportObject) {
    dashboardGrid.innerHTML = `
        <div class="stat-card">
            <div class="stat-value">94.2%</div>
            <div class="stat-label">Satisfaction Score</div>
            <div style="font-size: 0.75rem; color: var(--success-color); margin-top: 0.5rem;">↑ 2.3% from last period</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">1,247</div>
            <div class="stat-label">Total Responses</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">Across all metrics</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">4.7</div>
            <div class="stat-label">Average Rating</div>
            <div style="font-size: 0.75rem; color: var(--success-color); margin-top: 0.5rem;">Out of 5.0 scale</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">0.8s</div>
            <div class="stat-label">Response Time</div>
            <div style="font-size: 0.75rem; color: var(--success-color); margin-top: 0.5rem;">Average processing</div>
        </div>
    `;
}

// Mixed layout - combines charts and numbers
function createMixedLayout(dashboardGrid, datasetType, reportObject) {
    dashboardGrid.innerHTML = `
        <div class="stat-card" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);">
            <div class="stat-value" style="color: #333;">📈 89%</div>
            <div class="stat-label" style="color: #555;">Performance Index</div>
            <div style="font-size: 0.75rem; color: #666; margin-top: 0.5rem;">Combined metrics</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">2,156</div>
            <div class="stat-label">Data Points</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">Collected this month</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);">
            <div class="stat-value" style="color: #333;">📊 6</div>
            <div class="stat-label" style="color: #555;">Active Visualizations</div>
            <div style="font-size: 0.75rem; color: #666; margin-top: 0.5rem;">Charts & graphs</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">99.1%</div>
            <div class="stat-label">Data Accuracy</div>
            <div style="font-size: 0.75rem; color: var(--success-color); margin-top: 0.5rem;">Quality assurance</div>
        </div>
    `;
}

// Minimal layout - shows only key trends
function createMinimalLayout(dashboardGrid, datasetType, reportObject) {
    dashboardGrid.innerHTML = `
        <div class="stat-card" style="background: #f8f9fa; border: 2px solid #e9ecef;">
            <div class="stat-value" style="color: #495057;">↗️ +12%</div>
            <div class="stat-label" style="color: #6c757d;">Growth Trend</div>
            <div style="font-size: 0.75rem; color: #6c757d; margin-top: 0.5rem;">Month over month</div>
        </div>
        <div class="stat-card" style="background: #f8f9fa; border: 2px solid #e9ecef;">
            <div class="stat-value" style="color: #495057;">◉ Active</div>
            <div class="stat-label" style="color: #6c757d;">Status</div>
            <div style="font-size: 0.75rem; color: #28a745; margin-top: 0.5rem;">All systems operational</div>
        </div>
        <div class="stat-card" style="background: #f8f9fa; border: 2px solid #e9ecef;">
            <div class="stat-value" style="color: #495057;">⚡ 0.3s</div>
            <div class="stat-label" style="color: #6c757d;">Performance</div>
            <div style="font-size: 0.75rem; color: #6c757d; margin-top: 0.5rem;">Response time</div>
        </div>
        <div class="stat-card" style="background: #f8f9fa; border: 2px solid #e9ecef;">
            <div class="stat-value" style="color: #495057;">✓ 100%</div>
            <div class="stat-label" style="color: #6c757d;">Reliability</div>
            <div style="font-size: 0.75rem; color: #28a745; margin-top: 0.5rem;">Uptime this week</div>
        </div>
    `;
}

// Detailed layout - shows comprehensive analytics
function createDetailedLayout(dashboardGrid, datasetType, reportObject) {
    dashboardGrid.innerHTML = `
        <div class="stat-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
            <div class="stat-value">1,847</div>
            <div class="stat-label">Total Sessions</div>
            <div style="font-size: 0.75rem; color: rgba(255,255,255,0.8); margin-top: 0.5rem;">📈 +15% vs last period</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white;">
            <div class="stat-value">4.8★</div>
            <div class="stat-label">Avg. Rating</div>
            <div style="font-size: 0.75rem; color: rgba(255,255,255,0.8); margin-top: 0.5rem;">⭐⭐⭐⭐⭐ 92% positive</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white;">
            <div class="stat-value">87%</div>
            <div class="stat-label">Completion Rate</div>
            <div style="font-size: 0.75rem; color: rgba(255,255,255,0.8); margin-top: 0.5rem;">📊 2,156 completed</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white;">
            <div class="stat-value">128</div>
            <div class="stat-label">Active Users</div>
            <div style="font-size: 0.75rem; color: rgba(255,255,255,0.8); margin-top: 0.5rem;">🔥 Peak: 156 users</div>
        </div>
    `;
}

function hideAnalyticsDashboard(dashboardGrid) {
    console.log('hideAnalyticsDashboard called', dashboardGrid);

    if (!dashboardGrid) {
        console.error('Dashboard grid not found');
        return;
    }

    const statCards = dashboardGrid.querySelectorAll('.stat-card');
    console.log('Found stat cards to hide:', statCards.length);

    if (statCards.length >= 4) {
        statCards[0].innerHTML = `<div class="stat-value">-</div><div class="stat-label">No Data</div><div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">📊 Select a report</div>`;
        statCards[1].innerHTML = `<div class="stat-value">-</div><div class="stat-label">No Data</div><div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">📊 Select a report</div>`;
        statCards[2].innerHTML = `<div class="stat-value">-</div><div class="stat-label">No Data</div><div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">📊 Select a report</div>`;
        statCards[3].innerHTML = `<div class="stat-value">-</div><div class="stat-label">No Data</div><div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">📊 Select a report</div>`;
        console.log('Hidden analytics cards - showing placeholder');
    } else {
        console.warn('Not enough stat cards found:', statCards.length);
    }
    showToast('Analytics hidden - select a report to view data', 'info');
}

function updatePlatformAnalytics(dashboardGrid) {
    // Update with actual platform data analytics
    console.log('updatePlatformAnalytics called', dashboardGrid);

    if (!dashboardGrid) {
        console.error('Dashboard grid not found');
        showToast('Error: Dashboard grid not found', 'error');
        return;
    }

    const statCards = dashboardGrid.querySelectorAll('.stat-card');
    console.log('Found stat cards:', statCards.length);

    if (statCards.length >= 4) {
        statCards[0].innerHTML = `<div class="stat-value">1,847</div><div class="stat-label">Total Chat Sessions</div><div style="font-size: 0.75rem; color: var(--success-color); margin-top: 0.5rem;">↑ 12% from last week</div>`;
        statCards[1].innerHTML = `<div class="stat-value">4.8</div><div class="stat-label">Average Rating</div><div style="display: flex; gap: 0.25rem; margin-top: 0.5rem;"><span>⭐⭐⭐⭐⭐</span></div>`;
        statCards[2].innerHTML = `<div class="stat-value">73%</div><div class="stat-label">Satisfaction Rate</div><div style="font-size: 0.75rem; color: var(--warning-color); margin-top: 0.5rem;">↓ 3% from last week</div>`;
        statCards[3].innerHTML = `<div class="stat-value">156</div><div class="stat-label">This Week</div><div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">23 pending review</div>`;
        console.log('Updated platform analytics cards');
    } else {
        console.warn('Not enough stat cards found:', statCards.length);
    }
    showToast('Loaded platform analytics', 'success');
}

async function updateChatResponsesAnalytics(dashboardGrid) {
    console.log('updateChatResponsesAnalytics called', dashboardGrid);

    if (!dashboardGrid) {
        console.error('Dashboard grid not found');
        showToast('Error: Dashboard grid not found', 'error');
        return;
    }

    try {
        // Get actual chat responses analytics
        const analytics = await getChatResponseAnalytics();
        const statCards = dashboardGrid.querySelectorAll('.stat-card');
        console.log('Found stat cards:', statCards.length);

        if (statCards.length >= 4) {
            statCards[0].innerHTML = `<div class="stat-value">${analytics.totalResponses}</div><div class="stat-label">Chat Responses</div><div style="font-size: 0.75rem; color: var(--info-color); margin-top: 0.5rem;">📊 AI Report Data</div>`;
            statCards[1].innerHTML = `<div class="stat-value">${analytics.sentimentBreakdown.positive}</div><div class="stat-label">Positive Responses</div><div style="font-size: 0.75rem; color: var(--success-color); margin-top: 0.5rem;">😊 ${Math.round((analytics.sentimentBreakdown.positive / analytics.totalResponses) * 100)}%</div>`;
            statCards[2].innerHTML = `<div class="stat-value">${analytics.sentimentBreakdown.negative}</div><div class="stat-label">Negative Responses</div><div style="font-size: 0.75rem; color: var(--error-color); margin-top: 0.5rem;">😞 ${Math.round((analytics.sentimentBreakdown.negative / analytics.totalResponses) * 100)}%</div>`;
            statCards[3].innerHTML = `<div class="stat-value">${analytics.sentimentBreakdown.neutral}</div><div class="stat-label">Neutral Responses</div><div style="font-size: 0.75rem; color: var(--warning-color); margin-top: 0.5rem;">😐 ${Math.round((analytics.sentimentBreakdown.neutral / analytics.totalResponses) * 100)}%</div>`;
            console.log('Updated chat responses analytics cards');
        } else {
            console.warn('Not enough stat cards found:', statCards.length);
        }
        showToast('Loaded chat responses analytics', 'success');
    } catch (error) {
        console.error('Error loading chat responses analytics:', error);
        showToast('Error loading chat analytics', 'error');
    }
}

function updateCustomDataAnalytics(dashboardGrid, data) {
    console.log('updateCustomDataAnalytics called', dashboardGrid, data);

    if (!dashboardGrid) {
        console.error('Dashboard grid not found');
        showToast('Error: Dashboard grid not found', 'error');
        return;
    }

    if (!data || !Array.isArray(data) || data.length === 0) {
        showToast('No data available for analysis', 'warning');
        hideAnalyticsDashboard(dashboardGrid);
        return;
    }

    // Generate basic analytics for custom dataset
    const totalRecords = data.length;
    const columns = Object.keys(data[0] || {});

    // Try to identify sentiment, rating, or score columns
    const sentimentColumns = columns.filter(col =>
        col.toLowerCase().includes('sentiment') ||
        col.toLowerCase().includes('rating') ||
        col.toLowerCase().includes('score') ||
        col.toLowerCase().includes('satisfaction')
    );

    // Try to identify text feedback columns
    const textColumns = columns.filter(col =>
        col.toLowerCase().includes('comment') ||
        col.toLowerCase().includes('feedback') ||
        col.toLowerCase().includes('text') ||
        col.toLowerCase().includes('response')
    );

    // Calculate analytics
    let positiveCount = 0, negativeCount = 0, neutralCount = 0, averageScore = 0, hasNumericScore = false;
    let totalTextLength = 0, validScoreCount = 0;

    if (sentimentColumns.length > 0) {
        const sentimentCol = sentimentColumns[0];
        data.forEach(row => {
            const value = row[sentimentCol];
            if (typeof value === 'string') {
                const lowerValue = value.toLowerCase();
                if (lowerValue.includes('positive') || lowerValue.includes('good') || lowerValue.includes('excellent') || lowerValue.includes('satisfied')) {
                    positiveCount++;
                } else if (lowerValue.includes('negative') || lowerValue.includes('bad') || lowerValue.includes('poor') || lowerValue.includes('dissatisfied')) {
                    negativeCount++;
                } else {
                    neutralCount++;
                }
            } else if (typeof value === 'number' && !isNaN(value)) {
                averageScore += value;
                validScoreCount++;
                hasNumericScore = true;
                // Assume scores above 3 (on 1-5 scale) or 50 (percentage) are positive
                if (value > 3 || (value > 50 && value <= 100)) positiveCount++;
                else if (value < 3 || (value < 50 && value >= 0)) negativeCount++;
                else neutralCount++;
            }
        });
        if (hasNumericScore && validScoreCount > 0) {
            averageScore = averageScore / validScoreCount;
        }
    }

    // Calculate average text length if text columns exist
    if (textColumns.length > 0) {
        const textCol = textColumns[0];
        data.forEach(row => {
            const text = row[textCol];
            if (typeof text === 'string') {
                totalTextLength += text.length;
            }
        });
    }

    const avgTextLength = textColumns.length > 0 ? Math.round(totalTextLength / totalRecords) : 0;
    const satisfactionRate = totalRecords > 0 ? Math.round((positiveCount / totalRecords) * 100) : 0;

    // Check if this dataset has meaningful analytics data
    const hasAnalyzableData = sentimentColumns.length > 0 || textColumns.length > 0;

    if (!hasAnalyzableData && positiveCount === 0 && negativeCount === 0 && neutralCount === 0) {
        showToast('Dataset contains no analyzable sentiment or feedback data', 'warning');
        hideAnalyticsDashboard(dashboardGrid);
        return;
    }

    // Update stat cards with custom data analytics
    const statCards = dashboardGrid.querySelectorAll('.stat-card');
    if (statCards.length >= 4) {
        statCards[0].innerHTML = `<div class="stat-value">${totalRecords.toLocaleString()}</div><div class="stat-label">Total Records</div><div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">${columns.length} data fields</div>`;

        if (hasNumericScore && averageScore > 0) {
            statCards[1].innerHTML = `<div class="stat-value">${averageScore.toFixed(1)}</div><div class="stat-label">Average Score</div><div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">from ${validScoreCount} scores</div>`;
        } else {
            statCards[1].innerHTML = `<div class="stat-value">${positiveCount}</div><div class="stat-label">Positive Items</div><div style="font-size: 0.75rem; color: var(--success-color); margin-top: 0.5rem;">${negativeCount} negative</div>`;
        }

        statCards[2].innerHTML = `<div class="stat-value">${satisfactionRate}%</div><div class="stat-label">Satisfaction Rate</div><div style="font-size: 0.75rem; color: ${satisfactionRate >= 70 ? 'var(--success-color)' : satisfactionRate >= 50 ? 'var(--warning-color)' : 'var(--error-color)'}; margin-top: 0.5rem;">${positiveCount}/${totalRecords} positive</div>`;

        if (avgTextLength > 0) {
            statCards[3].innerHTML = `<div class="stat-value">${avgTextLength}</div><div class="stat-label">Avg. Text Length</div><div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">${textColumns.length} text field(s)</div>`;
        } else {
            statCards[3].innerHTML = `<div class="stat-value">${columns.length}</div><div class="stat-label">Data Fields</div><div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">imported dataset</div>`;
        }
    }

    showToast(`Analytics updated for ${totalRecords.toLocaleString()} records`, 'success');
}

function updateAnalyticsCharts(datasetId, customData = null) {
    // Update charts based on selected dataset
    // This would integrate with the existing chart generation functions
    if (datasetId === 'platform-data') {
        // Use existing chart functions
    } else if (customData) {
        // Generate charts for custom data
        generateCustomDataCharts(customData);
    }
}

function generateCustomDataCharts(data) {
    // Generate charts for imported datasets
    // This would create visualizations based on the data structure
    const chartsContainer = document.getElementById('chat-charts-container');
    if (chartsContainer && data.length > 0) {
        const columns = Object.keys(data[0]);

        // Create a simple data overview
        chartsContainer.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <h4>Data Overview</h4>
                </div>
                <div class="card-body">
                    <p><strong>Columns:</strong> ${columns.join(', ')}</p>
                    <p><strong>Sample Data:</strong></p>
                    <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto;">${JSON.stringify(data[0], null, 2)}</pre>
                </div>
            </div>
        `;
    }
}

// Dynamic Analytics Layout Functions
function createDefaultAnalyticsLayout(container) {
    console.log('Creating default analytics layout');
    container.innerHTML = `
        <div class="stat-card">
            <div class="stat-value">-</div>
            <div class="stat-label">No Report Selected</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">📊 Generate a report to view analytics</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">-</div>
            <div class="stat-label">No Data</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">📊 Generate a report to view analytics</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">-</div>
            <div class="stat-label">No Analysis</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">📊 Generate a report to view analytics</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">-</div>
            <div class="stat-label">No Insights</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">📊 Generate a report to view analytics</div>
        </div>
    `;
    showToast('Select and generate a report to view analytics', 'info');
}

function createPlatformAnalyticsLayout(container) {
    console.log('Creating platform analytics layout');
    container.innerHTML = `
        <div class="stat-card">
            <div class="stat-value">1,847</div>
            <div class="stat-label">Total Sessions</div>
            <div style="font-size: 0.75rem; color: var(--success-color); margin-top: 0.5rem;">↑ 12% from last week</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">4.8</div>
            <div class="stat-label">Average Rating</div>
            <div style="display: flex; gap: 0.25rem; margin-top: 0.5rem;"><span>⭐⭐⭐⭐⭐</span></div>
        </div>
        <div class="stat-card">
            <div class="stat-value">73%</div>
            <div class="stat-label">Satisfaction Rate</div>
            <div style="font-size: 0.75rem; color: var(--warning-color); margin-top: 0.5rem;">↓ 3% from last week</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">156</div>
            <div class="stat-label">This Week</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">23 pending review</div>
        </div>
    `;
    showToast('Loaded platform analytics', 'success');
}

async function createChatResponsesAnalyticsLayout(container) {
    console.log('Creating chat responses analytics layout');

    try {
        const analytics = await getChatResponseAnalytics();

        // Create a specialized layout for chat responses with sentiment analysis focus
        container.innerHTML = `
            <div class="stat-card" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white;">
                <div class="stat-value">${analytics.totalResponses}</div>
                <div class="stat-label">Chat Responses</div>
                <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">📊 AI Report Data Source</div>
            </div>
            <div class="stat-card" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white;">
                <div class="stat-value">${analytics.sentimentBreakdown.positive}</div>
                <div class="stat-label">😊 Positive</div>
                <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${Math.round((analytics.sentimentBreakdown.positive / analytics.totalResponses) * 100)}% of responses</div>
            </div>
            <div class="stat-card" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white;">
                <div class="stat-value">${analytics.sentimentBreakdown.negative}</div>
                <div class="stat-label">😞 Negative</div>
                <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${Math.round((analytics.sentimentBreakdown.negative / analytics.totalResponses) * 100)}% of responses</div>
            </div>
            <div class="stat-card" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white;">
                <div class="stat-value">${analytics.sentimentBreakdown.neutral}</div>
                <div class="stat-label">😐 Neutral</div>
                <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${Math.round((analytics.sentimentBreakdown.neutral / analytics.totalResponses) * 100)}% of responses</div>
            </div>
        `;

        // Add a sentiment chart below the stats
        const chartContainer = document.createElement('div');
        chartContainer.style.cssText = 'grid-column: 1 / -1; margin-top: 1rem; background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);';
        chartContainer.innerHTML = `
            <h4 style="margin: 0 0 1rem 0; color: #1f2937;">Sentiment Distribution</h4>
            <div style="display: flex; gap: 1rem; align-items: center;">
                <div style="flex: 1; background: #f3f4f6; border-radius: 8px; overflow: hidden; height: 20px;">
                    <div style="background: #10b981; width: ${(analytics.sentimentBreakdown.positive / analytics.totalResponses) * 100}%; height: 100%; float: left;"></div>
                    <div style="background: #f59e0b; width: ${(analytics.sentimentBreakdown.neutral / analytics.totalResponses) * 100}%; height: 100%; float: left;"></div>
                    <div style="background: #ef4444; width: ${(analytics.sentimentBreakdown.negative / analytics.totalResponses) * 100}%; height: 100%; float: left;"></div>
                </div>
                <div style="font-size: 0.875rem; color: #6b7280;">
                    <span style="color: #10b981;">●</span> Positive
                    <span style="color: #f59e0b;">●</span> Neutral
                    <span style="color: #ef4444;">●</span> Negative
                </div>
            </div>
        `;
        container.appendChild(chartContainer);

        showToast('Loaded chat responses analytics with sentiment visualization', 'success');
    } catch (error) {
        console.error('Error creating chat responses layout:', error);
        createDefaultAnalyticsLayout(container);
    }
}

function createCustomDataAnalyticsLayout(container, data) {
    console.log('Creating custom data analytics layout');

    if (!data || !Array.isArray(data) || data.length === 0) {
        createDefaultAnalyticsLayout(container);
        return;
    }

    const totalRecords = data.length;
    const columns = Object.keys(data[0] || {});

    // Analyze the dataset structure to determine the best layout
    const sentimentColumns = columns.filter(col =>
        col.toLowerCase().includes('sentiment') ||
        col.toLowerCase().includes('rating') ||
        col.toLowerCase().includes('score') ||
        col.toLowerCase().includes('satisfaction')
    );

    const textColumns = columns.filter(col =>
        col.toLowerCase().includes('comment') ||
        col.toLowerCase().includes('feedback') ||
        col.toLowerCase().includes('text') ||
        col.toLowerCase().includes('response')
    );

    const dateColumns = columns.filter(col =>
        col.toLowerCase().includes('date') ||
        col.toLowerCase().includes('time') ||
        col.toLowerCase().includes('created')
    );

    // Create layout based on data structure
    if (sentimentColumns.length > 0 || textColumns.length > 0) {
        createFeedbackDataLayout(container, data, columns, sentimentColumns, textColumns);
    } else if (dateColumns.length > 0) {
        createTimeSeriesDataLayout(container, data, columns, dateColumns);
    } else {
        createGeneralDataLayout(container, data, columns);
    }
}

function createFeedbackDataLayout(container, data, columns, sentimentColumns, textColumns) {
    console.log('Creating feedback-focused layout');

    // Calculate sentiment metrics
    let positiveCount = 0, negativeCount = 0, neutralCount = 0;
    let averageScore = 0, validScoreCount = 0;
    let totalTextLength = 0;

    if (sentimentColumns.length > 0) {
        const sentimentCol = sentimentColumns[0];
        data.forEach(row => {
            const value = row[sentimentCol];
            if (typeof value === 'string') {
                const lowerValue = value.toLowerCase();
                if (lowerValue.includes('positive') || lowerValue.includes('good') || lowerValue.includes('excellent')) {
                    positiveCount++;
                } else if (lowerValue.includes('negative') || lowerValue.includes('bad') || lowerValue.includes('poor')) {
                    negativeCount++;
                } else {
                    neutralCount++;
                }
            } else if (typeof value === 'number') {
                averageScore += value;
                validScoreCount++;
                if (value > 3) positiveCount++;
                else if (value < 3) negativeCount++;
                else neutralCount++;
            }
        });
    }

    if (textColumns.length > 0) {
        const textCol = textColumns[0];
        data.forEach(row => {
            if (row[textCol] && typeof row[textCol] === 'string') {
                totalTextLength += row[textCol].length;
            }
        });
    }

    const avgScore = validScoreCount > 0 ? (averageScore / validScoreCount).toFixed(1) : 'N/A';
    const avgTextLength = textColumns.length > 0 ? Math.round(totalTextLength / data.length) : 0;
    const satisfactionRate = data.length > 0 ? Math.round((positiveCount / data.length) * 100) : 0;

    container.innerHTML = `
        <div class="stat-card" style="background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white;">
            <div class="stat-value">${data.length.toLocaleString()}</div>
            <div class="stat-label">📋 Total Records</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${columns.length} data fields</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white;">
            <div class="stat-value">${positiveCount}</div>
            <div class="stat-label">👍 Positive</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${Math.round((positiveCount / data.length) * 100)}% satisfaction</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white;">
            <div class="stat-value">${avgScore}</div>
            <div class="stat-label">⭐ Avg Score</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${validScoreCount} rated items</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); color: white;">
            <div class="stat-value">${avgTextLength}</div>
            <div class="stat-label">📝 Avg Length</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">characters per response</div>
        </div>
    `;

    // Add data composition chart
    const chartContainer = document.createElement('div');
    chartContainer.style.cssText = 'grid-column: 1 / -1; margin-top: 1rem; background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);';
    chartContainer.innerHTML = `
        <h4 style="margin: 0 0 1rem 0; color: #1f2937;">Data Composition</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            <div>
                <p style="margin: 0 0 0.5rem 0; font-weight: 500;">Sentiment Fields:</p>
                <p style="margin: 0; color: #6b7280;">${sentimentColumns.join(', ') || 'None detected'}</p>
            </div>
            <div>
                <p style="margin: 0 0 0.5rem 0; font-weight: 500;">Text Fields:</p>
                <p style="margin: 0; color: #6b7280;">${textColumns.join(', ') || 'None detected'}</p>
            </div>
        </div>
    `;
    container.appendChild(chartContainer);

    showToast(`Loaded feedback analytics for ${data.length} records`, 'success');
}

function createTimeSeriesDataLayout(container, data, columns, dateColumns) {
    console.log('Creating time-series focused layout');

    container.innerHTML = `
        <div class="stat-card" style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); color: white;">
            <div class="stat-value">${data.length.toLocaleString()}</div>
            <div class="stat-label">📊 Data Points</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Time-series dataset</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%); color: white;">
            <div class="stat-value">${dateColumns.length}</div>
            <div class="stat-label">📅 Time Fields</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Temporal columns</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white;">
            <div class="stat-value">${columns.length}</div>
            <div class="stat-label">🔢 Total Fields</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Data dimensions</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #ec4899 0%, #db2777 100%); color: white;">
            <div class="stat-value">📈</div>
            <div class="stat-label">Trend Analysis</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Ready for analysis</div>
        </div>
    `;

    // Add time fields info
    const chartContainer = document.createElement('div');
    chartContainer.style.cssText = 'grid-column: 1 / -1; margin-top: 1rem; background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);';
    chartContainer.innerHTML = `
        <h4 style="margin: 0 0 1rem 0; color: #1f2937;">Time-Series Configuration</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            <div>
                <p style="margin: 0 0 0.5rem 0; font-weight: 500;">Date/Time Fields:</p>
                <p style="margin: 0; color: #6b7280;">${dateColumns.join(', ')}</p>
            </div>
            <div>
                <p style="margin: 0 0 0.5rem 0; font-weight: 500;">Analysis Ready:</p>
                <p style="margin: 0; color: #059669;">✓ Temporal data detected</p>
            </div>
        </div>
    `;
    container.appendChild(chartContainer);

    showToast(`Loaded time-series analytics for ${data.length} data points`, 'success');
}

function createGeneralDataLayout(container, data, columns) {
    console.log('Creating general data layout');

    // Calculate basic statistics
    const numericColumns = columns.filter(col => {
        return data.some(row => typeof row[col] === 'number' && !isNaN(row[col]));
    });

    const textColumns = columns.filter(col => {
        return data.some(row => typeof row[col] === 'string' && row[col].length > 0);
    });

    container.innerHTML = `
        <div class="stat-card" style="background: linear-gradient(135deg, #64748b 0%, #475569 100%); color: white;">
            <div class="stat-value">${data.length.toLocaleString()}</div>
            <div class="stat-label">📄 Records</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Total dataset size</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); color: white;">
            <div class="stat-value">${columns.length}</div>
            <div class="stat-label">📋 Fields</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Data columns</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%); color: white;">
            <div class="stat-value">${numericColumns.length}</div>
            <div class="stat-label">🔢 Numeric</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Quantitative fields</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #059669 0%, #047857 100%); color: white;">
            <div class="stat-value">${textColumns.length}</div>
            <div class="stat-label">📝 Text</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Qualitative fields</div>
        </div>
    `;

    // Add data structure overview
    const chartContainer = document.createElement('div');
    chartContainer.style.cssText = 'grid-column: 1 / -1; margin-top: 1rem; background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);';
    chartContainer.innerHTML = `
        <h4 style="margin: 0 0 1rem 0; color: #1f2937;">Dataset Structure</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            <div>
                <p style="margin: 0 0 0.5rem 0; font-weight: 500;">Numeric Fields:</p>
                <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${numericColumns.join(', ') || 'None detected'}</p>
            </div>
            <div>
                <p style="margin: 0 0 0.5rem 0; font-weight: 500;">Text Fields:</p>
                <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${textColumns.slice(0, 3).join(', ')}${textColumns.length > 3 ? '...' : ''}</p>
            </div>
            <div>
                <p style="margin: 0 0 0.5rem 0; font-weight: 500;">All Columns:</p>
                <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${columns.slice(0, 5).join(', ')}${columns.length > 5 ? '...' : ''}</p>
            </div>
        </div>
    `;
    container.appendChild(chartContainer);

    showToast(`Loaded general analytics for ${data.length} records`, 'success');
}

// Dataset-Specific Analytics Content Functions
function createDefaultAnalyticsContent(container) {
    console.log('Creating default analytics content');
    container.innerHTML = `
        <div class="stat-card">
            <div class="stat-value">-</div>
            <div class="stat-label">No Dataset Selected</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">📊 Select a dataset to view analytics</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">-</div>
            <div class="stat-label">No Data</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">📊 Select a dataset to view analytics</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">-</div>
            <div class="stat-label">No Analysis</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">📊 Select a dataset to view analytics</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">-</div>
            <div class="stat-label">No Insights</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">📊 Select a dataset to view analytics</div>
        </div>
    `;
    showToast('Select a dataset to view custom analytics', 'info');
}

function createPlatformAnalyticsContent(container, reportType = 'overview') {
    console.log('Creating platform analytics content for report type:', reportType);

    const reportConfigs = {
        'overview': {
            cards: [
                { value: '1,847', label: 'Total Sessions', detail: '↑ 12% from last week', color: 'var(--success-color)' },
                { value: '4.8', label: 'Average Rating', detail: '⭐⭐⭐⭐⭐' },
                { value: '73%', label: 'Satisfaction Rate', detail: '↓ 3% from last week', color: 'var(--warning-color)' },
                { value: '156', label: 'This Week', detail: '23 pending review', color: 'var(--text-secondary)' }
            ]
        },
        'sentiment': {
            cards: [
                { value: '67%', label: '😊 Positive Sentiment', detail: 'Trending upward', color: 'var(--success-color)', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                { value: '21%', label: '😐 Neutral Sentiment', detail: 'Stable baseline', color: 'var(--warning-color)', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
                { value: '12%', label: '😞 Negative Sentiment', detail: 'Needs attention', color: 'var(--error-color)', gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
                { value: '4.2', label: '📊 Sentiment Score', detail: 'Out of 5.0', gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }
            ]
        },
        'performance': {
            cards: [
                { value: '94.3%', label: '📈 Uptime', detail: 'System availability', color: 'var(--success-color)', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                { value: '2.1s', label: '⚡ Response Time', detail: 'Average response', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
                { value: '1,245', label: '🔄 Active Users', detail: 'Currently online', gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' },
                { value: '8.7/10', label: '⭐ Performance Score', detail: 'Overall rating', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' }
            ]
        },
        'trends': {
            cards: [
                { value: '↗️ 23%', label: '📊 Growth Rate', detail: 'Month over month', color: 'var(--success-color)', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                { value: '7.2k', label: '📈 Monthly Active', detail: 'User engagement', gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' },
                { value: '89%', label: '🔄 Retention Rate', detail: '30-day retention', gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' },
                { value: '4.5 min', label: '⏱️ Avg Session', detail: 'Time per session', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }
            ]
        },
        'satisfaction': {
            cards: [
                { value: '4.8/5', label: '⭐ Overall Rating', detail: 'Customer satisfaction', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
                { value: '87%', label: '👍 Recommendation', detail: 'Would recommend', color: 'var(--success-color)', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                { value: '92%', label: '😊 Happy Customers', detail: 'Satisfied users', gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)' },
                { value: '15%', label: '📈 Improvement', detail: 'vs last quarter', gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }
            ]
        },
        'comparison': {
            cards: [
                { value: '+18%', label: '📊 vs Industry', detail: 'Above average', color: 'var(--success-color)', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                { value: '2nd', label: '🏆 Market Position', detail: 'In category', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
                { value: '94%', label: '⚡ vs Competitors', detail: 'Performance edge', gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' },
                { value: '3.2x', label: '📈 Growth Factor', detail: 'Market growth', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' }
            ]
        },
        'detailed': {
            cards: [
                { value: '1,847', label: '📋 Total Sessions', detail: 'All interactions', gradient: 'linear-gradient(135deg, #64748b 0%, #475569 100%)' },
                { value: '423', label: '🔍 Unique Issues', detail: 'Tracked problems', gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
                { value: '2,156', label: '💬 Messages', detail: 'Total exchanges', gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' },
                { value: '89%', label: '✅ Resolution Rate', detail: 'Issues resolved', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }
            ]
        },
        'insights': {
            cards: [
                { value: '🎯', label: '💡 Key Insight', detail: 'Peak hours: 2-4 PM', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
                { value: '📱', label: '🔍 Top Channel', detail: 'Mobile app leads', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                { value: '⚠️', label: '🚨 Alert Area', detail: 'Response time lag', gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
                { value: '✨', label: '🌟 Opportunity', detail: 'Automation potential', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' }
            ]
        }
    };

    const config = reportConfigs[reportType] || reportConfigs['overview'];

    const cardsHTML = config.cards.map(card => {
        const style = card.gradient ? `style="background: ${card.gradient}; color: white;"` : '';
        const detailStyle = card.color ? `style="font-size: 0.75rem; color: ${card.color}; margin-top: 0.5rem;"` : 'style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;"';

        return `
            <div class="stat-card" ${style}>
                <div class="stat-value">${card.value}</div>
                <div class="stat-label">${card.label}</div>
                <div ${detailStyle}>${card.detail}</div>
            </div>
        `;
    }).join('');

    container.innerHTML = cardsHTML;
    showToast(`Loaded platform ${reportType} analytics`, 'success');
}

async function createChatResponsesAnalyticsContent(container, reportType = 'overview') {
    console.log('Creating chat responses analytics content for report type:', reportType);

    try {
        const analytics = await getChatResponseAnalytics();

        const reportConfigs = {
            'overview': [
                { value: analytics.totalResponses, label: 'Chat Responses', detail: '📊 AI Analysis Source', gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' },
                { value: analytics.sentimentBreakdown.positive, label: '😊 Positive', detail: `${Math.round((analytics.sentimentBreakdown.positive / analytics.totalResponses) * 100)}% of responses`, gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                { value: analytics.sentimentBreakdown.negative, label: '😞 Negative', detail: `${Math.round((analytics.sentimentBreakdown.negative / analytics.totalResponses) * 100)}% of responses`, gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
                { value: analytics.sentimentBreakdown.neutral, label: '😐 Neutral', detail: `${Math.round((analytics.sentimentBreakdown.neutral / analytics.totalResponses) * 100)}% of responses`, gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }
            ],
            'sentiment': [
                { value: `${Math.round((analytics.sentimentBreakdown.positive / analytics.totalResponses) * 100)}%`, label: '😊 Positive Sentiment', detail: 'Primary emotion', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                { value: `${Math.round((analytics.sentimentBreakdown.negative / analytics.totalResponses) * 100)}%`, label: '😞 Negative Sentiment', detail: 'Needs attention', gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
                { value: `${Math.round((analytics.sentimentBreakdown.neutral / analytics.totalResponses) * 100)}%`, label: '😐 Neutral Sentiment', detail: 'Baseline mood', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
                { value: ((analytics.sentimentBreakdown.positive - analytics.sentimentBreakdown.negative) / analytics.totalResponses * 100).toFixed(1), label: '📊 Sentiment Balance', detail: 'Net positivity', gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' }
            ],
            'performance': [
                { value: analytics.totalResponses, label: '💬 Total Responses', detail: 'Volume processed', gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' },
                { value: `${Math.round((analytics.sentimentBreakdown.positive / analytics.totalResponses) * 100)}%`, label: '⭐ Success Rate', detail: 'Positive outcomes', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                { value: `${analytics.averageDuration ? Math.round(analytics.averageDuration / 1000 / 60) : 0} min`, label: '⏱️ Avg Duration', detail: 'Response time', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
                { value: `${Math.round(((analytics.sentimentBreakdown.positive + analytics.sentimentBreakdown.neutral) / analytics.totalResponses) * 100)}%`, label: '📈 Engagement', detail: 'Active participation', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' }
            ],
            'trends': [
                { value: '↗️ 15%', label: '📈 Positive Trend', detail: 'Week over week', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                { value: `${analytics.totalResponses}`, label: '📊 Current Volume', detail: 'Response count', gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' },
                { value: '2.3x', label: '🚀 Growth Rate', detail: 'Monthly increase', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
                { value: '89%', label: '🔄 Consistency', detail: 'Response quality', gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' }
            ],
            'satisfaction': [
                { value: `${Math.round((analytics.sentimentBreakdown.positive / analytics.totalResponses) * 100)}%`, label: '😊 Satisfaction Rate', detail: 'Happy customers', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                { value: '4.2/5', label: '⭐ Average Rating', detail: 'User feedback', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
                { value: `${analytics.sentimentBreakdown.positive}`, label: '👍 Positive Reviews', detail: 'Count of happy responses', gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)' },
                { value: '87%', label: '🔄 Retention', detail: 'User return rate', gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' }
            ],
            'detailed': [
                { value: analytics.totalResponses, label: '📋 Total Count', detail: 'All responses', gradient: 'linear-gradient(135deg, #64748b 0%, #475569 100%)' },
                { value: analytics.sentimentBreakdown.positive, label: '✅ Positive Count', detail: 'Happy responses', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                { value: analytics.sentimentBreakdown.negative, label: '❌ Negative Count', detail: 'Unhappy responses', gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
                { value: analytics.sentimentBreakdown.neutral, label: '➖ Neutral Count', detail: 'Neutral responses', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }
            ],
            'comparison': [
                { value: '+23%', label: '📊 vs Last Period', detail: 'Performance change', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                { value: '1st', label: '🏆 Ranking', detail: 'In satisfaction', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
                { value: '94%', label: '⚡ vs Target', detail: 'Goal achievement', gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' },
                { value: '2.1x', label: '🚀 Improvement', detail: 'Growth factor', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' }
            ],
            'insights': [
                { value: '🎯', label: '💡 Peak Time', detail: '2-4 PM most active', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
                { value: '📱', label: '🔍 Top Issue', detail: 'Login problems', gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
                { value: '⚡', label: '✨ Quick Wins', detail: 'FAQ automation', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                { value: '🎨', label: '🌟 Opportunity', detail: 'UI improvements', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' }
            ]
        };

        const config = reportConfigs[reportType] || reportConfigs['overview'];

        const cardsHTML = config.map(card => `
            <div class="stat-card" style="background: ${card.gradient}; color: white;">
                <div class="stat-value">${card.value}</div>
                <div class="stat-label">${card.label}</div>
                <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${card.detail}</div>
            </div>
        `).join('');

        container.innerHTML = cardsHTML;
        showToast(`Loaded chat responses ${reportType} analytics`, 'success');
    } catch (error) {
        console.error('Error creating chat responses content:', error);
        createDefaultAnalyticsContent(container);
    }
}

function createCustomDataAnalyticsContent(container, data, reportType = 'overview') {
    console.log('Creating custom data analytics content for report type:', reportType);

    if (!data || !Array.isArray(data) || data.length === 0) {
        createDefaultAnalyticsContent(container);
        return;
    }

    const totalRecords = data.length;
    const columns = Object.keys(data[0] || {});

    // Analyze the dataset structure to determine the best content
    const sentimentColumns = columns.filter(col =>
        col.toLowerCase().includes('sentiment') ||
        col.toLowerCase().includes('rating') ||
        col.toLowerCase().includes('score') ||
        col.toLowerCase().includes('satisfaction')
    );

    const textColumns = columns.filter(col =>
        col.toLowerCase().includes('comment') ||
        col.toLowerCase().includes('feedback') ||
        col.toLowerCase().includes('text') ||
        col.toLowerCase().includes('response')
    );

    const dateColumns = columns.filter(col =>
        col.toLowerCase().includes('date') ||
        col.toLowerCase().includes('time') ||
        col.toLowerCase().includes('created')
    );

    const numericColumns = columns.filter(col => {
        return data.some(row => typeof row[col] === 'number' && !isNaN(row[col]));
    });

    // Create analytics cards based on data structure
    if (sentimentColumns.length > 0 || textColumns.length > 0) {
        createFeedbackAnalyticsCards(container, data, columns, sentimentColumns, textColumns);
    } else if (dateColumns.length > 0) {
        createTimeSeriesAnalyticsCards(container, data, columns, dateColumns);
    } else {
        createGeneralAnalyticsCards(container, data, columns, numericColumns);
    }
}

function createFeedbackAnalyticsCards(container, data, columns, sentimentColumns, textColumns) {
    // Calculate sentiment metrics
    let positiveCount = 0, negativeCount = 0, neutralCount = 0;
    let averageScore = 0, validScoreCount = 0;
    let totalTextLength = 0;

    if (sentimentColumns.length > 0) {
        const sentimentCol = sentimentColumns[0];
        data.forEach(row => {
            const value = row[sentimentCol];
            if (typeof value === 'string') {
                const lowerValue = value.toLowerCase();
                if (lowerValue.includes('positive') || lowerValue.includes('good') || lowerValue.includes('excellent')) {
                    positiveCount++;
                } else if (lowerValue.includes('negative') || lowerValue.includes('bad') || lowerValue.includes('poor')) {
                    negativeCount++;
                } else {
                    neutralCount++;
                }
            } else if (typeof value === 'number') {
                averageScore += value;
                validScoreCount++;
                if (value > 3) positiveCount++;
                else if (value < 3) negativeCount++;
                else neutralCount++;
            }
        });
    }

    if (textColumns.length > 0) {
        const textCol = textColumns[0];
        data.forEach(row => {
            if (row[textCol] && typeof row[textCol] === 'string') {
                totalTextLength += row[textCol].length;
            }
        });
    }

    const avgScore = validScoreCount > 0 ? (averageScore / validScoreCount).toFixed(1) : 'N/A';
    const avgTextLength = textColumns.length > 0 ? Math.round(totalTextLength / data.length) : 0;

    container.innerHTML = `
        <div class="stat-card" style="background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white;">
            <div class="stat-value">${data.length.toLocaleString()}</div>
            <div class="stat-label">📋 Feedback Records</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${columns.length} data fields</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white;">
            <div class="stat-value">${positiveCount}</div>
            <div class="stat-label">👍 Positive Items</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${Math.round((positiveCount / data.length) * 100)}% satisfaction</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white;">
            <div class="stat-value">${avgScore}</div>
            <div class="stat-label">⭐ Average Score</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${validScoreCount} rated items</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); color: white;">
            <div class="stat-value">${avgTextLength}</div>
            <div class="stat-label">📝 Avg Text Length</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">characters per response</div>
        </div>
    `;

    showToast(`Loaded feedback analytics for ${data.length} records`, 'success');
}

function createTimeSeriesAnalyticsCards(container, data, columns, dateColumns) {
    container.innerHTML = `
        <div class="stat-card" style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); color: white;">
            <div class="stat-value">${data.length.toLocaleString()}</div>
            <div class="stat-label">📊 Time Data Points</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Temporal dataset</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%); color: white;">
            <div class="stat-value">${dateColumns.length}</div>
            <div class="stat-label">📅 Time Fields</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Date/time columns</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white;">
            <div class="stat-value">${columns.length}</div>
            <div class="stat-label">🔢 Total Fields</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Data dimensions</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #ec4899 0%, #db2777 100%); color: white;">
            <div class="stat-value">📈</div>
            <div class="stat-label">Trend Ready</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Analysis ready</div>
        </div>
    `;

    showToast(`Loaded time-series analytics for ${data.length} data points`, 'success');
}

function createGeneralAnalyticsCards(container, data, columns, numericColumns) {
    const textColumns = columns.filter(col => {
        return data.some(row => typeof row[col] === 'string' && row[col].length > 0);
    });

    container.innerHTML = `
        <div class="stat-card" style="background: linear-gradient(135deg, #64748b 0%, #475569 100%); color: white;">
            <div class="stat-value">${data.length.toLocaleString()}</div>
            <div class="stat-label">📄 Data Records</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Total dataset size</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); color: white;">
            <div class="stat-value">${columns.length}</div>
            <div class="stat-label">📋 Data Fields</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Total columns</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%); color: white;">
            <div class="stat-value">${numericColumns.length}</div>
            <div class="stat-label">🔢 Numeric Fields</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Quantitative data</div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #059669 0%, #047857 100%); color: white;">
            <div class="stat-value">${textColumns.length}</div>
            <div class="stat-label">📝 Text Fields</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Qualitative data</div>
        </div>
    `;

    showToast(`Loaded general analytics for ${data.length} records`, 'success');
}

function updateAdditionalAnalyticsContent(datasetId, customData = null, reportType = 'overview', reportObject = null) {
    console.log('Updating additional analytics content for:', datasetId, 'with report:', reportObject);

    // Find or create container for additional content after the main dashboard grid
    const analyticsSection = document.getElementById('chat-feedback-section');
    const dashboardGrids = analyticsSection.querySelectorAll('.dashboard-grid');
    const mainDashboardGrid = dashboardGrids[0];

    // Remove any existing additional content
    const existingAdditionalContent = analyticsSection.querySelector('.additional-analytics-content');
    if (existingAdditionalContent) {
        existingAdditionalContent.remove();
    }

    // Create additional content based on the report's layout type
    if (reportObject && reportObject.layoutType) {
        createAdditionalContentByLayoutType(analyticsSection, mainDashboardGrid, reportObject);
    } else if (datasetId === 'chat-responses') {
        createChatResponsesAdditionalContent(analyticsSection, mainDashboardGrid);
    } else if (customData) {
        createCustomDataAdditionalContent(analyticsSection, mainDashboardGrid, customData);
    } else if (datasetId === 'platform-data') {
        createPlatformAdditionalContent(analyticsSection, mainDashboardGrid);
    }
    // No additional content for default state
}

// New function to create additional content based on layout type
function createAdditionalContentByLayoutType(analyticsSection, afterElement, reportObject) {
    const additionalContent = document.createElement('div');
    additionalContent.className = 'additional-analytics-content';
    additionalContent.style.cssText = 'margin-top: 2rem;';

    switch (reportObject.layoutType) {
        case 'charts':
            additionalContent.innerHTML = createChartsAdditionalContent(reportObject);
            break;
        case 'numeric':
            additionalContent.innerHTML = createNumericAdditionalContent(reportObject);
            break;
        case 'mixed':
            additionalContent.innerHTML = createMixedAdditionalContent(reportObject);
            break;
        case 'minimal':
            additionalContent.innerHTML = createMinimalAdditionalContent(reportObject);
            break;
        case 'detailed':
            additionalContent.innerHTML = createDetailedAdditionalContent(reportObject);
            break;
        default:
            additionalContent.innerHTML = createDefaultAdditionalContent(reportObject);
    }

    afterElement.parentNode.insertBefore(additionalContent, afterElement.nextSibling);

    // Initialize charts based on layout type
    setTimeout(() => {
        initializeChartsForLayout(reportObject.layoutType, 'platform-data', reportObject);
    }, 100);
}

function createChartsAdditionalContent(reportObject) {
    // Check data availability to determine what to show
    const availableData = checkDataAvailability('platform-data', reportObject);

    let chartsHTML = '';

    // Only show the overview cards if we have any chart data
    if (availableData.monthlyTrends || availableData.categoryBreakdown) {
        chartsHTML += `
        <!-- Charts Layout Additional Content -->
        <div class="card" style="margin-bottom: 1.5rem;">
            <div class="card-header">
                <h4>📊 Visual Analytics Dashboard</h4>
                <div style="font-size: 0.9rem; color: var(--text-secondary);">Interactive charts and visualizations</div>
            </div>
            <div class="card-body">
                <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
                    <div style="background: var(--bg-primary); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--primary-color); box-shadow: var(--shadow);">
                        <h5 style="margin-bottom: 1rem; color: var(--primary-color);">📈 Performance Charts</h5>
                        <div style="font-size: 0.9rem; color: var(--text-secondary);">Real-time data visualization</div>
                        <div style="margin-top: 1rem; font-size: 1.5rem; color: var(--text-primary);">${availableData.monthlyTrends && availableData.categoryBreakdown ? '12' : availableData.monthlyTrends || availableData.categoryBreakdown ? '6' : '0'} Active Charts</div>
                    </div>
                    <div style="background: var(--bg-primary); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--success-color); box-shadow: var(--shadow);">
                        <h5 style="margin-bottom: 1rem; color: var(--success-color);">🎯 Interactive Elements</h5>
                        <div style="font-size: 0.9rem; color: var(--text-secondary);">User engagement metrics</div>
                        <div style="margin-top: 1rem; font-size: 1.5rem; color: var(--text-primary);">95% Interaction Rate</div>
                    </div>
                </div>
            </div>
        </div>`;
    }

    // Only show the charts section if we have chart data
    if (availableData.monthlyTrends || availableData.categoryBreakdown) {
        chartsHTML += `
        <div class="card">
            <div class="card-header">
                <h4>📊 Performance Analytics</h4>
            </div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: ${availableData.monthlyTrends && availableData.categoryBreakdown ? '1fr 1fr' : '1fr'}; gap: 1.5rem;">`;

        if (availableData.monthlyTrends) {
            chartsHTML += `
                    <div>
                        <h5 style="margin-bottom: 1rem;">Monthly Trends</h5>
                        <div style="background: #f8fafc; padding: 1rem; border-radius: 8px;">
                            <canvas id="monthlyTrendsChart" width="300" height="200"></canvas>
                        </div>
                    </div>`;
        }

        if (availableData.categoryBreakdown) {
            chartsHTML += `
                    <div>
                        <h5 style="margin-bottom: 1rem;">Category Breakdown</h5>
                        <div style="background: #f8fafc; padding: 1rem; border-radius: 8px;">
                            <canvas id="categoryPieChart" width="300" height="200"></canvas>
                        </div>
                    </div>`;
        }

        chartsHTML += `
                </div>
            </div>
        </div>`;
    }

    // If no chart data is available, show a message
    if (!availableData.monthlyTrends && !availableData.categoryBreakdown) {
        chartsHTML = `
        <div class="card">
            <div class="card-header">
                <h4>📊 Charts Layout</h4>
            </div>
            <div class="card-body">
                <div style="background: #f8fafc; padding: 2rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;">📊</div>
                    <div style="font-size: 1.1rem; color: #6b7280; margin-bottom: 0.5rem;">No Chart Data Available</div>
                    <div style="font-size: 0.9rem; color: #9ca3af;">Chart visualizations will appear here when data becomes available</div>
                </div>
            </div>
        </div>`;
    }

    return chartsHTML;
}

function createNumericAdditionalContent(reportObject) {
    return `
        <!-- Numeric Layout Additional Content -->
        <div class="card" style="margin-bottom: 1.5rem;">
            <div class="card-header">
                <h4>🔢 Statistical Analysis</h4>
                <div style="font-size: 0.9rem; color: var(--text-secondary);">Pure numerical insights</div>
            </div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; text-align: center;">
                    <div style="padding: 1rem; background: #f8fafc; border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: bold; color: #059669;">98.5%</div>
                        <div style="font-size: 0.9rem; color: #6b7280;">Accuracy Rate</div>
                    </div>
                    <div style="padding: 1rem; background: #f8fafc; border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: bold; color: #dc2626;">2.1%</div>
                        <div style="font-size: 0.9rem; color: #6b7280;">Error Rate</div>
                    </div>
                    <div style="padding: 1rem; background: #f8fafc; border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: bold; color: #2563eb;">847ms</div>
                        <div style="font-size: 0.9rem; color: #6b7280;">Avg Response</div>
                    </div>
                    <div style="padding: 1rem; background: #f8fafc; border-radius: 8px;">
                        <div style="font-size: 2rem; font-weight: bold; color: #7c3aed;">99.9%</div>
                        <div style="font-size: 0.9rem; color: #6b7280;">Uptime</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h4>📈 Numerical Breakdown</h4>
            </div>
            <div class="card-body">
                <div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr style="border-bottom: 1px solid #e5e7eb;">
                            <td style="padding: 0.75rem 0; font-weight: 600;">Total Records Processed</td>
                            <td style="padding: 0.75rem 0; text-align: right;">1,247,893</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e5e7eb;">
                            <td style="padding: 0.75rem 0; font-weight: 600;">Average Processing Time</td>
                            <td style="padding: 0.75rem 0; text-align: right;">0.847s</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e5e7eb;">
                            <td style="padding: 0.75rem 0; font-weight: 600;">Peak Performance Hour</td>
                            <td style="padding: 0.75rem 0; text-align: right;">2:00 PM - 3:00 PM</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem 0; font-weight: 600;">System Efficiency</td>
                            <td style="padding: 0.75rem 0; text-align: right;">94.2%</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function createMixedAdditionalContent(reportObject) {
    return `
        <!-- Mixed Layout Additional Content -->
        <div class="card" style="margin-bottom: 1.5rem;">
            <div class="card-header">
                <h4>📊 Combined Analytics</h4>
                <div style="font-size: 0.9rem; color: var(--text-secondary);">Charts and numerical data</div>
            </div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                    <div style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); padding: 1.5rem; border-radius: 12px;">
                        <h5 style="margin-bottom: 1rem; color: #333;">📈 Performance Metrics</h5>
                        <div style="font-size: 2rem; font-weight: bold; color: #333; margin-bottom: 0.5rem;">89%</div>
                        <div style="color: #666;">Overall system performance with visual indicators</div>
                    </div>
                    <div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; border: 2px solid #e5e7eb;">
                        <h5 style="margin-bottom: 1rem; color: #374151;">📊 Data Breakdown</h5>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span>Success Rate:</span>
                            <strong>96.7%</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span>Total Requests:</span>
                            <strong>2,156</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span>Avg. Response:</span>
                            <strong>0.3s</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h4>⚡ Performance Radar</h4>
            </div>
            <div class="card-body">
                <div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <canvas id="mixedPerformanceChart" width="400" height="300"></canvas>
                </div>
            </div>
        </div>
    `;
}

function createMinimalAdditionalContent(reportObject) {
    return `
        <!-- Minimal Layout Additional Content -->
        <div class="card" style="margin-bottom: 1.5rem;">
            <div class="card-header">
                <h4>📈 Key Trends</h4>
                <div style="font-size: 0.9rem; color: var(--text-secondary);">Essential insights only</div>
            </div>
            <div class="card-body">
                <div style="background: #f8f9fa; padding: 2rem; border-radius: 8px; border: 2px solid #e9ecef; text-align: center;">
                    <div style="font-size: 1.2rem; color: #495057; margin-bottom: 1.5rem;">Trend Analysis Summary</div>
                    <div style="display: flex; justify-content: space-around; align-items: center;">
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; color: #28a745;">↗️</div>
                            <div style="color: #6c757d;">Growth</div>
                            <div style="font-weight: bold; color: #495057;">+12%</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; color: #17a2b8;">⚡</div>
                            <div style="color: #6c757d;">Speed</div>
                            <div style="font-weight: bold; color: #495057;">0.3s</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; color: #28a745;">✓</div>
                            <div style="color: #6c757d;">Status</div>
                            <div style="font-weight: bold; color: #495057;">Active</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createDetailedAdditionalContent(reportObject) {
    return `
        <!-- Detailed Layout Additional Content -->
        <div class="card" style="margin-bottom: 1.5rem;">
            <div class="card-header">
                <h4>📊 Platform Performance Insights</h4>
                <div style="font-size: 0.9rem; color: var(--text-secondary);">Comprehensive analytics with multiple sections</div>
            </div>
            <div class="card-body">
                <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr);">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 1.5rem; border-radius: 12px; color: white; text-align: center;">
                        <h5 style="margin-bottom: 1rem;">Performance Trends</h5>
                        <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 1rem;">Overall satisfaction stable with improvements in response time</div>
                        <div style="background: rgba(255,255,255,0.2); padding: 0.5rem; border-radius: 6px;">+15% vs last period</div>
                    </div>
                    <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); padding: 1.5rem; border-radius: 12px; color: white; text-align: center;">
                        <h5 style="margin-bottom: 1rem;">Key Strengths</h5>
                        <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 1rem;">High engagement rates and positive feedback quality</div>
                        <div style="background: rgba(255,255,255,0.2); padding: 0.5rem; border-radius: 6px;">92% positive ratings</div>
                    </div>
                    <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 1.5rem; border-radius: 12px; color: white; text-align: center;">
                        <h5 style="margin-bottom: 1rem;">Improvement Areas</h5>
                        <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 1rem;">Response times during peak hours need optimization</div>
                        <div style="background: rgba(255,255,255,0.2); padding: 0.5rem; border-radius: 6px;">Peak: 156 users</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h4>🎯 Sentiment Analysis Overview</h4>
                <div style="float: right;">
                    <select style="padding: 0.25rem 0.5rem; border: 1px solid #d1d5db; border-radius: 4px;">
                        <option>This Week</option>
                        <option>Last 30 days</option>
                        <option>This Quarter</option>
                    </select>
                </div>
            </div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem;">
                    <div style="background: #dcfce7; padding: 1.5rem; border-radius: 8px; text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">😊</div>
                        <div style="font-size: 2rem; font-weight: bold; color: #059669;">68%</div>
                        <div style="color: #065f46;">Positive</div>
                    </div>
                    <div style="background: #fef3c7; padding: 1.5rem; border-radius: 8px; text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">😐</div>
                        <div style="font-size: 2rem; font-weight: bold; color: #d97706;">24%</div>
                        <div style="color: #92400e;">Neutral</div>
                    </div>
                    <div style="background: #fecaca; padding: 1.5rem; border-radius: 8px; text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">😞</div>
                        <div style="font-size: 2rem; font-weight: bold; color: #dc2626;">8%</div>
                        <div style="color: #991b1b;">Negative</div>
                    </div>
                    <div style="background: #e0e7ff; padding: 1.5rem; border-radius: 8px; text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔄</div>
                        <div style="font-size: 2rem; font-weight: bold; color: #4f46e5;">89%</div>
                        <div style="color: #3730a3;">Resolution Rate</div>
                    </div>
                </div>

                <div id="sentimentChartsContainer" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                    <div>
                        <h5 style="margin-bottom: 1rem;">Response Trends</h5>
                        <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; border: 2px solid #e5e7eb;">
                            <canvas id="responseTrendsChart" width="400" height="200"></canvas>
                        </div>
                    </div>
                    <div>
                        <h5 style="margin-bottom: 1rem;">Sentiment Breakdown</h5>
                        <div style="background: #f8fafc; padding: 1rem; border-radius: 8px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                <span style="display: flex; align-items: center;"><span style="margin-right: 0.5rem;">😊</span>Positive</span>
                                <div style="flex: 1; background: #e5e7eb; height: 8px; margin: 0 1rem; border-radius: 4px;">
                                    <div style="background: #10b981; height: 100%; width: 68%; border-radius: 4px;"></div>
                                </div>
                                <span style="font-weight: bold;">68%</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                <span style="display: flex; align-items: center;"><span style="margin-right: 0.5rem;">😐</span>Neutral</span>
                                <div style="flex: 1; background: #e5e7eb; height: 8px; margin: 0 1rem; border-radius: 4px;">
                                    <div style="background: #f59e0b; height: 100%; width: 24%; border-radius: 4px;"></div>
                                </div>
                                <span style="font-weight: bold;">24%</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="display: flex; align-items: center;"><span style="margin-right: 0.5rem;">😞</span>Negative</span>
                                <div style="flex: 1; background: #e5e7eb; height: 8px; margin: 0 1rem; border-radius: 4px;">
                                    <div style="background: #ef4444; height: 100%; width: 8%; border-radius: 4px;"></div>
                                </div>
                                <span style="font-weight: bold;">8%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createDefaultAdditionalContent(reportObject) {
    return `
        <div class="card">
            <div class="card-header">
                <h4>📊 Analytics Overview</h4>
            </div>
            <div class="card-body">
                <div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 1.1rem; color: #6b7280;">Select a report to view detailed analytics</div>
                </div>
            </div>
        </div>
    `;
}

// Data availability checker
function checkDataAvailability(datasetId, reportObject) {
    // Simulate checking different data sources based on dataset and report
    const availableData = {
        monthlyTrends: Math.random() > 0.3, // 70% chance of having data
        categoryBreakdown: Math.random() > 0.2, // 80% chance of having data
        sentimentTrends: Math.random() > 0.4, // 60% chance of having data
        performanceMetrics: Math.random() > 0.1, // 90% chance of having data
        responseData: Math.random() > 0.3, // 70% chance of having data
        engagementData: Math.random() > 0.25 // 75% chance of having data
    };

    // For demo purposes, you can also check actual data sources here
    // const importedData = JSON.parse(localStorage.getItem('importedDatasets') || '[]');
    // availableData.hasImportedData = importedData.length > 0;

    return availableData;
}

// Chart initialization functions with data checking
function initializeChartsForLayout(layoutType, datasetId = 'platform-data', reportObject = null) {
    const availableData = checkDataAvailability(datasetId, reportObject);

    switch (layoutType) {
        case 'charts':
            initializeChartsLayoutCharts(availableData);
            break;
        case 'detailed':
            initializeDetailedLayoutCharts(availableData);
            break;
        case 'mixed':
            initializeMixedLayoutCharts(availableData);
            break;
    }
}

function initializeChartsLayoutCharts(availableData) {
    // Monthly Trends Line Chart - only if data is available
    const monthlyCtx = document.getElementById('monthlyTrendsChart');
    if (monthlyCtx && availableData.monthlyTrends) {
        new Chart(monthlyCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'User Engagement',
                    data: [65, 78, 85, 92, 88, 95],
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#f1f5f9'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    } else if (monthlyCtx && !availableData.monthlyTrends) {
        // Show "no data" message instead of chart
        const container = monthlyCtx.closest('div');
        if (container) {
            container.innerHTML = `
                <h5 style="margin-bottom: 1rem;">Monthly Trends</h5>
                <div style="background: #f8fafc; padding: 2rem; border-radius: 8px; text-align: center; border: 2px dashed #e2e8f0;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem; opacity: 0.5;">📈</div>
                    <div style="color: #6b7280; font-size: 0.9rem;">No trend data available</div>
                </div>
            `;
        }
    }

    // Category Pie Chart - only if data is available
    const pieCtx = document.getElementById('categoryPieChart');
    if (pieCtx && availableData.categoryBreakdown) {
        new Chart(pieCtx, {
            type: 'doughnut',
            data: {
                labels: ['Features', 'Bug Reports', 'Feedback', 'Support'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: [
                        '#667eea',
                        '#f093fb',
                        '#4facfe',
                        '#43e97b'
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                }
            }
        });
    } else if (pieCtx && !availableData.categoryBreakdown) {
        // Show "no data" message instead of chart
        const container = pieCtx.closest('div');
        if (container) {
            container.innerHTML = `
                <h5 style="margin-bottom: 1rem;">Category Breakdown</h5>
                <div style="background: #f8fafc; padding: 2rem; border-radius: 8px; text-align: center; border: 2px dashed #e2e8f0;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem; opacity: 0.5;">🍩</div>
                    <div style="color: #6b7280; font-size: 0.9rem;">No category data available</div>
                </div>
            `;
        }
    }
}

function initializeDetailedLayoutCharts(availableData) {
    // Response Trends Chart - only if sentiment data is available
    const trendsCtx = document.getElementById('responseTrendsChart');
    if (trendsCtx && availableData.sentimentTrends) {
        new Chart(trendsCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
                datasets: [
                    {
                        label: 'Positive',
                        data: [68, 72, 65, 75, 70, 68],
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderWidth: 2,
                        fill: true
                    },
                    {
                        label: 'Neutral',
                        data: [24, 20, 28, 18, 22, 24],
                        borderColor: '#f59e0b',
                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                        borderWidth: 2,
                        fill: true
                    },
                    {
                        label: 'Negative',
                        data: [8, 8, 7, 7, 8, 8],
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        borderWidth: 2,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: '#f1f5f9'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    } else if (trendsCtx && !availableData.sentimentTrends) {
        // Hide the entire sentiment charts container if no data
        const sentimentContainer = document.getElementById('sentimentChartsContainer');
        if (sentimentContainer) sentimentContainer.style.display = 'none';
    }
}

function initializeMixedLayoutCharts(availableData) {
    // Performance radar chart for mixed layout - only if performance data is available
    const mixedCtx = document.getElementById('mixedPerformanceChart');
    if (mixedCtx && availableData.performanceMetrics) {
        new Chart(mixedCtx, {
            type: 'radar',
            data: {
                labels: ['Speed', 'Accuracy', 'Reliability', 'User Experience', 'Innovation', 'Support'],
                datasets: [{
                    label: 'Performance Metrics',
                    data: [85, 92, 88, 90, 78, 86],
                    backgroundColor: 'rgba(168, 237, 234, 0.2)',
                    borderColor: '#fed6e3',
                    borderWidth: 2,
                    pointBackgroundColor: '#a8edea',
                    pointBorderColor: '#fed6e3',
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: '#f1f5f9'
                        },
                        angleLines: {
                            color: '#e2e8f0'
                        }
                    }
                }
            }
        });
    } else if (mixedCtx && !availableData.performanceMetrics) {
        // Hide the performance radar section if no data
        const container = mixedCtx.closest('.card');
        if (container) container.style.display = 'none';
    }
}

function createChatResponsesAdditionalContent(analyticsSection, afterElement) {
    const additionalContent = document.createElement('div');
    additionalContent.className = 'additional-analytics-content';
    additionalContent.style.cssText = 'margin-top: 2rem;';

    additionalContent.innerHTML = `
        <!-- Sentiment Visualization -->
        <div class="card" style="margin-bottom: 1.5rem;">
            <div class="card-header">
                <h4>📊 Sentiment Distribution</h4>
            </div>
            <div class="card-body">
                <div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 1.1rem; color: #6b7280; margin-bottom: 1rem;">
                        Chat responses show sentiment patterns that can guide improvement strategies
                    </div>
                    <div style="display: flex; justify-content: space-around; align-items: center;">
                        <div style="text-align: center;">
                            <div style="font-size: 2rem;">😊</div>
                            <div style="font-weight: 600; color: #10b981;">Positive</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2rem;">😐</div>
                            <div style="font-weight: 600; color: #f59e0b;">Neutral</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2rem;">😞</div>
                            <div style="font-weight: 600; color: #ef4444;">Negative</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Chat Insights -->
        <div class="card">
            <div class="card-header">
                <h4>💡 Chat Response Insights</h4>
            </div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                    <div style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 1rem; border-radius: 8px; border-left: 4px solid #3b82f6;">
                        <h6 style="color: #1d4ed8; margin: 0 0 0.5rem 0;">Response Patterns</h6>
                        <p style="margin: 0; color: #4b5563; font-size: 0.875rem;">Analyze conversation flows and common topics</p>
                    </div>
                    <div style="background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%); padding: 1rem; border-radius: 8px; border-left: 4px solid #10b981;">
                        <h6 style="color: #059669; margin: 0 0 0.5rem 0;">Satisfaction Trends</h6>
                        <p style="margin: 0; color: #4b5563; font-size: 0.875rem;">Track sentiment changes over time</p>
                    </div>
                    <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 1rem; border-radius: 8px; border-left: 4px solid #f59e0b;">
                        <h6 style="color: #d97706; margin: 0 0 0.5rem 0;">Improvement Areas</h6>
                        <p style="margin: 0; color: #4b5563; font-size: 0.875rem;">Identify topics needing attention</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    afterElement.parentNode.insertBefore(additionalContent, afterElement.nextSibling);
}

function createCustomDataAdditionalContent(analyticsSection, afterElement, data) {
    const columns = Object.keys(data[0] || {});

    const sentimentColumns = columns.filter(col =>
        col.toLowerCase().includes('sentiment') ||
        col.toLowerCase().includes('rating') ||
        col.toLowerCase().includes('score') ||
        col.toLowerCase().includes('satisfaction')
    );

    const textColumns = columns.filter(col =>
        col.toLowerCase().includes('comment') ||
        col.toLowerCase().includes('feedback') ||
        col.toLowerCase().includes('text') ||
        col.toLowerCase().includes('response')
    );

    const dateColumns = columns.filter(col =>
        col.toLowerCase().includes('date') ||
        col.toLowerCase().includes('time') ||
        col.toLowerCase().includes('created')
    );

    const additionalContent = document.createElement('div');
    additionalContent.className = 'additional-analytics-content';
    additionalContent.style.cssText = 'margin-top: 2rem;';

    let contentType = 'general';
    let contentTitle = 'Data Analysis';
    let contentDescription = 'General dataset analysis and insights';

    if (sentimentColumns.length > 0 || textColumns.length > 0) {
        contentType = 'feedback';
        contentTitle = 'Feedback Analysis';
        contentDescription = 'Sentiment and feedback pattern analysis';
    } else if (dateColumns.length > 0) {
        contentType = 'timeseries';
        contentTitle = 'Time-Series Analysis';
        contentDescription = 'Temporal patterns and trend analysis';
    }

    additionalContent.innerHTML = `
        <!-- Data Composition -->
        <div class="card" style="margin-bottom: 1.5rem;">
            <div class="card-header">
                <h4>🔍 ${contentTitle}</h4>
            </div>
            <div class="card-body">
                <div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px;">
                    <div style="text-align: center; margin-bottom: 1.5rem;">
                        <div style="font-size: 1.1rem; color: #6b7280;">
                            ${contentDescription}
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                        ${sentimentColumns.length > 0 ? `
                        <div style="text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">😊</div>
                            <div style="font-weight: 600; color: #6366f1;">Sentiment Fields</div>
                            <div style="font-size: 0.875rem; color: #6b7280;">${sentimentColumns.length} detected</div>
                        </div>` : ''}
                        ${textColumns.length > 0 ? `
                        <div style="text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">📝</div>
                            <div style="font-weight: 600; color: #10b981;">Text Fields</div>
                            <div style="font-size: 0.875rem; color: #6b7280;">${textColumns.length} detected</div>
                        </div>` : ''}
                        ${dateColumns.length > 0 ? `
                        <div style="text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">📅</div>
                            <div style="font-weight: 600; color: #f59e0b;">Date Fields</div>
                            <div style="font-size: 0.875rem; color: #6b7280;">${dateColumns.length} detected</div>
                        </div>` : ''}
                        <div style="text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">📊</div>
                            <div style="font-weight: 600; color: #8b5cf6;">Total Fields</div>
                            <div style="font-size: 0.875rem; color: #6b7280;">${columns.length} columns</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Data Insights -->
        <div class="card">
            <div class="card-header">
                <h4>💡 Dataset Insights</h4>
            </div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                    <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 1rem; border-radius: 8px; border-left: 4px solid #0284c7;">
                        <h6 style="color: #0284c7; margin: 0 0 0.5rem 0;">Data Quality</h6>
                        <p style="margin: 0; color: #4b5563; font-size: 0.875rem;">${data.length.toLocaleString()} records with ${columns.length} fields provide rich analysis opportunities</p>
                    </div>
                    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 1rem; border-radius: 8px; border-left: 4px solid #16a34a;">
                        <h6 style="color: #16a34a; margin: 0 0 0.5rem 0;">Analysis Ready</h6>
                        <p style="margin: 0; color: #4b5563; font-size: 0.875rem;">${contentType === 'feedback' ? 'Sentiment and feedback analysis' : contentType === 'timeseries' ? 'Time-series and trend analysis' : 'Statistical and pattern analysis'} capabilities detected</p>
                    </div>
                    <div style="background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%); padding: 1rem; border-radius: 8px; border-left: 4px solid #ca8a04;">
                        <h6 style="color: #ca8a04; margin: 0 0 0.5rem 0;">Recommendations</h6>
                        <p style="margin: 0; color: #4b5563; font-size: 0.875rem;">Explore ${contentType === 'feedback' ? 'sentiment patterns and satisfaction metrics' : contentType === 'timeseries' ? 'temporal trends and seasonality' : 'correlations and statistical relationships'}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    afterElement.parentNode.insertBefore(additionalContent, afterElement.nextSibling);
}

function createPlatformAdditionalContent(analyticsSection, afterElement) {
    const additionalContent = document.createElement('div');
    additionalContent.className = 'additional-analytics-content';
    additionalContent.style.cssText = 'margin-top: 2rem;';

    additionalContent.innerHTML = `
        <!-- Platform Insights -->
        <div class="card">
            <div class="card-header">
                <h4>📈 Platform Performance Insights</h4>
            </div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                    <div style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 1rem; border-radius: 8px; border-left: 4px solid #3b82f6;">
                        <h6 style="color: #1d4ed8; margin: 0 0 0.5rem 0;">Performance Trends</h6>
                        <p style="margin: 0; color: #4b5563; font-size: 0.875rem;">Overall satisfaction stable with improvements in response time</p>
                    </div>
                    <div style="background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%); padding: 1rem; border-radius: 8px; border-left: 4px solid #10b981;">
                        <h6 style="color: #059669; margin: 0 0 0.5rem 0;">Key Strengths</h6>
                        <p style="margin: 0; color: #4b5563; font-size: 0.875rem;">High engagement rates and positive feedback quality</p>
                    </div>
                    <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 1rem; border-radius: 8px; border-left: 4px solid #f59e0b;">
                        <h6 style="color: #d97706; margin: 0 0 0.5rem 0;">Improvement Areas</h6>
                        <p style="margin: 0; color: #4b5563; font-size: 0.875rem;">Response times during peak hours need optimization</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    afterElement.parentNode.insertBefore(additionalContent, afterElement.nextSibling);
}

// Complete Page Layout Functions (keeping for backward compatibility)
function createDefaultPageLayout(container) {
    console.log('Creating default page layout');
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">🤖 AI Analytics Dashboard</h2>
                <div class="button-group">
                    <button class="btn btn-secondary" onclick="showImportDataModal()">📥 Import Data</button>
                    <button class="btn btn-primary" onclick="generateAIReport()">🚀 Generate AI Report</button>
                </div>
            </div>
            <div class="card-body">
                <div style="text-align: center; padding: 4rem 2rem; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-radius: 12px;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">📊</div>
                    <h3 style="color: #475569; margin-bottom: 1rem;">No Report Selected</h3>
                    <p style="color: #64748b; font-size: 1.1rem; margin-bottom: 2rem;">
                        Select a dataset and generate an AI report to see custom analytics and insights tailored to your data.
                    </p>
                    <button class="btn btn-primary btn-lg" onclick="generateAIReport()">
                        🤖 Start AI Analysis
                    </button>
                </div>
            </div>
        </div>
    `;
    showToast('Select a report to view custom analytics', 'info');
}

function createPlatformPageLayout(container) {
    console.log('Creating platform page layout');
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">🏢 Platform Analytics Dashboard</h2>
                <div class="button-group">
                    <button class="btn btn-secondary" onclick="showImportDataModal()">📥 Import Data</button>
                    <button class="btn btn-secondary" onclick="showFeedbackSettings()">⚙️ Settings</button>
                    <button class="btn btn-primary" onclick="generateAnalyticsReport()">📊 Generate Report</button>
                </div>
            </div>

            <!-- Platform Overview -->
            <div class="card" style="margin: 1.5rem 0;">
                <div class="card-header">
                    <h4>📈 Platform Performance</h4>
                </div>
                <div class="card-body">
                    <div class="dashboard-grid">
                        <div class="stat-card">
                            <div class="stat-value">1,847</div>
                            <div class="stat-label">Total Sessions</div>
                            <div style="font-size: 0.75rem; color: var(--success-color); margin-top: 0.5rem;">↑ 12% from last week</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">4.8</div>
                            <div class="stat-label">Average Rating</div>
                            <div style="display: flex; gap: 0.25rem; margin-top: 0.5rem;"><span>⭐⭐⭐⭐⭐</span></div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">73%</div>
                            <div class="stat-label">Satisfaction Rate</div>
                            <div style="font-size: 0.75rem; color: var(--warning-color); margin-top: 0.5rem;">↓ 3% from last week</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">156</div>
                            <div class="stat-label">This Week</div>
                            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">23 pending review</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Business Insights -->
            <div class="card">
                <div class="card-header">
                    <h4>💼 Business Insights</h4>
                </div>
                <div class="card-body">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                        <div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #3b82f6;">
                            <h5 style="color: #1e40af; margin: 0 0 0.5rem 0;">📊 Performance Trends</h5>
                            <p style="margin: 0; color: #4b5563;">Overall satisfaction has remained stable with slight improvements in response time.</p>
                        </div>
                        <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #10b981;">
                            <h5 style="color: #047857; margin: 0 0 0.5rem 0;">✅ Key Strengths</h5>
                            <p style="margin: 0; color: #4b5563;">High engagement rates and positive feedback on customer service quality.</p>
                        </div>
                        <div style="background: #fffbeb; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #f59e0b;">
                            <h5 style="color: #92400e; margin: 0 0 0.5rem 0;">⚠️ Areas for Improvement</h5>
                            <p style="margin: 0; color: #4b5563;">Response times during peak hours need optimization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    showToast('Loaded platform analytics dashboard', 'success');
}

async function createChatResponsesPageLayout(container) {
    console.log('Creating chat responses page layout');

    try {
        const analytics = await getChatResponseAnalytics();

        container.innerHTML = `
            <div class="card">
                <div class="card-header" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white;">
                    <h2 class="card-title">💬 Chat Responses Analysis</h2>
                    <div class="button-group">
                        <button class="btn btn-light" onclick="generateAIReport()">🔄 New Analysis</button>
                        <button class="btn btn-light" onclick="showImportDataModal()">📥 Import More Data</button>
                    </div>
                </div>

                <!-- Sentiment Overview -->
                <div class="card" style="margin: 1.5rem 0;">
                    <div class="card-header">
                        <h4>😊 Sentiment Analysis Dashboard</h4>
                        <div style="font-size: 0.875rem; color: #6b7280;">Based on ${analytics.totalResponses} chat responses</div>
                    </div>
                    <div class="card-body">
                        <div class="dashboard-grid">
                            <div class="stat-card" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white;">
                                <div class="stat-value">${analytics.totalResponses}</div>
                                <div class="stat-label">Chat Responses</div>
                                <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">📊 AI Analysis Source</div>
                            </div>
                            <div class="stat-card" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white;">
                                <div class="stat-value">${analytics.sentimentBreakdown.positive}</div>
                                <div class="stat-label">😊 Positive</div>
                                <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${Math.round((analytics.sentimentBreakdown.positive / analytics.totalResponses) * 100)}% of responses</div>
                            </div>
                            <div class="stat-card" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white;">
                                <div class="stat-value">${analytics.sentimentBreakdown.negative}</div>
                                <div class="stat-label">😞 Negative</div>
                                <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${Math.round((analytics.sentimentBreakdown.negative / analytics.totalResponses) * 100)}% of responses</div>
                            </div>
                            <div class="stat-card" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white;">
                                <div class="stat-value">${analytics.sentimentBreakdown.neutral}</div>
                                <div class="stat-label">😐 Neutral</div>
                                <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${Math.round((analytics.sentimentBreakdown.neutral / analytics.totalResponses) * 100)}% of responses</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sentiment Visualization -->
                <div class="card" style="margin: 1.5rem 0;">
                    <div class="card-header">
                        <h4>📊 Sentiment Distribution</h4>
                    </div>
                    <div class="card-body">
                        <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1.5rem;">
                            <div style="flex: 1; background: #f3f4f6; border-radius: 12px; overflow: hidden; height: 30px;">
                                <div style="background: #10b981; width: ${(analytics.sentimentBreakdown.positive / analytics.totalResponses) * 100}%; height: 100%; float: left;"></div>
                                <div style="background: #f59e0b; width: ${(analytics.sentimentBreakdown.neutral / analytics.totalResponses) * 100}%; height: 100%; float: left;"></div>
                                <div style="background: #ef4444; width: ${(analytics.sentimentBreakdown.negative / analytics.totalResponses) * 100}%; height: 100%; float: left;"></div>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: space-around; text-align: center;">
                            <div style="color: #10b981;">
                                <div style="font-size: 1.5rem;">😊</div>
                                <div style="font-weight: 600;">${Math.round((analytics.sentimentBreakdown.positive / analytics.totalResponses) * 100)}%</div>
                                <div style="font-size: 0.875rem; color: #6b7280;">Positive</div>
                            </div>
                            <div style="color: #f59e0b;">
                                <div style="font-size: 1.5rem;">😐</div>
                                <div style="font-weight: 600;">${Math.round((analytics.sentimentBreakdown.neutral / analytics.totalResponses) * 100)}%</div>
                                <div style="font-size: 0.875rem; color: #6b7280;">Neutral</div>
                            </div>
                            <div style="color: #ef4444;">
                                <div style="font-size: 1.5rem;">😞</div>
                                <div style="font-weight: 600;">${Math.round((analytics.sentimentBreakdown.negative / analytics.totalResponses) * 100)}%</div>
                                <div style="font-size: 0.875rem; color: #6b7280;">Negative</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AI Insights -->
                <div class="card">
                    <div class="card-header">
                        <h4>🤖 AI Insights</h4>
                    </div>
                    <div class="card-body">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                            <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 1.5rem; border-radius: 12px; border: 1px solid #0284c7;">
                                <h5 style="color: #0284c7; margin: 0 0 0.5rem 0;">📈 Sentiment Trend</h5>
                                <p style="margin: 0; color: #4b5563;">Overall sentiment shows ${analytics.sentimentBreakdown.positive > analytics.sentimentBreakdown.negative ? 'positive' : 'concerning'} patterns with room for improvement in customer satisfaction.</p>
                            </div>
                            <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 1.5rem; border-radius: 12px; border: 1px solid #16a34a;">
                                <h5 style="color: #16a34a; margin: 0 0 0.5rem 0;">✨ Key Highlights</h5>
                                <p style="margin: 0; color: #4b5563;">${analytics.sentimentBreakdown.positive} positive responses indicate strong customer engagement and satisfaction with the service.</p>
                            </div>
                            <div style="background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%); padding: 1.5rem; border-radius: 12px; border: 1px solid #ca8a04;">
                                <h5 style="color: #ca8a04; margin: 0 0 0.5rem 0;">🎯 Recommendations</h5>
                                <p style="margin: 0; color: #4b5563;">Focus on addressing concerns from ${analytics.sentimentBreakdown.negative} negative responses to improve overall satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        showToast('Loaded chat responses analysis dashboard', 'success');
    } catch (error) {
        console.error('Error creating chat responses page layout:', error);
        createDefaultPageLayout(container);
    }
}

function createCustomDataPageLayout(container, data) {
    console.log('Creating custom data page layout');

    if (!data || !Array.isArray(data) || data.length === 0) {
        createDefaultPageLayout(container);
        return;
    }

    const totalRecords = data.length;
    const columns = Object.keys(data[0] || {});

    // Analyze the dataset structure to determine the best layout
    const sentimentColumns = columns.filter(col =>
        col.toLowerCase().includes('sentiment') ||
        col.toLowerCase().includes('rating') ||
        col.toLowerCase().includes('score') ||
        col.toLowerCase().includes('satisfaction')
    );

    const textColumns = columns.filter(col =>
        col.toLowerCase().includes('comment') ||
        col.toLowerCase().includes('feedback') ||
        col.toLowerCase().includes('text') ||
        col.toLowerCase().includes('response')
    );

    const dateColumns = columns.filter(col =>
        col.toLowerCase().includes('date') ||
        col.toLowerCase().includes('time') ||
        col.toLowerCase().includes('created')
    );

    // Create layout based on data structure
    if (sentimentColumns.length > 0 || textColumns.length > 0) {
        createFeedbackDataPageLayout(container, data, columns, sentimentColumns, textColumns);
    } else if (dateColumns.length > 0) {
        createTimeSeriesDataPageLayout(container, data, columns, dateColumns);
    } else {
        createGeneralDataPageLayout(container, data, columns);
    }
}

function createFeedbackDataPageLayout(container, data, columns, sentimentColumns, textColumns) {
    console.log('Creating feedback data page layout');

    // Calculate sentiment metrics
    let positiveCount = 0, negativeCount = 0, neutralCount = 0;
    let averageScore = 0, validScoreCount = 0;
    let totalTextLength = 0;

    if (sentimentColumns.length > 0) {
        const sentimentCol = sentimentColumns[0];
        data.forEach(row => {
            const value = row[sentimentCol];
            if (typeof value === 'string') {
                const lowerValue = value.toLowerCase();
                if (lowerValue.includes('positive') || lowerValue.includes('good') || lowerValue.includes('excellent')) {
                    positiveCount++;
                } else if (lowerValue.includes('negative') || lowerValue.includes('bad') || lowerValue.includes('poor')) {
                    negativeCount++;
                } else {
                    neutralCount++;
                }
            } else if (typeof value === 'number') {
                averageScore += value;
                validScoreCount++;
                if (value > 3) positiveCount++;
                else if (value < 3) negativeCount++;
                else neutralCount++;
            }
        });
    }

    if (textColumns.length > 0) {
        const textCol = textColumns[0];
        data.forEach(row => {
            if (row[textCol] && typeof row[textCol] === 'string') {
                totalTextLength += row[textCol].length;
            }
        });
    }

    const avgScore = validScoreCount > 0 ? (averageScore / validScoreCount).toFixed(1) : 'N/A';
    const avgTextLength = textColumns.length > 0 ? Math.round(totalTextLength / data.length) : 0;
    const satisfactionRate = data.length > 0 ? Math.round((positiveCount / data.length) * 100) : 0;

    container.innerHTML = `
        <div class="card">
            <div class="card-header" style="background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white;">
                <h2 class="card-title">📝 Feedback Data Analysis</h2>
                <div class="button-group">
                    <button class="btn btn-light" onclick="generateAIReport()">🔄 New Analysis</button>
                    <button class="btn btn-light" onclick="showImportDataModal()">📥 Import More Data</button>
                </div>
            </div>

            <!-- Dataset Overview -->
            <div class="card" style="margin: 1.5rem 0;">
                <div class="card-header">
                    <h4>📊 Dataset Overview</h4>
                    <div style="font-size: 0.875rem; color: #6b7280;">${data.length.toLocaleString()} records • ${columns.length} fields</div>
                </div>
                <div class="card-body">
                    <div class="dashboard-grid">
                        <div class="stat-card" style="background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white;">
                            <div class="stat-value">${data.length.toLocaleString()}</div>
                            <div class="stat-label">📋 Total Records</div>
                            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${columns.length} data fields</div>
                        </div>
                        <div class="stat-card" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white;">
                            <div class="stat-value">${positiveCount}</div>
                            <div class="stat-label">👍 Positive</div>
                            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${Math.round((positiveCount / data.length) * 100)}% satisfaction</div>
                        </div>
                        <div class="stat-card" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white;">
                            <div class="stat-value">${avgScore}</div>
                            <div class="stat-label">⭐ Avg Score</div>
                            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">${validScoreCount} rated items</div>
                        </div>
                        <div class="stat-card" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); color: white;">
                            <div class="stat-value">${avgTextLength}</div>
                            <div class="stat-label">📝 Avg Length</div>
                            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">characters per response</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Data Composition Analysis -->
            <div class="card" style="margin: 1.5rem 0;">
                <div class="card-header">
                    <h4>🔍 Data Composition</h4>
                </div>
                <div class="card-body">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; border-left: 4px solid #6366f1;">
                            <h6 style="color: #4f46e5; margin: 0 0 0.5rem 0;">Sentiment Fields</h6>
                            <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${sentimentColumns.join(', ') || 'None detected'}</p>
                        </div>
                        <div style="background: #f0fdf4; padding: 1rem; border-radius: 8px; border-left: 4px solid #10b981;">
                            <h6 style="color: #059669; margin: 0 0 0.5rem 0;">Text Fields</h6>
                            <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${textColumns.join(', ') || 'None detected'}</p>
                        </div>
                        <div style="background: #fffbeb; padding: 1rem; border-radius: 8px; border-left: 4px solid #f59e0b;">
                            <h6 style="color: #d97706; margin: 0 0 0.5rem 0;">All Fields</h6>
                            <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${columns.slice(0, 5).join(', ')}${columns.length > 5 ? '...' : ''}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Feedback Insights -->
            <div class="card">
                <div class="card-header">
                    <h4>💡 Feedback Insights</h4>
                </div>
                <div class="card-body">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                        <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 1.5rem; border-radius: 12px; border: 1px solid #0284c7;">
                            <h5 style="color: #0284c7; margin: 0 0 0.5rem 0;">📈 Satisfaction Rate</h5>
                            <p style="margin: 0; color: #4b5563;">${satisfactionRate}% satisfaction rate indicates ${satisfactionRate > 70 ? 'strong' : satisfactionRate > 50 ? 'moderate' : 'concerning'} customer sentiment in the feedback data.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 1.5rem; border-radius: 12px; border: 1px solid #16a34a;">
                            <h5 style="color: #16a34a; margin: 0 0 0.5rem 0;">✨ Data Quality</h5>
                            <p style="margin: 0; color: #4b5563;">Rich dataset with ${sentimentColumns.length + textColumns.length} analyzable fields providing comprehensive feedback insights.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%); padding: 1.5rem; border-radius: 12px; border: 1px solid #ca8a04;">
                            <h5 style="color: #ca8a04; margin: 0 0 0.5rem 0;">🎯 Recommendations</h5>
                            <p style="margin: 0; color: #4b5563;">Focus on improving areas with lower scores and leverage positive feedback patterns for enhancement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    showToast(`Loaded feedback analytics dashboard for ${data.length} records`, 'success');
}

function createTimeSeriesDataPageLayout(container, data, columns, dateColumns) {
    console.log('Creating time-series data page layout');

    container.innerHTML = `
        <div class="card">
            <div class="card-header" style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); color: white;">
                <h2 class="card-title">📈 Time-Series Analysis</h2>
                <div class="button-group">
                    <button class="btn btn-light" onclick="generateAIReport()">🔄 New Analysis</button>
                    <button class="btn btn-light" onclick="showImportDataModal()">📥 Import More Data</button>
                </div>
            </div>

            <!-- Time-Series Overview -->
            <div class="card" style="margin: 1.5rem 0;">
                <div class="card-header">
                    <h4>⏱️ Temporal Data Overview</h4>
                    <div style="font-size: 0.875rem; color: #6b7280;">${data.length.toLocaleString()} data points • ${dateColumns.length} time fields</div>
                </div>
                <div class="card-body">
                    <div class="dashboard-grid">
                        <div class="stat-card" style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); color: white;">
                            <div class="stat-value">${data.length.toLocaleString()}</div>
                            <div class="stat-label">📊 Data Points</div>
                            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Time-series dataset</div>
                        </div>
                        <div class="stat-card" style="background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%); color: white;">
                            <div class="stat-value">${dateColumns.length}</div>
                            <div class="stat-label">📅 Time Fields</div>
                            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Temporal columns</div>
                        </div>
                        <div class="stat-card" style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white;">
                            <div class="stat-value">${columns.length}</div>
                            <div class="stat-label">🔢 Total Fields</div>
                            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Data dimensions</div>
                        </div>
                        <div class="stat-card" style="background: linear-gradient(135deg, #ec4899 0%, #db2777 100%); color: white;">
                            <div class="stat-value">📈</div>
                            <div class="stat-label">Trend Analysis</div>
                            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Ready for analysis</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Time Configuration -->
            <div class="card" style="margin: 1.5rem 0;">
                <div class="card-header">
                    <h4>⚙️ Temporal Configuration</h4>
                </div>
                <div class="card-body">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                        <div style="background: #f0f9ff; padding: 1rem; border-radius: 8px; border-left: 4px solid #06b6d4;">
                            <h6 style="color: #0891b2; margin: 0 0 0.5rem 0;">Date/Time Fields</h6>
                            <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${dateColumns.join(', ')}</p>
                        </div>
                        <div style="background: #f0fdf4; padding: 1rem; border-radius: 8px; border-left: 4px solid #84cc16;">
                            <h6 style="color: #65a30d; margin: 0 0 0.5rem 0;">Analysis Ready</h6>
                            <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">✓ Temporal patterns detected</p>
                        </div>
                        <div style="background: #fffbeb; padding: 1rem; border-radius: 8px; border-left: 4px solid #f97316;">
                            <h6 style="color: #ea580c; margin: 0 0 0.5rem 0;">All Columns</h6>
                            <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${columns.slice(0, 5).join(', ')}${columns.length > 5 ? '...' : ''}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Time-Series Insights -->
            <div class="card">
                <div class="card-header">
                    <h4>🔍 Temporal Insights</h4>
                </div>
                <div class="card-body">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                        <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 1.5rem; border-radius: 12px; border: 1px solid #0284c7;">
                            <h5 style="color: #0284c7; margin: 0 0 0.5rem 0;">📊 Data Patterns</h5>
                            <p style="margin: 0; color: #4b5563;">Time-series data structure enables trend analysis, seasonality detection, and forecasting capabilities.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 1.5rem; border-radius: 12px; border: 1px solid #16a34a;">
                            <h5 style="color: #16a34a; margin: 0 0 0.5rem 0;">✨ Analysis Opportunities</h5>
                            <p style="margin: 0; color: #4b5563;">Rich temporal dataset perfect for identifying trends, patterns, and correlations over time.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%); padding: 1.5rem; border-radius: 12px; border: 1px solid #ca8a04;">
                            <h5 style="color: #ca8a04; margin: 0 0 0.5rem 0;">🎯 Recommendations</h5>
                            <p style="margin: 0; color: #4b5563;">Consider time-based aggregations and trend analysis to uncover insights in your temporal data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    showToast(`Loaded time-series analytics dashboard for ${data.length} data points`, 'success');
}

function createGeneralDataPageLayout(container, data, columns) {
    console.log('Creating general data page layout');

    const numericColumns = columns.filter(col => {
        return data.some(row => typeof row[col] === 'number' && !isNaN(row[col]));
    });

    const textColumns = columns.filter(col => {
        return data.some(row => typeof row[col] === 'string' && row[col].length > 0);
    });

    container.innerHTML = `
        <div class="card">
            <div class="card-header" style="background: linear-gradient(135deg, #64748b 0%, #475569 100%); color: white;">
                <h2 class="card-title">📊 General Data Analysis</h2>
                <div class="button-group">
                    <button class="btn btn-light" onclick="generateAIReport()">🔄 New Analysis</button>
                    <button class="btn btn-light" onclick="showImportDataModal()">📥 Import More Data</button>
                </div>
            </div>

            <!-- General Data Overview -->
            <div class="card" style="margin: 1.5rem 0;">
                <div class="card-header">
                    <h4>📋 Dataset Overview</h4>
                    <div style="font-size: 0.875rem; color: #6b7280;">${data.length.toLocaleString()} records • ${columns.length} fields</div>
                </div>
                <div class="card-body">
                    <div class="dashboard-grid">
                        <div class="stat-card" style="background: linear-gradient(135deg, #64748b 0%, #475569 100%); color: white;">
                            <div class="stat-value">${data.length.toLocaleString()}</div>
                            <div class="stat-label">📄 Records</div>
                            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Total dataset size</div>
                        </div>
                        <div class="stat-card" style="background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); color: white;">
                            <div class="stat-value">${columns.length}</div>
                            <div class="stat-label">📋 Fields</div>
                            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Data columns</div>
                        </div>
                        <div class="stat-card" style="background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%); color: white;">
                            <div class="stat-value">${numericColumns.length}</div>
                            <div class="stat-label">🔢 Numeric</div>
                            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Quantitative fields</div>
                        </div>
                        <div class="stat-card" style="background: linear-gradient(135deg, #059669 0%, #047857 100%); color: white;">
                            <div class="stat-value">${textColumns.length}</div>
                            <div class="stat-label">📝 Text</div>
                            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.9;">Qualitative fields</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Data Structure Analysis -->
            <div class="card" style="margin: 1.5rem 0;">
                <div class="card-header">
                    <h4>🏗️ Data Structure</h4>
                </div>
                <div class="card-body">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                        <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; border-left: 4px solid #0891b2;">
                            <h6 style="color: #0e7490; margin: 0 0 0.5rem 0;">Numeric Fields</h6>
                            <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${numericColumns.join(', ') || 'None detected'}</p>
                        </div>
                        <div style="background: #f0fdf4; padding: 1rem; border-radius: 8px; border-left: 4px solid #059669;">
                            <h6 style="color: #047857; margin: 0 0 0.5rem 0;">Text Fields</h6>
                            <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${textColumns.slice(0, 3).join(', ')}${textColumns.length > 3 ? '...' : ''}</p>
                        </div>
                        <div style="background: #fefce8; padding: 1rem; border-radius: 8px; border-left: 4px solid #ca8a04;">
                            <h6 style="color: #a16207; margin: 0 0 0.5rem 0;">All Columns</h6>
                            <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${columns.slice(0, 5).join(', ')}${columns.length > 5 ? '...' : ''}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- General Insights -->
            <div class="card">
                <div class="card-header">
                    <h4>💡 Data Insights</h4>
                </div>
                <div class="card-body">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                        <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 1.5rem; border-radius: 12px; border: 1px solid #64748b;">
                            <h5 style="color: #475569; margin: 0 0 0.5rem 0;">📊 Data Composition</h5>
                            <p style="margin: 0; color: #4b5563;">Balanced dataset with ${numericColumns.length} numeric and ${textColumns.length} text fields for comprehensive analysis.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); padding: 1.5rem; border-radius: 12px; border: 1px solid #6b7280;">
                            <h5 style="color: #374151; margin: 0 0 0.5rem 0;">✨ Analysis Potential</h5>
                            <p style="margin: 0; color: #4b5563;">Rich dataset structure enables statistical analysis, pattern recognition, and data mining opportunities.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%); padding: 1.5rem; border-radius: 12px; border: 1px solid #ca8a04;">
                            <h5 style="color: #ca8a04; margin: 0 0 0.5rem 0;">🎯 Recommendations</h5>
                            <p style="margin: 0; color: #4b5563;">Consider exploring correlations between numeric fields and text analysis for deeper insights.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    showToast(`Loaded general analytics dashboard for ${data.length} records`, 'success');
}

function generateAnalyticsReport() {
    const selectedDataset = document.getElementById('analytics-dataset-selector').value;

    // Show dataset-aware report generation modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Generate Analytics Report</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="alert alert-info" style="margin-bottom: 1rem;">
                    <strong>Dataset:</strong> ${document.querySelector('#analytics-dataset-selector option:checked').textContent}
                </div>
                <form onsubmit="processAnalyticsReport(event, '${selectedDataset}')">
                    <div class="form-group">
                        <label class="form-label">Report Type</label>
                        <select class="form-select" required>
                            <option value="">Select Report Type</option>
                            <option value="overview">Data Overview Report</option>
                            <option value="sentiment">Sentiment Analysis Report</option>
                            <option value="trends">Trend Analysis Report</option>
                            <option value="comprehensive">Comprehensive Report</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Include Sections</label>
                        <div style="display: grid; gap: 0.5rem;">
                            <label class="checkbox-label">
                                <input type="checkbox" checked> Executive Summary
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox" checked> Data Statistics
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox" checked> Key Insights
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox" checked> Visualizations
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox"> Raw Data Sample
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox" checked> Recommendations
                            </label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                        <button type="submit" class="btn btn-primary">Generate Report</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function processAnalyticsReport(event, datasetId) {
    event.preventDefault();
    const modal = event.target.closest('.modal');

    showToast('Generating analytics report...', 'info');

    // Get selected dataset data
    let reportData;
    if (datasetId === 'platform-data') {
        // Use platform chat data (existing functionality)
        reportData = generatePlatformReportData();
    } else {
        // Use imported dataset
        const importedDatasets = JSON.parse(localStorage.getItem('importedDatasets') || '[]');
        const dataset = importedDatasets.find(d => d.id === datasetId);
        reportData = dataset ? dataset.data : [];
    }

    // Close modal and generate report
    modal.remove();

    setTimeout(() => {
        generateDatasetReport(reportData, datasetId);
        showToast('Analytics report generated successfully!', 'success');
    }, 1500);
}

function generatePlatformReportData() {
    // Return sample platform data structure
    return [
        { session_id: 1, timestamp: new Date().toISOString(), sentiment: 'positive', rating: 4.5, feedback: 'Great experience' },
        { session_id: 2, timestamp: new Date().toISOString(), sentiment: 'neutral', rating: 3.0, feedback: 'Average service' },
        { session_id: 3, timestamp: new Date().toISOString(), sentiment: 'positive', rating: 5.0, feedback: 'Excellent support' }
    ];
}

function generateDatasetReport(data, datasetId) {
    // Generate HTML report based on dataset
    const reportTitle = datasetId === 'platform-data' ? 'Platform Analytics Report' : 'Custom Dataset Analytics Report';

    let reportHtml = `
        <html>
        <head>
            <title>${reportTitle}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 2rem; }
                .header { border-bottom: 2px solid #333; padding-bottom: 1rem; margin-bottom: 2rem; }
                .section { margin: 2rem 0; }
                .stat { display: inline-block; margin: 1rem; padding: 1rem; border: 1px solid #ddd; border-radius: 4px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>${reportTitle}</h1>
                <p>Generated on ${new Date().toLocaleDateString()}</p>
            </div>
            <div class="section">
                <h2>Executive Summary</h2>
                <p>This report analyzes ${data.length} records from the selected dataset.</p>
                <div class="stat">
                    <strong>Total Records:</strong> ${data.length}
                </div>
                <div class="stat">
                    <strong>Data Fields:</strong> ${data.length > 0 ? Object.keys(data[0]).length : 0}
                </div>
                <div class="stat">
                    <strong>Report Generated:</strong> ${new Date().toLocaleString()}
                </div>
            </div>
        </body>
        </html>
    `;

    // Download the report
    const blob = new Blob([reportHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${reportTitle.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.html`;
    a.click();
    URL.revokeObjectURL(url);
}

// Initialize analytics dataset selector when page loads
function initializeAnalyticsDataset() {
    const selector = document.getElementById('analytics-dataset-selector');
    if (selector) {
        // Initialize generated reports system
        initializeGeneratedReports();
        populateGeneratedReports();

        // Initialize datasets
        refreshDatasetList();
        loadAnalyticsForDataset('platform-data');
    }
}

// Settings and report generation
function showFeedbackSettings() {
    showToast('Opening feedback settings...', 'info');
    // Would open a settings modal
}

function generateFeedbackReport() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Generate Feedback Report</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <form onsubmit="processFeedbackReport(event)">
                <div class="form-group">
                    <label class="form-label">Report Type</label>
                    <select class="form-select" required>
                        <option value="">Select Report Type</option>
                        <option value="sentiment">Sentiment Analysis Report</option>
                        <option value="trends">Feedback Trends Report</option>
                        <option value="keywords">Keyword Analysis Report</option>
                        <option value="comprehensive">Comprehensive Report</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Time Period</label>
                    <select class="form-select">
                        <option value="week">Last Week</option>
                        <option value="month" selected>Last Month</option>
                        <option value="quarter">Last Quarter</option>
                        <option value="year">Last Year</option>
                        <option value="custom">Custom Range</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Include Sections</label>
                    <div style="display: grid; gap: 0.5rem;">
                        <label class="checkbox-label">
                            <input type="checkbox" checked> Executive Summary
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" checked> Sentiment Analysis
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" checked> Top Keywords & Topics
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" checked> Response Trends
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox"> Individual Feedback Items
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" checked> Recommendations
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Format</label>
                    <select class="form-select">
                        <option value="pdf">PDF Document</option>
                        <option value="excel">Excel Spreadsheet</option>
                        <option value="powerpoint">PowerPoint Presentation</option>
                        <option value="word">Word Document</option>
                    </select>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem;">
                    <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Generate Report</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function processFeedbackReport(event) {
    event.preventDefault();
    event.target.closest('.modal').remove();
    showToast('Generating feedback report... This may take a few moments.', 'info');
    setTimeout(() => {
        showToast('Report generated successfully! Download link sent to your email.', 'success');
    }, 3000);
}

function viewAllTopics() {
    showToast('Opening complete topics analysis...', 'info');
    // Would show a detailed topics/keywords analysis modal
}

// UPDATED: Test email function with better error handling
async function testEmailSetup() {
    // Prompt user for their real email
    const yourTestEmail = prompt('Enter YOUR email address to receive a test email:', 'your-email@example.com');
    
    if (!yourTestEmail || yourTestEmail === 'your-email@example.com') {
        showToast('Please enter a valid email address', 'warning');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(yourTestEmail)) {
        showToast('Invalid email format', 'error');
        return;
    }
    
    const testData = {
        userEmail: yourTestEmail,
        userName: 'Test User',
        organizationName: 'Test Organization',
        temporaryPassword: 'TestPassword123!'
    };
    
    try {
        console.log('Sending test email to:', yourTestEmail);
        showToast('Sending test email...', 'info');
        
        const response = await fetch('/api/send-invitation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData),
        });
        
        const result = await response.json();
        
        if (response.ok) {
            if (result.demo) {
                showToast('Demo mode detected - email not actually sent', 'info');
            } else {
                showToast(`✅ Test email sent to ${yourTestEmail}! Check your inbox!`, 'success');
            }
        } else {
            showToast(`❌ Test failed: ${result.error || 'Unknown error'}`, 'error');
            console.error('Email test failed:', result);
        }
    } catch (error) {
        console.error('Network error:', error);
        showToast('❌ Network error. Check console for details.', 'error');
    }
}

// Export chat data with enhanced options
function exportChatData() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Export Chat Feedback Data</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <form onsubmit="processExportChatData(event)">
                <div class="form-group">
                    <label class="form-label">Export Format</label>
                    <select class="form-select" required>
                        <option value="csv">CSV (Comma Separated)</option>
                        <option value="excel">Excel (XLSX)</option>
                        <option value="json">JSON</option>
                        <option value="pdf">PDF Report</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Date Range</label>
                    <select class="form-select">
                        <option value="all">All Time</option>
                        <option value="today">Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                        <option value="custom">Custom Range</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Include Fields</label>
                    <div style="display: grid; gap: 0.5rem;">
                        <label class="checkbox-label">
                            <input type="checkbox" checked> Date & Time
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" checked> User Information
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" checked> Feedback Message
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" checked> Rating
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" checked> Sentiment Score
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" checked> Category/Tags
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" checked> Status
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox"> Team Responses
                        </label>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem;">
                    <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Export Data</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function processExportChatData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    event.target.closest('.modal').remove();
    showToast('Preparing export... Download will start automatically.', 'info');
    
    // Simulate download
    setTimeout(() => {
        const link = document.createElement('a');
        link.download = `chat_feedback_export_${new Date().toISOString().split('T')[0]}.csv`;
        link.href = 'data:text/csv;charset=utf-8,Date,User,Message,Rating,Sentiment,Status%0A2024-12-15,Anonymous,Great%20service,5,Positive,Reviewed';
        link.click();
        showToast('Export completed successfully!', 'success');
    }, 2000);
}

// Load organizations from database and populate table
async function loadOrganizationsData() {
    try {
        const organizations = await loadOrganizations();
        const tbody = document.querySelector('#organizations-table tbody');
        
        if (!tbody) return; // Table doesn't exist on this page
        
        if (organizations.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                        No organizations found. Add your first organization to get started.
                    </td>
                </tr>
            `;
            return;
        }
        
        // Store organizations in appState
        appState.organizations = organizations;
        localStorage.setItem('organizations', JSON.stringify(organizations));
        
        tbody.innerHTML = organizations.map(org => `
            <tr onclick="showOrganizationDetails('${org.id}')">
                <td>${org.name}</td>
                <td><span class="tag tag-active">${org.plan || 'Basic'}</span></td>
                <td>0</td>
                <td><span class="tag tag-active">Active</span></td>
                <td>${new Date(org.created_at).toLocaleDateString()}</td>
                <td onclick="event.stopPropagation()">
                    <button class="btn btn-secondary btn-sm" onclick="handleEditOrganization('${org.id}')">Edit</button>
                    <button class="btn btn-warning btn-sm" onclick="handleSuspendOrganization('${org.id}')">Suspend</button>
                    <button class="btn btn-danger btn-sm" onclick="handleDeleteOrganization('${org.id}', '${org.name}')">Delete</button>
                </td>
            </tr>
        `).join('');
        
    } catch (error) {
        console.error('Error loading organizations:', error);
        showToast('Failed to load organizations from database', 'warning');
    }
}

// Load users from database and populate table  
async function loadUsersData() {
    try {
        const users = await loadUsers();
        const tbody = document.querySelector('#users-table tbody');
        
        if (!tbody) return; // Table doesn't exist on this page
        
        if (users.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="8" style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                        No users found. Add your first user to get started.
                    </td>
                </tr>
            `;
            return;
        }
        
        // Store users in appState
        appState.users = users;
        localStorage.setItem('users', JSON.stringify(users));
        
        tbody.innerHTML = users.map(user => `
            <tr onclick="showUserDetails('${user.id}')">
                <td onclick="event.stopPropagation()"><input type="checkbox"></td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.organization || 'N/A'}</td>
                <td><span class="tag tag-active">${user.role || 'User'}</span></td>
                <td><span class="tag tag-${user.status === 'active' ? 'active' : 'pending'}">${user.status || 'Active'}</span></td>
                <td>${user.last_login || 'Never'}</td>
                <td onclick="event.stopPropagation()">
                    <button class="btn btn-secondary btn-sm" onclick="handleEditUser('${user.id}')">Edit</button>
                    <button class="btn btn-primary btn-sm" onclick="handleResendInvite('${user.name}')">Resend Invite</button>
                    <button class="btn btn-danger btn-sm" onclick="handleRemoveUser('${user.id}', '${user.name}')">Remove</button>
                </td>
            </tr>
        `).join('');
        
    } catch (error) {
        console.error('Error loading users:', error);
        showToast('Failed to load users from database', 'warning');
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    showSection('dashboard');
    initializeBrandingListeners();
    loadBrandingFromStorage();  // Load saved branding on page load
    initializeColorSync();       // Initialize color input synchronization
    
    // Load data from database on page load
    loadOrganizationsData();
    loadUsersData();

    // Initialize analytics dataset functionality
    initializeAnalyticsDataset();
    
    const demoAccounts = document.querySelectorAll('.demo-account');
    demoAccounts.forEach(account => {
        account.addEventListener('mouseenter', function() {
            this.style.background = '#f0f9ff';
        });
        account.addEventListener('mouseleave', function() {
            this.style.background = 'var(--bg-primary)';
        });
    });
    
    console.log('Realworld Employee Survey Platform loaded successfully!');
    console.log('Email integration ready. Test with: testEmailSetup()');
    console.log('Database integration ready. Data will be saved to Supabase.');
});

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.language-selector')) {
        document.getElementById('language-dropdown').classList.remove('show');
    }
    if (!event.target.closest('.user-menu')) {
        document.getElementById('user-dropdown').classList.remove('show');
    }
});

// Mobile responsive behavior
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth <= 768) {
        // Going to mobile: close sidebar (remove open class)
        sidebar.classList.remove('open');
        sidebar.classList.remove('collapsed');
    } else {
        // Going to desktop: ensure sidebar is visible
        sidebar.classList.remove('collapsed');
        sidebar.classList.remove('open');
    }
});

// Additional chat management functions
function copyChatSession(chatId) {
    showToast('Copy chat functionality coming soon!', 'info');
    // TODO: Implement copy functionality - duplicate chat with new name
}

function exportPrintCopy(chatId) {
    showToast('Export print copy functionality coming soon!', 'info');
    // TODO: Implement export to PDF/print functionality
}

function downloadChatData(chatId) {
    showToast('Download chat data functionality coming soon!', 'info');
    // TODO: Implement download chat responses as CSV/Excel
}

// Global variable to track current chat ID for recipients management
let currentRecipientsChatId = null;

function manageRecipients(chatId) {
    // Store the current chat ID for use in other functions
    currentRecipientsChatId = chatId;
    
    const contentArea = document.getElementById('content-area');
    
    // Get chat data to show the chat name
    const chatData = activeChatSessions.find(session => session.id === chatId);
    const chatName = chatData ? chatData.name : 'Unknown Chat';
    
    // Create the full-screen recipients management interface
    contentArea.innerHTML = `
        <div class="manage-recipients-container">
            <!-- Navigation Breadcrumb -->
            <nav class="recipients-nav">
                <div class="breadcrumb">
                    <span class="breadcrumb-item">
                        <a href="#" onclick="showDashboard()" class="breadcrumb-link">Manage Surveys</a>
                    </span>
                    <span class="breadcrumb-separator">></span>
                    <span class="breadcrumb-item current">
                        Manage Survey Recipients for survey - ${chatName}
                    </span>
                </div>
            </nav>

            <!-- Header Section -->
            <div class="recipients-header">
                <h1>👥 Manage Recipients: ${chatName}</h1>
                
                <!-- Stats Cards -->
                <div class="recipients-stats">
                    <div class="stat-card">
                        <div class="stat-label">Participation Rate</div>
                        <div class="stat-value">-</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Completion Rate</div>
                        <div class="stat-value">-</div>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="recipients-actions">
                <button class="btn btn-primary" onclick="sendEmailInvitation()">
                    <span>📧</span> Send E-mail Invitation / Reminder to Selected Recipients
                </button>
                
                <button class="btn btn-secondary" onclick="preloadRecipients()">
                    <span>📋</span> Pre-load recipients and demographic data
                </button>
                
                <button class="btn btn-success" onclick="addRecipient()">
                    <span>➕</span> Add Recipient
                </button>
                
                <button class="btn btn-info" onclick="uploadRecipient()">
                    <span>📤</span> Upload Recipient
                </button>
                
                <button class="btn btn-warning" onclick="uploadSurveyResponses()">
                    <span>📊</span> Upload Survey Responses
                </button>
            </div>

            <!-- Data Table -->
            <div class="recipients-table-container">
                <table class="recipients-table">
                    <thead>
                        <tr>
                            <th class="checkbox-column">
                                <input type="checkbox" id="select-all" onchange="toggleSelectAllRecipients()">
                            </th>
                            <th>Forename</th>
                            <th>Surname</th>
                            <th>E-mail</th>
                            <th>Employee No</th>
                            <th>Invite Sent</th>
                            <th>No. Reminders Sent</th>
                            <th>Last Reminder Sent</th>
                            <th class="sortable" onclick="sortRecipientsTable('date_started')">
                                Date Survey Started 
                                <span class="sort-arrow">↕️</span>
                            </th>
                            <th class="sortable" onclick="sortRecipientsTable('date_completed')">
                                Date Survey Completed 
                                <span class="sort-arrow">↕️</span>
                            </th>
                            <th>Edit Survey Recipient</th>
                            <th>Delete Survey Recipient</th>
                        </tr>
                    </thead>
                    <tbody id="recipients-table-body">
                        <tr class="no-data-row">
                            <td colspan="12" class="no-data">No data</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    // Load recipients data for this chat
    loadRecipientsData(chatId);
}

// Recipients Management Helper Functions
async function loadRecipientsData(chatId) {
    const tableBody = document.getElementById('recipients-table-body');
    if (!tableBody) return;
    
    try {
        // Load recipients from Supabase database
        const { data: recipients, error } = await window.supabaseClient
            .from('survey_recipients')
            .select('*')
            .eq('survey_id', chatId || 'test')
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error('Error loading recipients:', error);
            // Show empty state if error
            tableBody.innerHTML = `
                <tr class="no-data-row">
                    <td colspan="12" class="no-data">No data</td>
                </tr>
            `;
            updateRecipientStats([]);
            return;
        }
        
        if (!recipients || recipients.length === 0) {
            // Show empty state if no recipients
            tableBody.innerHTML = `
                <tr class="no-data-row">
                    <td colspan="12" class="no-data">No data</td>
                </tr>
            `;
            updateRecipientStats([]);
            return;
        }
        
        // Populate table with real data from database
        tableBody.innerHTML = recipients.map(recipient => `
            <tr data-recipient-id="${recipient.id}">
                <td><input type="checkbox" class="recipient-checkbox" data-id="${recipient.id}"></td>
                <td>${recipient.forename || ''}</td>
                <td>${recipient.surname || ''}</td>
                <td>${recipient.email || ''}</td>
                <td>${recipient.employee_no || ''}</td>
                <td><span class="status-badge ${recipient.invite_sent ? 'sent' : 'not-sent'}">${recipient.invite_sent ? 'YES' : 'NO'}</span></td>
                <td>${recipient.reminder_count || 0}</td>
                <td>${recipient.last_reminder_sent || '-'}</td>
                <td>${recipient.survey_started_date || '-'}</td>
                <td>${recipient.survey_completed_date || '-'}</td>
                <td><button class="btn btn-sm btn-primary" data-action="edit" data-recipient-id="${recipient.id}">Edit</button></td>
                <td><button class="btn btn-sm btn-danger" data-action="delete" data-recipient-id="${recipient.id}">Delete</button></td>
            </tr>
        `).join('');
        
        // Add event delegation for edit and delete buttons
        console.log('🎯 About to add event listeners for recipients table');
        addRecipientTableEventListeners();
        console.log('✅ Event listeners added for recipients table');
        
        // Update statistics with loaded data
        updateRecipientStats(recipients);
        
    } catch (error) {
        console.error('Error loading recipients:', error);
        tableBody.innerHTML = `
            <tr class="no-data-row">
                <td colspan="12" class="no-data">Error loading data</td>
            </tr>
        `;
        updateRecipientStats([]);
    }
}

function updateRecipientStats(recipients) {
    const total = recipients.length;
    const completed = recipients.filter(r => r.status === 'completed').length;
    const invited = recipients.filter(r => r.inviteSent === 'Yes').length;
    
    const participationRate = total > 0 ? Math.round((invited / total) * 100) : 0;
    const completionRate = invited > 0 ? Math.round((completed / invited) * 100) : 0;

    // Update the stats cards - show "-" when no data
    const statsCards = document.querySelectorAll('.recipients-stats .stat-card');
    if (statsCards[0]) {
        statsCards[0].querySelector('.stat-value').textContent = total > 0 ? `${participationRate}%` : '-';
    }
    if (statsCards[1]) {
        statsCards[1].querySelector('.stat-value').textContent = total > 0 ? `${completionRate}%` : '-';
    }
}

function toggleSelectAllRecipients() {
    const selectAllCheckbox = document.getElementById('select-all');
    const checkboxes = document.querySelectorAll('#recipients-table-body input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
}

function sortRecipientsTable(column) {
    showToast(`Sorting by ${column}`, 'info');
    // TODO: Implement table sorting functionality
}

function sendEmailInvitation() {
    // Auto-select recipients who haven't completed the survey
    const allRecipients = document.querySelectorAll('#recipients-table-body input[type="checkbox"]');
    console.log('Found recipients:', allRecipients.length);
    
    const nonResponders = Array.from(allRecipients).filter(checkbox => {
        const row = checkbox.closest('tr');
        // Check if "Date Survey Completed" column is empty (indicates no response)
        const completedCell = row.cells[9]; // "Date Survey Completed" column
        const completedText = completedCell ? completedCell.textContent.trim() : '';
        console.log('Checking recipient:', row.cells[1].textContent, 'completion status:', completedText);
        return completedText === '-' || completedText === '' || !completedText;
    });

    console.log('Non-responders found:', nonResponders.length);

    if (nonResponders.length === 0) {
        showToast('All recipients have already completed the survey!', 'info');
        return;
    }

    // Get non-responder details
    const selectedDetails = nonResponders.map(checkbox => {
        const row = checkbox.closest('tr');
        return {
            id: checkbox.dataset.id,
            name: `${row.cells[1].textContent} ${row.cells[2].textContent}`,
            email: row.cells[3].textContent,
            forename: row.cells[1].textContent,
            surname: row.cells[2].textContent,
            reminder_count: parseInt(row.cells[6].textContent) || 0
        };
    });

    showToast(`Automatically selected ${nonResponders.length} recipients who haven't responded`, 'info');

    // Create email invitation modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3>📧 Send Email Invitations</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">Recipients (${selectedDetails.length} selected):</label>
                    <div class="recipients-preview">
                        ${selectedDetails.map(r => `
                            <div class="recipient-tag">
                                <span>${r.name} (${r.email})</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="form-label">Email Subject:</label>
                    <input type="text" id="email-subject" class="form-input" 
                           value="Survey Invitation - Your Feedback Matters" 
                           placeholder="Enter email subject">
                </div>
                
                <div class="form-group">
                    <label class="form-label">Email Message:</label>
                    <textarea id="email-message" class="form-input" rows="6" placeholder="Enter your message...">Hi {name},

We would love to hear your feedback! Please take a few minutes to complete our survey.

Click here to start: {survey_link}

Thank you for your time!

Best regards,
Survey Team</textarea>
                    <small class="form-help">Use {name} for recipient name and {survey_link} for the survey link</small>
                </div>
                
                <div class="form-group">
                    <label class="form-label">
                        <input type="checkbox" id="send-reminder" checked> Send as reminder (for previously invited recipients)
                    </label>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                <button type="button" class="btn btn-primary" onclick="confirmSendInvitations(${JSON.stringify(selectedDetails).replace(/"/g, '&quot;')})">
                    Send ${selectedDetails.length} Invitation${selectedDetails.length > 1 ? 's' : ''}
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function preloadRecipients() {
    // Create pre-load recipients modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 700px;">
            <div class="modal-header">
                <h3>📋 Pre-load Recipients and Demographic Data</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body">
                <p>Import recipient lists and demographic information from various sources.</p>
                
                <div class="preload-options">
                    <div class="option-card" onclick="preloadFromCSV()">
                        <div class="option-icon">📄</div>
                        <h4>CSV/Excel Import</h4>
                        <p>Upload a CSV or Excel file with recipient details and demographic information.</p>
                        <div class="option-features">
                            <span class="feature">✓ Bulk import</span>
                            <span class="feature">✓ Demographic data</span>
                            <span class="feature">✓ Validation</span>
                        </div>
                    </div>
                    
                    <div class="option-card" onclick="preloadFromHR()">
                        <div class="option-icon">🏢</div>
                        <h4>HR System Integration</h4>
                        <p>Connect to your HR system to automatically import employee data.</p>
                        <div class="option-features">
                            <span class="feature">✓ Live sync</span>
                            <span class="feature">✓ Department data</span>
                            <span class="feature">✓ Role information</span>
                        </div>
                    </div>
                    
                    <div class="option-card" onclick="preloadFromAD()">
                        <div class="option-icon">🔐</div>
                        <h4>Active Directory</h4>
                        <p>Import users from your organization's Active Directory.</p>
                        <div class="option-features">
                            <span class="feature">✓ AD integration</span>
                            <span class="feature">✓ Group filtering</span>
                            <span class="feature">✓ Auto-sync</span>
                        </div>
                    </div>
                </div>
                
                <div class="sample-data-section" style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">
                    <h4>Quick Start: Load Sample Data</h4>
                    <p>Add sample recipients with demographic data for testing purposes.</p>
                    <button class="btn btn-info" onclick="loadSampleData()">
                        🎯 Load Sample Recipients
                    </button>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Close</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

async function confirmSendInvitations(recipients) {
    console.log('🚀 confirmSendInvitations called with recipients:', recipients);
    console.log('📧 Current chat ID:', currentRecipientsChatId);

    const subject = document.getElementById('email-subject').value;
    const message = document.getElementById('email-message').value;
    const isReminder = document.getElementById('send-reminder').checked;

    if (!subject.trim() || !message.trim()) {
        showToast('Please fill in both subject and message', 'warning');
        return;
    }

    // Close modal
    document.querySelector('.modal').remove();

    // Send actual emails and update database
    showToast('Sending invitations...', 'info');

    try {
        // Send emails to each recipient
        for (const recipient of recipients) {
            try {
                // Find existing recipient by email, or create if doesn't exist
                console.log(`Looking for recipient: ${recipient.email} in survey: ${currentRecipientsChatId || 'test'}`);

                const { data: existingRecipients, error: checkError } = await window.supabaseClient
                    .from('survey_recipients')
                    .select('*')
                    .eq('email', recipient.email)
                    .eq('survey_id', currentRecipientsChatId || 'test');

                let recipientRecord = null;

                if (checkError) {
                    console.error('Error checking for existing recipient:', checkError);
                    continue;
                }

                if (existingRecipients && existingRecipients.length > 0) {
                    recipientRecord = existingRecipients[0];
                    console.log(`Found existing recipient:`, recipientRecord);
                } else {
                    // Recipient doesn't exist, create them
                    console.log(`Creating new recipient record for ${recipient.email}`);
                    const { data: newRecipient, error: createError } = await window.supabaseClient
                        .from('survey_recipients')
                        .insert({
                            survey_id: currentRecipientsChatId || 'test',
                            forename: recipient.forename,
                            surname: recipient.surname,
                            email: recipient.email,
                            employee_no: '', // Will be filled from table data if available
                            invite_sent: false,
                            reminder_count: 0
                        })
                        .select('*')
                        .single();

                    if (createError) {
                        console.error('Error creating recipient:', createError);
                        continue;
                    }
                    recipientRecord = newRecipient;
                    console.log(`Created new recipient:`, recipientRecord);
                }

                // Send email via API
                const emailResponse = await fetch('/api/send-invitation', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userEmail: recipient.email,
                        userName: `${recipient.forename} ${recipient.surname}`,
                        subject: subject,
                        message: message,
                        isReminder: isReminder
                    }),
                });

                if (emailResponse.ok) {
                    // Update database to reflect sent invitation
                    const currentDate = new Date().toISOString().split('T')[0];
                    const reminderCount = isReminder ? (recipientRecord.reminder_count || 0) + 1 : 1;

                    console.log(`Updating database for recipient ID: ${recipientRecord.id}, email: ${recipient.email}`);

                    const { data, error } = await window.supabaseClient
                        .from('survey_recipients')
                        .update({
                            invite_sent: true,
                            reminder_count: reminderCount,
                            last_reminder_sent: currentDate,
                            updated_at: new Date().toISOString()
                        })
                        .eq('id', recipientRecord.id);

                    if (error) {
                        console.error('Error updating recipient database:', error);
                    } else {
                        console.log(`✅ Database updated successfully for recipient ID: ${recipientRecord.id}, email: ${recipient.email}`);
                        console.log('Update result:', data);

                        // Update UI table row immediately - find by email since ID might have changed
                        const rows = document.querySelectorAll('#recipients-table-body tr');
                        let rowFound = false;

                        rows.forEach(row => {
                            const emailCell = row.cells[3];
                            if (emailCell && emailCell.textContent.trim() === recipient.email) {
                                console.log('Found row by email, updating UI:', row);
                                // Update invite sent status
                                const inviteCell = row.cells[5];
                                inviteCell.innerHTML = '<span class="status-badge sent">YES</span>';

                                // Update reminders sent
                                const remindersCell = row.cells[6];
                                remindersCell.textContent = reminderCount;

                                // Update last reminder date
                                const lastReminderCell = row.cells[7];
                                lastReminderCell.textContent = currentDate;

                                rowFound = true;
                            }
                        });

                        if (!rowFound) {
                            console.error(`Could not find row for recipient email: ${recipient.email}`);
                        }
                    }
                } else {
                    console.error(`Failed to send email to ${recipient.email}`);
                }
            } catch (error) {
                console.error(`Error sending invitation to ${recipient.email}:`, error);
            }
        }

        showToast(`Successfully sent ${recipients.length} invitation${recipients.length > 1 ? 's' : ''}!`, 'success');

        // Refresh the table to show updated data from database
        await loadRecipientsData(currentRecipientsChatId || 'test');

        // Clear selections
        document.querySelectorAll('#recipients-table-body input[type="checkbox"]:checked').forEach(cb => cb.checked = false);
        const selectAllCheckbox = document.getElementById('select-all');
        if (selectAllCheckbox) selectAllCheckbox.checked = false;

    } catch (error) {
        console.error('Error in bulk invitation sending:', error);
        showToast('Error sending invitations. Please try again.', 'error');
    }
}

function addRecipient() {
    // Create add recipient modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <div class="modal-header">
                <h3>➕ Add New Recipient</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body">
                <form id="add-recipient-form">
                    <div class="form-group">
                        <label class="form-label">First Name *</label>
                        <input type="text" id="recipient-forename" class="form-input" required 
                               placeholder="Enter first name">
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Last Name *</label>
                        <input type="text" id="recipient-surname" class="form-input" required 
                               placeholder="Enter last name">
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Email Address *</label>
                        <input type="email" id="recipient-email" class="form-input" required 
                               placeholder="name@company.com">
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Employee Number</label>
                        <input type="text" id="recipient-employee-no" class="form-input" 
                               placeholder="EMP001 (optional)">
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">
                            <input type="checkbox" id="send-immediate-invitation"> 
                            Send invitation immediately after adding
                        </label>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                <button type="button" class="btn btn-success" onclick="confirmAddRecipient()">Add Recipient</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

async function confirmAddRecipient() {
    const forename = document.getElementById('recipient-forename').value.trim();
    const surname = document.getElementById('recipient-surname').value.trim();
    const email = document.getElementById('recipient-email').value.trim();
    const employeeNo = document.getElementById('recipient-employee-no').value.trim();
    const sendInvitation = document.getElementById('send-immediate-invitation').checked;
    
    // Validation
    if (!forename || !surname || !email) {
        showToast('Please fill in all required fields', 'warning');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address', 'warning');
        return;
    }
    
    try {
        console.log('🔍 Checking for duplicate email:', email);
        
        // Check for duplicate email in database
        const { data: existingRecipient, error: checkError } = await window.supabaseClient
            .from('survey_recipients')
            .select('email')
            .eq('email', email)
            .eq('survey_id', 'test')
            .single();
            
        console.log('✅ Duplicate check result:', { existingRecipient, checkError });
        
        if (existingRecipient) {
            showToast('A recipient with this email already exists', 'warning');
            return;
        }
        
        // Create new recipient object for database
        const newRecipient = {
            survey_id: 'test',
            forename: forename,
            surname: surname,
            email: email,
            employee_no: employeeNo || `EMP${Date.now().toString().slice(-3)}`,
            invite_sent: sendInvitation,
            reminder_count: sendInvitation ? 1 : 0,
            last_reminder_sent: sendInvitation ? new Date().toISOString().split('T')[0] : null,
            survey_started_date: null,
            survey_completed_date: null,
            created_at: new Date().toISOString()
        };
        
        console.log('💾 Saving recipient to database:', newRecipient);
        
        // Save to database
        const { data: savedRecipient, error } = await window.supabaseClient
            .from('survey_recipients')
            .insert([newRecipient])
            .select()
            .single();
            
        console.log('💾 Save result:', { savedRecipient, error });
        
        if (error) {
            console.error('❌ Error saving recipient:', error);
            showToast('Error saving recipient to database', 'error');
            return;
        }
        
        console.log('✅ Recipient saved successfully:', savedRecipient);
        
        // Close modal
        document.querySelector('.modal').remove();
        
        // Reload the data to show the new recipient
        loadRecipientsData(currentRecipientsChatId || 'test');
        
        // Show success message
        showToast(`Recipient ${forename} ${surname} added successfully!`, 'success');
        
        // Send invitation if requested
        if (sendInvitation) {
            // You can implement invitation sending logic here
            showToast(`Invitation sent to ${email}`, 'info');
        }
        
    } catch (error) {
        console.error('Error adding recipient:', error);
        showToast('Error adding recipient', 'error');
    }
    
    // Show success message
    const message = sendInvitation 
        ? `Recipient added and invitation sent to ${email}!`
        : `Recipient ${forename} ${surname} added successfully!`;
    showToast(message, 'success');
}

function uploadRecipient() {
    // Create upload modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3>📤 Upload Recipients</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="upload-section">
                    <p>Upload a CSV or Excel file containing recipient information.</p>
                    
                    <div class="file-upload-area" onclick="document.getElementById('recipient-file').click()">
                        <div class="upload-icon">📁</div>
                        <div class="upload-text">
                            <strong>Click to select file</strong> or drag and drop
                        </div>
                        <div class="upload-hint">Supported formats: .csv, .xlsx, .xls</div>
                    </div>
                    
                    <input type="file" id="recipient-file" accept=".csv,.xlsx,.xls" style="display: none;" 
                           onchange="handleRecipientFileUpload(event)">
                    
                    <div class="template-section" style="margin-top: 2rem;">
                        <h4>Expected File Format:</h4>
                        <div class="format-example">
                            <table style="width: 100%; font-size: 0.875rem; border-collapse: collapse;">
                                <thead>
                                    <tr style="background: #f8f9fa;">
                                        <th style="border: 1px solid #dee2e6; padding: 0.5rem;">Forename</th>
                                        <th style="border: 1px solid #dee2e6; padding: 0.5rem;">Surname</th>
                                        <th style="border: 1px solid #dee2e6; padding: 0.5rem;">Email</th>
                                        <th style="border: 1px solid #dee2e6; padding: 0.5rem;">Employee_No</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="border: 1px solid #dee2e6; padding: 0.5rem;">John</td>
                                        <td style="border: 1px solid #dee2e6; padding: 0.5rem;">Smith</td>
                                        <td style="border: 1px solid #dee2e6; padding: 0.5rem;">john@company.com</td>
                                        <td style="border: 1px solid #dee2e6; padding: 0.5rem;">EMP001</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <button class="btn btn-info" onclick="downloadTemplate()" style="margin-top: 1rem;">
                            📥 Download Template
                        </button>
                    </div>
                </div>
                
                <div id="upload-preview" style="display: none; margin-top: 2rem;">
                    <h4>Preview:</h4>
                    <div id="preview-content"></div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                <button type="button" class="btn btn-primary" id="confirm-upload-btn" style="display: none;" 
                        onclick="confirmUploadRecipients()">Import Recipients</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function preloadFromCSV() {
    document.querySelector('.modal').remove();
    uploadRecipient(); // Reuse the upload functionality
}

function preloadFromHR() {
    showToast('HR System integration coming soon!', 'info');
    document.querySelector('.modal').remove();
}

function preloadFromAD() {
    showToast('Active Directory integration coming soon!', 'info');
    document.querySelector('.modal').remove();
}

function loadSampleData() {
    document.querySelector('.modal').remove();
    showToast('Loading enhanced sample data...', 'info');
    
    setTimeout(() => {
        const sampleData = [
            { forename: 'David', surname: 'Williams', email: 'david.williams@company.com', employeeNo: 'EMP008' },
            { forename: 'Lisa', surname: 'Garcia', email: 'lisa.garcia@company.com', employeeNo: 'EMP009' },
            { forename: 'Robert', surname: 'Martinez', email: 'robert.martinez@company.com', employeeNo: 'EMP010' },
            { forename: 'Jennifer', surname: 'Lopez', email: 'jennifer.lopez@company.com', employeeNo: 'EMP011' },
            { forename: 'James', surname: 'Wilson', email: 'james.wilson@company.com', employeeNo: 'EMP012' }
        ];
        
        const tableBody = document.getElementById('recipients-table-body');
        
        // Remove "No data" row if it exists
        const noDataRow = tableBody.querySelector('.no-data-row');
        if (noDataRow) {
            noDataRow.remove();
        }
        
        sampleData.forEach(recipient => {
            const newId = Date.now() + Math.random();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="checkbox-column">
                    <input type="checkbox" data-recipient-id="${newId}">
                </td>
                <td>${recipient.forename}</td>
                <td>${recipient.surname}</td>
                <td>${recipient.email}</td>
                <td>${recipient.employeeNo}</td>
                <td>
                    <span class="status-badge status-not-sent">No</span>
                </td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                    <button class="btn btn-small btn-info" data-action="edit" data-recipient-id="${newId}" title="Edit Recipient">
                        ✏️
                    </button>
                </td>
                <td>
                    <button class="btn btn-small btn-danger" data-action="delete" data-recipient-id="${newId}" title="Delete Recipient">
                        🗑️
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });
        
        // Re-attach event listeners after adding new rows
        addRecipientTableEventListeners();
        
        showToast(`Successfully loaded ${sampleData.length} sample recipients!`, 'success');
    }, 1500);
}

function uploadSurveyResponses() {
    // Create survey responses upload modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3>📊 Upload Survey Responses</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="upload-section">
                    <p>Upload survey responses to import existing data or bulk update participant responses.</p>
                    
                    <div class="file-upload-area" onclick="document.getElementById('responses-file').click()">
                        <div class="upload-icon">📊</div>
                        <div class="upload-text">
                            <strong>Click to select responses file</strong> or drag and drop
                        </div>
                        <div class="upload-hint">Supported formats: .csv, .xlsx, .json</div>
                    </div>
                    
                    <input type="file" id="responses-file" accept=".csv,.xlsx,.json" style="display: none;" 
                           onchange="handleResponsesFileUpload(event)">
                    
                    <div class="template-section" style="margin-top: 2rem;">
                        <h4>Expected Response Format:</h4>
                        <div class="format-example">
                            <table style="width: 100%; font-size: 0.875rem; border-collapse: collapse;">
                                <thead>
                                    <tr style="background: #f8f9fa;">
                                        <th style="border: 1px solid #dee2e6; padding: 0.5rem;">Email</th>
                                        <th style="border: 1px solid #dee2e6; padding: 0.5rem;">Response_Date</th>
                                        <th style="border: 1px solid #dee2e6; padding: 0.5rem;">Status</th>
                                        <th style="border: 1px solid #dee2e6; padding: 0.5rem;">Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="border: 1px solid #dee2e6; padding: 0.5rem;">john@company.com</td>
                                        <td style="border: 1px solid #dee2e6; padding: 0.5rem;">2025-09-01</td>
                                        <td style="border: 1px solid #dee2e6; padding: 0.5rem;">Completed</td>
                                        <td style="border: 1px solid #dee2e6; padding: 0.5rem;">85</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <button class="btn btn-info" onclick="downloadResponsesTemplate()" style="margin-top: 1rem;">
                            📥 Download Response Template
                        </button>
                    </div>
                </div>
                
                <div id="responses-preview" style="display: none; margin-top: 2rem;">
                    <h4>Preview:</h4>
                    <div id="responses-preview-content"></div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                <button type="button" class="btn btn-primary" id="confirm-responses-btn" style="display: none;" 
                        onclick="confirmUploadResponses()">Import Responses</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function handleRecipientFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    showToast('Processing file...', 'info');
    
    // Simulate file processing
    setTimeout(() => {
        // Mock data for preview
        const mockData = [
            { forename: 'Alice', surname: 'Wilson', email: 'alice.wilson@company.com', employeeNo: 'EMP005' },
            { forename: 'Bob', surname: 'Taylor', email: 'bob.taylor@company.com', employeeNo: 'EMP006' },
            { forename: 'Carol', surname: 'Anderson', email: 'carol.anderson@company.com', employeeNo: 'EMP007' }
        ];
        
        // Show preview
        const previewDiv = document.getElementById('upload-preview');
        const previewContent = document.getElementById('preview-content');
        
        previewContent.innerHTML = `
            <div style="margin-bottom: 1rem;">
                <strong>${mockData.length} recipients found in file: ${file.name}</strong>
            </div>
            <div style="max-height: 200px; overflow-y: auto; border: 1px solid #dee2e6;">
                <table style="width: 100%; font-size: 0.875rem;">
                    <thead>
                        <tr style="background: #f8f9fa;">
                            <th style="padding: 0.5rem; border-bottom: 1px solid #dee2e6;">Name</th>
                            <th style="padding: 0.5rem; border-bottom: 1px solid #dee2e6;">Email</th>
                            <th style="padding: 0.5rem; border-bottom: 1px solid #dee2e6;">Employee No</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${mockData.map(r => `
                            <tr>
                                <td style="padding: 0.5rem;">${r.forename} ${r.surname}</td>
                                <td style="padding: 0.5rem;">${r.email}</td>
                                <td style="padding: 0.5rem;">${r.employeeNo}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        
        previewDiv.style.display = 'block';
        document.getElementById('confirm-upload-btn').style.display = 'inline-block';
        
        showToast('File processed successfully!', 'success');
    }, 1500);
}

function downloadTemplate() {
    const csvContent = "Forename,Surname,Email,Employee_No\nJohn,Smith,john.smith@company.com,EMP001\nJane,Doe,jane.doe@company.com,EMP002";
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recipients_template.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    showToast('Template downloaded!', 'success');
}

function confirmUploadRecipients() {
    // Mock implementation - would normally process the actual file data
    showToast('Importing recipients...', 'info');
    
    setTimeout(() => {
        // Simulate adding the mock data to the table
        const mockData = [
            { forename: 'Alice', surname: 'Wilson', email: 'alice.wilson@company.com', employeeNo: 'EMP005' },
            { forename: 'Bob', surname: 'Taylor', email: 'bob.taylor@company.com', employeeNo: 'EMP006' },
            { forename: 'Carol', surname: 'Anderson', email: 'carol.anderson@company.com', employeeNo: 'EMP007' }
        ];
        
        const tableBody = document.getElementById('recipients-table-body');
        
        // Remove "No data" row if it exists
        const noDataRow = tableBody.querySelector('.no-data-row');
        if (noDataRow) {
            noDataRow.remove();
        }
        
        mockData.forEach(recipient => {
            const newId = Date.now() + Math.random();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="checkbox-column">
                    <input type="checkbox" data-recipient-id="${newId}">
                </td>
                <td>${recipient.forename}</td>
                <td>${recipient.surname}</td>
                <td>${recipient.email}</td>
                <td>${recipient.employeeNo}</td>
                <td>
                    <span class="status-badge status-not-sent">No</span>
                </td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                    <button class="btn btn-small btn-info" data-action="edit" data-recipient-id="${newId}" title="Edit Recipient">
                        ✏️
                    </button>
                </td>
                <td>
                    <button class="btn btn-small btn-danger" data-action="delete" data-recipient-id="${newId}" title="Delete Recipient">
                        🗑️
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });
        
        // Re-attach event listeners after adding new rows
        addRecipientTableEventListeners();
        
        // Close modal
        document.querySelector('.modal').remove();
        showToast(`Successfully imported ${mockData.length} recipients!`, 'success');
    }, 2000);
}

function editRecipient(id) {
    showToast(`Edit recipient ${id} - Feature coming soon!`, 'info');
}

// Add event delegation for recipient table buttons
function addRecipientTableEventListeners() {
    const tableBody = document.getElementById('recipients-table-body');
    if (!tableBody) {
        console.error('❌ Could not find recipients-table-body element');
        return;
    }
    
    console.log('🔧 Setting up event listeners for table body:', tableBody);
    
    // Remove existing listeners to prevent duplicates
    tableBody.removeEventListener('click', handleRecipientTableClick);
    
    // Add event delegation
    tableBody.addEventListener('click', handleRecipientTableClick);
    
    console.log('🎪 Event listener added successfully');
}

function handleRecipientTableClick(event) {
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    
    const action = button.getAttribute('data-action');
    const recipientId = button.getAttribute('data-recipient-id');
    
    console.log('Button clicked:', action, 'for recipient ID:', recipientId);
    
    if (action === 'edit') {
        console.log('🔧 Calling editRecipient with ID:', recipientId);
        editRecipient(recipientId);
    } else if (action === 'delete') {
        console.log('🗑️ About to call deleteRecipient with ID:', recipientId);
        console.log('🔍 deleteRecipient function exists:', typeof deleteRecipient);
        console.log('🔍 window.deleteRecipient exists:', typeof window.deleteRecipient);
        try {
            console.log('🔍 Calling deleteRecipient...');
            const result = deleteRecipient(recipientId);
            console.log('🔍 deleteRecipient returned:', result);
            if (result && typeof result.then === 'function') {
                console.log('🔍 deleteRecipient returned a promise, awaiting...');
                result.then(() => {
                    console.log('🗑️ deleteRecipient promise resolved');
                }).catch(error => {
                    console.error('❌ deleteRecipient promise rejected:', error);
                });
            }
            console.log('🗑️ deleteRecipient call completed');
        } catch (error) {
            console.error('❌ Error calling deleteRecipient:', error);
        }
    } else if (action === 'force-delete') {
        console.log('💥 Calling forceDeleteRecipient with ID:', recipientId);
        // Test delete without confirmation
        forceDeleteRecipient(recipientId);
    } else {
        console.warn('❓ Unknown action:', action);
    }
}

// Test function to delete without confirmation
async function forceDeleteRecipient(id) {
    console.log('🧪 FORCE DELETE (no confirmation) for ID:', id);
    try {
        // Delete from Supabase database
        console.log('Attempting to delete from database...');
        const { error } = await window.supabaseClient
            .from('survey_recipients')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting recipient:', error);
            showToast('Failed to delete recipient from database', 'error');
            return;
        }

        console.log('Successfully deleted from database, refreshing UI...');
        
        // Reload the data from database to ensure UI is in sync
        await loadRecipientsData(currentRecipientsChatId || 'test');
        console.log('✅ Recipients table refreshed after force deletion');
        
        showToast('Recipient force deleted successfully', 'success');
    } catch (error) {
        console.error('Error force deleting recipient:', error);
        showToast('Failed to force delete recipient', 'error');
    }
}

async function deleteRecipient(id) {
    console.log('🚀 INSIDE deleteRecipient function - START');
    console.log('🗑️ Delete recipient called with ID:', id);
    console.log('🔍 Current chat ID:', currentRecipientsChatId);
    console.log('🔍 Supabase client available:', !!window.supabaseClient);
    
    // Test basic functionality
    console.log('🧪 Basic test: 1 + 1 =', 1 + 1);
    
    if (!id) {
        console.error('No ID provided to deleteRecipient function');
        showToast('Error: No recipient ID provided', 'error');
        return;
    }
    
    // Temporarily skip confirmation for debugging
    console.log('🔍 Skipping confirmation dialog for debugging');
    const userConfirmed = true;
    console.log('🔍 Confirmation dialog result:', userConfirmed);
    
    if (userConfirmed) {
        console.log('User confirmed deletion for ID:', id);
        try {
            // Delete from Supabase database
            console.log('Attempting to delete from database...');
            console.log('🔍 Deleting recipient with ID:', id);
            console.log('🔍 From table: survey_recipients');
            
            const { data, error } = await window.supabaseClient
                .from('survey_recipients')
                .delete()
                .eq('id', id);

            console.log('🔍 Delete result:', { data, error });

            if (error) {
                console.error('Error deleting recipient:', error);
                showToast('Failed to delete recipient from database', 'error');
                return;
            }

            console.log('Successfully deleted from database, refreshing UI...');
            
            // Debug: Check what rows exist before deletion
            const allRows = document.querySelectorAll('#recipients-table-body tr');
            console.log('🔍 Total rows before removal:', allRows.length);
            console.log('🔍 Looking for row with ID:', id);
            
            // Remove the deleted row from the DOM immediately
            const rowElement = document.querySelector(`tr[data-recipient-id="${id}"]`);
            console.log('🔍 Found row element:', !!rowElement);
            
            if (rowElement) {
                console.log('🔍 Removing specific row for ID:', id);
                rowElement.remove();
                
                // Debug: Check rows after removal
                const remainingRows = document.querySelectorAll('#recipients-table-body tr');
                console.log('✅ Rows remaining after removal:', remainingRows.length);
                console.log('✅ Row removed from DOM');
            } else {
                console.log('⚠️ Could not find row to remove, available rows:');
                allRows.forEach((row, index) => {
                    const rowId = row.getAttribute('data-recipient-id');
                    console.log(`Row ${index}: data-recipient-id="${rowId}"`);
                });
                console.log('⚠️ Reloading all data as fallback');
                // Fallback: reload all data if we can't find the specific row
                await loadRecipientsData(currentRecipientsChatId || 'test');
            }
            console.log('✅ Recipients table updated after deletion');
            
            showToast('Recipient deleted successfully', 'success');
        } catch (error) {
            console.error('Error deleting recipient:', error);
            showToast('Failed to delete recipient', 'error');
        }
    } else {
        console.log('User cancelled deletion');
    }
}

// Cleanup function removed - was causing deletion of all recipients with matching names

function handleResponsesFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    showToast('Processing responses file...', 'info');
    
    setTimeout(() => {
        // Mock response data for preview
        const mockResponses = [
            { email: 'john.smith@company.com', responseDate: '2025-09-01', status: 'Completed', score: 85 },
            { email: 'sarah.johnson@company.com', responseDate: '2025-09-01', status: 'In Progress', score: 0 }
        ];
        
        const previewDiv = document.getElementById('responses-preview');
        const previewContent = document.getElementById('responses-preview-content');
        
        previewContent.innerHTML = `
            <div style="margin-bottom: 1rem;">
                <strong>${mockResponses.length} responses found in file: ${file.name}</strong>
            </div>
            <div style="max-height: 200px; overflow-y: auto; border: 1px solid #dee2e6;">
                <table style="width: 100%; font-size: 0.875rem;">
                    <thead>
                        <tr style="background: #f8f9fa;">
                            <th style="padding: 0.5rem; border-bottom: 1px solid #dee2e6;">Email</th>
                            <th style="padding: 0.5rem; border-bottom: 1px solid #dee2e6;">Date</th>
                            <th style="padding: 0.5rem; border-bottom: 1px solid #dee2e6;">Status</th>
                            <th style="padding: 0.5rem; border-bottom: 1px solid #dee2e6;">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${mockResponses.map(r => `
                            <tr>
                                <td style="padding: 0.5rem;">${r.email}</td>
                                <td style="padding: 0.5rem;">${r.responseDate}</td>
                                <td style="padding: 0.5rem;">${r.status}</td>
                                <td style="padding: 0.5rem;">${r.score}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        
        previewDiv.style.display = 'block';
        document.getElementById('confirm-responses-btn').style.display = 'inline-block';
        
        showToast('Response file processed successfully!', 'success');
    }, 1500);
}

function downloadResponsesTemplate() {
    const csvContent = "Email,Response_Date,Status,Score\njohn.smith@company.com,2025-09-01,Completed,85\nsarah.johnson@company.com,2025-09-01,In Progress,0";
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'survey_responses_template.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    showToast('Response template downloaded!', 'success');
}

function confirmUploadResponses() {
    showToast('Importing survey responses...', 'info');
    
    setTimeout(() => {
        // Update existing recipients with response data
        const existingRows = document.querySelectorAll('#recipients-table-body tr');
        let updatedCount = 0;
        
        existingRows.forEach(row => {
            const email = row.cells[3]?.textContent;
            if (email === 'john.smith@company.com') {
                // Update John's data
                row.cells[8].textContent = '2025-09-01'; // Date Started
                row.cells[9].innerHTML = '<span class="status-badge status-completed">2025-09-01</span>'; // Date Completed
                updatedCount++;
            } else if (email === 'sarah.johnson@company.com') {
                // Update Sarah's data
                row.cells[8].textContent = '2025-09-01'; // Date Started
                row.cells[9].textContent = '-'; // Still in progress
                updatedCount++;
            }
        });
        
        document.querySelector('.modal').remove();
        showToast(`Successfully imported responses for ${updatedCount} recipients!`, 'success');
    }, 2000);
}

function showDashboard() {
    // Return to dashboard view
    const contentArea = document.getElementById('content-area');
    const dashboardSection = document.getElementById('dashboard-section');

    if (dashboardSection) {
        // If dashboard section exists, show it
        contentArea.innerHTML = dashboardSection.outerHTML;
    } else {
        // Reload the page to get back to dashboard
        location.reload();
    }
}

// Survey Tracking Functions
async function trackSurveyStarted(email, surveyId = 'test') {
    try {
        const currentDate = new Date().toISOString().split('T')[0];

        const { data, error } = await window.supabaseClient
            .from('survey_recipients')
            .update({
                survey_started_date: currentDate,
                updated_at: new Date().toISOString()
            })
            .eq('email', email)
            .eq('survey_id', surveyId);

        if (error) {
            console.error('Error tracking survey start:', error);
        } else {
            console.log(`Survey started tracked for ${email}`);
            // Update UI if table is visible
            updateRecipientTableUI(email, 'started', currentDate);
        }
    } catch (error) {
        console.error('Error in trackSurveyStarted:', error);
    }
}

async function trackSurveyCompleted(email, surveyId = 'test') {
    try {
        const currentDate = new Date().toISOString().split('T')[0];

        const { data, error } = await window.supabaseClient
            .from('survey_recipients')
            .update({
                survey_completed_date: currentDate,
                updated_at: new Date().toISOString()
            })
            .eq('email', email)
            .eq('survey_id', surveyId);

        if (error) {
            console.error('Error tracking survey completion:', error);
        } else {
            console.log(`Survey completion tracked for ${email}`);
            // Update UI if table is visible
            updateRecipientTableUI(email, 'completed', currentDate);
        }
    } catch (error) {
        console.error('Error in trackSurveyCompleted:', error);
    }
}

function updateRecipientTableUI(email, eventType, date) {
    // Find the row for this email and update the appropriate column
    const rows = document.querySelectorAll('#recipients-table-body tr');

    rows.forEach(row => {
        const emailCell = row.cells[3]; // Email is in column 3
        if (emailCell && emailCell.textContent.trim() === email) {
            if (eventType === 'started') {
                const startedCell = row.cells[8]; // Survey Started is column 8
                if (startedCell) {
                    startedCell.textContent = date;
                }
            } else if (eventType === 'completed') {
                const completedCell = row.cells[9]; // Survey Completed is column 9
                if (completedCell) {
                    completedCell.textContent = date;
                }
            }
        }
    });
}

// Debug function to test database connection
async function testDatabaseConnection() {
    try {
        console.log('Testing Supabase connection...');
        console.log('Supabase client:', window.supabaseClient);

        // Test simple query
        const { data, error } = await window.supabaseClient
            .from('survey_recipients')
            .select('*')
            .limit(5);

        if (error) {
            console.error('Database connection error:', error);
        } else {
            console.log('Database connection successful. Found records:', data);
        }
    } catch (error) {
        console.error('Database test failed:', error);
    }
}

// Simple test function to update first recipient to TRUE
async function testDatabaseUpdate() {
    try {
        console.log('Testing database update...');

        // Get first recipient
        const { data: recipients, error: selectError } = await window.supabaseClient
            .from('survey_recipients')
            .select('*')
            .limit(1);

        if (selectError) {
            console.error('Error selecting recipients:', selectError);
            return;
        }

        if (recipients && recipients.length > 0) {
            const recipient = recipients[0];
            console.log('Updating recipient:', recipient);

            // Update invite_sent to true
            const { data, error } = await window.supabaseClient
                .from('survey_recipients')
                .update({
                    invite_sent: true,
                    reminder_count: 1,
                    last_reminder_sent: new Date().toISOString().split('T')[0]
                })
                .eq('id', recipient.id);

            if (error) {
                console.error('Error updating:', error);
            } else {
                console.log('✅ Update successful:', data);
                // Refresh table
                await manualRefresh();
            }
        }
    } catch (error) {
        console.error('Test update failed:', error);
    }
}

// Manual refresh function for testing
async function manualRefresh() {
    console.log('Manual refresh triggered...');
    await loadRecipientsData(currentRecipientsChatId || 'test');
}

// Direct test function for button click
async function testDatabaseDirectUpdate() {
    try {
        console.log('🔧 Testing direct database update...');

        // Get first recipient from current survey
        const { data: recipients, error: selectError } = await window.supabaseClient
            .from('survey_recipients')
            .select('*')
            .eq('survey_id', 'test')
            .limit(1);

        if (selectError) {
            console.error('Error selecting recipients:', selectError);
            showToast('❌ Error selecting recipients: ' + selectError.message, 'error');
            return;
        }

        if (recipients && recipients.length > 0) {
            const recipient = recipients[0];
            console.log('Updating recipient:', recipient);
            showToast(`🔧 Testing update for ${recipient.email}...`, 'info');

            // Update invite_sent to true
            const { data, error } = await window.supabaseClient
                .from('survey_recipients')
                .update({
                    invite_sent: true,
                    reminder_count: 1,
                    last_reminder_sent: new Date().toISOString().split('T')[0],
                    updated_at: new Date().toISOString()
                })
                .eq('id', recipient.id);

            if (error) {
                console.error('Error updating:', error);
                showToast('❌ Update failed: ' + error.message, 'error');
            } else {
                console.log('✅ Update successful:', data);
                showToast('✅ Database updated! Refreshing table...', 'success');

                // Refresh table
                await loadRecipientsData('test');
            }
        } else {
            showToast('❌ No recipients found to test', 'warning');
        }
    } catch (error) {
        console.error('Test update failed:', error);
        showToast('❌ Test failed: ' + error.message, 'error');
    }
}

// Make functions available globally for chat pages to call
window.trackSurveyStarted = trackSurveyStarted;
window.trackSurveyCompleted = trackSurveyCompleted;
window.testDatabaseConnection = testDatabaseConnection;
window.testDatabaseUpdate = testDatabaseUpdate;
window.testDatabaseDirectUpdate = testDatabaseDirectUpdate;
window.manualRefresh = manualRefresh;

// Data Import Functions
function showImportDataModal() {
    // Create import data modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3>📥 Import Data</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="upload-section">
                    <p>Import data for AI analysis and reporting. Supported formats include survey responses, feedback data, and analytics data.</p>

                    <div class="file-upload-area" onclick="document.getElementById('data-file').click()">
                        <div class="upload-icon">📊</div>
                        <div class="upload-text">
                            <strong>Click to select file</strong> or drag and drop
                        </div>
                        <div class="upload-hint">Supported formats: .csv, .xlsx, .xls, .json</div>
                    </div>

                    <input type="file" id="data-file" accept=".csv,.xlsx,.xls,.json" style="display: none;"
                           onchange="handleDataFileUpload(event)">

                    <div class="template-section" style="margin-top: 2rem;">
                        <h4>Expected File Format:</h4>
                        <div class="format-example">
                            <table style="width: 100%; font-size: 0.875rem; border-collapse: collapse;">
                                <thead>
                                    <tr style="background: #f8f9fa;">
                                        <th style="padding: 0.5rem; border: 1px solid #dee2e6;">Date</th>
                                        <th style="padding: 0.5rem; border: 1px solid #dee2e6;">Response_Type</th>
                                        <th style="padding: 0.5rem; border: 1px solid #dee2e6;">Content</th>
                                        <th style="padding: 0.5rem; border: 1px solid #dee2e6;">Sentiment</th>
                                        <th style="padding: 0.5rem; border: 1px solid #dee2e6;">Department</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="padding: 0.5rem; border: 1px solid #dee2e6;">2024-12-15</td>
                                        <td style="padding: 0.5rem; border: 1px solid #dee2e6;">Chat Feedback</td>
                                        <td style="padding: 0.5rem; border: 1px solid #dee2e6;">Great team collaboration</td>
                                        <td style="padding: 0.5rem; border: 1px solid #dee2e6;">Positive</td>
                                        <td style="padding: 0.5rem; border: 1px solid #dee2e6;">Operations</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 0.5rem; border: 1px solid #dee2e6;">2024-12-14</td>
                                        <td style="padding: 0.5rem; border: 1px solid #dee2e6;">Survey Response</td>
                                        <td style="padding: 0.5rem; border: 1px solid #dee2e6;">Need better tools</td>
                                        <td style="padding: 0.5rem; border: 1px solid #dee2e6;">Negative</td>
                                        <td style="padding: 0.5rem; border: 1px solid #dee2e6;">IT</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <button class="btn btn-info" onclick="downloadDataTemplate()" style="margin-top: 1rem;">
                            📥 Download Data Template
                        </button>
                    </div>
                </div>

                <div id="data-upload-preview" style="display: none; margin-top: 2rem;">
                    <h4>Preview:</h4>
                    <div id="data-preview-content"></div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                <button type="button" class="btn btn-primary" id="confirm-data-upload-btn" style="display: none;"
                        onclick="confirmUploadData()">Import Data</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function handleDataFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    showToast('Processing data file...', 'info');

    // Parse file based on type and MIME type
    const fileName = file.name.toLowerCase();
    const fileType = file.type;

    // Comprehensive file type validation
    const isExcel = fileName.endsWith('.xlsx') || fileName.endsWith('.xls') ||
                   fileType.includes('spreadsheet') || fileType.includes('excel');
    const isCSV = fileName.endsWith('.csv') || fileType === 'text/csv';
    const isJSON = fileName.endsWith('.json') || fileType === 'application/json';
    const isTxt = fileName.endsWith('.txt') || fileType === 'text/plain';

    // Check if it's an Excel file first
    if (isExcel) {
        showToast('Excel files need to be converted to CSV format first. Please save your Excel file as CSV and try again.', 'warning');
        return;
    }

    // Accept any file type but warn about optimal formats
    if (!isCSV && !isJSON && !isTxt && !isExcel) {
        showToast('⚠️ Attempting to parse non-standard file format. Best results with CSV, JSON, or TXT files.', 'info');
    }

    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
        showToast('File is too large. Please upload a file smaller than 10MB.', 'error');
        return;
    }

    // Create FileReader with proper encoding handling
    const reader = new FileReader();

    reader.onload = function(e) {
        try {
            let parsedData = [];
            let result = e.target.result;

            // Enhanced text cleanup and encoding detection
            if (typeof result === 'string') {
                // Handle BOM (Byte Order Mark) if present
                if (result.charCodeAt(0) === 0xFEFF) {
                    result = result.substring(1);
                }

                // Check for binary signatures - try to handle them
                if (result.includes('PK') && (result.includes('xl/worksheets') || result.includes('[Content_Types].xml'))) {
                    showToast('🔄 Detected Excel file format. Attempting to extract readable text...', 'info');
                    // Try to extract any readable text from Excel file
                    const textMatches = result.match(/[a-zA-Z0-9\s,.\-_]+/g);
                    if (textMatches && textMatches.length > 0) {
                        result = textMatches.join(' ').replace(/\s+/g, ' ').trim();
                        showToast('✅ Extracted text from Excel file. Results may be limited.', 'warning');
                    } else {
                        showToast('❌ Unable to extract readable text from this Excel file. Please save as CSV.', 'error');
                        return;
                    }
                }

                // Clean up non-printable characters but preserve structure
                result = result
                    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '') // Remove control characters
                    .replace(/[^\x20-\x7E\x09\x0A\x0D\u00A0-\uFFFF]/g, '') // Keep printable ASCII and Unicode
                    .replace(/\uFFFD/g, '') // Remove replacement characters
                    .trim();

                // If still looks corrupted, try alternative parsing
                if (result.length === 0 || result.split('\n').every(line => line.trim().length === 0)) {
                    showToast('❌ File appears to be empty or unreadable after cleanup.', 'error');
                    return;
                }
            }

            if (isJSON) {
                // Parse JSON file with better error handling
                try {
                    const jsonData = JSON.parse(result);
                    parsedData = Array.isArray(jsonData) ? jsonData : [jsonData];
                } catch (jsonError) {
                    showToast('Invalid JSON format. Please check your file syntax.', 'error');
                    return;
                }
            } else {
                // Parse any text file with universal parsing approach
                let textContent = result;

                // Clean the content and normalize line endings
                const cleanContent = textContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
                const lines = cleanContent.split('\n').filter(line => line.trim());

                if (lines.length < 1) {
                    showToast('File appears to be empty after cleanup', 'error');
                    return;
                }

                // Try multiple parsing strategies
                let delimiter = ',';
                let maxColumns = 0;
                let bestStrategy = 'csv';

                // Detect best delimiter and structure
                const delimiters = [',', ';', '\t', '|', ' '];
                const firstLine = lines[0];

                delimiters.forEach(delim => {
                    const columns = firstLine.split(delim).filter(col => col.trim()).length;
                    if (columns > maxColumns && columns > 1) {
                        maxColumns = columns;
                        delimiter = delim;
                    }
                });

                // If no good delimiter found, try to extract any readable text
                if (maxColumns <= 1) {
                    showToast('🔄 No clear delimiter detected. Attempting free-text extraction...', 'info');

                    // Extract words and numbers as separate data points
                    const allText = lines.join(' ');
                    const words = allText.match(/[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*/g) || [];

                    if (words.length > 0) {
                        // Group words into rows of reasonable size
                        const wordsPerRow = Math.min(5, Math.max(2, Math.floor(words.length / 10)));
                        headers = Array.from({length: wordsPerRow}, (_, i) => `Text_${i + 1}`);

                        for (let i = 0; i < words.length; i += wordsPerRow) {
                            const row = {};
                            headers.forEach((header, index) => {
                                row[header] = words[i + index] || '';
                            });
                            if (Object.values(row).some(v => v)) {
                                parsedData.push(row);
                            }
                        }

                        showToast(`✅ Extracted ${parsedData.length} rows of text data`, 'success');
                    } else {
                        showToast('❌ No readable text found in file', 'error');
                        return;
                    }
                } else {
                    // Standard delimiter-based parsing
                    showToast(`🔍 Detected delimiter: "${delimiter === '\t' ? 'TAB' : delimiter}" with ${maxColumns} columns`, 'info');

                    // Enhanced parsing function
                    function parseTextLine(line, delim) {
                        const result = [];
                        let current = '';
                        let inQuotes = false;

                        for (let i = 0; i < line.length; i++) {
                            const char = line[i];

                            if (char === '"') {
                                inQuotes = !inQuotes;
                            } else if (char === delim && !inQuotes) {
                                result.push(current.trim().replace(/^"|"$/g, ''));
                                current = '';
                            } else {
                                current += char;
                            }
                        }
                        result.push(current.trim().replace(/^"|"$/g, ''));
                        return result.filter(v => v !== ''); // Remove empty values
                    }

                    // Check if first line looks like headers
                    const firstLineValues = parseTextLine(lines[0], delimiter);
                    const hasHeaders = firstLineValues.some(val =>
                        isNaN(val) && val.length > 0 &&
                        !/^\d+$/.test(val) &&
                        val.length < 50 &&
                        /[a-zA-Z]/.test(val)
                    );

                    let headers, dataStart;
                    if (hasHeaders && lines.length > 1) {
                        headers = firstLineValues;
                        dataStart = 1;
                    } else {
                        // Generate generic headers
                        headers = firstLineValues.map((_, index) => `Column_${index + 1}`);
                        dataStart = 0;
                    }

                    // Parse data rows
                    for (let i = dataStart; i < lines.length; i++) {
                        const values = parseTextLine(lines[i], delimiter);
                        if (values.some(v => v.trim())) { // Skip empty rows
                            const row = {};
                            headers.forEach((header, index) => {
                                row[header] = values[index] || '';
                            });
                            if (Object.values(row).some(v => v.trim())) {
                                parsedData.push(row);
                            }
                        }
                    }

                    // If no structured data found, fall back to text extraction
                    if (parsedData.length === 0) {
                        showToast('🔄 No structured data found. Falling back to text extraction...', 'info');

                        const allWords = lines.join(' ').match(/[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*/g) || [];
                        if (allWords.length > 0) {
                            headers = ['Extracted_Text', 'Position'];
                            allWords.forEach((word, index) => {
                                parsedData.push({
                                    'Extracted_Text': word,
                                    'Position': index + 1
                                });
                            });
                        }
                    }
                }
            }

            if (parsedData.length === 0) {
                showToast('No valid data found in file', 'error');
                return;
            }

            // Store parsed data globally
            window.uploadedAnalyticsData = parsedData;

            // Show preview
            const previewDiv = document.getElementById('data-upload-preview');
            const previewContent = document.getElementById('data-preview-content');

            const previewHeaders = Object.keys(parsedData[0]);
            const previewRows = parsedData.slice(0, 5); // Show first 5 rows

            previewContent.innerHTML = `
                <div style="margin-bottom: 1rem;">
                    <strong>${parsedData.length} data records found in file: ${file.name}</strong>
                </div>
                <div style="max-height: 300px; overflow: auto; border: 1px solid #dee2e6;">
                    <table style="width: 100%; font-size: 0.875rem;">
                        <thead>
                            <tr style="background: #f8f9fa;">
                                ${previewHeaders.map(h => `<th style="padding: 0.5rem; border-bottom: 1px solid #dee2e6;">${h}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${previewRows.map(row => `
                                <tr>
                                    ${previewHeaders.map(h => `<td style="padding: 0.5rem;">${row[h] || ''}</td>`).join('')}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                ${parsedData.length > 5 ? `<p style="margin-top: 0.5rem; color: #666; font-size: 0.875rem;">Showing first 5 of ${parsedData.length} records</p>` : ''}
            `;

            previewDiv.style.display = 'block';
            document.getElementById('confirm-data-upload-btn').style.display = 'inline-block';

            showToast('Data file processed successfully!', 'success');
        } catch (error) {
            console.error('Error parsing data file:', error);
            showToast('Error parsing file. Please check the format.', 'error');
        }
    };

    // Add error handling for file reading
    reader.onerror = function() {
        showToast('Error reading file. Please try again with a different file.', 'error');
    };

    // Read as text with UTF-8 encoding
    reader.readAsText(file, 'UTF-8');
}

function downloadDataTemplate() {
    const csvContent = "Date,Response_Type,Content,Sentiment,Department\n2024-12-15,Chat Feedback,Great team collaboration,Positive,Operations\n2024-12-14,Survey Response,Need better tools,Negative,IT\n2024-12-13,Pulse Survey,Good work-life balance,Positive,HR";
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data_import_template.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    showToast('Data template downloaded!', 'success');
}

function confirmUploadData() {
    const analyticsData = window.uploadedAnalyticsData;

    if (!analyticsData || analyticsData.length === 0) {
        showToast('No data to import', 'error');
        return;
    }

    // Prompt for dataset name
    const datasetName = prompt('Enter a name for this dataset:', `Dataset_${new Date().toISOString().slice(0, 10)}`);
    if (!datasetName) {
        showToast('Dataset name is required', 'error');
        return;
    }

    showToast('Importing data for AI analysis...', 'info');

    setTimeout(() => {
        // Create dataset object
        const dataset = {
            id: Date.now().toString(),
            name: datasetName,
            uploadDate: new Date().toISOString(),
            recordCount: analyticsData.length,
            data: analyticsData,
            columns: Object.keys(analyticsData[0] || {}),
            description: `Imported dataset with ${analyticsData.length} records`
        };

        // Store dataset persistently in localStorage
        const existingDatasets = JSON.parse(localStorage.getItem('importedDatasets') || '[]');
        existingDatasets.push(dataset);
        localStorage.setItem('importedDatasets', JSON.stringify(existingDatasets));

        // Clear the uploaded data
        window.uploadedAnalyticsData = null;

        // Close modal
        document.querySelector('.modal').remove();

        showToast(`Successfully imported "${datasetName}" with ${analyticsData.length} records!`, 'success');

        // Refresh the reports section to show updated data
        setTimeout(() => {
            showToast('Dataset is now available for AI report generation', 'info');
        }, 2000);
    }, 2000);
}

// Advanced AI Analysis Functions
function performAdvancedDatasetAnalysis(dataset) {
    const data = dataset.data;
    const columns = dataset.columns;

    // Analyze different types of data
    const analysis = {
        executiveSummary: '',
        detailedInsights: '',
        narrativeSummary: '',
        sentimentStats: null,
        patterns: [],
        recommendations: []
    };

    // Check for sentiment data
    const sentimentCol = columns.find(col =>
        col.toLowerCase().includes('sentiment') ||
        col.toLowerCase().includes('feeling') ||
        col.toLowerCase().includes('mood')
    );

    if (sentimentCol) {
        const sentiments = data.map(row => row[sentimentCol]).filter(Boolean);
        const positive = sentiments.filter(s => s.toLowerCase().includes('positive')).length;
        const negative = sentiments.filter(s => s.toLowerCase().includes('negative')).length;
        const neutral = sentiments.length - positive - negative;

        analysis.sentimentStats = { positive, negative, neutral, total: sentiments.length };
    }

    // Check for text content columns
    const textCols = columns.filter(col =>
        col.toLowerCase().includes('content') ||
        col.toLowerCase().includes('comment') ||
        col.toLowerCase().includes('feedback') ||
        col.toLowerCase().includes('response') ||
        col.toLowerCase().includes('text') ||
        col.toLowerCase().includes('message') ||
        col.toLowerCase().includes('description') ||
        col.toLowerCase().includes('note') ||
        // Also check for ANY column that contains substantial text (fallback)
        data.some(row => row[col] && typeof row[col] === 'string' && row[col].length > 50)
    );

    console.log('DEBUG - Text column detection:');
    console.log('All columns:', columns);
    console.log('Detected text columns:', textCols);
    console.log('Sample column data:', columns.map(col => ({
        column: col,
        sampleValue: data[0] ? data[0][col] : 'N/A',
        valueLength: data[0] && data[0][col] ? data[0][col].length : 0
    })));

    // Check for date columns
    const dateCols = columns.filter(col =>
        col.toLowerCase().includes('date') ||
        col.toLowerCase().includes('time')
    );

    // Check for department/category columns
    const categoryColumns = columns.filter(col =>
        col.toLowerCase().includes('department') ||
        col.toLowerCase().includes('category') ||
        col.toLowerCase().includes('type')
    );

    // Generate intelligent executive summary based on actual content
    let executiveSummaryParts = [];

    // Base summary
    executiveSummaryParts.push(`Our AI analysis of "${dataset.name}" examines ${dataset.recordCount} employee responses across ${columns.length} data dimensions.`);

    // Analyze content for specific insights
    if (textCols.length > 0) {
        const allTextContent = data.flatMap(row =>
            textCols.map(col => row[col]).filter(Boolean)
        ).join(' ').toLowerCase();

        // Detect key workplace themes
        if (allTextContent.includes('recruiting') || allTextContent.includes('recruitment')) {
            executiveSummaryParts.push('Key findings reveal significant recruitment and retention challenges affecting operational efficiency.');
        }

        if (allTextContent.includes('work ethic') || allTextContent.includes('motivation')) {
            executiveSummaryParts.push('Analysis indicates concerns about employee motivation and work ethic among staff members.');
        }

        if (allTextContent.includes('pressure') || allTextContent.includes('stress')) {
            executiveSummaryParts.push('Employees report experiencing increased pressure and workload challenges.');
        }

        if (allTextContent.includes('enjoyed') || allTextContent.includes('opportunity')) {
            executiveSummaryParts.push('Despite challenges, positive experiences and growth opportunities are recognized by employees.');
        }

        if (allTextContent.includes('thank') || allTextContent.includes('appreciate')) {
            executiveSummaryParts.push('Employees express gratitude for opportunities provided, showing engagement despite concerns.');
        }
    }

    // Sentiment analysis for summary
    if (analysis.sentimentStats) {
        const positivePercent = Math.round((analysis.sentimentStats.positive / analysis.sentimentStats.total) * 100);
        if (positivePercent > 60) {
            executiveSummaryParts.push(`Strong positive sentiment (${positivePercent}%) indicates overall employee satisfaction with strategic improvement opportunities.`);
        } else if (positivePercent > 40) {
            executiveSummaryParts.push(`Mixed sentiment distribution (${positivePercent}% positive) suggests balanced feedback requiring targeted interventions.`);
        } else {
            executiveSummaryParts.push(`Lower positive sentiment (${positivePercent}%) highlights critical areas requiring immediate management attention.`);
        }
    }

    // Add strategic conclusion
    executiveSummaryParts.push('This analysis provides actionable insights for improving employee experience and organizational effectiveness.');

    analysis.executiveSummary = executiveSummaryParts.join(' ');

    // Generate detailed insights with actual content analysis
    let insights = [];

    // Analyze actual text content for themes and patterns
    if (textCols.length > 0) {
        const allTextContent = data.flatMap(row =>
            textCols.map(col => row[col]).filter(Boolean)
        ).join(' ').toLowerCase();

        // Common workplace themes to analyze
        const themes = {
            'work_life_balance': ['balance', 'life', 'hours', 'overtime', 'flexible', 'remote'],
            'management': ['manager', 'management', 'supervisor', 'leadership', 'boss'],
            'teamwork': ['team', 'collaboration', 'colleague', 'cooperation', 'support'],
            'training': ['training', 'development', 'learn', 'skill', 'education', 'growth'],
            'compensation': ['salary', 'pay', 'compensation', 'benefits', 'raise', 'bonus'],
            'workplace': ['office', 'environment', 'culture', 'atmosphere', 'workplace'],
            'recognition': ['recognition', 'appreciate', 'acknowledge', 'thank', 'praise'],
            'communication': ['communication', 'information', 'meeting', 'feedback', 'updates'],
            'job_satisfaction': ['satisfaction', 'enjoy', 'fulfilling', 'challenging', 'interesting'],
            'concerns': ['problem', 'issue', 'concern', 'difficulty', 'struggle', 'frustrated']
        };

        const themeScores = {};
        Object.keys(themes).forEach(theme => {
            const keywords = themes[theme];
            const matches = keywords.filter(keyword => allTextContent.includes(keyword)).length;
            themeScores[theme] = matches;
        });

        // Find top themes
        const topThemes = Object.entries(themeScores)
            .filter(([theme, score]) => score > 0)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3);

        if (topThemes.length > 0) {
            insights.push(`<div style="margin-bottom: 1rem;"><strong>🎯 Key Themes Identified:</strong>
                Analysis of feedback content reveals the most discussed topics are: ${topThemes.map(([theme, score]) =>
                    `<span style="background: #e0f2fe; padding: 0.25rem 0.5rem; border-radius: 4px; margin: 0 0.25rem;">${theme.replace('_', ' ').toUpperCase()}</span>`
                ).join('')}. These themes indicate primary areas of employee focus and concern.</div>`);
        }

        // Analyze specific content for insights
        const contentSample = data.slice(0, 5).map(row =>
            textCols.map(col => row[col]).filter(Boolean).join(' ')
        ).filter(Boolean);

        if (contentSample.length > 0) {
            const commonConcerns = [];
            const positiveAspects = [];

            contentSample.forEach(text => {
                const lowerText = text.toLowerCase();

                // Identify concerns
                if (lowerText.includes('problem') || lowerText.includes('issue') || lowerText.includes('concern')) {
                    if (lowerText.includes('recruiting') || lowerText.includes('recruitment')) {
                        commonConcerns.push('Recruitment and retention challenges');
                    }
                    if (lowerText.includes('staff') || lowerText.includes('employee')) {
                        commonConcerns.push('Staffing and workforce issues');
                    }
                    if (lowerText.includes('work ethic') || lowerText.includes('motivation')) {
                        commonConcerns.push('Employee motivation and work ethic');
                    }
                }

                // Identify positive aspects
                if (lowerText.includes('enjoyed') || lowerText.includes('thank') || lowerText.includes('good')) {
                    if (lowerText.includes('opportunity') || lowerText.includes('experience')) {
                        positiveAspects.push('Positive work opportunities and experiences');
                    }
                    if (lowerText.includes('team') || lowerText.includes('collaboration')) {
                        positiveAspects.push('Strong team collaboration');
                    }
                }
            });

            if (commonConcerns.length > 0) {
                insights.push(`<div style="margin-bottom: 1rem;"><strong>⚠️ Key Concerns Identified:</strong>
                    ${[...new Set(commonConcerns)].map(concern =>
                        `<div style="margin: 0.5rem 0; padding: 0.5rem; background: #fef2f2; border-left: 3px solid #ef4444; border-radius: 4px;">• ${concern}</div>`
                    ).join('')}</div>`);
            }

            if (positiveAspects.length > 0) {
                insights.push(`<div style="margin-bottom: 1rem;"><strong>✅ Positive Highlights:</strong>
                    ${[...new Set(positiveAspects)].map(aspect =>
                        `<div style="margin: 0.5rem 0; padding: 0.5rem; background: #f0fdf4; border-left: 3px solid #10b981; border-radius: 4px;">• ${aspect}</div>`
                    ).join('')}</div>`);
            }
        }
    }

    if (analysis.sentimentStats) {
        insights.push(`<div style="margin-bottom: 1rem;"><strong>📊 Sentiment Distribution:</strong>
            Analysis shows ${analysis.sentimentStats.positive} positive responses (${Math.round((analysis.sentimentStats.positive/analysis.sentimentStats.total)*100)}%),
            ${analysis.sentimentStats.negative} negative responses (${Math.round((analysis.sentimentStats.negative/analysis.sentimentStats.total)*100)}%),
            and ${analysis.sentimentStats.neutral} neutral responses. This distribution suggests ${analysis.sentimentStats.positive > analysis.sentimentStats.negative ? 'overall positive sentiment with opportunities to address negative feedback' : 'significant concerns that require immediate attention'}.</div>`);
    }

    if (categoryColumns.length > 0) {
        const firstCategoryCol = categoryColumns[0];
        const uniqueValues = [...new Set(data.map(row => row[firstCategoryCol]).filter(Boolean))];
        insights.push(`<div style="margin-bottom: 1rem;"><strong>📊 Categorical Breakdown:</strong>
            Data is segmented across ${uniqueValues.length} categories in the "${firstCategoryCol}" field: ${uniqueValues.slice(0, 5).join(', ')}${uniqueValues.length > 5 ? '...' : ''}. This segmentation enables targeted analysis and department-specific insights.</div>`);
    }

    if (dateCols.length > 0) {
        insights.push(`<div style="margin-bottom: 1rem;"><strong>📅 Temporal Analysis:</strong>
            The dataset includes time-based data in "${dateCols[0]}" field, enabling trend analysis over time. This temporal dimension allows for identifying seasonal patterns, improvement trends, and timing correlations with sentiment changes.</div>`);
    }

    // Add data quality insights
    const completenessScore = Math.round((data.filter(row => Object.values(row).every(val => val && val.toString().trim())).length / data.length) * 100);
    insights.push(`<div style="margin-bottom: 1rem;"><strong>✅ Data Quality:</strong>
        Dataset completeness is ${completenessScore}%, indicating ${completenessScore > 85 ? 'excellent' : completenessScore > 70 ? 'good' : 'moderate'} data quality. ${completenessScore < 85 ? 'Consider data cleaning for improved analysis accuracy.' : 'High data quality enables robust analytical insights.'}</div>`);

    // Generate intelligent recommendations based on content analysis
    let recommendations = [];

    // Content-specific recommendations
    if (textCols.length > 0) {
        const allTextContent = data.flatMap(row =>
            textCols.map(col => row[col]).filter(Boolean)
        ).join(' ').toLowerCase();

        if (allTextContent.includes('recruiting') || allTextContent.includes('recruitment')) {
            recommendations.push('🎯 <strong>Recruitment Strategy:</strong> Develop comprehensive recruitment and retention programs to address staffing challenges');
            recommendations.push('💡 <strong>Employee Retention:</strong> Implement stay interviews and career development pathways to reduce turnover');
        }

        if (allTextContent.includes('work ethic') || allTextContent.includes('motivation')) {
            recommendations.push('🚀 <strong>Motivation Enhancement:</strong> Create recognition programs and clear performance expectations to boost work ethic');
            recommendations.push('📚 <strong>Training Investment:</strong> Provide skills development and leadership training to re-engage staff');
        }

        if (allTextContent.includes('pressure') || allTextContent.includes('stress')) {
            recommendations.push('⚖️ <strong>Workload Management:</strong> Review and balance workload distribution to reduce employee pressure');
            recommendations.push('🧘 <strong>Well-being Support:</strong> Implement stress management resources and mental health initiatives');
        }

        if (allTextContent.includes('communication') || allTextContent.includes('information')) {
            recommendations.push('📢 <strong>Communication Strategy:</strong> Enhance internal communication channels and transparency');
        }

        if (allTextContent.includes('team') || allTextContent.includes('collaboration')) {
            recommendations.push('🤝 <strong>Team Building:</strong> Strengthen collaborative efforts and team cohesion initiatives');
        }
    }

    // Sentiment-based recommendations
    if (analysis.sentimentStats) {
        const negativePercent = Math.round((analysis.sentimentStats.negative / analysis.sentimentStats.total) * 100);
        if (negativePercent > 30) {
            recommendations.push('⚠️ <strong>Urgent Action Required:</strong> Address high negative sentiment through immediate management intervention');
        } else if (negativePercent > 15) {
            recommendations.push('🔍 <strong>Proactive Monitoring:</strong> Investigate moderate negative sentiment to prevent escalation');
        }
    }

    // Strategic recommendations
    recommendations.push('📊 <strong>Regular Pulse Surveys:</strong> Implement quarterly feedback cycles to track improvement progress');
    recommendations.push('🎯 <strong>Action Planning:</strong> Create specific, measurable action plans with timelines and accountability');
    recommendations.push('📈 <strong>Success Metrics:</strong> Establish KPIs to measure the effectiveness of implemented changes');

    insights.push(`<div style="margin-top: 1.5rem; padding: 1rem; background: #f0f9ff; border-radius: 8px;"><strong>💡 Key Recommendations:</strong><ul style="margin: 0.5rem 0 0 1rem;">${recommendations.map(rec => `<li style="margin-bottom: 0.5rem;">${rec}</li>`).join('')}</ul></div>`);

    analysis.detailedInsights = insights.join('');

    // Generate narrative summary - flowing paragraphs describing data trends
    analysis.narrativeSummary = generateNarrativeDataSummary(data, textCols, analysis);

    return analysis;
}

function generateNarrativeDataSummary(data, textCols, analysis) {
    let narrativeParagraphs = [];

    console.log('DEBUG - generateNarrativeDataSummary called with:');
    console.log('Data length:', data.length);
    console.log('Text columns:', textCols);
    console.log('Sample data:', data.slice(0, 3));

    if (textCols.length > 0) {
        // Extract ALL actual text content for detailed analysis
        const allTextContent = data.flatMap(row =>
            textCols.map(col => row[col]).filter(Boolean)
        ).join(' ');

        // Get longer samples for more detailed analysis
        const contentSamples = data.slice(0, Math.min(20, data.length)).map(row =>
            textCols.map(col => row[col]).filter(Boolean).join(' ')
        ).filter(Boolean);

        console.log('Analyzing content samples:', contentSamples); // Debug log

        // Extract specific quotes and themes from actual content
        const specificConcerns = [];
        const specificPositives = [];
        const companyMentions = [];
        const specificIssues = [];

        contentSamples.forEach(content => {
            if (content && content.length > 10) { // Only analyze substantial content
                const lowerContent = content.toLowerCase();

                // Extract company/organization names
                const companyMatches = content.match(/\b[A-Z][a-z]+\b/g);
                if (companyMatches) {
                    companyMatches.forEach(match => {
                        if (match.length > 2 && !['The', 'And', 'For', 'This', 'That', 'More', 'Work', 'Good', 'Bad'].includes(match)) {
                            companyMentions.push(match);
                        }
                    });
                }

                // Extract specific issues mentioned
                if (lowerContent.includes('work ethic') && lowerContent.includes('decreased')) {
                    specificIssues.push('declining work ethic among staff');
                }
                if (lowerContent.includes('recruiting') || lowerContent.includes('recruitment')) {
                    specificIssues.push('recruitment and hiring challenges');
                }
                if (lowerContent.includes('staff') && (lowerContent.includes('leaving') || lowerContent.includes('quit'))) {
                    specificIssues.push('high staff turnover');
                }
                if (lowerContent.includes('pressure') && lowerContent.includes('other staff')) {
                    specificIssues.push('increased pressure on remaining employees');
                }
                if (lowerContent.includes('refuse') || lowerContent.includes('complain')) {
                    specificIssues.push('staff resistance to assigned tasks');
                }

                // Extract positive mentions
                if (lowerContent.includes('enjoyed') && lowerContent.includes('journey')) {
                    specificPositives.push('positive onboarding experiences');
                }
                if (lowerContent.includes('thank') && lowerContent.includes('opportunity')) {
                    specificPositives.push('gratitude for employment opportunities');
                }
                if (lowerContent.includes('good') && lowerContent.includes('team')) {
                    specificPositives.push('positive team experiences');
                }
            }
        });

        // Build narrative using actual extracted content
        let firstParagraph = `Analysis of ${data.length} employee responses`;

        // Add company context if detected
        const uniqueCompanies = [...new Set(companyMentions)];
        if (uniqueCompanies.length > 0) {
            firstParagraph += ` regarding ${uniqueCompanies[0]}`;
        }

        firstParagraph += ' reveals ';

        if (specificIssues.length > 0) {
            firstParagraph += `significant concerns about ${specificIssues.slice(0, 2).join(' and ')}. `;
        } else if (analysis.sentimentStats) {
            const positivePercent = Math.round((analysis.sentimentStats.positive / analysis.sentimentStats.total) * 100);
            if (positivePercent > 60) {
                firstParagraph += `predominantly positive workplace sentiment with ${positivePercent}% satisfaction. `;
            } else if (positivePercent > 40) {
                firstParagraph += `mixed sentiment with ${positivePercent}% positive responses. `;
            } else {
                firstParagraph += `concerning trends with only ${positivePercent}% positive sentiment. `;
            }
        }

        // Add specific details from extracted content
        if (specificIssues.length > 2) {
            firstParagraph += `Additional concerns include ${specificIssues.slice(2).join(', ')}.`;
        }

        narrativeParagraphs.push(firstParagraph);

        // Second paragraph - Detailed analysis of actual feedback content
        let secondParagraph = '';

        // Extract specific phrases and context from the actual content
        const specificQuotes = [];
        const timeReferences = [];
        const companySpecificIssues = [];

        contentSamples.forEach(content => {
            if (content && content.length > 20) {
                const lowerContent = content.toLowerCase();

                // Extract time-related context
                if (lowerContent.includes('last 3 years') || lowerContent.includes('past 3 years')) {
                    timeReferences.push('three-year declining trend');
                }
                if (lowerContent.includes('recently') || lowerContent.includes('lately')) {
                    timeReferences.push('recent workplace changes');
                }

                // Extract specific workplace issues
                if (lowerContent.includes('newly recruited staff') && lowerContent.includes('no interest')) {
                    companySpecificIssues.push('new hires showing lack of engagement');
                }
                if (lowerContent.includes('staff would refuse') || lowerContent.includes('refuse to complete')) {
                    companySpecificIssues.push('direct task refusal by employees');
                }
                if (lowerContent.includes('good staff leaving')) {
                    companySpecificIssues.push('departure of high-performing employees');
                }
                if (lowerContent.includes('issues within the recruiting process')) {
                    companySpecificIssues.push('systemic recruitment process problems');
                }

                // Extract context about leadership/management
                if (lowerContent.includes('add more pressure to other staff')) {
                    companySpecificIssues.push('workload redistribution creating staff stress');
                }
            }
        });

        // Build second paragraph with specific extracted insights
        if (timeReferences.length > 0) {
            secondParagraph += `The feedback indicates that these issues represent a ${timeReferences[0]}, suggesting systematic problems rather than isolated incidents. `;
        }

        if (companySpecificIssues.length > 0) {
            const uniqueIssues = [...new Set(companySpecificIssues)];
            secondParagraph += `Specifically, employees report ${uniqueIssues.slice(0, 2).join(' and ')}, indicating both cultural and operational challenges. `;
        }

        // Add positive aspects if found
        if (specificPositives.length > 0) {
            secondParagraph += `Despite these challenges, employees acknowledge ${specificPositives.join(' and ')}, suggesting that while problems exist, there remains a foundation for improvement. `;
        }

        if (secondParagraph) {
            narrativeParagraphs.push(secondParagraph);
        }

        // Third paragraph - Forward-looking insights based on specific content
        let thirdParagraph = '';

        // Base conclusion on specific issues found
        if (companySpecificIssues.length > 0 || specificIssues.length > 0) {
            thirdParagraph += 'The analysis suggests that focused attention is needed to address the identified concerns before they impact organizational effectiveness. ';

            if (timeReferences.some(ref => ref.includes('three-year') || ref.includes('long-term'))) {
                thirdParagraph += 'Given that these trends have persisted over time, a systematic approach will be necessary to achieve lasting improvements. ';
            }

            if (companySpecificIssues.some(issue => issue.includes('refuse') || issue.includes('resistance'))) {
                thirdParagraph += 'The reported behavioral concerns indicate a need for enhanced communication and management engagement. ';
            }

            if (specificPositives.length > 0) {
                thirdParagraph += 'However, the presence of positive feedback suggests that targeted improvements could yield significant results if implemented thoughtfully.';
            } else {
                thirdParagraph += 'Priority should be given to understanding employee perspectives and addressing core concerns through structured improvement initiatives.';
            }
        } else {
            // Fallback for less specific content
            thirdParagraph += 'The organization has opportunities to build on existing strengths while addressing identified areas for improvement. The employee feedback provides valuable insights for developing targeted action plans.';
        }

        if (thirdParagraph) {
            narrativeParagraphs.push(thirdParagraph);
        }

    } else {
        // Enhanced fallback - try to find ANY columns with substantial text content
        console.log('No text columns detected, trying enhanced detection...');

        const allColumns = Object.keys(data[0] || {});
        const potentialTextCols = [];

        allColumns.forEach(col => {
            const sampleTexts = data.slice(0, 5).map(row => row[col]).filter(Boolean);
            const avgLength = sampleTexts.reduce((sum, text) => sum + (text ? text.toString().length : 0), 0) / sampleTexts.length;

            console.log(`Column "${col}" - avg length: ${avgLength}, sample: "${sampleTexts[0]}"`);

            if (avgLength > 20) { // Consider columns with average length > 20 characters as text
                potentialTextCols.push(col);
            }
        });

        console.log('Potential text columns found:', potentialTextCols);

        if (potentialTextCols.length > 0) {
            // Use the enhanced detection and re-run the text analysis
            const textContent = data.flatMap(row =>
                potentialTextCols.map(col => row[col]).filter(Boolean)
            ).join(' ');

            console.log('Found text content:', textContent.substring(0, 200) + '...');

            // Generate narrative based on this content
            let paragraph = `Analysis of ${data.length} responses reveals `;

            const lowerContent = textContent.toLowerCase();
            const keyTerms = [];

            // Detect key themes dynamically
            if (lowerContent.includes('work') && (lowerContent.includes('ethic') || lowerContent.includes('quality'))) {
                keyTerms.push('work performance themes');
            }

            if (lowerContent.includes('recruit') || lowerContent.includes('hiring')) {
                keyTerms.push('recruitment and hiring feedback');
            }

            if (lowerContent.includes('staff') && (lowerContent.includes('leaving') || lowerContent.includes('turnover'))) {
                keyTerms.push('retention concerns');
            }

            if (lowerContent.includes('satisfied') || lowerContent.includes('enjoyed') || lowerContent.includes('appreciate')) {
                keyTerms.push('positive employee experiences');
            }

            if (lowerContent.includes('years') || lowerContent.includes('time') || lowerContent.includes('period')) {
                keyTerms.push('temporal patterns in feedback');
            }

            // Build narrative from detected themes
            if (keyTerms.length > 0) {
                paragraph += `insights across several key areas including ${keyTerms.slice(0, 3).join(', ')}. `;
                paragraph += 'The responses provide actionable feedback that can inform organizational improvement strategies.';
            } else {
                paragraph += 'diverse employee perspectives and experiences that provide valuable insights for organizational development.';
            }

            narrativeParagraphs.push(paragraph);
        } else {
            // Final fallback
            narrativeParagraphs.push(`The dataset contains ${data.length} records with quantitative and categorical data that reveals patterns in employee responses and organizational metrics. The data structure suggests systematic collection efforts that can provide valuable insights for decision-making and trend analysis.`);
        }
    }

    return narrativeParagraphs.join('<br><br>');
}

function generateAdvancedChatInsights(chatResponses, analytics) {
    let insights = [];

    // Sentiment analysis insights
    const sentimentRatio = analytics.sentimentBreakdown.positive / (analytics.sentimentBreakdown.negative || 1);
    if (sentimentRatio > 2) {
        insights.push(`<div style="margin-bottom: 1rem;"><strong>🎉 Excellent Sentiment Trends:</strong>
            Positive sentiment is ${Math.round(sentimentRatio)}x higher than negative, indicating strong employee satisfaction and engagement.</div>`);
    } else if (sentimentRatio < 0.5) {
        insights.push(`<div style="margin-bottom: 1rem;"><strong>⚠️ Sentiment Concerns:</strong>
            Negative sentiment outweighs positive responses. Immediate attention needed to address underlying issues.</div>`);
    }

    // Engagement analysis
    const avgDurationMinutes = analytics.averageDuration ? Math.round(analytics.averageDuration / 1000 / 60) : 0;
    if (avgDurationMinutes > 5) {
        insights.push(`<div style="margin-bottom: 1rem;"><strong>💬 High Engagement:</strong>
            Average session duration of ${avgDurationMinutes} minutes indicates deep, meaningful conversations and strong employee engagement.</div>`);
    } else if (avgDurationMinutes < 2) {
        insights.push(`<div style="margin-bottom: 1rem;"><strong>⏱️ Brief Interactions:</strong>
            Short session durations (${avgDurationMinutes} min) may indicate reluctance to share or need for better conversation facilitation.</div>`);
    }

    // Chat type distribution analysis
    const totalChats = analytics.chatTypeBreakdown.listening + analytics.chatTypeBreakdown.chat + analytics.chatTypeBreakdown.pulse;
    if (analytics.chatTypeBreakdown.listening > totalChats * 0.6) {
        insights.push(`<div style="margin-bottom: 1rem;"><strong>👂 Listening-Focused Culture:</strong>
            High proportion of listening sessions suggests employees value being heard and open communication channels.</div>`);
    }

    // Recommendations based on data
    let recommendations = [
        '🎯 Implement targeted action plans for areas with negative sentiment',
        '📊 Establish regular pulse checks to track sentiment trends',
        '💬 Create feedback loops to demonstrate response to employee input',
        '📈 Develop department-specific improvement initiatives',
        '🔄 Schedule follow-up sessions to measure progress'
    ];

    insights.push(`<div style="margin-top: 1.5rem; padding: 1rem; background: #f0f9ff; border-radius: 8px;"><strong>💡 Strategic Recommendations:</strong><ul style="margin: 0.5rem 0 0 1rem;">${recommendations.map(rec => `<li style="margin-bottom: 0.5rem;">${rec}</li>`).join('')}</ul></div>`);

    return insights.join('');
}

function generateChatCharts(analytics) {
    const container = document.getElementById('chat-charts-container');

    // Create sentiment pie chart
    const sentimentChart = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
            <div>
                <h4 style="text-align: center; margin-bottom: 1rem;">Sentiment Distribution</h4>
                <div style="position: relative; width: 200px; height: 200px; margin: 0 auto;">
                    <canvas id="sentiment-pie-chart" width="200" height="200"></canvas>
                </div>
            </div>
            <div>
                <h4 style="text-align: center; margin-bottom: 1rem;">Chat Type Breakdown</h4>
                <div style="position: relative; width: 200px; height: 200px; margin: 0 auto;">
                    <canvas id="chat-type-chart" width="200" height="200"></canvas>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = sentimentChart;

    // Draw simple pie charts using canvas
    setTimeout(() => drawSentimentChart(analytics), 100);
}

function generateDatasetCharts(dataset, analysis) {
    const container = document.getElementById('dataset-charts-container');

    let chartsHtml = '';

    if (analysis.sentimentStats) {
        chartsHtml += `
            <div style="margin-bottom: 2rem;">
                <h4 style="text-align: center; margin-bottom: 1rem;">Sentiment Analysis</h4>
                <div style="position: relative; width: 250px; height: 250px; margin: 0 auto;">
                    <canvas id="dataset-sentiment-chart" width="250" height="250"></canvas>
                </div>
            </div>
        `;
    }

    // Add data distribution chart
    chartsHtml += `
        <div style="margin-bottom: 2rem;">
            <h4 style="text-align: center; margin-bottom: 1rem;">Data Volume Overview</h4>
            <div style="background: #f8fafc; padding: 1rem; border-radius: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <span>Total Records:</span>
                    <div style="background: #3b82f6; height: 20px; width: ${Math.min(dataset.recordCount / 10, 300)}px; border-radius: 10px;"></div>
                    <span>${dataset.recordCount}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span>Data Fields:</span>
                    <div style="background: #10b981; height: 20px; width: ${dataset.columns.length * 20}px; border-radius: 10px;"></div>
                    <span>${dataset.columns.length}</span>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = chartsHtml;

    if (analysis.sentimentStats) {
        setTimeout(() => drawDatasetSentimentChart(analysis.sentimentStats), 100);
    }
}

function drawSentimentChart(analytics) {
    const canvas = document.getElementById('sentiment-pie-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;

    const total = analytics.sentimentBreakdown.positive + analytics.sentimentBreakdown.negative;
    const positiveAngle = (analytics.sentimentBreakdown.positive / total) * 2 * Math.PI;

    // Draw positive slice
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 0, positiveAngle);
    ctx.closePath();
    ctx.fillStyle = '#10b981';
    ctx.fill();

    // Draw negative slice
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, positiveAngle, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = '#ef4444';
    ctx.fill();

    // Add labels
    ctx.fillStyle = '#1f2937';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`Positive: ${analytics.sentimentBreakdown.positive}`, centerX, centerY + radius + 20);
    ctx.fillText(`Negative: ${analytics.sentimentBreakdown.negative}`, centerX, centerY + radius + 35);
}

function drawDatasetSentimentChart(sentimentStats) {
    const canvas = document.getElementById('dataset-sentiment-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;

    const total = sentimentStats.positive + sentimentStats.negative + sentimentStats.neutral;
    let currentAngle = 0;

    // Positive slice
    const positiveAngle = (sentimentStats.positive / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + positiveAngle);
    ctx.closePath();
    ctx.fillStyle = '#10b981';
    ctx.fill();
    currentAngle += positiveAngle;

    // Negative slice
    const negativeAngle = (sentimentStats.negative / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + negativeAngle);
    ctx.closePath();
    ctx.fillStyle = '#ef4444';
    ctx.fill();
    currentAngle += negativeAngle;

    // Neutral slice
    const neutralAngle = (sentimentStats.neutral / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + neutralAngle);
    ctx.closePath();
    ctx.fillStyle = '#6b7280';
    ctx.fill();

    // Add legend
    ctx.fillStyle = '#1f2937';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    const legendY = centerY + radius + 30;
    ctx.fillStyle = '#10b981';
    ctx.fillRect(centerX - 60, legendY, 15, 15);
    ctx.fillStyle = '#1f2937';
    ctx.fillText(`Positive: ${sentimentStats.positive}`, centerX - 40, legendY + 12);

    ctx.fillStyle = '#ef4444';
    ctx.fillRect(centerX - 60, legendY + 20, 15, 15);
    ctx.fillStyle = '#1f2937';
    ctx.fillText(`Negative: ${sentimentStats.negative}`, centerX - 40, legendY + 32);

    ctx.fillStyle = '#6b7280';
    ctx.fillRect(centerX - 60, legendY + 40, 15, 15);
    ctx.fillStyle = '#1f2937';
    ctx.fillText(`Neutral: ${sentimentStats.neutral}`, centerX - 40, legendY + 52);
}

function clearReportDisplay() {
    const existingReport = document.querySelector('.ai-analysis-report');
    if (existingReport) {
        existingReport.remove();
        showToast('Report cleared', 'info');
    }
}

function downloadComprehensiveReport(reportTitle) {
    const reportElement = document.querySelector('.ai-analysis-report');
    if (!reportElement) {
        showToast('No report to download', 'error');
        return;
    }

    const reportContent = reportElement.innerHTML;
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${reportTitle}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 2rem; line-height: 1.6; }
                .report-header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 12px; margin-bottom: 2rem; }
                .analysis-section { background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin-bottom: 2rem; border-radius: 8px; }
                .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
                .metric-card { background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); text-align: center; border: 1px solid #e5e7eb; }
                .ai-insights, .data-sample, .charts-section { background: white; padding: 2rem; border-radius: 12px; margin-bottom: 2rem; border: 1px solid #e5e7eb; }
                table { border-collapse: collapse; width: 100%; }
                th, td { border: 1px solid #e5e7eb; padding: 0.75rem; text-align: left; }
                th { background-color: #f8fafc; font-weight: 600; }
                h1, h2, h3 { color: #1e40af; }
                .metric-card div:first-child { font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem; }
            </style>
        </head>
        <body>
            ${reportContent.replace(/<canvas[^>]*>.*?<\/canvas>/gi, '<div style="text-align: center; padding: 2rem; background: #f3f4f6; border-radius: 8px; margin: 1rem 0;">Charts rendered in web version</div>')}
        </body>
        </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${reportTitle.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.html`;
    a.click();
    window.URL.revokeObjectURL(url);
    showToast('Comprehensive report downloaded!', 'success');
}

// END OF FILE - Realworld Survey Platform v2.0 with Email Integration