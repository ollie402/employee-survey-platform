// Database operations using Supabase
async function loadOrganizations() {
    try {
        const { data, error } = await window.supabaseClient
            .from('organizations')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error('Error loading organizations:', error);
            // If table doesn't exist, return empty array
            return [];
        }
        
        return data || [];
    } catch (error) {
        console.error('Database error:', error);
        return [];
    }
}

async function saveOrganization(orgData) {
    try {
        // Let Supabase handle created_at automatically
        
        const { data, error } = await window.supabaseClient
            .from('organizations')
            .insert([orgData])
            .select();
        
        if (error) {
            console.error('Error saving organization:', error);
            
            // If table doesn't exist, provide helpful message
            if (error.code === '42P01') {
                console.error('Organizations table does not exist. Please create it in your Supabase dashboard with the following SQL:');
                console.error(`
CREATE TABLE organizations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    industry TEXT,
    size TEXT,
    country TEXT,
    website TEXT,
    description TEXT,
    plan TEXT,
    branding JSONB,
    notifications JSONB,
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`);
                throw new Error('Organizations table not found. Please create the table in Supabase dashboard.');
            }
            
            // If column doesn't exist, try saving without the problematic columns
            if (error.message.includes("could not find") && error.message.includes("column")) {
                console.warn('Some columns missing, trying with basic fields only...');
                const basicOrgData = {
                    name: orgData.name,
                    description: orgData.description,
                    status: orgData.status,
                    created_at: new Date().toISOString()
                };
                
                const { data: basicData, error: basicError } = await window.supabaseClient
                    .from('organizations')
                    .insert([basicOrgData])
                    .select();
                
                if (basicError) {
                    throw basicError;
                }
                
                console.log('Saved with basic fields only. Please add missing columns to database.');
                return basicData ? basicData[0] : null;
            }
            
            throw error;
        }
        
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
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error('Error loading users:', error);
            return [];
        }
        
        return data || [];
    } catch (error) {
        console.error('Users database error:', error);
        return [];
    }
}

async function saveUser(userData) {
    try {
        // Prepare user data with only essential columns
        const userToSave = {
            name: userData.name || `${userData.firstName} ${userData.lastName}`,
            email: userData.email
            // Start with minimal data - add more columns as your table structure allows
        };
        
        // Add optional fields only if they're provided
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
            
            // Handle table doesn't exist error
            if (error.code === '42P01') {
                console.error('Users table does not exist. Please create it in your Supabase dashboard.');
                throw new Error('Users table not found. Please create the table in Supabase dashboard.');
            }
            
            // Handle column doesn't exist error - try with minimal data
            if (error.message && error.message.includes('could not find') && error.message.includes('column')) {
                console.warn('Some columns missing, trying with basic fields only...');
                const basicUserData = {
                    name: userData.name || `${userData.firstName} ${userData.lastName}`,
                    email: userData.email
                };
                
                const { data: basicData, error: basicError } = await window.supabaseClient
                    .from('users')
                    .insert([basicUserData])
                    .select();
                
                if (basicError) {
                    throw basicError;
                }
                
                console.log('User saved with basic fields only. Consider adding missing columns to your database.');
                return basicData ? basicData[0] : null;
            }
            
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