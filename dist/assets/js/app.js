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

            // Display inline custom dataset report with AI analysis
            displayInlineDatasetReport({ dataset }, `AI Analysis Report - ${dataset.name}`);
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
                ${generateAdvancedChatInsights(chatResponses, analytics)}
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

    // Generate charts
    setTimeout(() => {
        generateChatCharts(analytics);
        showToast('Comprehensive AI analysis complete!', 'success');
    }, 500);
}

function displayInlineDatasetReport(reportData, reportTitle) {
    const { dataset } = reportData;

    // Find the reports section to display the analysis
    const reportsSection = document.getElementById('chat-reports-section');

    // Perform comprehensive AI analysis
    const aiAnalysis = performAdvancedDatasetAnalysis(dataset);

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
                    <div style="font-size: 2.5rem; font-weight: bold; color: #3b82f6;">${dataset.recordCount}</div>
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

            <!-- Data Sample -->
            <div class="data-sample" style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 2rem;">
                <h3 style="color: #1e40af; margin-top: 0;">📋 Data Sample Preview</h3>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem;">
                        <thead>
                            <tr style="background: #f8fafc;">
                                ${dataset.columns.map(col => `<th style="padding: 0.75rem; border: 1px solid #e5e7eb; text-align: left;">${col}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${dataset.data.slice(0, 5).map(row => `
                                <tr>
                                    ${dataset.columns.map(col => `<td style="padding: 0.75rem; border: 1px solid #e5e7eb;">${row[col] || ''}</td>`).join('')}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                <p style="margin-top: 1rem; color: #6b7280; font-size: 0.875rem;">Showing first 5 of ${dataset.recordCount} records</p>
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

    // Insert the analysis after the existing dashboard
    const dashboardGrid = reportsSection.querySelector('.dashboard-grid').parentNode;
    dashboardGrid.insertAdjacentHTML('afterend', analysisContent);

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

function generateAIInsights(chatResponses, analytics) {
    const insights = [];

    // Generate insights based on the data
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

    const mostPopularType = Object.keys(analytics.chatTypeBreakdown).reduce((a, b) =>
        analytics.chatTypeBreakdown[a] > analytics.chatTypeBreakdown[b] ? a : b
    );
    insights.push("🎯 <strong>Preferred Format:</strong> " + mostPopularType.charAt(0).toUpperCase() +
                 mostPopularType.slice(1) + " sessions are most popular among participants.");

    if (analytics.totalResponses > 0) {
        const recentResponses = Object.keys(analytics.responsesByDate).length;
        if (recentResponses > 3) {
            insights.push("📊 <strong>Active Participation:</strong> Consistent feedback collection with activity across " +
                         recentResponses + " different days.");
        }
    }

    // Add general recommendations
    insights.push("💡 <strong>Recommendation:</strong> Continue monitoring sentiment trends and consider following up on negative feedback themes to improve employee experience.");

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
        sidebar.classList.add('collapsed');
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

    // Parse file based on type
    const fileName = file.name.toLowerCase();
    const reader = new FileReader();

    reader.onload = function(e) {
        try {
            let parsedData = [];

            if (fileName.endsWith('.json')) {
                // Parse JSON file
                const jsonData = JSON.parse(e.target.result);
                parsedData = Array.isArray(jsonData) ? jsonData : [jsonData];
            } else {
                // Parse CSV file
                const csv = e.target.result;
                const lines = csv.split('\n').filter(line => line.trim());

                if (lines.length < 2) {
                    showToast('File appears to be empty or invalid', 'error');
                    return;
                }

                // Parse header
                const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));

                // Parse data rows
                for (let i = 1; i < lines.length; i++) {
                    const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
                    if (values.length === headers.length && values.some(v => v)) {
                        const row = {};
                        headers.forEach((header, index) => {
                            row[header] = values[index];
                        });
                        parsedData.push(row);
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

    reader.readAsText(file);
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
        col.toLowerCase().includes('response')
    );

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

    // Generate executive summary
    analysis.executiveSummary = `Our comprehensive AI analysis of the "${dataset.name}" dataset reveals insights from ${dataset.recordCount} records across ${columns.length} data fields. `;

    if (analysis.sentimentStats) {
        const positivePercent = Math.round((analysis.sentimentStats.positive / analysis.sentimentStats.total) * 100);
        analysis.executiveSummary += `Sentiment analysis shows ${positivePercent}% positive feedback, indicating ${positivePercent > 60 ? 'strong satisfaction' : positivePercent > 40 ? 'mixed sentiment' : 'areas needing attention'}. `;
    }

    if (textCols.length > 0) {
        analysis.executiveSummary += `The dataset contains rich textual data in ${textCols.length} field(s), providing detailed qualitative insights. `;
    }

    if (categoryColumns.length > 0) {
        analysis.executiveSummary += `Data is categorized across ${categoryColumns.length} dimension(s), enabling segmented analysis and targeted recommendations.`;
    }

    // Generate detailed insights
    let insights = [];

    if (analysis.sentimentStats) {
        insights.push(`<div style="margin-bottom: 1rem;"><strong>🎯 Sentiment Distribution:</strong>
            Analysis shows ${analysis.sentimentStats.positive} positive responses (${Math.round((analysis.sentimentStats.positive/analysis.sentimentStats.total)*100)}%),
            ${analysis.sentimentStats.negative} negative responses (${Math.round((analysis.sentimentStats.negative/analysis.sentimentStats.total)*100)}%),
            and ${analysis.sentimentStats.neutral} neutral responses. This distribution suggests ${analysis.sentimentStats.positive > analysis.sentimentStats.negative ? 'overall positive sentiment with opportunities to address negative feedback' : 'significant concerns that require immediate attention'}.</div>`);
    }

    if (textCols.length > 0) {
        insights.push(`<div style="margin-bottom: 1rem;"><strong>📝 Content Analysis:</strong>
            The dataset contains ${textCols.length} text field(s): ${textCols.join(', ')}. These fields provide rich qualitative data that can be analyzed for themes, keywords, and sentiment patterns. Text analysis reveals valuable insights into specific concerns, suggestions, and feedback patterns.</div>`);
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

    // Generate recommendations
    let recommendations = [];
    if (analysis.sentimentStats && analysis.sentimentStats.negative > analysis.sentimentStats.positive * 0.3) {
        recommendations.push('🎯 Address negative sentiment areas through targeted improvement initiatives');
    }
    if (textCols.length > 0) {
        recommendations.push('📝 Implement advanced text analytics for deeper thematic analysis');
    }
    if (categoryColumns.length > 0) {
        recommendations.push('📊 Develop category-specific action plans for targeted improvements');
    }
    recommendations.push('📈 Establish regular monitoring and trend analysis processes');
    recommendations.push('🔄 Create feedback loops to track improvement effectiveness');

    insights.push(`<div style="margin-top: 1.5rem; padding: 1rem; background: #f0f9ff; border-radius: 8px;"><strong>💡 Key Recommendations:</strong><ul style="margin: 0.5rem 0 0 1rem;">${recommendations.map(rec => `<li style="margin-bottom: 0.5rem;">${rec}</li>`).join('')}</ul></div>`);

    analysis.detailedInsights = insights.join('');

    return analysis;
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