-- Simple survey_recipients table creation
-- Run this in Supabase SQL Editor

CREATE TABLE survey_recipients (
    id SERIAL PRIMARY KEY,
    survey_id TEXT NOT NULL,
    forename TEXT NOT NULL,
    surname TEXT NOT NULL,
    email TEXT NOT NULL,
    employee_no TEXT,
    invite_sent BOOLEAN DEFAULT FALSE,
    reminder_count INTEGER DEFAULT 0,
    last_reminder_sent DATE,
    survey_started_date DATE,
    survey_completed_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS and create policy
ALTER TABLE survey_recipients ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all operations for survey_recipients" ON survey_recipients
FOR ALL USING (true);

-- Test query to verify table exists
SELECT * FROM survey_recipients LIMIT 1;