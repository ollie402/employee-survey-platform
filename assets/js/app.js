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

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    let userType = null;
    for (const [key, user] of Object.entries(users)) {
        if (user.email === email) {
            userType = key;
            break;
        }
    }
    
    if (userType) {
        handleLogin(userType);
    } else {
        showToast('Invalid credentials. Please use the demo accounts provided.', 'error');
    }
});

function handleLogin(userType) {
    const loginBtn = document.getElementById('login-btn');
    
    loginBtn.classList.add('loading');
    loginBtn.disabled = true;
    
    setTimeout(() => {
        currentUser = users[userType];
        
        // Apply organization-specific branding
        applyOrganizationBranding(currentUser);
        
        updateUserInterface();
        showApplication();
        
        loginBtn.classList.remove('loading');
        loginBtn.disabled = false;
        
        showToast(`Welcome back, ${currentUser.name}!`, 'success');
    }, 1500);
}

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
    allSections.forEach(section => {
        if (currentUser.sections.includes(section.id)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function showApplication() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
}

// Navigation functionality
function showSection(sectionName) {
    const sections = document.querySelectorAll('[id$="-section"]');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    const activeItem = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (activeItem) {
        activeItem.classList.add('active');
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

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
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

function createOrganization(event) {
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
        created: new Date().toLocaleDateString(),
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
    
    // Store organization with branding
    if (!appState.organizations) {
        appState.organizations = [];
    }
    appState.organizations.push(orgData);
    
    // Save to localStorage
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
            <button class="btn btn-secondary btn-sm" onclick="handleEditOrganization('${orgData.name}')">Edit</button>
            <button class="btn btn-warning btn-sm" onclick="handleSuspendOrganization('${orgData.name}')">Suspend</button>
            <button class="btn btn-danger btn-sm" onclick="handleDeleteOrganization('${orgData.name}')">Delete</button>
        </td>
    `;
    newRow.onclick = () => showOrganizationDetails(orgData.name);
    table.appendChild(newRow);
    
    event.target.closest('.modal').remove();
    showToast(`Organization "${orgData.name}" created successfully with custom branding!`, 'success');
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
    const chatLink = window.location.origin + '/chat.html?' + params.toString();
    
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
    
    // Close current modal
    event.target.closest('.modal').remove();
    
    // Show modal with generated link
    const linkModal = document.createElement('div');
    linkModal.className = 'modal';
    linkModal.innerHTML = `
        <div class="modal-content" style="max-width: 700px;">
            <div class="modal-header">
                <h3>Chat Link Generated Successfully!</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div>
                <div class="alert alert-success" style="margin-bottom: 1.5rem;">
                    <strong>✓ Chat link created for:</strong> ${sessionName}
                </div>
                
                <div class="form-group">
                    <label class="form-label">Share this link with participants:</label>
                    <div style="display: flex; gap: 0.5rem;">
                        <input type="text" id="generated-link" class="form-input" value="${chatLink}" readonly style="font-family: monospace; font-size: 0.875rem;">
                        <button class="btn btn-primary" onclick="copyLinkToClipboard()">Copy</button>
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="form-label">QR Code (for easy mobile access):</label>
                    <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                        <div id="qr-placeholder" style="width: 200px; height: 200px; margin: 0 auto; background: var(--bg-secondary); display: flex; align-items: center; justify-content: center; border-radius: 8px;">
                            <span style="color: var(--text-secondary);">QR Code Preview</span>
                        </div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem;">
                    <button class="btn btn-secondary" onclick="testChatLink('${chatLink}')">
                        <span>🧪</span> Test Link
                    </button>
                    <button class="btn btn-success" id="email-chat-link-btn">
                        <span>📧</span> Email Link to Me
                    </button>
                </div>
                
                <div class="alert alert-info" style="margin-top: 1.5rem;">
                    <strong>ℹ️ Note:</strong> This link ${expiry === 'never' ? 'will never expire' : 'will expire in ' + expiry}. 
                    All responses will be collected in the Chat Feedback section.
                </div>
                
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem;">
                    <button class="btn btn-secondary" onclick="generateAnotherLink()">Generate Another</button>
                    <button class="btn btn-primary" onclick="this.closest('.modal').remove()">Done</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(linkModal);
    
    // Add email functionality to the button
    document.getElementById('email-chat-link-btn').onclick = () => emailChatLink(chatSessionData);
    
    // Store the session data (in real app, this would go to a database)
    if (!window.chatSessions) {
        window.chatSessions = [];
    }
    window.chatSessions.push(chatSessionData);
    
    showToast('Chat link generated successfully!', 'success');
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

function generateAIReport() {
    showToast('Generating AI report... This may take a few moments.', 'info');
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
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3>${userName} - User Details</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                    <div>
                        <h4>User Information</h4>
                        <div style="display: grid; gap: 1rem; margin: 1rem 0;">
                            <div><strong>Name:</strong> ${userName}</div>
                            <div><strong>Email:</strong> ${userName.toLowerCase().replace(' ', '.')}@company.com</div>
                            <div><strong>Role:</strong> Administrator</div>
                            <div><strong>Status:</strong> <span class="tag tag-active">Active</span></div>
                            <div><strong>Joined:</strong> June 12, 2024</div>
                            <div><strong>Last Login:</strong> 2 hours ago</div>
                        </div>
                    </div>
                    <div>
                        <h4>Activity Summary</h4>
                        <div class="dashboard-grid">
                            <div class="stat-card">
                                <div class="stat-value">23</div>
                                <div class="stat-label">Surveys Created</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-value">156</div>
                                <div class="stat-label">Logins This Month</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 2rem;">
                    <h4>Permissions</h4>
                    <div style="display: grid; gap: 0.5rem;">
                        <label class="checkbox-label"><input type="checkbox" checked disabled> Create Surveys</label>
                        <label class="checkbox-label"><input type="checkbox" checked disabled> View Analytics</label>
                        <label class="checkbox-label"><input type="checkbox" checked disabled> Manage Participants</label>
                        <label class="checkbox-label"><input type="checkbox" disabled> Admin Functions</label>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem;">
                    <button class="btn btn-secondary" onclick="this.closest('.modal').remove()">Close</button>
                    <button class="btn btn-primary" onclick="editUser('${userName}')">Edit User</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
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
                        <label class="form-label">Access Level</label>
                        <select name="access" class="form-select" required>
                            <option value="">Select Access</option>
                            <option value="Start Listening">Start Listening</option>
                            <option value="Keep Listening">Keep Listening</option>
                            <option value="Start + Keep Listening">Start + Keep Listening</option>
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

// UPDATED: Create User function with email integration
async function createUser(event) {
    event.preventDefault();
    
    // Get the form data
    const formData = new FormData(event.target);
    const userData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        name: `${formData.get('firstName')} ${formData.get('lastName')}`,
        email: formData.get('email'),
        organization: formData.get('organization'),
        access: formData.get('access'),
        sendInvite: formData.get('sendInvite') === 'on'
    };

    try {
        // Save user to database
        const savedUser = await saveUser(userData);
        console.log('User saved to database:', savedUser);
        
        // Add to users table (UI update)
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
    } catch (error) {
        console.error('Error saving user to database:', error);
        showToast(`❌ Failed to create user: ${error.message}`, 'error');
        event.target.closest('.modal').remove();
        return;
    }
    
    // NEW: Send invitation email if checkbox was checked
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
                    temporaryPassword: 'Welcome123!' // In real app, generate random password
                }),
            });

            if (emailResponse.ok) {
                showToast(`✅ User created and invitation email sent to ${userData.email}!`, 'success');
            } else {
                showToast(`⚠️ User created but email failed. Use "Resend Invite" button.`, 'warning');
            }
        } catch (error) {
            console.error('Failed to send invitation:', error);
            showToast(`⚠️ User created but email failed. Use "Resend Invite" button.`, 'warning');
        }
    } else {
        showToast(`✅ User "${userData.name}" created successfully!`, 'success');
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

function handleDeleteOrganization(orgName) {
    if (confirm(`Are you sure you want to delete "${orgName}"? This action cannot be undone and will remove all associated data.`)) {
        // Find and remove the row
        const table = document.querySelector('#organizations-table tbody');
        const rows = table.querySelectorAll('tr');
        rows.forEach(row => {
            if (row.cells[0].textContent === orgName) {
                row.remove();
            }
        });
        showToast(`Organization "${orgName}" has been deleted.`, 'success');
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
                    <input type="email" name="email" class="form-input" value="${userName.toLowerCase().replace(' ', '.')}@company.com" required>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div class="form-group">
                        <label class="form-label">Access Level</label>
                        <select name="access" class="form-select">
                            <option value="Start Listening">Start Listening</option>
                            <option value="Keep Listening">Keep Listening</option>
                            <option value="Start + Keep Listening" selected>Start + Keep Listening</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Status</label>
                        <select name="status" class="form-select">
                            <option value="Active" selected>Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Pending">Pending</option>
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

function handleRemoveUser(userName) {
    if (confirm(`Are you sure you want to remove "${userName}"? This will permanently delete their account and cannot be undone.`)) {
        const table = document.querySelector('#users-table tbody');
        const rows = table.querySelectorAll('tr');
        rows.forEach(row => {
            if (row.cells[1].textContent === userName) {
                row.remove();
            }
        });
        showToast(`User "${userName}" has been removed.`, 'success');
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
        if (row.cells[1].textContent === userName) {
            userEmail = row.cells[2].textContent;
            organization = row.cells[3].textContent;
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

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    showSection('dashboard');
    initializeBrandingListeners();
    loadBrandingFromStorage();  // Load saved branding on page load
    initializeColorSync();       // Initialize color input synchronization
    
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
        sidebar.classList.add('collapsed');
    }
});

// END OF FILE - Realworld Survey Platform v2.0 with Email Integration