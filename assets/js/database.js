// Database operations using Supabase
async function loadOrganizations() {
    try {
        // Get organizations
        const { data: organizations, error: orgError } = await window.supabaseClient
            .from('organizations')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (orgError) {
            console.error('Error loading organizations:', orgError);
            return [];
        }
        
        // Get user counts for each organization
        const orgsWithUserCounts = await Promise.all((organizations || []).map(async (org) => {
            const { count, error: countError } = await window.supabaseClient
                .from('users')
                .select('*', { count: 'exact', head: true })
                .eq('organization_id', org.id);
            
            if (countError) {
                console.error('Error counting users for org', org.id, countError);
                return { ...org, user_count: 0 };
            }
            
            return { ...org, user_count: count || 0 };
        }));
        
        return orgsWithUserCounts;
    } catch (error) {
        console.error('Database error:', error);
        return [];
    }
}

async function saveOrganization(orgData) {
    try {
        // First try with just the absolutely essential field - name
        const minimalOrgData = {
            name: orgData.name
        };
        
        // Try to add description if provided
        if (orgData.description) {
            minimalOrgData.description = orgData.description;
        }
        
        console.log('Trying to save organization with minimal data:', minimalOrgData);
        
        const { data, error } = await window.supabaseClient
            .from('organizations')
            .insert([minimalOrgData])
            .select();
        
        if (error) {
            console.error('Error saving organization:', error);
            
            // If table doesn't exist, provide helpful message
            if (error.code === '42P01') {
                console.error('Organizations table does not exist. Please create it in your Supabase dashboard.');
                throw new Error('Organizations table not found. Please create the table in Supabase dashboard.');
            }
            
            // If description column doesn't exist, try with just name
            if (error.message && error.message.includes("could not find") && error.message.includes("description")) {
                console.warn('Description column missing, trying with just name...');
                const nameOnlyData = {
                    name: orgData.name
                };
                
                const { data: nameData, error: nameError } = await window.supabaseClient
                    .from('organizations')
                    .insert([nameOnlyData])
                    .select();
                
                if (nameError) {
                    console.error('Even basic save failed:', nameError);
                    throw nameError;
                }
                
                console.log('✅ Organization saved with name only. Consider adding a description column to your database.');
                return nameData ? nameData[0] : null;
            }
            
            throw error;
        }
        
        console.log('✅ Organization saved successfully:', data[0]);
        return data ? data[0] : null;
    } catch (error) {
        console.error('Save error:', error);
        throw error;
    }
}

async function updateOrganization(id, updates) {
    try {
        const { data, error } = await window.supabaseClient
            .from('organizations')
            .update(updates)
            .eq('id', id)
            .select();
        
        if (error) {
            console.error('Error updating organization:', error);
            return null;
        }
        
        return data ? data[0] : null;
    } catch (error) {
        console.error('Update error:', error);
        return null;
    }
}

async function deleteOrganization(id) {
    try {
        console.log('Database delete function called with ID:', id);
        
        if (!id) {
            console.error('No ID provided for delete operation');
            return false;
        }
        
        const { data, error } = await window.supabaseClient
            .from('organizations')
            .delete()
            .eq('id', id)
            .select(); // Select to see what was deleted
        
        console.log('Delete operation result - data:', data, 'error:', error);
        
        if (error) {
            console.error('Error deleting organization:', error);
            return false;
        }
        
        if (!data || data.length === 0) {
            console.warn('No rows were deleted. Organization with ID', id, 'might not exist');
            return false;
        }
        
        console.log('Successfully deleted organization:', data[0]);
        return true;
    } catch (error) {
        console.error('Delete error:', error);
        return false;
    }
}

// Additional helper functions for other data types can be added here
// For example: users, surveys, responses, etc.

async function loadUsers() {
    try {
        const { data, error } = await window.supabaseClient
            .from('users')
            .select(`
                *,
                organizations(
                    id,
                    name
                )
            `)
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error('Error loading users:', error);
            return [];
        }
        
        // Transform the data to include organization name
        const usersWithOrgNames = (data || []).map(user => ({
            ...user,
            organization: user.organizations?.name || 'No Organization'
        }));
        
        return usersWithOrgNames;
    } catch (error) {
        console.error('Users database error:', error);
        return [];
    }
}

async function saveUser(userData) {
    try {
        const userToSave = {
            name: userData.name || `${userData.firstName} ${userData.lastName}`,
            email: userData.email
        };

        // Add auth_id if provided (links to Supabase Auth)
        if (userData.auth_id) {
            userToSave.auth_id = userData.auth_id;
        }

        if (userData.organization_id) {
            userToSave.organization_id = userData.organization_id;
        }

        if (userData.access || userData.role) {
            userToSave.role = userData.access || userData.role || 'user';
        }

        if (userData.status) {
            userToSave.status = userData.status;
        }

        const { data, error } = await window.supabaseClient
            .from('users')
            .insert([userToSave])
            .select();

        if (error) {
            console.error('Error saving user:', error);
            throw error;
        }

        return data ? data[0] : null;
    } catch (error) {
        console.error('User save error:', error);
        throw error;
    }
}

