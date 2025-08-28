# Supabase Database Setup

To make your application work with persistent data storage, you need to create the following tables in your Supabase dashboard.

## Setup Instructions

1. Go to your Supabase project dashboard
2. Click on "SQL Editor" in the left sidebar
3. Run each of the SQL commands below to create the required tables

## Required Tables

### Organizations Table
```sql
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
);
```

### Users Table
```sql
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    organization_id UUID REFERENCES organizations(id),
    organization TEXT, -- For backwards compatibility
    role TEXT DEFAULT 'user',
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Surveys Table
```sql
CREATE TABLE surveys (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    organization_id UUID REFERENCES organizations(id),
    created_by UUID REFERENCES users(id),
    status TEXT DEFAULT 'draft',
    questions JSONB,
    settings JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Survey Responses Table
```sql
CREATE TABLE survey_responses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    survey_id UUID REFERENCES surveys(id),
    respondent_email TEXT,
    responses JSONB NOT NULL,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Row Level Security (RLS)

After creating the tables, you should enable Row Level Security for data protection:

```sql
-- Enable RLS on all tables
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE surveys ENABLE ROW LEVEL SECURITY;
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- Basic RLS policies (allows all operations for now - customize as needed)
CREATE POLICY "Allow all operations on organizations" ON organizations
FOR ALL USING (true);

CREATE POLICY "Allow all operations on users" ON users
FOR ALL USING (true);

CREATE POLICY "Allow all operations on surveys" ON surveys
FOR ALL USING (true);

CREATE POLICY "Allow all operations on survey_responses" ON survey_responses
FOR ALL USING (true);

-- More restrictive policies for production (commented out - uncomment and customize):
/*
-- Organizations: Only allow access to own organization
CREATE POLICY "Users can only view own organization" ON organizations
FOR SELECT USING (auth.uid() IN (
    SELECT user_id FROM user_organizations WHERE organization_id = organizations.id
));

-- Users: Only allow access to users in same organization
CREATE POLICY "Users can only view users in same organization" ON users
FOR SELECT USING (organization_id IN (
    SELECT organization_id FROM users WHERE auth.uid() = user_id
));

-- Surveys: Only allow access to surveys from own organization
CREATE POLICY "Users can only view surveys from own organization" ON surveys
FOR SELECT USING (organization_id IN (
    SELECT organization_id FROM users WHERE auth.uid() = user_id
));

-- Survey responses: Allow viewing responses to own organization's surveys
CREATE POLICY "Users can view responses to own organization's surveys" ON survey_responses
FOR SELECT USING (survey_id IN (
    SELECT id FROM surveys WHERE organization_id IN (
        SELECT organization_id FROM users WHERE auth.uid() = user_id
    )
));
*/
```

## Testing the Connection

Once you've created the tables, try adding an organization through your application:

1. Open your application in the browser
2. Navigate to the Organizations section
3. Click "Add Organization"
4. Fill out the form and submit
5. Check the browser console for any errors
6. Verify the data appears in your Supabase dashboard under "Table Editor"

## Troubleshooting

- **Table not found error**: Make sure you've created the organizations table in Supabase
- **Permission denied**: Check that RLS policies are set up correctly
- **Connection failed**: Verify your Supabase URL and anon key in `lib/supabase.js`
- **CORS errors**: Make sure your domain is allowed in Supabase settings

## Universal Database Saving Features

The platform now includes universal database persistence for:

### ✅ **User Management**
- All new users are automatically saved to the `users` table
- User creation forms populate organization dropdowns from database
- Users table displays real data from database
- Dashboard shows accurate user counts

### ✅ **Survey Creation**
- Survey builder saves surveys to the `surveys` table
- Chat link generation creates survey records
- Survey data includes questions, settings, and metadata

### ✅ **Response Collection**
- Chat responses are saved to `survey_responses` table
- Anonymous and identified responses supported
- Response data includes full conversation history

### ✅ **Dashboard Analytics**
- Real-time statistics from database
- Organization, user, survey, and response counts
- Dynamic data loading when switching sections

## Next Steps

Once the basic setup is complete, you can:
1. ✅ **Done:** Universal database saving for all platform features
2. Implement user authentication with Supabase Auth
3. Add more restrictive RLS policies for production security
4. Create advanced analytics and reporting features
5. Add real-time updates with Supabase subscriptions