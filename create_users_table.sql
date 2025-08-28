-- Create users table for employee survey platform
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

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create RLS policy (allows all operations for now)
CREATE POLICY "Allow all operations on users" ON users
FOR ALL USING (true);