-- Fix RLS policies for users table
-- This will allow all operations on the users table (suitable for development)

-- First, check if policies exist and drop them if needed
DROP POLICY IF EXISTS "Allow all operations on users" ON users;

-- Create a new policy that allows all operations
CREATE POLICY "Allow all operations on users" ON users
FOR ALL USING (true);

-- Alternative: If you want separate policies for different operations:
-- CREATE POLICY "Allow insert on users" ON users FOR INSERT WITH CHECK (true);
-- CREATE POLICY "Allow select on users" ON users FOR SELECT USING (true);
-- CREATE POLICY "Allow update on users" ON users FOR UPDATE USING (true);
-- CREATE POLICY "Allow delete on users" ON users FOR DELETE USING (true);

-- Also fix policies for other tables if needed
DROP POLICY IF EXISTS "Allow all operations on organizations" ON organizations;
CREATE POLICY "Allow all operations on organizations" ON organizations
FOR ALL USING (true);

-- Check if responses table has RLS enabled and create policy
ALTER TABLE responses ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all operations on responses" ON responses;
CREATE POLICY "Allow all operations on responses" ON responses
FOR ALL USING (true);

-- Check if surveys table exists and create policy
DO $$
BEGIN
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'surveys') THEN
        ALTER TABLE surveys ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow all operations on surveys" ON surveys;
        CREATE POLICY "Allow all operations on surveys" ON surveys
        FOR ALL USING (true);
    END IF;
END $$;