async function updateUser(id, userData) {
    try {
        const { data, error } = await window.supabaseClient
            .from('users')
            .update(userData)
            .eq('id', id)
            .select();
        
        if (error) {
            console.error('Error updating user:', error);
            return null;
        }
        
        return data ? data[0] : null;
    } catch (error) {
        console.error('Update user error:', error);
        return null;
    }
}

async function deleteUser(id) {
    try {
        if (!id) {
            console.error('No ID provided for delete operation');
            return false;
        }
        
        const { data, error } = await window.supabaseClient
            .from('users')
            .delete()
            .eq('id', id)
            .select();
        
        if (error) {
            console.error('Error deleting user:', error);
            return false;
        }
        
        return data && data.length > 0;
    } catch (error) {
        console.error('Delete user error:', error);
        return false;
    }
}

// Survey database functions
async function loadSurveys() {
    try {
        const { data, error } = await window.supabaseClient
            .from('surveys')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error('Error loading surveys:', error);
            return [];
        }
        
        return data || [];
    } catch (error) {
        console.error('Surveys database error:', error);
        return [];
    }
}

async function saveSurvey(surveyData) {
    try {
        const surveyToSave = {
            title: surveyData.title,
            description: surveyData.description,
            organization_id: surveyData.organization_id,
            created_by: surveyData.created_by,
            status: surveyData.status || 'draft',
            questions: surveyData.questions ? JSON.stringify(surveyData.questions) : null,
            settings: surveyData.settings ? JSON.stringify(surveyData.settings) : null
            // Let Supabase handle timestamps automatically
        };
        
        const { data, error } = await window.supabaseClient
            .from('surveys')
            .insert([surveyToSave])
            .select();
        
        if (error) {
            console.error('Error saving survey:', error);
            
            if (error.code === '42P01') {
                console.error('Surveys table does not exist. Please create it in your Supabase dashboard.');
                throw new Error('Surveys table not found. Please create the table in Supabase dashboard.');
            }
            
            // Handle column doesn't exist error for surveys
            if (error.message && error.message.includes('could not find') && error.message.includes('column')) {
                console.warn('Some survey columns missing, trying with basic fields only...');
                const basicSurveyData = {
                    title: surveyData.title,
                    description: surveyData.description
                };
                
                const { data: basicData, error: basicError } = await window.supabaseClient
                    .from('surveys')
                    .insert([basicSurveyData])
                    .select();
                
                if (basicError) {
                    throw basicError;
                }
                
                console.log('Survey saved with basic fields only. Consider adding missing columns to database.');
                return basicData ? basicData[0] : null;
            }
            
            throw error;
        }
        
        return data ? data[0] : null;
    } catch (error) {
        console.error('Survey save error:', error);
        throw error;
    }
}

async function updateSurvey(id, surveyData) {
    try {
        const updates = {
            ...surveyData,
            updated_at: new Date().toISOString()
        };
        
        const { data, error } = await window.supabaseClient
            .from('surveys')
            .update(updates)
            .eq('id', id)
            .select();
        
        if (error) {
            console.error('Error updating survey:', error);
            return null;
        }
        
        return data ? data[0] : null;
    } catch (error) {
        console.error('Update survey error:', error);
        return null;
    }
}

async function deleteSurvey(id) {
    try {
        const { data, error } = await window.supabaseClient
            .from('surveys')
            .delete()
            .eq('id', id)
            .select();
        
        if (error) {
            console.error('Error deleting survey:', error);
            return false;
        }
        
        return data && data.length > 0;
    } catch (error) {
        console.error('Delete survey error:', error);
        return false;
    }
}

// Survey responses database functions
async function loadSurveyResponses(surveyId = null) {
    try {
        let query = window.supabaseClient
            .from('responses')
            .select('*')
            .order('submitted_at', { ascending: false });
        
        if (surveyId) {
            query = query.eq('survey_id', surveyId);
        }
        
        const { data, error } = await query;
        
        if (error) {
            console.error('Error loading survey responses:', error);
            return [];
        }
        
        return data || [];
    } catch (error) {
        console.error('Survey responses database error:', error);
        return [];
    }
}

