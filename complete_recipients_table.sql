-- Complete SQL script to create survey_recipients table
-- Copy and paste this entire script into Supabase SQL Editor

-- Create survey_recipients table for storing recipient data
CREATE TABLE IF NOT EXISTS survey_recipients (
    id SERIAL PRIMARY KEY,
    survey_id VARCHAR(255) NOT NULL,
    forename VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    employee_no VARCHAR(50),
    invite_sent BOOLEAN DEFAULT FALSE,
    reminder_count INTEGER DEFAULT 0,
    last_reminder_sent DATE,
    survey_started_date DATE,
    survey_completed_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_survey_recipients_survey_id ON survey_recipients(survey_id);
CREATE INDEX IF NOT EXISTS idx_survey_recipients_email ON survey_recipients(email);
CREATE UNIQUE INDEX IF NOT EXISTS idx_survey_recipients_email_survey ON survey_recipients(email, survey_id);

-- Enable Row Level Security (RLS)
ALTER TABLE survey_recipients ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Enable all operations for survey_recipients" ON survey_recipients;

-- Create a policy to allow all operations for now (you can make this more restrictive later)
CREATE POLICY "Enable all operations for survey_recipients" ON survey_recipients
FOR ALL USING (true);

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop existing trigger if it exists and create new one
DROP TRIGGER IF EXISTS update_survey_recipients_updated_at ON survey_recipients;
CREATE TRIGGER update_survey_recipients_updated_at 
    BEFORE UPDATE ON survey_recipients 
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Verify the table was created
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'survey_recipients' AND table_schema = 'public'
ORDER BY ordinal_position;