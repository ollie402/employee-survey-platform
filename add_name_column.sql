-- Add missing name column to existing users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS name TEXT;

-- If you want to make name required (after adding it):
-- ALTER TABLE users ALTER COLUMN name SET NOT NULL;