async function saveSurveyResponse(responseData) {
    try {
        const responseToSave = {
            survey_id: responseData.survey_id,
            respondent_email: responseData.respondent_email,
            responses: JSON.stringify(responseData.responses)
            // Let Supabase handle submitted_at automatically
        };
        
        const { data, error } = await window.supabaseClient
            .from('responses')
            .insert([responseToSave])
            .select();
        
        if (error) {
            console.error('Error saving survey response:', error);
            
            if (error.code === '42P01') {
                console.error('Responses table does not exist. Please create it in your Supabase dashboard.');
                throw new Error('Responses table not found. Please create the table in Supabase dashboard.');
            }
            
            throw error;
        }
        
        return data ? data[0] : null;
    } catch (error) {
        console.error('Survey response save error:', error);
        throw error;
    }
}

// =====================================================
// CHAT SESSION DATABASE FUNCTIONS
// =====================================================

async function loadChatSessions() {
    // Use localStorage directly for now - database table creation requires admin access
    console.info('Loading chat sessions from localStorage');
    return loadChatSessionsFromLocalStorage();
}

async function saveChatSession(chatData) {
    // Use localStorage directly - no database calls to avoid 404 errors
    console.info('Saving chat session to localStorage (database table not available)');
    saveChatSessionToLocalStorage(chatData);
    return { ...chatData, stored_in: 'localStorage' };
}

