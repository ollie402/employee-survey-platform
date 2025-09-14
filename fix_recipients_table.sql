-- Drop the table if it exists (in case it was partially created)
DROP TABLE IF EXISTS survey_recipients;

-- Create the table fresh
CREATE TABLE survey_recipients (
    id BIGSERIAL PRIMARY KEY,
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
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Set up RLS
ALTER TABLE survey_recipients ENABLE ROW LEVEL SECURITY;

-- Create policy
CREATE POLICY "survey_recipients_policy" ON survey_recipients FOR ALL USING (true);