function saveChatSessionToLocalStorage(chatData) {
    try {
        const existingSessions = JSON.parse(localStorage.getItem('chatSessions') || '[]');
        existingSessions.unshift(chatData); // Add to beginning of array
        localStorage.setItem('chatSessions', JSON.stringify(existingSessions));
        console.log('Chat session saved to localStorage');
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function loadChatSessionsFromLocalStorage() {
    try {
        return JSON.parse(localStorage.getItem('chatSessions') || '[]');
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return [];
    }
}

async function updateChatSessionStatus(sessionId, status) {
    // Use localStorage directly - no database calls to avoid 404 errors
    console.info('Updating chat session status in localStorage (database table not available)');
    const sessions = loadChatSessionsFromLocalStorage();
    const updatedSessions = sessions.map(session => 
        session.id === sessionId ? { ...session, status } : session
    );
    localStorage.setItem('chatSessions', JSON.stringify(updatedSessions));
    return null;
}

// =====================================================
// URL SHORTENING SYSTEM
// =====================================================

function generateSlug(name) {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

async function saveUrlMapping(slug, originalUrl, chatData) {
    try {
        const mappingData = {
            slug: slug,
            original_url: originalUrl,
            chat_name: chatData.name,
            chat_type: chatData.type,
            created_at: new Date().toISOString()
        };
        
        const { data, error } = await window.supabaseClient
            .from('url_mappings')
            .insert([mappingData])
            .select();
        
        if (error) {
            console.warn('Could not save URL mapping to database:', error);
            // Fallback to localStorage
            const mappings = JSON.parse(localStorage.getItem('urlMappings') || '[]');
            mappings.push(mappingData);
            localStorage.setItem('urlMappings', JSON.stringify(mappings));
            return mappingData;
        }
        
        return data ? data[0] : mappingData;
    } catch (error) {
        console.error('URL mapping save error:', error);
        // Fallback to localStorage
        const mappings = JSON.parse(localStorage.getItem('urlMappings') || '[]');
        const mappingData = {
            slug: slug,
            original_url: originalUrl,
            chat_name: chatData.name,
            chat_type: chatData.type,
            created_at: new Date().toISOString()
        };
        mappings.push(mappingData);
        localStorage.setItem('urlMappings', JSON.stringify(mappings));
        return mappingData;
    }
}

async function loadUrlMapping(slug) {
    try {
        const { data, error } = await window.supabaseClient
            .from('url_mappings')
            .select('*')
            .eq('slug', slug)
            .single();
        
        if (error || !data) {
            // Fallback to localStorage
            const mappings = JSON.parse(localStorage.getItem('urlMappings') || '[]');
            return mappings.find(mapping => mapping.slug === slug);
        }
        
        return data;
    } catch (error) {
        console.error('URL mapping load error:', error);
        // Fallback to localStorage
        const mappings = JSON.parse(localStorage.getItem('urlMappings') || '[]');
        return mappings.find(mapping => mapping.slug === slug);
    }
}

function generateShortUrl(chatName, originalUrl, chatData) {
    const slug = generateSlug(chatName);
    // Use HTTP for development, HTTPS for production domains
    let origin = window.location.origin;

    // Check if this is a development environment
    const isDevelopment = origin.includes('localhost') ||
                         origin.includes('127.0.0.1') ||
                         origin.includes(':3000') ||
                         origin.includes(':5500') ||
                         origin.includes(':8080');

    // Only use HTTPS if not in development
    if (!isDevelopment && origin.startsWith('http://')) {
        origin = origin.replace('http://', 'https://');
    }

    const shortUrl = `${origin}/?chat=${slug}`;

    // Save the mapping
    saveUrlMapping(slug, originalUrl, chatData);

    return shortUrl;
}

// =====================================================
// CHAT RESPONSE DATABASE FUNCTIONS
// =====================================================

async function loadChatResponses(sessionId = null) {
    try {
        let query = window.supabaseClient
            .from('chat_responses')
            .select('*')
            .order('completed_at', { ascending: false });

        if (sessionId) {
            query = query.eq('session_id', sessionId);
        }

        const { data, error } = await query;

        if (error) {
            console.error('Error loading chat responses:', error);

            // If table doesn't exist, provide helpful message
            if (error.code === '42P01') {
                console.warn('Chat responses table does not exist. Please run create_chat_responses_table.sql in your Supabase dashboard.');
                return loadChatResponsesFromLocalStorage(sessionId);
            }

            return [];
        }

        return data || [];
    } catch (error) {
        console.error('Chat responses database error:', error);
        return loadChatResponsesFromLocalStorage(sessionId);
    }
}

async function saveChatResponse(chatData) {
    try {
        const responseToSave = {
            session_id: chatData.sessionId,
            participant_id: chatData.participantId || 'anonymous',
            chat_type: chatData.chatType || 'listening',
            messages: JSON.stringify(chatData.messages || []),
            responses: JSON.stringify(chatData.responses || {}),
            sentiment: chatData.sentiment || 'neutral',
            duration_ms: chatData.duration || null,
            start_time: chatData.startTime ? new Date(chatData.startTime).toISOString() : null,
            completed_at: chatData.completedAt ? new Date(chatData.completedAt).toISOString() : new Date().toISOString()
        };

        const { data, error } = await window.supabaseClient
            .from('chat_responses')
            .insert([responseToSave])
            .select();

        if (error) {
            console.error('Error saving chat response:', error);

            if (error.code === '42P01') {
                console.warn('Chat responses table does not exist. Saving to localStorage. Please run create_chat_responses_table.sql in your Supabase dashboard.');
                saveChatResponseToLocalStorage(chatData);
                return { ...chatData, stored_in: 'localStorage' };
            }

            // Try saving to localStorage as fallback
            saveChatResponseToLocalStorage(chatData);
            throw error;
        }

        console.log('✅ Chat response saved successfully to database:', data[0]);
        return data ? data[0] : null;
    } catch (error) {
        console.error('Chat response save error:', error);
        // Always fallback to localStorage
        saveChatResponseToLocalStorage(chatData);
        return { ...chatData, stored_in: 'localStorage' };
    }
}

function saveChatResponseToLocalStorage(chatData) {
    try {
        const existingResponses = JSON.parse(localStorage.getItem('chatResponses') || '[]');
        const responseToSave = {
            ...chatData,
            id: Date.now(), // Simple ID for localStorage
            stored_at: new Date().toISOString()
        };
        existingResponses.unshift(responseToSave); // Add to beginning of array
        localStorage.setItem('chatResponses', JSON.stringify(existingResponses));
        console.log('Chat response saved to localStorage as fallback');
    } catch (error) {
        console.error('Error saving chat response to localStorage:', error);
    }
}

function loadChatResponsesFromLocalStorage(sessionId = null) {
    try {
        const responses = JSON.parse(localStorage.getItem('chatResponses') || '[]');
        if (sessionId) {
            return responses.filter(response => response.sessionId === sessionId);
        }
        return responses;
    } catch (error) {
        console.error('Error loading chat responses from localStorage:', error);
        return [];
    }
}

async function getChatResponseAnalytics(sessionId = null) {
    try {
        const responses = await loadChatResponses(sessionId);

        const analytics = {
            totalResponses: responses.length,
            sentimentBreakdown: {
                positive: 0,
                neutral: 0,
                negative: 0
            },
            averageDuration: 0,
            chatTypeBreakdown: {
                listening: 0,
                chat: 0,
                pulse: 0
            },
            responsesByDate: {}
        };

        let totalDuration = 0;
        let durationCount = 0;

        responses.forEach(response => {
            // Sentiment analysis
            if (response.sentiment) {
                analytics.sentimentBreakdown[response.sentiment]++;
            }

            // Duration calculation
            if (response.duration_ms) {
                totalDuration += response.duration_ms;
                durationCount++;
            }

            // Chat type breakdown
            if (response.chat_type) {
                analytics.chatTypeBreakdown[response.chat_type]++;
            }

            // Responses by date
            const date = new Date(response.completed_at || response.created_at).toDateString();
            analytics.responsesByDate[date] = (analytics.responsesByDate[date] || 0) + 1;
        });

        // Calculate average duration
        if (durationCount > 0) {
            analytics.averageDuration = Math.round(totalDuration / durationCount);
        }

        return analytics;
    } catch (error) {
        console.error('Error calculating chat response analytics:', error);
        return null;
    }
}